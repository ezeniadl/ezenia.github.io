const $=s=>document.querySelector(s),S=SITE,B=document.body.dataset.base||"",L=id=>`${B}#${id}`;
const li=a=>(a||[]).map(x=>`<i>✦</i>${x}<br>`).join("");
function vid(u){const y=u.match(/(?:v=|youtu\.be\/)([\w-]{11})/),v=u.match(/vimeo\.com\/(\d+)/);
 if(y)return `<div class="vid"><iframe src="https://www.youtube.com/embed/${y[1]}" allowfullscreen loading="lazy" title="video"></iframe></div>`;
 if(v)return `<div class="vid"><iframe src="https://player.vimeo.com/video/${v[1]}" allowfullscreen loading="lazy" title="video"></iframe></div>`;
 return `<video controls preload="metadata" src="${u}"></video>`}
const media=m=>m.type=="video"?vid(m.url):`<figure><img loading="lazy" src="${m.src}" alt="${m.alt||m.caption||""}">${m.caption?`<figcaption>${m.caption}</figcaption>`:""}</figure>`;
const gal=a=>a&&a.length?`<div class="gal">${a.map(media).join("")}</div>`:"";
const NAV=[["projects"],["résumé","resume"],["about"],["digest"],["podcast"],["off the clock","fun"]];
document.body.insertAdjacentHTML("afterbegin",`<header><a class="brand" href="${L("home")}">${S.name}</a><nav id="nav">${NAV.map(n=>`<a href="${L(n[1]||n[0])}">${n[0]}</a>`).join("")}</nav></header>`);
document.body.insertAdjacentHTML("beforeend",`<footer><span>© ${S.name}</span><span><a href="${S.linkedin}" target="_blank" rel="noopener">linkedin</a> · <a href="${S.github}" target="_blank" rel="noopener">github</a> · ${S.email}</span></footer>`);
const wob='<svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><path d="M2 3 C25 1.5 60 4 98 2 C99.5 30 97 65 98.5 98 C70 99.5 30 97 1.5 99 C3 65 0.5 30 2 3 Z"/></svg>';
const photo=()=>`<div class="frame">${S.photo?`<img src="${S.photo}" alt="${S.name}">`:`<div class="ph">your photo<br>goes here</div>`}${wob}</div>`;
const im=x=>x?[].concat(x).map(u=>`<img class="wimg" loading="lazy" src="${u}" alt="">`).join(""):"";
const rows=a=>a.map(r=>`<div class="row"><div>${r[0]}</div><div>${r[1]}</div></div>`).join("");
const P={
home:()=>`${photo()}<div class="txt"><h1>hi, i'm ezenia</h1><div class="sub">${S.subtitle}</div><p>${S.blurb}</p><div class="contact"><a href="mailto:${S.email}">${S.email}</a><a href="${S.linkedin}" target="_blank" rel="noopener">linkedin</a><span>${S.city}</span></div><a class="go" href="${L("working")}">what i'm working on →</a></div>`,
working:()=>`<h2>what i'm working on</h2>${rows(S.working.map(w=>[`<span class="tag">${w.tag}</span>`,`<h3>${w.title}</h3><p class="m">${w.text}</p>${im(w.img)}`]))}<h2 class="s">lately</h2>${rows(S.lately.map(l=>[`<span class="lbl">${l.date}</span>`,`<h3>${l.title}</h3><p class="m">${l.text}</p>${im(l.img)}`]))}`,
projects:()=>`<h2>projects</h2><div class="cards">${S.projects.map(p=>`<a class="card" href="project.html#${p.slug}"><div class="th">${p.thumb?`<img src="${p.thumb}" alt="">`:""}</div><span class="lbl">${p.year}</span><h3>${p.title}</h3><p class="m">${p.blurb}</p><span class="more">read more →</span></a>`).join("")}</div>`,
digest:()=>{const d=S.digest,g=k=>d.imgs&&d.imgs[k]?`<div class="dgi">${[].concat(d.imgs[k]).map(u=>`<img loading="lazy" src="${u}" alt="">`).join("")}</div>`:"";return `<h2>${d.title}</h2><div class="dg"><div><h3>read:</h3>${g("read")}${li(d.read)}</div><div><h3>listened to:</h3>${g("listened")}${li(d.listened)}</div><div><h3>watched:</h3>${g("watched")}${li(d.watched)}</div><div><h3>doing:</h3>${g("doing")}${li(d.doing)}</div><div><h3>in:</h3>${g("in")}${d.in.join("<br>")}</div><div><h3>out:</h3>${g("out")}${d.out.join("<br>")}</div>${d.imgs&&d.imgs.pinned?`<div><h3>pinned:</h3>${g("pinned")}</div>`:""}</div>`},
podcast:()=>{const q=S.podcast||{};return `<div class="pdh">${q.img?`<div class="frame sq col"><img src="${q.img}" alt="${q.name||"podcast"} cover art">${wob}</div>`:""}<div><h2>${q.name||"podcast"}</h2>${q.blurb?`<p class="m">${q.blurb}</p>`:""}${(q.links||[]).filter(l=>l.url).map(l=>`<a class="btn" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("")}</div></div><div class="pod" id="pod"></div><p class="m" style="margin-top:22px;font-size:13px">pick an episode to tune in.</p>`},
resume:()=>`<h2>résumé</h2><p><a class="btn" href="${S.resumePdf||"#"}" target="_blank" rel="noopener">open pdf</a><button class="btn" onclick="print()">print</button></p>${rows(S.skills.map(k=>[`<span class="lbl">${k.label}</span>`,k.text]))}<h2 class="s">experience</h2>${rows(S.experience.map(e=>[`<span class="lbl">${e.when.trim()}</span>`,`<h3>${e.role.trim()}, ${e.org.trim()}</h3><ul class="b">${e.bullets.map(b=>`<li>${b}</li>`).join("")}</ul>`]))}`,
about:()=>`<h2>about</h2><div class="about">${photo()}<dl class="spec">${S.about.map(r=>`<dt>${r[0]}</dt><dd>${r[1]}</dd>`).join("")}</dl></div>`,
fun:()=>`<h2>off the clock</h2>${S.fun.map(f=>`<div class="fun"><h3>${f.title}</h3><p class="m">${f.text}</p>${gal(f.media)}</div>`).join("")}`
};
function project(){const slug=location.hash.slice(1),p=S.projects.find(x=>x.slug==slug)||S.projects[0];document.title=p.title+" · "+S.name;
 $("#main").innerHTML=`<div class="pd"><a class="back" href="index.html#projects">← projects</a><h1>${p.title}</h1><span class="lbl">${p.year}</span> ${p.tags.map(t=>`<span class="tag">${t}</span>`).join("")}<p style="margin-top:16px">${p.blurb}</p>${gal(p.media)}${p.sections.map(s=>`<div class="sec"><h3>${s.h}</h3><p>${s.t}</p></div>`).join("")}</div>`;scrollTo(0,0)}
let typed=false;
function typeHome(){if(typed)return;typed=true;const h=$(".home h1"),x=h.textContent;if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;h.setAttribute("aria-label",x);let i=0;
 const tick=()=>{h.innerHTML=`<span aria-hidden="true">${x.slice(0,i)}<span class="cur"></span><span style="visibility:hidden">${x.slice(i)}</span></span>`;if(i++<x.length)setTimeout(tick,i==1?450:65+Math.random()*55);else setTimeout(()=>{h.textContent=x},700)};tick()}
function route(){let id=(location.hash||"#home").slice(1);if(id=="experience")id="resume";const pg=P[id]||id=="working"?id:"home";
 document.querySelectorAll(".pg").forEach(s=>s.classList.toggle("on",s.id==pg));
 document.querySelectorAll("#nav a").forEach(a=>a.classList.toggle("on",a.hash=="#"+pg||(pg=="working"&&0)));scrollTo(0,0);if(pg=="home")typeHome();if(pg!="podcast")pause()}
/* radio */
let ctx,aud,cur=-1,playing=false,t=0,tuning=false,msg="";const real=()=>cur>=0&&!!S.episodes[cur].src;
function stat(){try{ctx=ctx||new (window.AudioContext||window.webkitAudioContext)();const l=ctx.sampleRate*.35,b=ctx.createBuffer(1,l,ctx.sampleRate),d=b.getChannelData(0);for(let i=0;i<l;i++)d[i]=(Math.random()*2-1)*(1-i/l);const s=ctx.createBufferSource(),g=ctx.createGain();g.gain.value=.05;s.buffer=b;s.connect(g).connect(ctx.destination);s.start()}catch(e){}}
function pause(){if(playing){playing=false;aud&&aud.pause();ui()}}
function initPod(){const E=S.episodes,pos=[[1,1],[1,3],[2,1],[2,3],[3,1],[3,3]],el=$("#pod");if(!el)return;
 el.innerHTML=E.map((e,i)=>`<button class="ep" data-i="${i}" style="grid-column:${pos[i%6][1]};grid-row:${pos[i%6][0]}"><b>ep ${i+1}</b>${e.t}</button>`).join("")+`<div class="radio" id="radio"><div class="scr"><small id="fm">FM 88.1 · ezenia radio</small><strong id="np">tuned to nothing yet</strong><div class="bars">${"<i></i>".repeat(9)}</div></div><div class="prog"><i id="pb"></i></div><div class="ctl"><button id="pv" aria-label="Previous episode">⏮</button><button id="pp" aria-label="Play or pause">▶</button><button id="nx" aria-label="Next episode">⏭</button></div><span class="led" id="led">off air</span></div>`;
 el.onclick=e=>{const b=e.target.closest(".ep");if(b)play(+b.dataset.i)};
 $("#pp").onclick=()=>{if(cur<0)return play(0);playing=!playing;if(real()&&aud){if(playing){const p=aud.play();p&&p.catch(fail)}else aud.pause()}ui()};
 $("#nx").onclick=()=>play((cur+1)%E.length);$("#pv").onclick=()=>play((cur-1+E.length)%E.length);
 setInterval(()=>{if(!playing||cur<0)return;const e=E[cur];if(real()&&aud)t=aud.currentTime;else{t+=.25;if(t>=e.len)return play((cur+1)%E.length)}const len=real()&&aud&&aud.duration?aud.duration:e.len;$("#pb").style.width=Math.min(100,t/len*100)+"%"},250)}
function fail(){if(!playing)return;msg="couldn't play this file. check the path in content.js";playing=false;ui()}
function play(i){const e=S.episodes[i];cur=i;t=0;playing=true;tuning=true;msg="";stat();
 const nm=(S.podcast&&S.podcast.name)||"ezenia radio";$("#fm").textContent="FM "+(87.5+i*3.7).toFixed(1)+" · "+nm;
 if(!aud){aud=new Audio();aud.preload="auto";aud.onended=()=>play((cur+1)%S.episodes.length);aud.onerror=fail}
 if(e.src){aud.src=e.src;const p=aud.play();p&&p.catch(fail)}else{aud.pause();aud.removeAttribute("src")}
 setTimeout(()=>{if(cur==i){tuning=false;ui()}},380);ui()}
function ui(){const r=$("#radio");if(!r)return;r.classList.toggle("on-air",playing);document.querySelectorAll(".ep").forEach((b,i)=>b.classList.toggle("p",i==cur&&playing));
 $("#pp").textContent=playing?"⏸":"▶";$("#led").textContent=playing?"● on air":cur<0?"off air":"paused";
 $("#np").textContent=cur<0?"tuned to nothing yet":msg?msg:tuning?"tuning…":S.episodes[cur].t}
if(document.body.dataset.page=="project"){project();addEventListener("hashchange",project)}
else{$("#main").innerHTML=Object.keys(P).map(k=>`<section class="pg${k=="home"?" home":""}" id="${k}">${P[k]()}</section>`).join("");initPod();addEventListener("hashchange",route);route()}
