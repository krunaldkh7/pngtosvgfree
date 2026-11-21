// Converter logic (vtracer WASM + UI), ported from the original index.html.
export default async function init(signal) {
window.PRE='auto';const HINT={"auto": "We'll detect the best type automatically. You can change it any time after upload.", "logo": "Flat colors & crisp edges \u2014 best for logos, icons and clip art.", "photo": "Many colors & soft gradients \u2014 poster-style vector art.", "sketch": "Line art & two tones \u2014 great for drawings and signatures.", "silhouette": "One solid colour \u2014 ready for laser cutting and vinyl."};
document.querySelectorAll('#side [data-p]').forEach(el=>el.onclick=()=>{window.PRE=el.dataset.p;document.querySelectorAll('#side [data-p]').forEach(x=>x.classList.toggle('on',x===el));document.getElementById('sideHint').textContent=HINT[el.dataset.p];
 const ic=document.querySelector('.drop .ic');ic.style.transform='scale(1.15)';setTimeout(()=>ic.style.transform='',200)});
// Landing pages can pre-select an image type with <div id="tool" data-preset="logo">.
{const pre=document.getElementById('tool')?.dataset.preset;const el=pre&&document.querySelector('#side [data-p="'+pre+'"]');if(el)el.onclick()}
let wasm;

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedDataViewMemory0 = null;

function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

let WASM_VECTOR_LEN = 0;

let cachedUint8ArrayMemory0 = null;

function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

const cachedTextEncoder = (typeof TextEncoder !== 'undefined' ? new TextEncoder('utf-8') : { encode: () => { throw Error('TextEncoder not available') } } );

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

const cachedTextDecoder = (typeof TextDecoder !== 'undefined' ? new TextDecoder('utf-8', { ignoreBOM: true, fatal: true }) : { decode: () => { throw Error('TextDecoder not available') } } );

if (typeof TextDecoder !== 'undefined') { cachedTextDecoder.decode(); };

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

function passArray8ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 1, 1) >>> 0;
    getUint8ArrayMemory0().set(arg, ptr / 1);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
 * @param {Uint8Array} pixels
 * @param {number} width
 * @param {number} height
 * @param {any} config_js
 * @returns {string}
 */
function to_svg(pixels, width, height, config_js) {
    let deferred2_0;
    let deferred2_1;
    try {
        const ptr0 = passArray8ToWasm0(pixels, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        const ret = wasm.to_svg(ptr0, len0, width, height, config_js);
        deferred2_0 = ret[0];
        deferred2_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);
    }
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);

            } catch (e) {
                if (module.headers.get('Content-Type') != 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else {
                    throw e;
                }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);

    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };

        } else {
            return instance;
        }
    }
}

function __wbg_get_imports() {
    const imports = {};
    imports.wbg = {};
    imports.wbg.__wbg_buffer_609cc3eee51ed158 = function(arg0) {
        const ret = arg0.buffer;
        return ret;
    };
    imports.wbg.__wbg_entries_3265d4158b33e5dc = function(arg0) {
        const ret = Object.entries(arg0);
        return ret;
    };
    imports.wbg.__wbg_error_524f506f44df1645 = function(arg0) {
        console.error(arg0);
    };
    imports.wbg.__wbg_get_b9b93047fe3cf45b = function(arg0, arg1) {
        const ret = arg0[arg1 >>> 0];
        return ret;
    };
    imports.wbg.__wbg_getwithrefkey_1dc361bd10053bfe = function(arg0, arg1) {
        const ret = arg0[arg1];
        return ret;
    };
    imports.wbg.__wbg_instanceof_ArrayBuffer_e14585432e3737fc = function(arg0) {
        let result;
        try {
            result = arg0 instanceof ArrayBuffer;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_instanceof_Uint8Array_17156bcf118086a9 = function(arg0) {
        let result;
        try {
            result = arg0 instanceof Uint8Array;
        } catch (_) {
            result = false;
        }
        const ret = result;
        return ret;
    };
    imports.wbg.__wbg_isSafeInteger_343e2beeeece1bb0 = function(arg0) {
        const ret = Number.isSafeInteger(arg0);
        return ret;
    };
    imports.wbg.__wbg_length_a446193dc22c12f8 = function(arg0) {
        const ret = arg0.length;
        return ret;
    };
    imports.wbg.__wbg_length_e2d2a49132c1b256 = function(arg0) {
        const ret = arg0.length;
        return ret;
    };
    imports.wbg.__wbg_new_a12002a7f91c75be = function(arg0) {
        const ret = new Uint8Array(arg0);
        return ret;
    };
    imports.wbg.__wbg_set_65595bdd868b3009 = function(arg0, arg1, arg2) {
        arg0.set(arg1, arg2 >>> 0);
    };
    imports.wbg.__wbindgen_as_number = function(arg0) {
        const ret = +arg0;
        return ret;
    };
    imports.wbg.__wbindgen_bigint_from_u64 = function(arg0) {
        const ret = BigInt.asUintN(64, arg0);
        return ret;
    };
    imports.wbg.__wbindgen_bigint_get_as_i64 = function(arg0, arg1) {
        const v = arg1;
        const ret = typeof(v) === 'bigint' ? v : undefined;
        getDataViewMemory0().setBigInt64(arg0 + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
    };
    imports.wbg.__wbindgen_boolean_get = function(arg0) {
        const v = arg0;
        const ret = typeof(v) === 'boolean' ? (v ? 1 : 0) : 2;
        return ret;
    };
    imports.wbg.__wbindgen_debug_string = function(arg0, arg1) {
        const ret = debugString(arg1);
        const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbindgen_error_new = function(arg0, arg1) {
        const ret = new Error(getStringFromWasm0(arg0, arg1));
        return ret;
    };
    imports.wbg.__wbindgen_in = function(arg0, arg1) {
        const ret = arg0 in arg1;
        return ret;
    };
    imports.wbg.__wbindgen_init_externref_table = function() {
        const table = wasm.__wbindgen_export_2;
        const offset = table.grow(4);
        table.set(0, undefined);
        table.set(offset + 0, undefined);
        table.set(offset + 1, null);
        table.set(offset + 2, true);
        table.set(offset + 3, false);
        ;
    };
    imports.wbg.__wbindgen_is_bigint = function(arg0) {
        const ret = typeof(arg0) === 'bigint';
        return ret;
    };
    imports.wbg.__wbindgen_is_object = function(arg0) {
        const val = arg0;
        const ret = typeof(val) === 'object' && val !== null;
        return ret;
    };
    imports.wbg.__wbindgen_is_string = function(arg0) {
        const ret = typeof(arg0) === 'string';
        return ret;
    };
    imports.wbg.__wbindgen_is_undefined = function(arg0) {
        const ret = arg0 === undefined;
        return ret;
    };
    imports.wbg.__wbindgen_jsval_eq = function(arg0, arg1) {
        const ret = arg0 === arg1;
        return ret;
    };
    imports.wbg.__wbindgen_jsval_loose_eq = function(arg0, arg1) {
        const ret = arg0 == arg1;
        return ret;
    };
    imports.wbg.__wbindgen_memory = function() {
        const ret = wasm.memory;
        return ret;
    };
    imports.wbg.__wbindgen_number_get = function(arg0, arg1) {
        const obj = arg1;
        const ret = typeof(obj) === 'number' ? obj : undefined;
        getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
    };
    imports.wbg.__wbindgen_string_get = function(arg0, arg1) {
        const obj = arg1;
        const ret = typeof(obj) === 'string' ? obj : undefined;
        var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        var len1 = WASM_VECTOR_LEN;
        getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
        getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
    };
    imports.wbg.__wbindgen_string_new = function(arg0, arg1) {
        const ret = getStringFromWasm0(arg0, arg1);
        return ret;
    };
    imports.wbg.__wbindgen_throw = function(arg0, arg1) {
        throw new Error(getStringFromWasm0(arg0, arg1));
    };

    return imports;
}

function __wbg_init_memory(imports, memory) {

}

function __wbg_finalize_init(instance, module) {
    wasm = instance.exports;
    __wbg_init.__wbindgen_wasm_module = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;


    wasm.__wbindgen_start();
    return wasm;
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (typeof module !== 'undefined') {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();

    __wbg_init_memory(imports);

    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }

    const instance = new WebAssembly.Instance(module, imports);

    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (typeof module_or_path !== 'undefined') {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (typeof module_or_path === 'undefined') {
        throw new Error('no url');
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    __wbg_init_memory(imports);

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}




// The tracer (~200 KB) is fetched and compiled lazily, on the first conversion — not on page load.
let wasmReady=null;
const ensureWasm=()=>wasmReady||(wasmReady=import('./tracer-wasm').then(m=>{initSync({module:Uint8Array.from(atob(m.default),c=>c.charCodeAt(0))})}));

const $=id=>document.getElementById(id);
const TYPES=[
 {id:'photo',name:'Photograph',hint:'Many colors, soft gradients',base:{colors:24,detail:72,smoothing:1,speckle:4,corner:78}},
 {id:'logo',name:'Logo / Clip art',hint:'Flat colors, crisp edges',base:{colors:8,detail:68,smoothing:0,speckle:9,corner:45}},
 {id:'sketch',name:'Sketch / B&W',hint:'Line art, two tones',base:{colors:3,detail:64,smoothing:0,speckle:6,corner:50}},
 {id:'silhouette',name:'Silhouette',hint:'One colour — laser & vinyl',base:{colors:1,detail:70,smoothing:1,speckle:8,corner:55}}];
const RANGES={colors:[1,32,'Colors','How many flat colors the SVG uses. 1 = single-color silhouette for cutting machines.'],
 detail:[0,100,'Detail','Higher keeps more fine detail (bigger file). Lower simplifies the shapes.'],
 smoothing:[0,3,'Noise smoothing','Cleans up grainy or noisy images before tracing. 0 = off.'],
 speckle:[1,64,'Speckle removal (px)','Removes stray specks smaller than this many pixels.'],
 corner:[20,120,'Corner angle (°)','Lower keeps corners sharp; higher rounds them into curves.']};

const S={img:null,type:'logo',detected:null,quality:'high',set:null,custom:false,palette:null,basePalette:null,recolor:{},transp:new Set(),reg:false,src:null,result:null};

function presetFor(t,q){const r={...TYPES.find(x=>x.id===t).base};
 if(q==='high'){r.detail=Math.min(100,r.detail+16);r.colors=Math.min(32,Math.round(r.colors*1.25));r.speckle=Math.max(2,Math.round(r.speckle*.5))}
 else if(q==='low'){r.detail=Math.max(0,r.detail-22);r.colors=Math.max(1,Math.round(r.colors*.7));r.speckle=Math.round(r.speckle*2.2);r.smoothing=Math.min(3,r.smoothing+1)}
 return r}

/* ---------- UI build ---------- */
$('typeG').innerHTML=TYPES.map(t=>`<button class="tbtn" data-t="${t.id}"><span class="auto">AUTO</span><b>${t.name}</b><small>${t.hint}</small></button>`).join('');
$('adv').innerHTML=Object.entries(RANGES).map(([k,[a,b,l,h]])=>`<div class="rng"><label>${l}<b id="v_${k}"></b></label><input type="range" id="r_${k}" min="${a}" max="${b}" step="1"><small>${h}</small></div>`).join('');
document.querySelectorAll('#typeG .tbtn').forEach(b=>b.onclick=()=>{S.type=b.dataset.t;S.custom=false;S.palette=null;applyPreset();run()});
document.querySelectorAll('#qSeg button').forEach(b=>b.onclick=()=>{S.quality=b.dataset.q;S.custom=false;S.palette=null;applyPreset();run()});
Object.keys(RANGES).forEach(k=>{const r=$('r_'+k);r.oninput=()=>{$('v_'+k).textContent=r.value};r.onchange=()=>{S.set[k]=+r.value;S.custom=true;if(k==='colors'||k==='smoothing')S.palette=null;run()}});
$('reg').onchange=e=>{S.reg=e.target.checked;render()};
$('resetC').onclick=()=>{S.recolor={};S.transp.clear();render()};
function applyPreset(){S.set=presetFor(S.type,S.quality);syncUI()}
function syncUI(){
 document.querySelectorAll('#typeG .tbtn').forEach(b=>{b.classList.toggle('on',b.dataset.t===S.type);b.classList.toggle('det',b.dataset.t===S.detected)});
 document.querySelectorAll('#qSeg button').forEach(b=>b.classList.toggle('on',b.dataset.q===S.quality));
 Object.keys(RANGES).forEach(k=>{$('r_'+k).value=S.set[k];$('v_'+k).textContent=S.set[k]});
}

/* view controls */
let split=.5,view='split';
function setSplit(p){split=Math.max(0,Math.min(1,p));$('clipO').style.clipPath=`inset(0 ${100-split*100}% 0 0)`;$('split').style.left=split*100+'%'}
document.querySelectorAll('#viewSeg button').forEach(b=>b.onclick=()=>{view=b.dataset.v;document.querySelectorAll('#viewSeg button').forEach(x=>x.classList.toggle('on',x===b));
 const sp=view==='split';$('split').style.display=sp?'':'none';$('lblO').style.display=view!=='svg'?'':'none';$('lblS').style.display=view!=='orig'?'':'none';
 $('clipO').style.display=view==='svg'?'none':'';$('svgL').style.display=view==='orig'?'none':'';$('clipO').style.clipPath=sp?`inset(0 ${100-split*100}% 0 0)`:'none'});
document.querySelectorAll('#bgSeg button').forEach(b=>b.onclick=()=>{document.querySelectorAll('#bgSeg button').forEach(x=>x.classList.toggle('on',x===b));$('stage').classList.toggle('white',b.dataset.b==='white')});
const st=$('stage');let Z=1,PX=0,PY=0,mode=null,sx0,sy0,px0,py0;
function applyZ(){const t=`translate(${PX}px,${PY}px) scale(${Z})`;$('svgL').style.transform=t;$('orig').style.transform=t;$('zV').textContent=Math.round(Z*100)+'%'}
function zoomAt(f,cx,cy){const nz=Math.min(40,Math.max(1,Z*f));const r=st.getBoundingClientRect(),x=cx-r.left-14,y=cy-r.top-14;PX=x-(x-PX)*nz/Z;PY=y-(y-PY)*nz/Z;Z=nz;if(Z===1){PX=PY=0}applyZ()}
window.resetZoom=()=>{Z=1;PX=PY=0;applyZ()};
$('zIn').onclick=e=>{e.stopPropagation();const r=st.getBoundingClientRect();zoomAt(1.5,r.left+r.width/2,r.top+r.height/2)};
$('zOut').onclick=e=>{e.stopPropagation();const r=st.getBoundingClientRect();zoomAt(1/1.5,r.left+r.width/2,r.top+r.height/2)};
$('zFit').onclick=e=>{e.stopPropagation();resetZoom()};
document.querySelector('.zoom').addEventListener('pointerdown',e=>e.stopPropagation());
st.addEventListener('wheel',e=>{e.preventDefault();zoomAt(e.deltaY<0?1.15:1/1.15,e.clientX,e.clientY)},{passive:false});
st.addEventListener('dblclick',()=>resetZoom());
$('split').addEventListener('pointerdown',e=>{e.stopPropagation();mode='split';st.setPointerCapture(e.pointerId);mv(e)});
st.addEventListener('pointerdown',e=>{if(mode)return;if(Z>1){mode='pan';sx0=e.clientX;sy0=e.clientY;px0=PX;py0=PY;st.classList.add('pan')}else if(view==='split'){mode='split';mv(e)}else return;st.setPointerCapture(e.pointerId)});
st.addEventListener('pointermove',e=>{if(mode==='split')mv(e);else if(mode==='pan'){PX=px0+e.clientX-sx0;PY=py0+e.clientY-sy0;applyZ()}});
['pointerup','pointercancel'].forEach(v=>st.addEventListener(v,()=>{mode=null;st.classList.remove('pan')}));
function mv(e){const r=st.getBoundingClientRect();setSplit((e.clientX-r.left)/r.width)}

/* ---------- input ---------- */
const drop=$('drop');drop.onclick=()=>$('file').click();
$('file').onchange=e=>load(e.target.files[0]);
['dragover','dragenter'].forEach(v=>drop.addEventListener(v,e=>{e.preventDefault();drop.classList.add('on')}));
['dragleave','drop'].forEach(v=>drop.addEventListener(v,e=>{e.preventDefault();drop.classList.remove('on')}));
drop.addEventListener('drop',e=>load(e.dataTransfer.files[0]));
document.addEventListener('paste',e=>{const f=[...(e.clipboardData?.files||[])][0];if(f)load(f)},{signal});
$('newB').onclick=()=>{$('editor').style.display='none';$('start').style.display='';$('file').value=''};

function load(f){
 $('err').style.display='none';if(!f)return;
 ensureWasm();
 if(!/^image\//.test(f.type)&&!/\.(png|jpe?g|gif|bmp|webp|avif)$/i.test(f.name)){showErr('Please choose an image file (PNG, JPG, GIF, BMP or WEBP).');return}
 const start=src=>{const img=new Image();
  img.onload=()=>{S.img=img;S.name=(f.name||'image').replace(/\.[^.]+$/,'');$('origImg').src=src;
   const d=readPixels(img,700);S.detected=detectType(d);S.type=(window.PRE&&window.PRE!=='auto')?window.PRE:S.detected;S.quality='high';S.custom=false;S.palette=null;S.recolor={};S.transp.clear();
   applyPreset();$('start').style.display='none';$('editor').style.display='block';setSplit(.5);resetZoom();
   buildSuggestions(d);run();$('tool').scrollIntoView({behavior:'smooth'})};
  img.onerror=()=>tryNext();img.src=src};
 const tries=[
  ()=>createImageBitmap(f).then(bm=>{const c=document.createElement('canvas');c.width=bm.width;c.height=bm.height;c.getContext('2d').drawImage(bm,0,0);start(c.toDataURL('image/png'))}),
  ()=>new Promise((ok,no)=>{const r=new FileReader();r.onload=()=>{start(r.result);ok()};r.onerror=no;r.readAsDataURL(f)}),
  ()=>{start(URL.createObjectURL(f));return Promise.resolve()}];
 let t=0;const tryNext=()=>{if(t>=tries.length){showErr('This image could not be read. It may be damaged or in an unsupported format (e.g. HEIC). Try re-saving it as PNG or JPG.');return}
  tries[t++]().catch(tryNext)};
 tryNext();
}
function showErr(m){$('err').textContent=m;$('err').style.display='block'}
function readPixels(img,maxEdge,minEdge=0){
 const L=Math.max(img.naturalWidth,img.naturalHeight);let s=Math.min(1,maxEdge/L);if(minEdge&&L<minEdge)s=Math.min(3,minEdge/L);
 const w=Math.max(1,Math.round(img.naturalWidth*s)),h=Math.max(1,Math.round(img.naturalHeight*s));
 const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d',{willReadFrequently:true});
 x.imageSmoothingEnabled=true;x.imageSmoothingQuality='high';x.drawImage(img,0,0,w,h);return x.getImageData(0,0,w,h);
}

/* ---------- analysis ---------- */
function detectType({data,width:w,height:h}){
 const n=w*h,step=Math.max(1,Math.floor(n/30000)),bins=new Map();let flat=0,pairs=0,hard=0,chroma=0,cnt=0;
 const px=i=>{const a=data[i*4+3]/255;return[data[i*4]*a+255*(1-a),data[i*4+1]*a+255*(1-a),data[i*4+2]*a+255*(1-a)]};
 for(let i=0;i<n;i+=step){const[r,g,b]=px(i);chroma+=Math.max(r,g,b)-Math.min(r,g,b);cnt++;
  const k=((r>>4)<<8)|((g>>4)<<4)|(b>>4);bins.set(k,(bins.get(k)||0)+1);
  if(i%w<w-1){const[r2,g2,b2]=px(i+1);const d=Math.abs(r-r2)+Math.abs(g-g2)+Math.abs(b-b2);pairs++;if(d<12)flat++;else if(d>120)hard++}}
 const v=[...bins.values()].sort((a,b)=>b-a);let acc=0,b90=0;for(const c of v){acc+=c;b90++;if(acc>=cnt*.9)break}
 const fl=flat/pairs,he=hard/Math.max(1,pairs-flat),ch=chroma/cnt;
 if(ch<14&&fl>.5)return'sketch';if(fl>.55&&(b90<=48||he>=.08))return'logo';return'photo';
}
function rng(seed){let t=seed>>>0;return()=>{t=t+0x6D2B79F5|0;let r=Math.imul(t^t>>>15,1|t);r=r+Math.imul(r^r>>>7,61|r)^r;return((r^r>>>14)>>>0)/4294967296}}
function kmeans(rgb,idx,k){
 const n=idx.length;if(!n)return[[0,0,0]];k=Math.min(k,n);const R=rng(2654435769),C=new Float32Array(k*3),D=new Float32Array(n).fill(Infinity);
 let p=idx[Math.floor(R()*n)]*3;C.set([rgb[p],rgb[p+1],rgb[p+2]],0);
 for(let c=1;c<k;c++){let sum=0;const o=(c-1)*3;for(let i=0;i<n;i++){const q=idx[i]*3,d=(rgb[q]-C[o])**2+(rgb[q+1]-C[o+1])**2+(rgb[q+2]-C[o+2])**2;if(d<D[i])D[i]=d;sum+=D[i]}
  let t=R()*sum,j=0;for(;j<n-1;j++){t-=D[j];if(t<=0)break}const q=idx[j]*3;C.set([rgb[q],rgb[q+1],rgb[q+2]],c*3)}
 const asg=new Int32Array(n).fill(-1),M=new Float64Array(k*3),W=new Int32Array(k);
 for(let it=0;it<16;it++){M.fill(0);W.fill(0);let ch=0;
  for(let i=0;i<n;i++){const q=idx[i]*3;let bi=0,bd=Infinity;for(let c=0;c<k;c++){const d=(rgb[q]-C[c*3])**2+(rgb[q+1]-C[c*3+1])**2+(rgb[q+2]-C[c*3+2])**2;if(d<bd){bd=d;bi=c}}
   if(asg[i]!==bi){asg[i]=bi;ch++}M[bi*3]+=rgb[q];M[bi*3+1]+=rgb[q+1];M[bi*3+2]+=rgb[q+2];W[bi]++}
  for(let c=0;c<k;c++)if(W[c]){C[c*3]=M[c*3]/W[c];C[c*3+1]=M[c*3+1]/W[c];C[c*3+2]=M[c*3+2]/W[c]}
  if(ch/n<.003)break}
 const out=[];for(let c=0;c<k;c++){if(!W[c])continue;const col=[Math.round(C[c*3]),Math.round(C[c*3+1]),Math.round(C[c*3+2])];
  if(!out.some(o=>(o[0]-col[0])**2+(o[1]-col[1])**2+(o[2]-col[2])**2<144))out.push(col)}
 return out.length?out:[[0,0,0]];
}
function toRGB(d,blur){const{data,width:w,height:h}=d,n=w*h,P=new Float32Array(n*3),A=new Float32Array(n),core=new Uint8Array(n);
 for(let i=0;i<n;i++){const a=data[i*4+3]/255;A[i]=a;core[i]=a>=.9?1:0;for(let c=0;c<3;c++)P[i*3+c]=data[i*4+c]*a}
 for(let pass=0;pass<blur;pass++){const t=P.slice(),ta=A.slice();for(let y=0;y<h;y++)for(let x=0;x<w;x++){let s0=0,s1=0,s2=0,sa=0,c=0;
  for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const X=x+dx,Y=y+dy;if(X<0||Y<0||X>=w||Y>=h)continue;const j=Y*w+X,q=j*3;s0+=t[q];s1+=t[q+1];s2+=t[q+2];sa+=ta[j];c++}
  const i=y*w+x,q=i*3;P[q]=s0/c;P[q+1]=s1/c;P[q+2]=s2/c;A[i]=sa/c}}
 const rgb=new Float32Array(n*3),opaque=new Uint8Array(n);
 for(let i=0;i<n;i++){const a=A[i];opaque[i]=a>=.5?1:0;for(let c=0;c<3;c++)rgb[i*3+c]=a>.02?Math.min(255,P[i*3+c]/a):255}
 let nc=0;for(let i=0;i<n;i++)nc+=core[i];const anyT=nc<n;
 return{rgb,opaque,core:anyT&&nc>200?core:opaque}}
/* drop anti-alias "in-between" colors: small clusters lying on the line between two bigger colors */
function cleanPalette(rgb,idx,pal){
 if(S.type==='photo'||pal.length<3)return pal;
 const k=pal.length,cnt=new Float64Array(k);
 for(const i of idx){const q=i*3;let bi=0,bd=Infinity;for(let c=0;c<k;c++){const p=pal[c],d=(rgb[q]-p[0])**2+(rgb[q+1]-p[1])**2+(rgb[q+2]-p[2])**2;if(d<bd){bd=d;bi=c}}cnt[bi]++}
 const tot=idx.length,drop=new Set();
 const segD=(x,a,b)=>{const v=[b[0]-a[0],b[1]-a[1],b[2]-a[2]],L=v[0]**2+v[1]**2+v[2]**2;if(!L)return Infinity;let t=((x[0]-a[0])*v[0]+(x[1]-a[1])*v[1]+(x[2]-a[2])*v[2])/L;if(t<.08||t>.92)return Infinity;
  return Math.hypot(x[0]-a[0]-t*v[0],x[1]-a[1]-t*v[1],x[2]-a[2]-t*v[2])};
 const order=[...pal.keys()].sort((a,b)=>cnt[a]-cnt[b]);
 for(const c of order)for(const a of [...order].reverse()){if(a===c)break;if(!drop.has(a)&&Math.hypot(pal[a][0]-pal[c][0],pal[a][1]-pal[c][1],pal[a][2]-pal[c][2])<(S.type==='sketch'?60:36)){drop.add(c);break}}
 for(const c of order){let hit=false;for(let a=0;a<k&&!hit;a++)if(a!==c&&!drop.has(a)&&cnt[a]>cnt[c]&&Math.hypot(pal[a][0]-pal[c][0],pal[a][1]-pal[c][1],pal[a][2]-pal[c][2])<(S.type==='sketch'?60:36))hit=true;
  if(hit){drop.add(c);continue}if(cnt[c]/tot>.06)continue;
  for(let a=0;a<k&&!hit;a++)for(let b=a+1;b<k&&!hit;b++){if(a===c||b===c||drop.has(a)||drop.has(b))continue;if(cnt[a]<=cnt[c]||cnt[b]<=cnt[c])continue;if(segD(pal[c],pal[a],pal[b])<28)hit=true}
  if(hit)drop.add(c)}
 const out=pal.filter((_,i)=>!drop.has(i));return out.length>=1?out:pal}
function samples(opaque,n){const step=Math.max(1,Math.floor(n/25000)),a=[];for(let i=0;i<n;i+=step)if(opaque[i])a.push(i);return a}
const hex=c=>'#'+c.map(v=>v.toString(16).padStart(2,'0')).join('');
const unhex=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));

function buildSuggestions(d){const{rgb,core}=toRGB(d,0),idx=samples(core,d.width*d.height),seen=new Set();S.sugg=[];
 for(const k of[2,3,4,6,8,12,16]){const p=kmeans(rgb,idx,k).sort((a,b)=>(a[0]+a[1]+a[2])-(b[0]+b[1]+b[2]));const key=p.map(hex).join();if(seen.has(key))continue;seen.add(key);S.sugg.push(p)}
 $('sugg').innerHTML=S.sugg.map((p,i)=>`<div class="sg" data-i="${i}"><span>${p.length}</span><div>${p.map(c=>`<i style="background:${hex(c)}"></i>`).join('')}</div></div>`).join('');
 document.querySelectorAll('.sg').forEach(el=>el.onclick=()=>{const p=S.sugg[+el.dataset.i];S.palette=p.map(c=>[...c]);S.set.colors=p.length;S.custom=true;S.recolor={};S.transp.clear();syncUI();run()});
}

/* ---------- conversion ---------- */
let job=0;
function prog(stage,f){$('stg').textContent=stage;$('barI').style.width=Math.round(f*100)+'%'}
const tick=()=>new Promise(r=>setTimeout(r,16));
async function run(){
 const my=++job,t0=performance.now();$('busy').classList.add('on');
 try{
  await ensureWasm();if(my!==job)return;
  const set=S.set,maxE=S.quality==='low'?900:S.quality==='medium'?1300:1700;
  prog('Reading image',.05);await tick();
  const d=readPixels(S.img,maxE,S.type==='photo'?640:1200),w=d.width,h=d.height,n=w*h;
  prog('Analyzing colors',.15);await tick();if(my!==job)return;
  const up=w/S.img.naturalWidth;const{rgb,opaque,core}=toRGB(d,set.smoothing+(S.type!=='photo'&&up>1.2?Math.min(3,Math.round(up)):0));
  const out=new Uint8Array(n*4);let palette;
  if(set.colors<=1){
   // silhouette: luminance threshold (Otsu)
   const hist=new Float64Array(256),lum=new Uint8Array(n);for(let i=0;i<n;i++){lum[i]=Math.round(.299*rgb[i*3]+.587*rgb[i*3+1]+.114*rgb[i*3+2]);if(opaque[i])hist[lum[i]]++}
   let tot=0,sum=0;for(let i=0;i<256;i++){tot+=hist[i];sum+=i*hist[i]}let wB=0,sB=0,best=0,th=128;
   for(let i=0;i<256;i++){wB+=hist[i];if(!wB)continue;const wF=tot-wB;if(!wF)break;sB+=i*hist[i];const mB=sB/wB,mF=(sum-sB)/wF,v=wB*wF*(mB-mF)**2;if(v>best){best=v;th=i}}
   for(let i=0;i<n;i++){const ink=opaque[i]&&lum[i]<=th;out.set(ink?[0,0,0,255]:[255,255,255,255],i*4)}
   palette=[[0,0,0]];
  }else{
   palette=S.palette&&S.palette.length===set.colors?S.palette:cleanPalette(rgb,samples(core,n),kmeans(rgb,samples(core,n),set.colors));
   S.palette=palette.map(c=>[...c]);
   prog('Mapping pixels',.3);await tick();if(my!==job)return;
   const lab=new Int16Array(n),k=palette.length;
   for(let i=0;i<n;i++){if(!opaque[i]){lab[i]=-1;continue}let bi=0,bd=Infinity;const r=rgb[i*3],g=rgb[i*3+1],b=rgb[i*3+2];
    for(let c=0;c<k;c++){const p=palette[c],dd=(r-p[0])**2+(g-p[1])**2+(b-p[2])**2;if(dd<bd){bd=dd;bi=c}}lab[i]=bi}
   // edge cleanup: majority filter removes anti-alias halos
   const passes=S.type==='photo'?1:2;
   for(let ps=0;ps<passes;ps++){const t=lab.slice(),cnt=new Int16Array(k+1);
    for(let y=1;y<h-1;y++)for(let x=1;x<w-1;x++){const i=y*w+x;if(t[i]<0)continue;cnt.fill(0);
     for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const v=t[i+dy*w+dx];cnt[v<0?k:v]++}
     let bv=t[i],bc=cnt[t[i]];if(bc>=4)continue;for(let c=0;c<k;c++)if(cnt[c]>bc){bc=cnt[c];bv=c}if(bc>=5)lab[i]=bv}}
   // transparent key color
   S.key=findKey(palette);
   for(let i=0;i<n;i++){const c=lab[i]<0?S.key:palette[lab[i]];out[i*4]=c[0];out[i*4+1]=c[1];out[i*4+2]=c[2];out[i*4+3]=255}
  }
  prog('Tracing boundaries',.5);await tick();if(my!==job)return;
  const detailF=set.detail/100;
  let hasT=false;for(let i=0;i<n;i++)if(!opaque[i]){hasT=true;break}
  const cfg={binary:set.colors<=1,mode:'spline',hierarchical:hasT?'cutout':'stacked',cornerThreshold:set.corner*Math.PI/180,
   lengthThreshold:+(8-detailF*5.5).toFixed(2),maxIterations:10,spliceThreshold:45*Math.PI/180,filterSpeckle:set.speckle,
   colorPrecision:1,layerDifference:1,pathPrecision:detailF>.7?2:1};
  const raw=to_svg(out,w,h,cfg);
  if(my!==job)return;
  prog('Building SVG',.95);await tick();
  S.src={raw,w,h,ow:S.img.naturalWidth,oh:S.img.naturalHeight,binary:cfg.binary};S.time=performance.now()-t0;
  renderPalette();render();
 }catch(e){console.error(e);$('svgL').innerHTML=`<p style="color:#b91c1c">Vectorization failed: ${e.message||e}</p>`}
 finally{if(my===job)$('busy').classList.remove('on')}
}
function findKey(p){for(let r=1;r<255;r+=7)for(let g=2;g<255;g+=11){const c=[r,g,253];if(!p.some(q=>Math.abs(q[0]-c[0])+Math.abs(q[1]-c[1])+Math.abs(q[2]-c[2])<6))return c}return[1,2,253]}

function renderPalette(){
 const used=new Set();const re=/fill="(#[0-9A-Fa-f]{6})"/g;let mm;while((mm=re.exec(S.src.raw)))used.add(nearestHex(mm[1].toLowerCase()));
 const p=S.src.binary?[[0,0,0]]:S.palette.filter(c=>used.has(hex(c)));
 $('pal').innerHTML=p.map(c=>{const h=hex(c),now=S.recolor[h]||h,off=S.transp.has(h);
  return`<div class="chip${off?' off':''}" style="background:${now}" title="${now}"><input type="color" value="${now}" data-h="${h}"><span class="x" data-h="${h}">${off?'↺':'×'}</span></div>`}).join('');
 $('pal').querySelectorAll('input').forEach(i=>i.oninput=()=>{S.recolor[i.dataset.h]=i.value;i.parentNode.style.background=i.value;render()});
 $('pal').querySelectorAll('.x').forEach(x=>x.onclick=e=>{e.stopPropagation();e.preventDefault();const h=x.dataset.h;S.transp.has(h)?S.transp.delete(h):S.transp.add(h);renderPalette();render()});
}
function nearestHex(h){const c=unhex(h);if(S.src.binary)return'#000000';let bi=null,bd=Infinity;
 if(S.key&&Math.abs(c[0]-S.key[0])+Math.abs(c[1]-S.key[1])+Math.abs(c[2]-S.key[2])<6)return'KEY';
 for(const p of S.palette){const d=(p[0]-c[0])**2+(p[1]-c[1])**2+(p[2]-c[2])**2;if(d<bd){bd=d;bi=p}}return hex(bi)}

function render(){
 if(!S.src)return;const{raw,w,h,ow,oh}=S.src;const sx=ow/w,sy=oh/h;
 const groups=new Map();let paths=0,nodes=0;
 const re=/<path d="([^"]+)" fill="(#[0-9A-Fa-f]{6})" transform="translate\(([-\d.]+),([-\d.]+)\)"\/>/g;let m;
 while((m=re.exec(raw))){const base=nearestHex(m[2].toLowerCase());if(base==='KEY')continue;
  if(S.src.binary&&m[2].toLowerCase()==='#ffffff')continue;
  if(S.transp.has(base))continue;const fill=S.recolor[base]||base;
  const tx=+m[3],ty=+m[4];
  const d=m[1].replace(/(-?\d*\.?\d+)\s+(-?\d*\.?\d+)/g,(_,a,b)=>{nodes++;return`${r2((+a+tx)*sx)} ${r2((+b+ty)*sy)}`}).trim();
  if(!groups.has(fill))groups.set(fill,[]);groups.get(fill).push(d);paths++}
 let body='';
 const reg=S.reg?regMarks(ow,oh):'';
 for(const[fill,ds]of groups)body+=`<path fill="${fill}" fill-rule="evenodd" d="${ds.join(' ')}${reg}"/>`;
 const svg=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${S.reg?regBox(ow,oh):`0 0 ${ow} ${oh}`}" width="${ow}" height="${oh}">${body}</svg>`;
 S.result=svg;
 $('svgL').innerHTML=svg;
 const bytes=new Blob([svg]).size;
 $('sSize').textContent=bytes>1048576?(bytes/1048576).toFixed(2)+' MB':(bytes/1024).toFixed(1)+' KB';
 $('sCol').textContent=groups.size;$('sPath').textContent=paths.toLocaleString();$('sNode').textContent=nodes.toLocaleString();
 $('sDim').textContent=ow+'×'+oh;$('sTime').textContent=(S.time/1000).toFixed(2)+'s';
}
const r2=v=>Math.round(v*100)/100;
function regSz(w,h){const s=Math.max(3,Math.round(Math.min(w,h)*.03));return{s,g:Math.round(s*.8)}}
function regBox(w,h){const{s,g}=regSz(w,h),o=s+g;return`${-o} ${-o} ${w+2*o} ${h+2*o}`}
function regMarks(w,h){const{s,g}=regSz(w,h);return[[-g-s,-g-s],[w+g,-g-s],[-g-s,h+g],[w+g,h+g]].map(([x,y])=>` M${x} ${y}h${s}v${s}h${-s}z`).join('')}

/* ---------- export ---------- */
$('dl').onclick=()=>{if(!S.result)return;try{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([S.result],{type:'image/svg+xml'}));a.download=(S.name||'image')+'.svg';document.body.appendChild(a);a.click();a.remove();toast('Download started ✓')}catch(e){toast('Download blocked here — use Copy SVG')}};
$('cp').onclick=async()=>{try{await navigator.clipboard.writeText(S.result);toast('SVG code copied ✓')}catch(e){toast('Copy not allowed here')}};
function toast(t){const e=$('toast');e.textContent=t;e.classList.add('s');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('s'),2200)}
// Warm up the tracer as soon as the user shows intent (hover/drag/focus on the drop zone).
['pointerenter','dragenter','focusin','touchstart'].forEach(v=>drop.addEventListener(v,()=>ensureWasm(),{once:true,passive:true}));
document.querySelectorAll('[data-act="pick"]').forEach(b=>b.onclick=()=>$('file').click());
document.querySelectorAll('[data-act="pick-scroll"]').forEach(b=>b.onclick=()=>{$('file').click();scrollTo({top:$('tool').offsetTop-20})});
}
