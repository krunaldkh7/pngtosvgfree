export default function init() {
const NAMES=["Mountain sunrise", "Leaf", "Coffee cup", "Heart badge", "Paper plane", "Star burst", "Cat face", "Wave", "Rocket", "Flower", "Moon & stars", "Geometric fox"];
function toast(t){const e=document.getElementById('toast');e.textContent=t;e.classList.add('s');clearTimeout(e._t);e._t=setTimeout(()=>e.classList.remove('s'),2000)}
document.querySelectorAll('.ib').forEach(b=>b.onclick=async()=>{const svg=b.closest('.gi').querySelector('.gv').innerHTML;const n=NAMES[+b.dataset.i];
 if(b.dataset.a==='cp'){try{await navigator.clipboard.writeText(svg);toast('SVG code copied')}catch(e){toast('Copy not allowed here')}return}
 try{const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));a.download=n.toLowerCase().replace(/[^a-z0-9]+/g,'-')+'.svg';document.body.appendChild(a);a.click();a.remove();toast('Download started')}catch(e){toast('Download blocked here')}});
}
