const S=window.SITE,$=(q,r=document)=>r.querySelector(q),$$=(q,r=document)=>[...r.querySelectorAll(q)];
const esc=s=>String(s??"").replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const fmt=d=>{if(!d)return"";const[y,m]=d.split("-"),M="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");return(m?M[m-1]+" ":"")+y};
const tags=a=>`<div class="tags">${a.map(x=>`<span>${esc(x)}</span>`).join("")}</div>`;
const link=(u,t)=>u?`<a href="${esc(u)}" target="_blank" rel="noopener">${t} ↗</a>`:`<span>${t}: add later</span>`;
const card=(x,sub,feat)=>`<article class="card${feat&&x.featured?" feat":""}"><div class="top"><span class="pill ${esc(x.status)}">${esc(x.status)}${x.venue?" · "+esc(x.venue):""}</span>${x.start?`<span class="tm">Since ${fmt(x.start)}</span>`:`<span class="tm ph">Start date: add later</span>`}</div><h3>${esc(x.title)}</h3>${sub?`<p class="meta">${esc(sub)}</p>`:""}${x.metric?`<div class="metric"><b>${esc(x.metric.v)}</b><span>${esc(x.metric.l)}</span></div>`:""}<p>${esc(x.desc)}</p>${tags(x.tags)}<div class="links">${link(x.code,"Code on GitHub")}${link(x.demo,"Live demo")}</div></article>`;
function filterable(listSel,filtSel,items,key,render){const keys=[...new Set(items.map(i=>i[key]))];$(filtSel).innerHTML=["All",...keys].map((k,i)=>`<button class="${i?"":"on"}" aria-pressed="${!i}">${esc(k)}</button>`).join("");
 const draw=k=>$(listSel).innerHTML=items.filter(i=>k=="All"||i[key]==k).map(render).join("");draw("All");
 $(filtSel).onclick=e=>{const b=e.target.closest("button");if(!b)return;$$("button",$(filtSel)).forEach(x=>{x.classList.toggle("on",x==b);x.setAttribute("aria-pressed",x==b)});draw(b.textContent)}}
// hero + meta
document.title=`${S.name} | ${S.title}`;
$("#av").textContent=S.availability;$("#bio").textContent=S.bio;$("#name").innerHTML=S.name.replace(/(\S+)$/,"<span>$1</span>");
$("#stats").innerHTML=S.stats.map(s=>`<div><b>${esc(s.v)}</b><span>${esc(s.l)}</span></div>`).join("");
$$(".cv").forEach(a=>a.href=S.cv);
$("#mail").href="mailto:"+S.email;$("#mail").textContent=S.email;
$("#soc").innerHTML=Object.entries(S.links).map(([k,v])=>`<a class="btn" href="${esc(v)}" target="_blank" rel="noopener">${k}</a>`).join("");
$("#loc").textContent=S.location;$("#yr").textContent=new Date().getFullYear();$("#nm").textContent=S.name;
// sections
filterable("#pg","#pf",S.projects,"cat",p=>card(p,p.stack,true));
filterable("#rg","#rf",S.research,"status",r=>card(r,"",false));
$("#eg").innerHTML=S.experience.map(e=>`<div class="card">${e.current?'<span class="now">Now</span>':""}<h3>${esc(e.role)}, ${esc(e.org)}</h3><p class="meta">${esc(e.place)} · ${esc(e.dates)}${e.note?" · "+esc(e.note):""}</p><ul>${e.points.map(p=>`<li>${esc(p)}</li>`).join("")}</ul></div>`).join("");
$("#dg").innerHTML=S.education.map(e=>`<div class="card">${e.tag?`<span class="now">${esc(e.tag)}</span>`:""}<h3>${esc(e.deg)}</h3><p class="meta">${esc(e.org)} · ${esc(e.dates)}</p><p>${esc(e.desc)}</p></div>`).join("");
$("#sg").innerHTML=Object.entries(S.skills).map(([k,v])=>`<div><h4>${esc(k)}</h4><p>${esc(v)}</p></div>`).join("");
$("#mq").textContent=("Large Language Models ◆ Explainable AI ◆ Federated Learning ◆ Production ML ◆ ").repeat(6);
// nav from sections
const secs=$$("section[data-nav]");$("#links").innerHTML=secs.map(s=>`<a class="l" href="#${s.id}">${s.dataset.nav}</a>`).join("");
const ls=$$("#links a"),ob=$("#bar");
addEventListener("scroll",()=>{let i=0;secs.forEach((s,j)=>{if(s.getBoundingClientRect().top<140)i=j});ls.forEach((a,j)=>a.classList.toggle("on",j==i));ob.style.width=100*scrollY/(document.body.scrollHeight-innerHeight)+"%"},{passive:true});
// typed roles
const t=$("#typed");let wi=0,ci=0,del=false;
if(!matchMedia("(prefers-reduced-motion:reduce)").matches)(function k(){const w=S.roles[wi];ci+=del?-1:1;t.textContent=w.slice(0,ci);let d=del?35:70;if(!del&&ci==w.length){del=true;d=1400}else if(del&&!ci){del=false;wi=(wi+1)%S.roles.length;d=300}setTimeout(k,d)})();else t.textContent=S.roles[0];
// reveal
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.06});$$(".rv").forEach(x=>io.observe(x));
// theme
const rt=document.documentElement,tb=$("#tt"),sv=(()=>{try{return localStorage.getItem("theme")}catch(e){return null}})();
const dark=()=>rt.dataset.theme?rt.dataset.theme=="dark":!matchMedia("(prefers-color-scheme:light)").matches;
if(sv)rt.dataset.theme=sv;const ic=()=>tb.textContent=dark()?"☀":"☾";ic();
tb.onclick=()=>{const n=dark()?"light":"dark";rt.dataset.theme=n;try{localStorage.setItem("theme",n)}catch(e){}ic()};
// copy
$("#cp").onclick=async e=>{try{await navigator.clipboard.writeText(S.email);e.target.textContent="Copied"}catch(x){e.target.textContent="Select the email above"}setTimeout(()=>e.target.textContent="Copy email",2000)};
