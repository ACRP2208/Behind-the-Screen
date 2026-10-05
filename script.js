const buttons=document.querySelectorAll('.filters button');
const cases=document.querySelectorAll('.case');
buttons.forEach(btn=>{btn.addEventListener('click',()=>{
  const f=btn.dataset.filter;
  buttons.forEach(b=>b.setAttribute('aria-pressed',b===btn));
  cases.forEach(c=>{c.hidden=f!=='todos'&&c.dataset.type!==f;});
});});
