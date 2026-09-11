const countries=[
{name:"Brazil",code:"BR",flag:"🇧🇷",region:"South America",wc:5,years:"1958, 1962, 1970, 1994, 2002",players:["Vinícius Júnior","Neymar","Alisson Becker"],wiki:"Brazil_national_football_team"},
{name:"Argentina",code:"AR",flag:"🇦🇷",region:"South America",wc:3,years:"1978, 1986, 2022",players:["Lionel Messi","Lautaro Martínez","Julián Álvarez"],wiki:"Argentina_national_football_team"},
{name:"Spain",code:"ES",flag:"🇪🇸",region:"Europe",wc:1,years:"2010 (men)",combined:"2 FIFA World Cups combined: 2010 men's + 2023 women's",players:["Lamine Yamal","Rodri","Pedri"],wiki:"Spain_national_football_team"},
{name:"Portugal",code:"PT",flag:"🇵🇹",region:"Europe",wc:0,years:"Best finish: 3rd (1966)",players:["Cristiano Ronaldo","Bernardo Silva","Bruno Fernandes"],wiki:"Portugal_national_football_team"},
{name:"England",code:"EN",flag:"🏴",region:"Europe",wc:1,years:"1966",players:["Harry Kane","Bukayo Saka","Phil Foden"],wiki:"England_national_football_team"},
{name:"France",code:"FR",flag:"🇫🇷",region:"Europe",wc:2,years:"1998, 2018",players:["Kylian Mbappé","Ousmane Dembélé","Antoine Griezmann"],wiki:"France_national_football_team"},
{name:"Germany",code:"DE",flag:"🇩🇪",region:"Europe",wc:4,years:"1954, 1974, 1990, 2014",players:["Jamal Musiala","Florian Wirtz","Antonio Rüdiger"],wiki:"Germany_national_football_team"},
{name:"Italy",code:"IT",flag:"🇮🇹",region:"Europe",wc:4,years:"1934, 1938, 1982, 2006",players:["Gianluigi Donnarumma","Federico Chiesa","Nicolò Barella"],wiki:"Italy_national_football_team"},
{name:"Netherlands",code:"NL",flag:"🇳🇱",region:"Europe",wc:0,years:"Runners-up: 1974, 1978, 2010",players:["Virgil van Dijk","Frenkie de Jong","Xavi Simons"],wiki:"Netherlands_national_football_team"},
{name:"Belgium",code:"BE",flag:"🇧🇪",region:"Europe",wc:0,years:"Best finish: 3rd (2018)",players:["Kevin De Bruyne","Thibaut Courtois","Jérémy Doku"],wiki:"Belgium_national_football_team"}
];

const teams=[
["Real Madrid","Real_Madrid_CF","Spain"],["Barcelona","FC_Barcelona","Spain"],["Manchester City","Manchester_City_F.C.","England"],["Liverpool","Liverpool_F.C.","England"],["Arsenal","Arsenal_F.C.","England"],["Bayern Munich","FC_Bayern_Munich","Germany"],["PSG","Paris_Saint-Germain_F.C.","France"],["AC Milan","AC_Milan","Italy"],["Inter Milan","Inter_Milan","Italy"],["Atlético Madrid","Atlético_Madrid","Spain"]
];

const players=[
["Kylian Mbappé","France","Real Madrid","Forward","Kylian_Mbappé"],["Lamine Yamal","Spain","Barcelona","Forward","Lamine_Yamal"],["Jude Bellingham","England","Real Madrid","Midfielder","Jude_Bellingham"],["Vinícius Júnior","Brazil","Real Madrid","Forward","Vinícius_Júnior"],["Cristiano Ronaldo","Portugal","Al Nassr","Forward","Cristiano_Ronaldo"],["Lionel Messi","Argentina","Inter Miami","Forward","Lionel_Messi"],["Rodri","Spain","Manchester City","Midfielder","Rodri_(footballer,_born_1996)"],["Harry Kane","England","Bayern Munich","Forward","Harry_Kane"],["Erling Haaland","Norway","Manchester City","Forward","Erling_Haaland"],["Mohamed Salah","Egypt","Liverpool","Forward","Mohamed_Salah"],["Neymar","Brazil","Santos","Forward","Neymar"],["Kevin De Bruyne","Belgium","Napoli","Midfielder","Kevin_De_Bruyne"],["Bernardo Silva","Portugal","Manchester City","Midfielder","Bernardo_Silva"],["Antoine Griezmann","France","Atlético Madrid","Forward","Antoine_Griezmann"],["Bukayo Saka","England","Arsenal","Forward","Bukayo_Saka"],["Phil Foden","England","Manchester City","Midfielder","Phil_Foden"],["Pedri","Spain","Barcelona","Midfielder","Pedri"],["Raphinha","Brazil","Barcelona","Forward","Raphinha"],["Ousmane Dembélé","France","PSG","Forward","Ousmane_Dembélé"],["Lautaro Martínez","Argentina","Inter Milan","Forward","Lautaro_Martínez"],["Julián Álvarez","Argentina","Atlético Madrid","Forward","Julián_Álvarez"],["Jamal Musiala","Germany","Bayern Munich","Midfielder","Jamal_Musiala"],["Florian Wirtz","Germany","Liverpool","Midfielder","Florian_Wirtz"],["Thibaut Courtois","Belgium","Real Madrid","Goalkeeper","Thibaut_Courtois"],["Alisson Becker","Brazil","Liverpool","Goalkeeper","Alisson_Becker"],["Virgil van Dijk","Netherlands","Liverpool","Defender","Virgil_van_Dijk"],["Robert Lewandowski","Poland","Barcelona","Forward","Robert_Lewandowski"],["Federico Valverde","Uruguay","Real Madrid","Midfielder","Federico_Valverde"],["Théo Hernandez","France","Al-Hilal","Defender","Théo_Hernandez"],["Achraf Hakimi","Morocco","PSG","Defender","Achraf_Hakimi"],["Gianluigi Donnarumma","Italy","Manchester City","Goalkeeper","Gianluigi_Donnarumma"],["Son Heung-min","South Korea","LAFC","Forward","Son_Heung-min"],["Victor Osimhen","Nigeria","Galatasaray","Forward","Victor_Osimhen"],["Khvicha Kvaratskhelia","Georgia","PSG","Forward","Khvicha_Kvaratskhelia"],["Cole Palmer","England","Chelsea","Midfielder","Cole_Palmer"]
];

const wikiImg=(page,size=300)=>`https://en.wikipedia.org/wiki/Special:Redirect/file/${encodeURIComponent(page)}?width=${size}`;
const teamLogo=(page)=>wikiImg(page,180);

function renderCountries(){
 const el=document.querySelector("#countryGrid");
 el.innerHTML=countries.map(c=>`<div class="country" onclick='openCountry(${JSON.stringify(c)})'><div class="flag">${c.flag}</div><strong>${c.name}</strong><span>${c.region}</span></div>`).join("");
}
function renderTeams(){
 document.querySelector("#teamGrid").innerHTML=teams.map(t=>`<div class="team-card" onclick='openTeam(${JSON.stringify(t)})'><img src="${teamLogo(t[1])}" onerror="this.style.display='none'"><strong>${t[0]}</strong><span>${t[2]}</span></div>`).join("");
}
function renderPlayers(list=players){
 document.querySelector("#playerGrid").innerHTML=list.map(p=>`<div class="player" onclick='openPlayer(${JSON.stringify(p)})'><img src="${wikiImg(p[4],500)}" onerror="this.src='https://placehold.co/500x500/172238/ffffff?text=Player'"><div class="player-info"><strong>${p[0]}</strong><span>${p[1]} • ${p[3]} • ${p[2]}</span></div></div>`).join("");
}
function openCountry(c){
 document.querySelector("#modalContent").innerHTML=`<div class="profile"><div style="font-size:78px">${c.flag}</div><div><h2>${c.name}</h2><p>${c.region}</p></div></div>
 <div class="fact"><b>Men's FIFA World Cup titles:</b> <span>${c.wc}</span></div>
 <div class="fact"><b>World Cup record:</b> <span>${c.years}</span></div>
 ${c.combined?`<div class="fact"><b>Combined men's + women's FIFA World Cups:</b> <span>${c.combined}</span></div>`:""}
 <div class="fact"><b>Featured players:</b> <span>${c.players.join(", ")}</span></div>`;
 showModal();
}
function openTeam(t){
 document.querySelector("#modalContent").innerHTML=`<div class="profile"><img src="${teamLogo(t[1])}" onerror="this.src='https://placehold.co/300x300/172238/ffffff?text=Team'"><div><h2>${t[0]}</h2><p>${t[2]} • Club profile</p></div></div><div class="fact"><b>Team page:</b> <span>Logo, country and profile are ready. Live squad/fixtures load when the live API is connected.</span></div>`;
 showModal();
}
function openPlayer(p){
 document.querySelector("#modalContent").innerHTML=`<div class="profile"><img src="${wikiImg(p[4],500)}" onerror="this.src='https://placehold.co/500x500/172238/ffffff?text=Player'"><div><h2>${p[0]}</h2><p>${p[1]} • ${p[3]}</p><p>${p[2]}</p></div></div><div class="fact"><b>National team:</b> <span>${p[1]}</span></div><div class="fact"><b>Position:</b> <span>${p[3]}</span></div>`;
 showModal();
}
function showModal(){document.querySelector("#modal").classList.remove("hidden")}
function closeModal(){document.querySelector("#modal").classList.add("hidden")}

function matchCard(m){
 const live=m.live;
 const status=live?(m.minute?`${m.minute}' • LIVE`:"LIVE"):(m.statusLabel||m.time||"Scheduled");
 return `<div class="match"><div class="match-top"><span>${m.competition||"Football"}</span><span class="${live?"live":""}">${status}</span></div><div class="teams"><div><img class="team-logo" src="${m.homeLogo||''}" onerror="this.style.visibility='hidden'"><div class="team-name">${m.home}</div></div><div class="score">${live||m.score?`${m.homeScore ?? "–"} : ${m.awayScore ?? "–"}`:"vs"}</div><div><img class="team-logo" src="${m.awayLogo||''}" onerror="this.style.visibility='hidden'"><div class="team-name">${m.away}</div></div></div><div class="match-actions"><button class="ghost" onclick='openMatch(${JSON.stringify(m)})'>Match details</button><button class="ghost" onclick="alert('Added to your follow list')">♡ Follow</button></div></div>`;
}
function openMatch(m){document.querySelector("#modalContent").innerHTML=`<div class="profile"><div><h2>${m.home} ${m.homeScore??""} — ${m.awayScore??""} ${m.away}</h2><p>${m.competition||""} • ${m.statusLabel||"Scheduled"}</p></div></div><div class="fact"><b>Live status:</b> <span>${m.live?"Live data":"Not live"}</span></div><div class="fact"><b>Source:</b> <span>Football API connection</span></div>`;showModal()}

async function loadLive(){
 const status=document.querySelector("#liveStatus"), grid=document.querySelector("#liveGrid"), note=document.querySelector("#liveNote");
 status.textContent="Updating…";status.classList.remove("live");
 try{
  const r=await fetch("/api/live"); const data=await r.json();
  if(!r.ok) throw new Error(data.error||"API unavailable");
  if(!data.matches?.length){grid.innerHTML=`<div class="empty">There are no live matches right now.</div>`;status.textContent="0 live";note.textContent="This is live API data, so matches appear only when games are actually in progress.";}
  else{grid.innerHTML=data.matches.map(matchCard).join("");status.textContent=`${data.matches.length} LIVE`;status.classList.add("live");note.textContent="Live matches refresh automatically every 15 seconds.";}
 }catch(e){
  grid.innerHTML=`<div class="empty"><b>Live data is not connected yet.</b><br>${e.message}<br><br>Add API_FOOTBALL_KEY to the server environment, then refresh. The site will never invent a match and call it live.</div>`;
  status.textContent="API key needed";note.textContent="The project is prepared for real live data; the key stays on the server, not in the browser.";
 }
}
function clock(){document.querySelector("#clock").textContent=new Date().toLocaleTimeString([], {hour:"2-digit",minute:"2-digit"})}
document.querySelector("#globalSearch").addEventListener("input",e=>{const q=e.target.value.toLowerCase();renderPlayers(players.filter(p=>p.join(" ").toLowerCase().includes(q)));});
document.querySelector("#themeBtn").onclick=()=>document.body.classList.toggle("light");
document.querySelector("#notifyBtn").onclick=()=>alert("Notifications are enabled for this browser session.");
window.addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
renderCountries();renderTeams();renderPlayers();clock();setInterval(clock,1000);loadLive();setInterval(loadLive,15000);
