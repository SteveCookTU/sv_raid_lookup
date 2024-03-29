use crate::details_window::DetailsWindow;
use crate::is_mobile;
use crate::mobile_bar::mobile_top_bar;
use crate::side_panel::draw_side_panel;
use eframe::egui::{Context, DroppedFile, Visuals};
use eframe::{egui, App, CreationContext, Frame};
use std::collections::HashMap;
#[cfg(not(target_arch = "wasm32"))]
use std::fs::File;
#[cfg(not(target_arch = "wasm32"))]
use std::io::Read;
use std::sync::{Arc, Mutex};
use sv_raid_reader::{ItemTable, RaidEncounter, DIFFICULTY_01, SPECIES};

pub struct SVRaidLookup {
    pub star_level: u8,
    pub map: u8,
    pub species_filter: String,
    pub encounters: Vec<RaidEncounter>,
    pub event_encounters: Arc<Mutex<Vec<RaidEncounter>>>,
    pub fixed_event_item: Arc<Mutex<ItemTable>>,
    pub lottery_event_items: Arc<Mutex<ItemTable>>,
    pub details_window: Option<DetailsWindow>,
}

impl Default for SVRaidLookup {
    fn default() -> Self {
        Self {
            star_level: 1,
            map: 0,
            species_filter: String::new(),
            encounters: {
                let mut enc = DIFFICULTY_01.to_vec();
                enc.sort_by_key(|e| SPECIES[e.species as usize]);
                enc
            },
            event_encounters: Arc::new(Mutex::new(vec![])),
            fixed_event_item: Arc::new(Mutex::new(ItemTable(HashMap::default()))),
            lottery_event_items: Arc::new(Mutex::new(ItemTable(HashMap::default()))),
            details_window: None,
        }
    }
}

impl SVRaidLookup {
    pub fn new(cc: &CreationContext) -> Self {
        cc.egui_ctx.set_visuals(Visuals::default());
        Default::default()
    }
}

impl App for SVRaidLookup {
    fn update(&mut self, ctx: &Context, _frame: &mut Frame) {
        if is_mobile(ctx) {
            mobile_top_bar(self, ctx);
        } else {
            draw_side_panel(self, ctx);
        }

        if let Some(details) = self.details_window.as_ref() {
            egui::CentralPanel::default().show(ctx, |ui| {
                ui.horizontal(|ui| {
                    let image = details.image.lock().unwrap();
                    if let Some(image) = image.as_ref() {
                        image.show(ui);
                    }
                    ui.vertical(|ui| {
                        ui.label(&details.base_type);
                        ui.label(&details.base_stats);
                        egui::Grid::new("stars_levels").show(ui, |ui| {
                            ui.label(&details.level);
                            ui.label(&details.stars);
                            ui.end_row();
                            ui.label(&details.hp);
                            ui.label(&details.shiny);
                            ui.end_row();
                            ui.label(&details.ivs);
                            ui.label(&details.gender);
                            ui.end_row();
                            ui.label(&details.evs);
                            ui.label(&details.nature);
                            ui.end_row();
                            ui.label(&details.ability);
                            ui.label(&details.iv_type);
                        });
                    });
                });
                ui.add_space(5.0);
                ui.separator();
                ui.add_space(5.0);
                egui::ScrollArea::both().show(ui, |ui| {
                    ui.horizontal(|ui| {
                        ui.vertical(|ui| {
                            ui.label(egui::RichText::new("Moves:").underline());
                            for mov in &details.moves {
                                ui.label(mov);
                            }
                            ui.add_space(10.0);
                            ui.label(egui::RichText::new("Actions:").underline());
                            egui::Grid::new("actions").show(ui, |ui| {
                                for extra_action in &details.extra_actions {
                                    ui.label(&extra_action.0);
                                    ui.label(&extra_action.1);
                                    ui.end_row();
                                }
                            });
                            ui.add_space(10.0);
                            ui.label(&details.raid_time);
                            ui.label(&details.shield_hp_trigger);
                            ui.label(&details.shield_time_trigger);
                            ui.label(&details.shield_cancel_damage);
                            ui.label(&details.shield_damage_rate);
                            ui.label(&details.shield_gem_damage_rate);
                            ui.label(&details.shield_change_gem_damage_rate);
                            ui.label(&details.second_shield_hp_trigger);
                            ui.label(&details.second_shield_time_trigger);
                            ui.label(&details.second_shield_damage_rate);
                            ui.label(&details.command_time);
                        });
                        ui.vertical(|ui| {
                            ui.label(egui::RichText::new("Fixed Items:").underline());
                            for fixed_item in &details.fixed_items {
                                ui.label(fixed_item);
                            }
                            ui.add_space(10.0);
                            ui.label(egui::RichText::new("Random Items:").underline());
                            egui::Grid::new("random_items").show(ui, |ui| {
                                for lottery_item in &details.lottery_items {
                                    ui.label(&lottery_item.0);
                                    ui.label(&lottery_item.1);
                                    ui.end_row();
                                }
                            });
                        });
                    });
                });
            });
        }

        if !ctx.input().raw.dropped_files.is_empty() {
            let files: Vec<DroppedFile> = ctx.input().raw.dropped_files.clone();

            for file in files.iter() {
                #[cfg(not(target_arch = "wasm32"))]
                if let Some(path) = file.path.as_ref() {
                    if let Ok(mut file) = File::open(path) {
                        let mut buf = Vec::new();
                        file.read_to_end(&mut buf).unwrap();

                        if buf.len() == 30000 {
                            if let Ok(raid_table_array) = sv_raid_reader::delivery_enemy_table_generated::root_as_delivery_raid_enemy_table_array(&buf) {
                                if let Ok(mut event_encounters) = self.event_encounters.lock() {
                                    *event_encounters = raid_table_array.values().into_iter().map(|t| t.raidEnemyInfo().into()).collect::<Vec<_>>();
                                }
                            }
                        } else if buf.len() == 27456 {
                            if let Ok(fixed_item_table) = sv_raid_reader::raid_fixed_reward_item_generated::root_as_raid_fixed_reward_item_array(&buf) {
                                if let Ok(mut fixed_event_items) = self.fixed_event_item.lock() {
                                    *fixed_event_items = fixed_item_table.into();
                                }
                            }
                        } else if buf.len() == 53464 {
                            if let Ok(lottery_item_table) = sv_raid_reader::raid_lottery_reward_item_generated::root_as_raid_lottery_reward_item_array(&buf) {
                                if let Ok(mut lottery_event_items) = self.lottery_event_items.lock() {
                                    *lottery_event_items = lottery_item_table.into();
                                }
                            }
                        }
                    }
                }

                #[cfg(target_arch = "wasm32")]
                if let Some(bytes) = file.bytes.as_ref() {
                    let buf = bytes.to_vec();
                    if buf.len() == 30000 {
                        if let Ok(raid_table_array) = sv_raid_reader::delivery_enemy_table_generated::root_as_delivery_raid_enemy_table_array(&buf) {
                            if let Ok(mut event_encounters) = self.event_encounters.lock() {
                                *event_encounters = raid_table_array.values().into_iter().map(|t| t.raidEnemyInfo().into()).collect::<Vec<_>>();
                            }
                        }
                    } else if buf.len() == 27456 {
                        if let Ok(fixed_item_table) = sv_raid_reader::raid_fixed_reward_item_generated::root_as_raid_fixed_reward_item_array(&buf) {
                            if let Ok(mut fixed_event_items) = self.fixed_event_item.lock() {
                                *fixed_event_items = fixed_item_table.into();
                            }
                        }
                    } else if buf.len() == 53464 {
                        if let Ok(lottery_item_table) = sv_raid_reader::raid_lottery_reward_item_generated::root_as_raid_lottery_reward_item_array(&buf) {
                            if let Ok(mut lottery_event_items) = self.lottery_event_items.lock() {
                                *lottery_event_items = lottery_item_table.into();
                            }
                        }
                    }
                }
            }
        }
    }
}
