import JSZip from "jszip";
export default function init() {
const $=id=>document.getElementById(id);let scale='2',bg='t',files=[];
function toast(t){const e=$('toast');e.textContent=t;e.classList.add('s');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('s'),2200)}
document.querySelectorAll('#scale button').forEach(b=>b.onclick=()=>{scale=b.dataset.s;document.querySelectorAll('#scale button').forEach(x=>x.classList.toggle('on',x===b));$('wbox').style.display=scale==='w'?'':'none';rerender()});
document.querySelectorAll('#bg button').forEach(b=>b.onclick=()=>{bg=b.dataset.b;document.querySelectorAll('#bg button').forEach(x=>x.classList.toggle('on',x===b));rerender()});
$('w').onchange=rerender;
const drop=$('drop');drop.onclick=()=>$('file').click();$('file').onchange=e=>add(e.target.files);
['dragover','dragenter'].forEach(v=>drop.addEventListener(v,e=>{e.preventDefault();drop.classList.add('on')}));
['dragleave','drop'].forEach(v=>drop.addEventListener(v,e=>{e.preventDefault();drop.classList.remove('on')}));
drop.addEventListener('drop',e=>add(e.dataTransfer.files));
$('clr').onclick=()=>{files=[];$('res').innerHTML='';$('bar').classList.remove('on')};
async function add(list){for(const f of list){if(!/svg/i.test(f.type)&&!/\.svg$/i.test(f.name))continue;const text=await f.text();files.push({name:f.name.replace(/\.svg$/i,''),text})}rerender()}
function dims(text){const d=new DOMParser().parseFromString(text,'image/svg+xml').documentElement;let w=parseFloat(d.getAttribute('width')),h=parseFloat(d.getAttribute('height'));const vb=(d.getAttribute('viewBox')||'').split(/[\s,]+/).map(Number);
 if((!w||!h)&&vb.length===4){w=w||vb[2];h=h||vb[3]}if(!w||!h){w=300;h=150}return{w,h}}
function render(it){return new Promise((ok,no)=>{const{w,h}=dims(it.text);let W,H;if(scale==='w'){W=Math.max(16,Math.min(8000,+$('w').value||1024));H=Math.round(h*W/w)}else{W=Math.round(w*+scale);H=Math.round(h*+scale)}
 let txt=it.text;if(!/xmlns=/.test(txt))txt=txt.replace('<svg','<svg xmlns="http://www.w3.org/2000/svg"');
 const img=new Image();img.onload=()=>{const c=document.createElement('canvas');c.width=W;c.height=H;const x=c.getContext('2d');if(bg==='w'){x.fillStyle='#fff';x.fillRect(0,0,W,H)}x.drawImage(img,0,0,W,H);
  c.toBlob(b=>{it.blob=b;it.W=W;it.H=H;ok()},'image/png')};img.onerror=()=>no(new Error('bad svg'));
 img.src=URL.createObjectURL(new Blob([txt],{type:'image/svg+xml'}))})}
async function rerender(){if(!files.length)return;$('res').innerHTML='';$('bar').classList.add('on');$('cnt').textContent=files.length+' file'+(files.length>1?'s':'');
 for(const it of files){const el=document.createElement('div');el.className='ri';$('res').appendChild(el);
  try{await render(it);const u=URL.createObjectURL(it.blob);el.innerHTML=`<div class="rv"><img src="${u}"></div><b>${it.name}.png</b><small>${it.W}×${it.H} · ${(it.blob.size/1024).toFixed(1)} KB</small><button class="cta">Download PNG</button>`;
   el.querySelector('button').onclick=()=>save(it.blob,it.name+'.png')}catch(e){el.innerHTML=`<b>${it.name}.svg</b><small style="color:#b91c1c">Could not read this SVG</small>`}}}
function save(blob,name){try{const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();toast('Download started')}catch(e){toast('Download blocked here')}}
$('all').onclick=async()=>{const ok=files.filter(f=>f.blob);if(!ok.length)return;
 const z=new JSZip();ok.forEach(f=>z.file(f.name+'.png',f.blob));save(await z.generateAsync({type:'blob'}),'svg-to-png.zip')};
}
