use eframe::egui::Context;
use sv_raid_reader::{
    RaidEncounter, DIFFICULTY_01, DIFFICULTY_02, DIFFICULTY_03, DIFFICULTY_04, DIFFICULTY_05,
    DIFFICULTY_06, SU1_DIFFICULTY_01, SU1_DIFFICULTY_02, SU1_DIFFICULTY_03, SU1_DIFFICULTY_04,
    SU1_DIFFICULTY_05, SU1_DIFFICULTY_06, SU2_DIFFICULTY_01, SU2_DIFFICULTY_02, SU2_DIFFICULTY_03,
    SU2_DIFFICULTY_04, SU2_DIFFICULTY_05, SU2_DIFFICULTY_06,
};

pub mod app;
pub mod details_window;
mod encounter_grid;
mod mobile_bar;
mod side_panel;

fn is_mobile(ctx: &Context) -> bool {
    let screen_size = ctx.input().screen_rect().size();
    screen_size.x < 550.0
}

fn get_encounters(map: u8, star_level: u8) -> Vec<RaidEncounter> {
    let arrays: [[&Vec<RaidEncounter>; 6]; 3] = [
        [
            DIFFICULTY_01.as_ref(),
            DIFFICULTY_02.as_ref(),
            DIFFICULTY_03.as_ref(),
            DIFFICULTY_04.as_ref(),
            DIFFICULTY_05.as_ref(),
            DIFFICULTY_06.as_ref(),
        ],
        [
            SU1_DIFFICULTY_01.as_ref(),
            SU1_DIFFICULTY_02.as_ref(),
            SU1_DIFFICULTY_03.as_ref(),
            SU1_DIFFICULTY_04.as_ref(),
            SU1_DIFFICULTY_05.as_ref(),
            SU1_DIFFICULTY_06.as_ref(),
        ],
        [
            SU2_DIFFICULTY_01.as_ref(),
            SU2_DIFFICULTY_02.as_ref(),
            SU2_DIFFICULTY_03.as_ref(),
            SU2_DIFFICULTY_04.as_ref(),
            SU2_DIFFICULTY_05.as_ref(),
            SU2_DIFFICULTY_06.as_ref(),
        ],
    ];
    arrays[map as usize][star_level as usize - 1].to_vec()
}
