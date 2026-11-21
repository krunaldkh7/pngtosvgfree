export default function init() {
document.getElementById('cf').addEventListener('submit',e=>{e.preventDefault();const f=e.target;const ok=document.getElementById('cfok');
const href='mailto:contact@pngtosvgfree.com?subject='+encodeURIComponent('['+f.s.value+'] from '+f.n.value)+'&body='+encodeURIComponent(f.m.value+'\n\n— '+f.n.value+' <'+f.e.value+'>');
ok.style.display='block';ok.innerHTML='Your email app should open with the message ready to send. If it does not, please email us directly at <strong>contact@pngtosvgfree.com</strong>.';
try{location.href=href}catch(_){}});
}
