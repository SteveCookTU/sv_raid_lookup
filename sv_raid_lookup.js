let M=0,Y=935,I=null,J=`undefined`,S=`boolean`,T=`string`,O=1,U=`Object`,K=`utf-8`,R=`number`,W=4,P=`function`,V=16,G=Array,L=Error,Q=Int32Array,X=Reflect,N=Uint8Array,H=undefined;var A=(async(a,b)=>{if(typeof Response===P&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===P){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var u=(a=>{const b=typeof a;if(b==R||b==S||a==I){return `${a}`};if(b==T){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==I){return `Symbol`}else{return `Symbol(${b})`}};if(b==P){const b=a.name;if(typeof b==T&&b.length>M){return `Function(${b})`}else{return `Function`}};if(G.isArray(a)){const b=a.length;let c=`[`;if(b>M){c+=u(a[M])};for(let d=O;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>O){d=c[O]}else{return toString.call(a)};if(d==U){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return U}};if(a instanceof L){return `${a.name}: ${a.message}\n${a.stack}`};return d});var C=((a,b)=>{});var w=((b,c)=>{try{const g=a.__wbindgen_add_to_stack_pointer(-V);a.wasm_bindgen__convert__closures__invoke0_mut__h4bfdf8f481739ab4(g,b,c);var d=r()[g/W+ M];var e=r()[g/W+ O];if(e){throw f(d)}}finally{a.__wbindgen_add_to_stack_pointer(V)}});var k=(a=>{if(d===b.length)b.push(b.length+ O);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});function z(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(k(b))}}var F=(async(b)=>{if(a!==H)return a;if(typeof b===J){b=new URL(`sv_raid_lookup_bg.wasm`,import.meta.url)};const c=B();if(typeof b===T||typeof Request===P&&b instanceof Request||typeof URL===P&&b instanceof URL){b=fetch(b)};C(c);const {instance:d,module:e}=await A(await b,c);return D(d,e)});var r=(()=>{if(q===I||q.byteLength===M){q=new Q(a.memory.buffer)};return q});var p=(a=>a===H||a===I);var c=(a=>b[a]);var E=(b=>{if(a!==H)return a;const c=B();C(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return D(d,b)});var x=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h0221784d52c9df01(b,c,k(d))});var D=((b,c)=>{a=b.exports;F.__wbindgen_wasm_module=c;s=I;q=I;h=I;a.__wbindgen_start();return a});var t=(()=>{if(s===I||s.byteLength===M){s=new Float64Array(a.memory.buffer)};return s});var B=(()=>{const b={};b.wbg={};b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==O){b.a=M;return !0};const c=!1;return c});b.wbg.__wbindgen_string_new=((a,b)=>{const c=j(a,b);return k(c)});b.wbg.__wbg_log_c9486ca5d8e2cbe8=((b,c)=>{let d;let e;try{d=b;e=c;console.log(j(b,c))}finally{a.__wbindgen_free(d,e,O)}});b.wbg.__wbg_log_aba5996d9bde071f=((b,c,d,e,f,g,h,i)=>{let k;let l;try{k=b;l=c;console.log(j(b,c),j(d,e),j(f,g),j(h,i))}finally{a.__wbindgen_free(k,l,O)}});b.wbg.__wbg_mark_40e050a77cc39fea=((a,b)=>{performance.mark(j(a,b))});b.wbg.__wbg_measure_aa7a73f17813f708=function(){return z(((b,c,d,e)=>{let f;let g;let h;let i;try{f=b;g=c;h=d;i=e;performance.measure(j(b,c),j(d,e))}finally{a.__wbindgen_free(f,g,O);a.__wbindgen_free(h,i,O)}}),arguments)};b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new L();return k(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ O]=g;r()[b/W+ M]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{let d;let e;try{d=b;e=c;console.error(j(b,c))}finally{a.__wbindgen_free(d,e,O)}});b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===T?e:H;var g=p(f)?M:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/W+ O]=h;r()[b/W+ M]=g});b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return k(b)});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===R?d:H;t()[a/8+ O]=p(e)?M:e;r()[a/W+ M]=!p(e)});b.wbg.__wbindgen_boolean_get=(a=>{const b=c(a);const d=typeof b===S?(b?O:M):2;return d});b.wbg.__wbg_instanceof_WebGl2RenderingContext_fcfa91cd777063f3=(a=>{let b;try{b=c(a) instanceof WebGL2RenderingContext}catch{b=!1}const d=b;return d});b.wbg.__wbg_bindVertexArray_9d12800e272184b0=((a,b)=>{c(a).bindVertexArray(c(b))});b.wbg.__wbg_bufferData_8d206d7adf6751c0=((a,b,d,e)=>{c(a).bufferData(b>>>M,c(d),e>>>M)});b.wbg.__wbg_createVertexArray_8467a75e68fec199=(a=>{const b=c(a).createVertexArray();return p(b)?M:k(b)});b.wbg.__wbg_texImage2D_1bc6fe2370a72e1c=function(){return z(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texImage2D(b>>>M,d,e,f,g,h,i>>>M,j>>>M,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_421e29fed0db07ab=function(){return z(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>M,d,e,f,g,h,i>>>M,j>>>M,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_f06e46b3b25ee691=function(){return z(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>M,d,e,f,g,h,i>>>M,j>>>M,k)}),arguments)};b.wbg.__wbg_activeTexture_6a9afd67cc0ade73=((a,b)=>{c(a).activeTexture(b>>>M)});b.wbg.__wbg_attachShader_90ad543fb1bccb18=((a,b,d)=>{c(a).attachShader(c(b),c(d))});b.wbg.__wbg_bindBuffer_66e359418f5c82d7=((a,b,d)=>{c(a).bindBuffer(b>>>M,c(d))});b.wbg.__wbg_bindTexture_ae9620ea4a6ffb97=((a,b,d)=>{c(a).bindTexture(b>>>M,c(d))});b.wbg.__wbg_blendEquationSeparate_f0abe930082fff02=((a,b,d)=>{c(a).blendEquationSeparate(b>>>M,d>>>M)});b.wbg.__wbg_blendFuncSeparate_cecb7dfda39dc38d=((a,b,d,e,f)=>{c(a).blendFuncSeparate(b>>>M,d>>>M,e>>>M,f>>>M)});b.wbg.__wbg_clear_05614d3b84e96aae=((a,b)=>{c(a).clear(b>>>M)});b.wbg.__wbg_clearColor_bc89a6580c0498c3=((a,b,d,e,f)=>{c(a).clearColor(b,d,e,f)});b.wbg.__wbg_colorMask_12687df5490e9bc9=((a,b,d,e,f)=>{c(a).colorMask(b!==M,d!==M,e!==M,f!==M)});b.wbg.__wbg_compileShader_822f38928f6f2a08=((a,b)=>{c(a).compileShader(c(b))});b.wbg.__wbg_createBuffer_a6cffb7f7d5b92a3=(a=>{const b=c(a).createBuffer();return p(b)?M:k(b)});b.wbg.__wbg_createProgram_dc6b23d3caa1d86e=(a=>{const b=c(a).createProgram();return p(b)?M:k(b)});b.wbg.__wbg_createShader_46a66dce5a9e22d0=((a,b)=>{const d=c(a).createShader(b>>>M);return p(d)?M:k(d)});b.wbg.__wbg_createTexture_269f67d411bdc4dc=(a=>{const b=c(a).createTexture();return p(b)?M:k(b)});b.wbg.__wbg_deleteShader_246e6e678f3eb957=((a,b)=>{c(a).deleteShader(c(b))});b.wbg.__wbg_deleteTexture_68a539339fd87792=((a,b)=>{c(a).deleteTexture(c(b))});b.wbg.__wbg_detachShader_4543f887b4873521=((a,b,d)=>{c(a).detachShader(c(b),c(d))});b.wbg.__wbg_disable_1659dc1efb5fb934=((a,b)=>{c(a).disable(b>>>M)});b.wbg.__wbg_disableVertexAttribArray_6f3d27dd0ad6aabf=((a,b)=>{c(a).disableVertexAttribArray(b>>>M)});b.wbg.__wbg_drawElements_241caa588795bcb1=((a,b,d,e,f)=>{c(a).drawElements(b>>>M,d,e>>>M,f)});b.wbg.__wbg_enable_4791414dce6f602a=((a,b)=>{c(a).enable(b>>>M)});b.wbg.__wbg_enableVertexAttribArray_a1ffc091f3999354=((a,b)=>{c(a).enableVertexAttribArray(b>>>M)});b.wbg.__wbg_getAttribLocation_b6cb917615347567=((a,b,d,e)=>{const f=c(a).getAttribLocation(c(b),j(d,e));return f});b.wbg.__wbg_getError_8de2be43ffb2c4e0=(a=>{const b=c(a).getError();return b});b.wbg.__wbg_getExtension_e7912bce04869d40=function(){return z(((a,b,d)=>{const e=c(a).getExtension(j(b,d));return p(e)?M:k(e)}),arguments)};b.wbg.__wbg_getParameter_4e2ccc745690476a=function(){return z(((a,b)=>{const d=c(a).getParameter(b>>>M);return k(d)}),arguments)};b.wbg.__wbg_getProgramInfoLog_1e37a3d1d090ec1c=((b,d,e)=>{const f=c(d).getProgramInfoLog(c(e));var g=p(f)?M:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/W+ O]=h;r()[b/W+ M]=g});b.wbg.__wbg_getProgramParameter_acf4ae158143e2b2=((a,b,d)=>{const e=c(a).getProgramParameter(c(b),d>>>M);return k(e)});b.wbg.__wbg_getShaderInfoLog_451545b963646762=((b,d,e)=>{const f=c(d).getShaderInfoLog(c(e));var g=p(f)?M:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/W+ O]=h;r()[b/W+ M]=g});b.wbg.__wbg_getShaderParameter_6cd8c36fded266ea=((a,b,d)=>{const e=c(a).getShaderParameter(c(b),d>>>M);return k(e)});b.wbg.__wbg_getSupportedExtensions_b84494641d686623=(a=>{const b=c(a).getSupportedExtensions();return p(b)?M:k(b)});b.wbg.__wbg_getUniformLocation_0da0c93f626244a2=((a,b,d,e)=>{const f=c(a).getUniformLocation(c(b),j(d,e));return p(f)?M:k(f)});b.wbg.__wbg_linkProgram_c33885d9ea798810=((a,b)=>{c(a).linkProgram(c(b))});b.wbg.__wbg_pixelStorei_51c83dc5117bea35=((a,b,d)=>{c(a).pixelStorei(b>>>M,d)});b.wbg.__wbg_scissor_b1b9e314ab6aac29=((a,b,d,e,f)=>{c(a).scissor(b,d,e,f)});b.wbg.__wbg_shaderSource_5111981e7afb61fb=((a,b,d,e)=>{c(a).shaderSource(c(b),j(d,e))});b.wbg.__wbg_texParameteri_21fd6b6b394882c9=((a,b,d,e)=>{c(a).texParameteri(b>>>M,d>>>M,e)});b.wbg.__wbg_uniform1i_49986febd844f2c4=((a,b,d)=>{c(a).uniform1i(c(b),d)});b.wbg.__wbg_uniform2f_c70223beaff0a53e=((a,b,d,e)=>{c(a).uniform2f(c(b),d,e)});b.wbg.__wbg_useProgram_35a58ac1e0d9577b=((a,b)=>{c(a).useProgram(c(b))});b.wbg.__wbg_vertexAttribPointer_3b06d737566f0745=((a,b,d,e,f,g,h)=>{c(a).vertexAttribPointer(b>>>M,d,e>>>M,f!==M,g,h)});b.wbg.__wbg_viewport_319ab5302767fcc9=((a,b,d,e,f)=>{c(a).viewport(b,d,e,f)});b.wbg.__wbg_instanceof_Window_acc97ff9f5d2c7b4=(a=>{let b;try{b=c(a) instanceof Window}catch{b=!1}const d=b;return d});b.wbg.__wbg_document_3ead31dbcad65886=(a=>{const b=c(a).document;return p(b)?M:k(b)});b.wbg.__wbg_location_8cc8ccf27e342c0a=(a=>{const b=c(a).location;return k(b)});b.wbg.__wbg_navigator_d1dcf282b97e2495=(a=>{const b=c(a).navigator;return k(b)});b.wbg.__wbg_innerHeight_f4804c803fcf02b0=function(){return z((a=>{const b=c(a).innerHeight;return k(b)}),arguments)};b.wbg.__wbg_devicePixelRatio_476ddb014eb2520a=(a=>{const b=c(a).devicePixelRatio;return b});b.wbg.__wbg_performance_de9825f9a8678574=(a=>{const b=c(a).performance;return p(b)?M:k(b)});b.wbg.__wbg_localStorage_753b6d15a844c3dc=function(){return z((a=>{const b=c(a).localStorage;return p(b)?M:k(b)}),arguments)};b.wbg.__wbg_matchMedia_0b5dc8aaf445df72=function(){return z(((a,b,d)=>{const e=c(a).matchMedia(j(b,d));return p(e)?M:k(e)}),arguments)};b.wbg.__wbg_open_8b947bc096f5bb21=function(){return z(((a,b,d,e,f)=>{const g=c(a).open(j(b,d),j(e,f));return p(g)?M:k(g)}),arguments)};b.wbg.__wbg_requestAnimationFrame_4181656476a7d86c=function(){return z(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_fetch_0fe04905cccfc2aa=((a,b)=>{const d=c(a).fetch(c(b));return k(d)});b.wbg.__wbg_setTimeout_d6fcf0d9067b8e64=function(){return z(((a,b,d)=>{const e=c(a).setTimeout(c(b),d);return e}),arguments)};b.wbg.__wbg_setid_d6ea60ebd257fe07=((a,b,d)=>{c(a).id=j(b,d)});b.wbg.__wbg_scrollLeft_fccd2eab5376d5e9=(a=>{const b=c(a).scrollLeft;return b});b.wbg.__wbg_scrollWidth_93e18cf05756c2c5=(a=>{const b=c(a).scrollWidth;return b});b.wbg.__wbg_scrollHeight_b4893341045a0013=(a=>{const b=c(a).scrollHeight;return b});b.wbg.__wbg_clientWidth_999b9163952471ee=(a=>{const b=c(a).clientWidth;return b});b.wbg.__wbg_clientHeight_1fc8bff4acf145b1=(a=>{const b=c(a).clientHeight;return b});b.wbg.__wbg_getBoundingClientRect_06acb6ac1c23e409=(a=>{const b=c(a).getBoundingClientRect();return k(b)});b.wbg.__wbg_body_3cb4b4042b9a632b=(a=>{const b=c(a).body;return p(b)?M:k(b)});b.wbg.__wbg_createElement_976dbb84fe1661b5=function(){return z(((a,b,d)=>{const e=c(a).createElement(j(b,d));return k(e)}),arguments)};b.wbg.__wbg_getElementById_3a708b83e4f034d7=((a,b,d)=>{const e=c(a).getElementById(j(b,d));return p(e)?M:k(e)});b.wbg.__wbg_scrollTop_779068ee3be0f2d0=(a=>{const b=c(a).scrollTop;return b});b.wbg.__wbg_hidden_0c6fa2160f5e398c=(a=>{const b=c(a).hidden;return b});b.wbg.__wbg_sethidden_0e0fafb0b05ca3bb=((a,b)=>{c(a).hidden=b!==M});b.wbg.__wbg_style_e9380748cee29f13=(a=>{const b=c(a).style;return k(b)});b.wbg.__wbg_offsetTop_432bdb615524a5f0=(a=>{const b=c(a).offsetTop;return b});b.wbg.__wbg_offsetLeft_ffa486264a7c00b2=(a=>{const b=c(a).offsetLeft;return b});b.wbg.__wbg_offsetWidth_8906f5432e06a269=(a=>{const b=c(a).offsetWidth;return b});b.wbg.__wbg_blur_48356fc7ce64e8db=function(){return z((a=>{c(a).blur()}),arguments)};b.wbg.__wbg_focus_adfe4cc61e2c09bc=function(){return z((a=>{c(a).focus()}),arguments)};b.wbg.__wbg_instanceof_WebGlRenderingContext_09249c25390b881f=(a=>{let b;try{b=c(a) instanceof WebGLRenderingContext}catch{b=!1}const d=b;return d});b.wbg.__wbg_bufferData_a33528a74dd300f4=((a,b,d,e)=>{c(a).bufferData(b>>>M,c(d),e>>>M)});b.wbg.__wbg_texImage2D_5b25282e44d0e3fe=function(){return z(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texImage2D(b>>>M,d,e,f,g,h,i>>>M,j>>>M,c(k))}),arguments)};b.wbg.__wbg_texSubImage2D_cb339dd200dd1179=function(){return z(((a,b,d,e,f,g,h,i,j,k)=>{c(a).texSubImage2D(b>>>M,d,e,f,g,h,i>>>M,j>>>M,c(k))}),arguments)};b.wbg.__wbg_activeTexture_02b7c73c76c2c06b=((a,b)=>{c(a).activeTexture(b>>>M)});b.wbg.__wbg_attachShader_f4d51147351a1906=((a,b,d)=>{c(a).attachShader(c(b),c(d))});b.wbg.__wbg_bindBuffer_8b5135aa633680f5=((a,b,d)=>{c(a).bindBuffer(b>>>M,c(d))});b.wbg.__wbg_bindTexture_6f1dec563e82e818=((a,b,d)=>{c(a).bindTexture(b>>>M,c(d))});b.wbg.__wbg_blendEquationSeparate_fa6aebc5cd0c5285=((a,b,d)=>{c(a).blendEquationSeparate(b>>>M,d>>>M)});b.wbg.__wbg_blendFuncSeparate_9fef8acb74d50df5=((a,b,d,e,f)=>{c(a).blendFuncSeparate(b>>>M,d>>>M,e>>>M,f>>>M)});b.wbg.__wbg_clear_576f67967748e95f=((a,b)=>{c(a).clear(b>>>M)});b.wbg.__wbg_clearColor_7489a3fbe484f2f1=((a,b,d,e,f)=>{c(a).clearColor(b,d,e,f)});b.wbg.__wbg_colorMask_bc13c97d0db65962=((a,b,d,e,f)=>{c(a).colorMask(b!==M,d!==M,e!==M,f!==M)});b.wbg.__wbg_compileShader_22b038faa1f49857=((a,b)=>{c(a).compileShader(c(b))});b.wbg.__wbg_createBuffer_6e747d928c9ba46d=(a=>{const b=c(a).createBuffer();return p(b)?M:k(b)});b.wbg.__wbg_createProgram_1c5f8dffd1066e71=(a=>{const b=c(a).createProgram();return p(b)?M:k(b)});b.wbg.__wbg_createShader_4017d9fbc36659af=((a,b)=>{const d=c(a).createShader(b>>>M);return p(d)?M:k(d)});b.wbg.__wbg_createTexture_4ce49e8a8c655124=(a=>{const b=c(a).createTexture();return p(b)?M:k(b)});b.wbg.__wbg_deleteShader_89369612f61ec145=((a,b)=>{c(a).deleteShader(c(b))});b.wbg.__wbg_deleteTexture_5c40169772519141=((a,b)=>{c(a).deleteTexture(c(b))});b.wbg.__wbg_detachShader_9d66c3c97f03fb91=((a,b,d)=>{c(a).detachShader(c(b),c(d))});b.wbg.__wbg_disable_6835d16c2cd3fa26=((a,b)=>{c(a).disable(b>>>M)});b.wbg.__wbg_disableVertexAttribArray_ab474d273ff59265=((a,b)=>{c(a).disableVertexAttribArray(b>>>M)});b.wbg.__wbg_drawElements_e09dbef58c8f099a=((a,b,d,e,f)=>{c(a).drawElements(b>>>M,d,e>>>M,f)});b.wbg.__wbg_enable_fc393941ac400f72=((a,b)=>{c(a).enable(b>>>M)});b.wbg.__wbg_enableVertexAttribArray_3d21f4936ad4a378=((a,b)=>{c(a).enableVertexAttribArray(b>>>M)});b.wbg.__wbg_getAttribLocation_fcbe16b765cb1de0=((a,b,d,e)=>{const f=c(a).getAttribLocation(c(b),j(d,e));return f});b.wbg.__wbg_getError_9ace44157772dd10=(a=>{const b=c(a).getError();return b});b.wbg.__wbg_getExtension_d270fbbd8529e85f=function(){return z(((a,b,d)=>{const e=c(a).getExtension(j(b,d));return p(e)?M:k(e)}),arguments)};b.wbg.__wbg_getParameter_585a5b83c595ada8=function(){return z(((a,b)=>{const d=c(a).getParameter(b>>>M);return k(d)}),arguments)};b.wbg.__wbg_getProgramInfoLog_e47d5073d57fb18d=((b,d,e)=>{const f=c(d).getProgramInfoLog(c(e));var g=p(f)?M:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/W+ O]=h;r()[b/W+ M]=g});b.wbg.__wbg_getProgramParameter_eaf768a9b399b7cf=((a,b,d)=>{const e=c(a).getProgramParameter(c(b),d>>>M);return k(e)});b.wbg.__wbg_getShaderInfoLog_ec7e5b959e47645b=((b,d,e)=>{const f=c(d).getShaderInfoLog(c(e));var g=p(f)?M:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/W+ O]=h;r()[b/W+ M]=g});b.wbg.__wbg_getShaderParameter_42a35b974329561c=((a,b,d)=>{const e=c(a).getShaderParameter(c(b),d>>>M);return k(e)});b.wbg.__wbg_getSupportedExtensions_7b5facfe54809102=(a=>{const b=c(a).getSupportedExtensions();return p(b)?M:k(b)});b.wbg.__wbg_getUniformLocation_8e9cc276a231ddcd=((a,b,d,e)=>{const f=c(a).getUniformLocation(c(b),j(d,e));return p(f)?M:k(f)});b.wbg.__wbg_linkProgram_25cda5f9318ea316=((a,b)=>{c(a).linkProgram(c(b))});b.wbg.__wbg_pixelStorei_bee1e2da4cb1115b=((a,b,d)=>{c(a).pixelStorei(b>>>M,d)});b.wbg.__wbg_scissor_4b89b60091ee8f0e=((a,b,d,e,f)=>{c(a).scissor(b,d,e,f)});b.wbg.__wbg_shaderSource_a0001b8eab5d44f4=((a,b,d,e)=>{c(a).shaderSource(c(b),j(d,e))});b.wbg.__wbg_texParameteri_1b210b807f1ea723=((a,b,d,e)=>{c(a).texParameteri(b>>>M,d>>>M,e)});b.wbg.__wbg_uniform1i_50124a48de1da66b=((a,b,d)=>{c(a).uniform1i(c(b),d)});b.wbg.__wbg_uniform2f_5dde40744c44a350=((a,b,d,e)=>{c(a).uniform2f(c(b),d,e)});b.wbg.__wbg_useProgram_156511a425feb519=((a,b)=>{c(a).useProgram(c(b))});b.wbg.__wbg_vertexAttribPointer_63d2aef49627302b=((a,b,d,e,f,g,h)=>{c(a).vertexAttribPointer(b>>>M,d,e>>>M,f!==M,g,h)});b.wbg.__wbg_viewport_a93f3881c4202d5e=((a,b,d,e,f)=>{c(a).viewport(b,d,e,f)});b.wbg.__wbg_setProperty_e489dfd8c0a6bffc=function(){return z(((a,b,d,e,f)=>{c(a).setProperty(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_top_af8250f1ed584537=(a=>{const b=c(a).top;return b});b.wbg.__wbg_left_e700000a247fe781=(a=>{const b=c(a).left;return b});b.wbg.__wbg_name_4c77dffe5e7dabfc=((b,d)=>{const e=c(d).name;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ O]=g;r()[b/W+ M]=f});b.wbg.__wbg_lastModified_6ca81fda6a8f70cf=(a=>{const b=c(a).lastModified;return b});b.wbg.__wbg_userAgent_bb45baaf7b7df083=function(){return z(((b,d)=>{const e=c(d).userAgent;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ O]=g;r()[b/W+ M]=f}),arguments)};b.wbg.__wbg_dataTransfer_52971d8875475cec=(a=>{const b=c(a).dataTransfer;return p(b)?M:k(b)});b.wbg.__wbg_set_992c1d31586b2957=function(){return z(((a,b,d,e,f)=>{c(a).set(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_touches_c37f5901e92118fa=(a=>{const b=c(a).touches;return k(b)});b.wbg.__wbg_changedTouches_0d0bed493232b62c=(a=>{const b=c(a).changedTouches;return k(b)});b.wbg.__wbg_size_ae40c61308e3b3f4=(a=>{const b=c(a).size;return b});b.wbg.__wbg_arrayBuffer_3ede789ad0faf66e=(a=>{const b=c(a).arrayBuffer();return k(b)});b.wbg.__wbg_addEventListener_cbe4c6f619b032f3=function(){return z(((a,b,d,e)=>{c(a).addEventListener(j(b,d),c(e))}),arguments)};b.wbg.__wbg_instanceof_Response_eaa426220848a39e=(a=>{let b;try{b=c(a) instanceof Response}catch{b=!1}const d=b;return d});b.wbg.__wbg_url_74285ddf2747cb3d=((b,d)=>{const e=c(d).url;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ O]=g;r()[b/W+ M]=f});b.wbg.__wbg_status_c4ef3dd591e63435=(a=>{const b=c(a).status;return b});b.wbg.__wbg_ok_b8130e51d893123a=(a=>{const b=c(a).ok;return b});b.wbg.__wbg_statusText_7f6b7d97e47933bd=((b,d)=>{const e=c(d).statusText;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ O]=g;r()[b/W+ M]=f});b.wbg.__wbg_headers_fd64ad685cf22e5d=(a=>{const b=c(a).headers;return k(b)});b.wbg.__wbg_arrayBuffer_4c27b6f00c530232=function(){return z((a=>{const b=c(a).arrayBuffer();return k(b)}),arguments)};b.wbg.__wbg_preventDefault_3209279b490de583=(a=>{c(a).preventDefault()});b.wbg.__wbg_stopPropagation_eca3af16f2d02a91=(a=>{c(a).stopPropagation()});b.wbg.__wbg_matches_0ffc2232d99a6034=(a=>{const b=c(a).matches;return b});b.wbg.__wbg_clientX_e39206f946859108=(a=>{const b=c(a).clientX;return b});b.wbg.__wbg_clientY_e376bb2d8f470c88=(a=>{const b=c(a).clientY;return b});b.wbg.__wbg_ctrlKey_4795fb55a59f026c=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_81014521a7612e6a=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_metaKey_49e49046d8402fb7=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_button_2bb5dc0116d6b89b=(a=>{const b=c(a).button;return b});b.wbg.__wbg_bindVertexArrayOES_84540c072ea96b75=((a,b)=>{c(a).bindVertexArrayOES(c(b))});b.wbg.__wbg_createVertexArrayOES_00a5c523e5b17eff=(a=>{const b=c(a).createVertexArrayOES();return p(b)?M:k(b)});b.wbg.__wbg_identifier_1d5a6ad2a8e54e28=(a=>{const b=c(a).identifier;return b});b.wbg.__wbg_pageX_d84f2d57022ab8b9=(a=>{const b=c(a).pageX;return b});b.wbg.__wbg_pageY_d21a180430e923e9=(a=>{const b=c(a).pageY;return b});b.wbg.__wbg_force_9c8d772844ff5cdb=(a=>{const b=c(a).force;return b});b.wbg.__wbg_type_651259b089a763f8=((b,d)=>{const e=c(d).type;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ O]=g;r()[b/W+ M]=f});b.wbg.__wbg_width_3ca95ccb4ba994e2=(a=>{const b=c(a).width;return b});b.wbg.__wbg_height_52d1d8c8ada7c55d=(a=>{const b=c(a).height;return b});b.wbg.__wbg_length_212e8065d1af42fa=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_767d94c65c9f9a31=((a,b)=>{const d=c(a)[b>>>M];return p(d)?M:k(d)});b.wbg.__wbg_getItem_845e475f85f593e4=function(){return z(((b,d,e,f)=>{const g=c(d).getItem(j(e,f));var h=p(g)?M:o(g,a.__wbindgen_malloc,a.__wbindgen_realloc);var i=l;r()[b/W+ O]=i;r()[b/W+ M]=h}),arguments)};b.wbg.__wbg_setItem_9c469d634d0c321c=function(){return z(((a,b,d,e,f)=>{c(a).setItem(j(b,d),j(e,f))}),arguments)};b.wbg.__wbg_instanceof_HtmlCanvasElement_97761617af6ea089=(a=>{let b;try{b=c(a) instanceof HTMLCanvasElement}catch{b=!1}const d=b;return d});b.wbg.__wbg_width_2f4b0cbbf1c850d9=(a=>{const b=c(a).width;return b});b.wbg.__wbg_setwidth_afb418d3fbf71ba7=((a,b)=>{c(a).width=b>>>M});b.wbg.__wbg_height_a81d308a000d91d0=(a=>{const b=c(a).height;return b});b.wbg.__wbg_setheight_3eb8729b59493242=((a,b)=>{c(a).height=b>>>M});b.wbg.__wbg_getContext_4d5e97892c1b206a=function(){return z(((a,b,d)=>{const e=c(a).getContext(j(b,d));return p(e)?M:k(e)}),arguments)};b.wbg.__wbg_keyCode_72faed4278f77f2c=(a=>{const b=c(a).keyCode;return b});b.wbg.__wbg_altKey_6dbe46bf3ae42d67=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_ctrlKey_fd79f035994d9387=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_908ae224b8722a41=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_metaKey_cdd15bf44efb510e=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_isComposing_56fa2ebc06ee844b=(a=>{const b=c(a).isComposing;return b});b.wbg.__wbg_key_ad4fc49423a94efa=((b,d)=>{const e=c(d).key;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ O]=g;r()[b/W+ M]=f});b.wbg.__wbg_length_25c595c420a90930=(a=>{const b=c(a).length;return b});b.wbg.__wbg_item_b8362ee101bdeb08=((a,b)=>{const d=c(a).item(b>>>M);return p(d)?M:k(d)});b.wbg.__wbg_get_11e1e7919fb6882c=((a,b)=>{const d=c(a)[b>>>M];return p(d)?M:k(d)});b.wbg.__wbg_instanceof_HtmlInputElement_970e4026de0fccff=(a=>{let b;try{b=c(a) instanceof HTMLInputElement}catch{b=!1}const d=b;return d});b.wbg.__wbg_setautofocus_8d836e8b02b125ae=((a,b)=>{c(a).autofocus=b!==M});b.wbg.__wbg_setsize_951becdc2ed0f3e7=((a,b)=>{c(a).size=b>>>M});b.wbg.__wbg_value_b2a620d34c663701=((b,d)=>{const e=c(d).value;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ O]=g;r()[b/W+ M]=f});b.wbg.__wbg_setvalue_e5b519cca37d82a7=((a,b,d)=>{c(a).value=j(b,d)});b.wbg.__wbg_href_bbb11e0e61ea410e=function(){return z(((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ O]=g;r()[b/W+ M]=f}),arguments)};b.wbg.__wbg_origin_486b350035be1f11=function(){return z(((b,d)=>{const e=c(d).origin;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ O]=g;r()[b/W+ M]=f}),arguments)};b.wbg.__wbg_protocol_70cc72a5ff78dc5f=function(){return z(((b,d)=>{const e=c(d).protocol;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ O]=g;r()[b/W+ M]=f}),arguments)};b.wbg.__wbg_host_f82dbbd8bb5ef24a=function(){return z(((b,d)=>{const e=c(d).host;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ O]=g;r()[b/W+ M]=f}),arguments)};b.wbg.__wbg_hostname_4bcd4fe78b8d7a8f=function(){return z(((b,d)=>{const e=c(d).hostname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ O]=g;r()[b/W+ M]=f}),arguments)};b.wbg.__wbg_port_6438ee090e29dad6=function(){return z(((b,d)=>{const e=c(d).port;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ O]=g;r()[b/W+ M]=f}),arguments)};b.wbg.__wbg_search_4aac147f005678e5=function(){return z(((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ O]=g;r()[b/W+ M]=f}),arguments)};b.wbg.__wbg_hash_8565e7b1ae1f2be4=function(){return z(((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ O]=g;r()[b/W+ M]=f}),arguments)};b.wbg.__wbg_now_8172cd917e5eda6b=(a=>{const b=c(a).now();return b});b.wbg.__wbg_headers_85824e993aa739bf=(a=>{const b=c(a).headers;return k(b)});b.wbg.__wbg_newwithstrandinit_05d7180788420c40=function(){return z(((a,b,d)=>{const e=new Request(j(a,b),c(d));return k(e)}),arguments)};b.wbg.__wbg_data_8bd9c72cda1424e9=((b,d)=>{const e=c(d).data;var f=p(e)?M:o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);var g=l;r()[b/W+ O]=g;r()[b/W+ M]=f});b.wbg.__wbg_items_9dbbb46f6277c1e9=(a=>{const b=c(a).items;return k(b)});b.wbg.__wbg_files_f29d0a181963bf7c=(a=>{const b=c(a).files;return p(b)?M:k(b)});b.wbg.__wbg_length_13bd68e36bc897d5=(a=>{const b=c(a).length;return b});b.wbg.__wbg_get_6753f40a15e05d01=((a,b)=>{const d=c(a)[b>>>M];return p(d)?M:k(d)});b.wbg.__wbg_parentElement_0cffb3ceb0f107bd=(a=>{const b=c(a).parentElement;return p(b)?M:k(b)});b.wbg.__wbg_appendChild_e513ef0e5098dfdd=function(){return z(((a,b)=>{const d=c(a).appendChild(c(b));return k(d)}),arguments)};b.wbg.__wbg_deltaX_6b627fd6f4c19e51=(a=>{const b=c(a).deltaX;return b});b.wbg.__wbg_deltaY_a5393ec7ac0f7bb4=(a=>{const b=c(a).deltaY;return b});b.wbg.__wbg_deltaMode_a90be314f5c676f1=(a=>{const b=c(a).deltaMode;return b});b.wbg.__wbg_get_57245cc7d7c7619d=((a,b)=>{const d=c(a)[b>>>M];return k(d)});b.wbg.__wbg_length_6e3bbe7c8bd4dbd8=(a=>{const b=c(a).length;return b});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===P;return b});b.wbg.__wbg_newnoargs_b5b063fc6c2f0376=((a,b)=>{const c=new Function(j(a,b));return k(c)});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==I;return d});b.wbg.__wbg_next_579e583d33566a86=(a=>{const b=c(a).next;return k(b)});b.wbg.__wbg_next_aaef7c8aa5e212ac=function(){return z((a=>{const b=c(a).next();return k(b)}),arguments)};b.wbg.__wbg_done_1b73b0672e15f234=(a=>{const b=c(a).done;return b});b.wbg.__wbg_value_1ccc36bc03462d71=(a=>{const b=c(a).value;return k(b)});b.wbg.__wbg_iterator_6f9d4f28845f426c=(()=>{const a=Symbol.iterator;return k(a)});b.wbg.__wbg_get_765201544a2b6869=function(){return z(((a,b)=>{const d=X.get(c(a),c(b));return k(d)}),arguments)};b.wbg.__wbg_call_97ae9d8645dc388b=function(){return z(((a,b)=>{const d=c(a).call(c(b));return k(d)}),arguments)};b.wbg.__wbg_new_0b9bfdd97583284e=(()=>{const a=new Object();return k(a)});b.wbg.__wbg_self_6d479506f72c6a71=function(){return z((()=>{const a=self.self;return k(a)}),arguments)};b.wbg.__wbg_window_f2557cc78490aceb=function(){return z((()=>{const a=window.window;return k(a)}),arguments)};b.wbg.__wbg_globalThis_7f206bda628d5286=function(){return z((()=>{const a=globalThis.globalThis;return k(a)}),arguments)};b.wbg.__wbg_global_ba75c50d1cf384f4=function(){return z((()=>{const a=global.global;return k(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===H;return b});b.wbg.__wbg_resolve_99fe17964f31ffc0=(a=>{const b=Promise.resolve(c(a));return k(b)});b.wbg.__wbg_then_11f7a54d67b4bfad=((a,b)=>{const d=c(a).then(c(b));return k(d)});b.wbg.__wbg_then_cedad20fbbd9418a=((a,b,d)=>{const e=c(a).then(c(b),c(d));return k(e)});b.wbg.__wbg_buffer_3f3d764d4747d564=(a=>{const b=c(a).buffer;return k(b)});b.wbg.__wbg_newwithbyteoffsetandlength_890b478c8d7226ff=((a,b,d)=>{const e=new Int8Array(c(a),b>>>M,d>>>M);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_698c5100ae9c3365=((a,b,d)=>{const e=new Int16Array(c(a),b>>>M,d>>>M);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_7be13f49af2b2012=((a,b,d)=>{const e=new Q(c(a),b>>>M,d>>>M);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_d9aa266703cb98be=((a,b,d)=>{const e=new N(c(a),b>>>M,d>>>M);return k(e)});b.wbg.__wbg_new_8c3f0052272a457a=(a=>{const b=new N(c(a));return k(b)});b.wbg.__wbg_set_83db9690f9353e79=((a,b,d)=>{c(a).set(c(b),d>>>M)});b.wbg.__wbg_length_9e1ae1900cb0fbd5=(a=>{const b=c(a).length;return b});b.wbg.__wbg_newwithbyteoffsetandlength_5540e144e9b8b907=((a,b,d)=>{const e=new Uint16Array(c(a),b>>>M,d>>>M);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_9cc9adccd861aa26=((a,b,d)=>{const e=new Uint32Array(c(a),b>>>M,d>>>M);return k(e)});b.wbg.__wbg_newwithbyteoffsetandlength_be22e5fcf4f69ab4=((a,b,d)=>{const e=new Float32Array(c(a),b>>>M,d>>>M);return k(e)});b.wbg.__wbg_set_bf3f89b92d5a34bf=function(){return z(((a,b,d)=>{const e=X.set(c(a),c(b),c(d));return e}),arguments)};b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/W+ O]=g;r()[b/W+ M]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new L(j(a,b))});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return k(b)});b.wbg.__wbindgen_closure_wrapper2627=((a,b,c)=>{const d=v(a,b,Y,w);return k(d)});b.wbg.__wbindgen_closure_wrapper2629=((a,b,c)=>{const d=v(a,b,Y,x);return k(d)});b.wbg.__wbindgen_closure_wrapper2676=((a,b,c)=>{const d=v(a,b,953,y);return k(d)});return b});var e=(a=>{if(a<132)return;b[a]=d;d=a});var v=((b,c,d,e)=>{const f={a:b,b:c,cnt:O,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=M;try{return e(c,f.b,...b)}finally{if(--f.cnt===M){a.__wbindgen_export_2.get(f.dtor)(c,f.b)}else{f.a=c}}};g.original=f;return g});var o=((a,b,c)=>{if(c===H){const c=m.encode(a);const d=b(c.length,O)>>>M;i().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,O)>>>M;const f=i();let g=M;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==M){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,O)>>>M;const b=i().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written};l=g;return e});var i=(()=>{if(h===I||h.byteLength===M){h=new N(a.memory.buffer)};return h});var j=((a,b)=>{a=a>>>M;return g.decode(i().subarray(a,a+ b))});var y=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h028c296954462f43(b,c,k(d))});let a;const b=new G(128).fill(H);b.push(H,I,!0,!1);let d=b.length;const g=typeof TextDecoder!==J?new TextDecoder(K,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw L(`TextDecoder not available`)}};if(typeof TextDecoder!==J){g.decode()};let h=I;let l=M;const m=typeof TextEncoder!==J?new TextEncoder(K):{encode:()=>{throw L(`TextEncoder not available`)}};const n=typeof m.encodeInto===P?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=I;let s=I;export default F;export{E as initSync}