const express=require("express");
const path=require("path");
const app=express();
const PORT=process.env.PORT||3000;
const KEY=process.env.API_FOOTBALL_KEY;
app.use(express.static(path.join(__dirname,"public")));
async function api(pathname){
 const r=await fetch("https://v3.football.api-sports.io"+pathname,{headers:{"x-apisports-key":KEY}});
 const data=await r.json();
 if(!r.ok) throw new Error(data?.message||`API error ${r.status}`);
 return data;
}
app.get("/api/live",async(req,res)=>{
 if(!KEY) return res.status(503).json({error:"API_FOOTBALL_KEY is not set on the server."});
 try{
  const data=await api("/fixtures?live=all");
  const matches=(data.response||[]).map(x=>({
   id:x.fixture.id,live:true,minute:x.fixture.status.elapsed,competition:x.league.name,
   home:x.teams.home.name,away:x.teams.away.name,homeLogo:x.teams.home.logo,awayLogo:x.teams.away.logo,
   homeScore:x.goals.home,awayScore:x.goals.away,statusLabel:x.fixture.status.long
  }));
  res.json({matches});
 }catch(e){res.status(502).json({error:e.message});}
});
app.get("/api/fixtures",async(req,res)=>{
 if(!KEY) return res.status(503).json({error:"API_FOOTBALL_KEY is not set on the server."});
 try{res.json(await api("/fixtures?next=20"));}catch(e){res.status(502).json({error:e.message});}
});
app.get("/health",(req,res)=>res.json({ok:true}));
app.listen(PORT,()=>console.log(`Football Hub running on ${PORT}`));
