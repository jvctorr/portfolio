/* ============================================================
   SOSHITO.EXE — script.js
   Preloader · cursor · tabs · scroll · skills · interações
============================================================ */

/* -------- PRELOADER -------- */
(function preloader(){
  const pre = document.getElementById('preloader');
  const lines = pre.querySelectorAll('.boot-line');
  const bar = pre.querySelector('.boot-bar');
  const enter = document.getElementById('enter-btn');

  lines.forEach((l,i)=>setTimeout(()=>l.classList.add('show'), 300 + i*450));
  setTimeout(()=>bar.classList.add('full'), 400);
  setTimeout(()=>enter.classList.add('show'), 2200);

  const dismiss = () => {
    pre.classList.add('gone');
    setTimeout(()=>pre.remove(), 700);
  };
  enter.addEventListener('click', dismiss);
  // auto-dismiss fallback
  setTimeout(()=>{ if(document.body.contains(pre)) dismiss(); }, 8000);
})();

/* -------- CUSTOM CURSOR -------- */
(function cursor(){
  const c = document.getElementById('cursor');
  if(!c || matchMedia('(max-width:900px)').matches) return;
  let x=0,y=0,tx=0,ty=0;
  window.addEventListener('mousemove', e=>{ tx=e.clientX; ty=e.clientY; });
  (function loop(){
    x += (tx-x)*0.25; y += (ty-y)*0.25;
    c.style.left = x+'px'; c.style.top = y+'px';
    requestAnimationFrame(loop);
  })();
  document.querySelectorAll('a,button,.skill-card,.port-card,.inv-card,.mission,.tab').forEach(el=>{
    el.addEventListener('mouseenter',()=>c.classList.add('hover'));
    el.addEventListener('mouseleave',()=>c.classList.remove('hover'));
  });
})();

/* -------- READING PROGRESS -------- */
(function progress(){
  const bar = document.getElementById('progress-bar');
  window.addEventListener('scroll',()=>{
    const h = document.documentElement;
    const p = (h.scrollTop)/(h.scrollHeight - h.clientHeight) * 100;
    bar.style.width = p + '%';
  },{passive:true});
})();

/* -------- MOBILE NAV -------- */
(function nav(){
  const t = document.getElementById('nav-toggle');
  const n = document.getElementById('nav');
  if(!t) return;
  t.addEventListener('click',()=>n.classList.toggle('open'));
  n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>n.classList.remove('open')));
})();

/* -------- TABS (ARQUÉTIPOS) -------- */
(function tabs(){
  const btns = document.querySelectorAll('.tab');
  const panels = document.querySelectorAll('.tab-panel');
  btns.forEach(b=>{
    b.addEventListener('click',()=>{
      btns.forEach(x=>x.classList.remove('active'));
      panels.forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      document.querySelector(`[data-panel="${b.dataset.tab}"]`).classList.add('active');
    });
  });
})();

/* -------- SKILL CARDS EXPANSÍVEIS -------- */
(function skills(){
  document.querySelectorAll('.skill-card .more').forEach(btn=>{
    btn.addEventListener('click',()=>{
      btn.closest('.skill-card').classList.toggle('open');
    });
  });
})();

/* -------- REVEAL ON SCROLL + BARRAS -------- */
(function reveal(){
  const els = document.querySelectorAll('.section, .inv-card, .skill-card, .mission, .port-card, .compare-card, .journey li, .bar-track');
  els.forEach(e=>e.classList.add('reveal'));
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(en=>{
      if(en.isIntersecting){
        en.target.classList.add('in');
        if(en.target.classList.contains('bar-track')) en.target.classList.add('animate');
        io.unobserve(en.target);
      }
    });
  },{threshold:.12});
  els.forEach(e=>io.observe(e));
})();

/* -------- MICRO GLITCH NOS TÍTULOS -------- */
(function glitchTitles(){
  document.querySelectorAll('.title-lg, .title-xl').forEach(t=>{
    t.addEventListener('mouseenter',()=>{
      t.style.transition='transform .08s';
      let i=0;
      const id = setInterval(()=>{
        t.style.transform = `translate(${(Math.random()-.5)*2}px,${(Math.random()-.5)*2}px)`;
        if(++i>6){ clearInterval(id); t.style.transform=''; }
      },40);
    });
  });
})();

/* -------- ANO NO FOOTER -------- */
document.getElementById('year').textContent = new Date().getFullYear();

/* -------- GITHUB LINK PLACEHOLDER -------- */
// TROCAR AQUI: substitua "#" pelo seu link real do GitHub
['github-link','github-link-2','github-link-3'].forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.href = "#"; // ex: "https://github.com/seu-usuario"
});

console.log('%c SOSHITO.EXE ',`background:#d11224;color:#000;font-weight:700;padding:4px 8px`);
console.log('%c > Sistema online. Design estratégico ativo.','color:#fff;font-family:monospace');

/* ============ DEMOS FUNCIONAIS — TABS ============ */
(function ftabs(){
  const btns = document.querySelectorAll('.ftab');
  const panels = document.querySelectorAll('.fpanel');
  btns.forEach(b=>{
    b.addEventListener('click',()=>{
      btns.forEach(x=>x.classList.remove('active'));
      panels.forEach(x=>x.classList.remove('active'));
      b.classList.add('active');
      document.querySelector(`[data-fpanel="${b.dataset.ftab}"]`).classList.add('active');
    });
  });
})();

/* ============ DEMO LOGIN ============ */
(function demoLogin(){
  const form = document.getElementById('demoLogin');
  if(!form) return;
  const tabs = form.querySelectorAll('.dl-tab');
  const nameField = form.querySelector('.dl-name');
  const btn = document.getElementById('dlBtn');
  const msg = document.getElementById('dlMsg');
  let mode='login';
  tabs.forEach(t=>t.addEventListener('click',()=>{
    tabs.forEach(x=>x.classList.remove('active'));
    t.classList.add('active');
    mode = t.dataset.mode;
    nameField.style.display = mode==='signup' ? 'flex':'none';
    btn.textContent = mode==='signup' ? 'Criar conta →' : 'Entrar →';
    msg.textContent='';
  }));
  form.addEventListener('submit',e=>{
    e.preventDefault();
    msg.classList.remove('error');
    msg.textContent = '⟳ Processando...';
    setTimeout(()=>{
      msg.textContent = mode==='signup'
        ? '✓ Conta criada! Bem-vindo(a). Esta é uma demo — em produção, integra com banco de dados real.'
        : '✓ Login realizado com sucesso. (demonstração — não armazena dados)';
    },700);
  });
})();

/* ============ DEMO LOJA / CARRINHO ============ */
(function shop(){
  const grid = document.getElementById('shopGrid');
  if(!grid) return;
  const cart = [];
  const list = document.getElementById('cartList');
  const count = document.getElementById('cartCount');
  const total = document.getElementById('cartTotal');
  const fmt = n => 'R$ ' + n.toFixed(2).replace('.',',');
  const render = () => {
    if(cart.length===0){
      list.innerHTML = '<li class="empty">Nenhum item ainda.</li>';
    } else {
      list.innerHTML = cart.map((c,i)=>
        `<li><span>${c.name} ×${c.qty}</span><span>${fmt(c.price*c.qty)} <button class="rm" data-i="${i}">✕</button></span></li>`
      ).join('');
      list.querySelectorAll('.rm').forEach(b=>b.addEventListener('click',()=>{
        cart.splice(+b.dataset.i,1); render();
      }));
    }
    count.textContent = cart.reduce((s,c)=>s+c.qty,0);
    total.textContent = fmt(cart.reduce((s,c)=>s+c.price*c.qty,0));
  };
  grid.querySelectorAll('.prod-add').forEach(btn=>{
    btn.addEventListener('click',()=>{
      const p = btn.closest('.prod');
      const name = p.dataset.name;
      const price = +p.dataset.price;
      const ex = cart.find(c=>c.name===name);
      if(ex) ex.qty++;
      else cart.push({name,price,qty:1});
      btn.textContent='✓ Adicionado';
      setTimeout(()=>btn.textContent='+ Adicionar',900);
      render();
    });
  });
  document.getElementById('cartCheckout').addEventListener('click',()=>{
    if(cart.length===0){ alert('Adicione produtos ao carrinho primeiro!'); return; }
    const lines = cart.map(c=>`• ${c.name} ×${c.qty} — ${fmt(c.price*c.qty)}`).join('\n');
    const t = cart.reduce((s,c)=>s+c.price*c.qty,0);
    const msg = encodeURIComponent(`Olá! Vi o portfólio do soshito e quero um site assim.\n\nPedido de exemplo:\n${lines}\n\nTotal: ${fmt(t)}`);
    window.open(`https://wa.me/5585986301108?text=${msg}`,'_blank');
  });
})();

/* ============ DEMO AGENDAMENTO ============ */
(function agenda(){
  const form = document.getElementById('demoAgenda');
  if(!form) return;
  const slots = document.querySelectorAll('#agSlots button');
  const data = document.getElementById('agData');
  const msg = document.getElementById('agMsg');
  let chosen = null;
  data.valueAsDate = new Date(Date.now()+86400000);
  slots.forEach(s=>s.addEventListener('click',()=>{
    slots.forEach(x=>x.classList.remove('sel'));
    s.classList.add('sel');
    chosen = s.dataset.hr;
  }));
  form.addEventListener('submit',e=>{
    e.preventDefault();
    if(!chosen){ msg.classList.add('error'); msg.textContent='✕ Escolha um horário disponível.'; return; }
    msg.classList.remove('error');
    const srv = document.getElementById('agServ').value;
    msg.textContent = `✓ Agendamento confirmado: ${srv} — ${data.value} às ${chosen}. (demo)`;
  });
})();

/* ============ DEMO ORÇAMENTO ============ */
(function orca(){
  const form = document.getElementById('demoOrca');
  if(!form) return;
  const tipo = document.getElementById('oTipo');
  const pag = document.getElementById('oPag');
  const pagVal = document.getElementById('oPagVal');
  const total = document.getElementById('oTotal');
  const checks = form.querySelectorAll('.o-checks input');
  const fmt = n => 'R$ ' + n.toLocaleString('pt-BR',{minimumFractionDigits:2,maximumFractionDigits:2});
  const calc = () => {
    let base = +tipo.value;
    const p = +pag.value;
    pagVal.textContent = p;
    base += Math.max(0,p-1) * 180;
    checks.forEach(c=>{ if(c.checked) base += +c.value; });
    total.textContent = fmt(base);
    return base;
  };
  [tipo,pag,...checks].forEach(el=>el.addEventListener('input',calc));
  calc();
  form.addEventListener('submit',e=>{
    e.preventDefault();
    const v = calc();
    const extras = [...checks].filter(c=>c.checked).map(c=>c.dataset.name).join(', ') || 'nenhum';
    const t = tipo.options[tipo.selectedIndex].text.split(' (')[0];
    const msg = encodeURIComponent(`Olá João Victor! Montei um orçamento no seu site:\n\n• Tipo: ${t}\n• Páginas: ${pag.value}\n• Extras: ${extras}\n• Estimativa: ${fmt(v)}\n\nQuero conversar sobre meu projeto.`);
    window.open(`https://wa.me/5585986301108?text=${msg}`,'_blank');
  });
})();

/* ============ DEMO CONTATO ============ */
(function contato(){
  const form = document.getElementById('demoContato');
  if(!form) return;
  const msg = document.getElementById('ctMsg');
  form.addEventListener('submit',e=>{
    e.preventDefault();
    msg.textContent = '✓ Mensagem recebida! Em um site real, isso vai direto para o WhatsApp ou e-mail do dono. (demo)';
  });
})();
