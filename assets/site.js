(function(){
var d=document,de=d.documentElement;
var dr=d.getElementById('mobDrawer'),ov=d.querySelector('[data-mob-overlay]'),bu=d.querySelector('[data-mob-open]');
function openM(){if(!dr)return;dr.classList.add('open');ov.classList.add('open');dr.setAttribute('aria-hidden','false');bu.setAttribute('aria-expanded','true');de.style.overflow='hidden';}
function closeM(){if(!dr)return;dr.classList.remove('open');ov.classList.remove('open');dr.setAttribute('aria-hidden','true');bu.setAttribute('aria-expanded','false');de.style.overflow='';}
if(bu){bu.addEventListener('click',openM);}
d.querySelectorAll('[data-mob-close]').forEach(function(b){b.addEventListener('click',closeM);});
if(ov){ov.addEventListener('click',closeM);}
d.addEventListener('keydown',function(e){if(e.key==='Escape')closeM();});
window.addEventListener('resize',function(){if(window.innerWidth>768)closeM();});
d.querySelectorAll('.faq .q').forEach(function(q){q.addEventListener('click',function(){
 var qa=q.parentNode,a=qa.querySelector('.a'),open=qa.classList.contains('open');
 if(open){qa.classList.remove('open');a.style.maxHeight='0';q.setAttribute('aria-expanded','false');}
 else{qa.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';q.setAttribute('aria-expanded','true');}
});});
})();
