# Football Hub V7

## What changed
- Real-looking team logos and player photos.
- Country cards open into country profiles.
- Spain is represented accurately: **1 men's FIFA World Cup (2010)**. The country profile also notes that Spain has **2 FIFA World Cup titles combined if the women's 2023 World Cup is included**.
- Removed fake "live" match data. The Live Matches section only says LIVE when the API actually reports a live match.
- Added a server backend so a football API key is NOT exposed in browser JavaScript.
- Live endpoint uses API-Football `/fixtures?live=all`, which the provider documents for live scores and says its fixture/event data is updated about every 15 seconds.
- 36 player profiles and club/country pages.
- Responsive layout for phones, tablets and computers.

## Run it on your computer
1. Install Node.js.
2. Open a terminal in this folder.
3. Run:
   npm install
4. Set your API key:
   Windows PowerShell:
   $env:API_FOOTBALL_KEY="YOUR_KEY"
   macOS/Linux:
   export API_FOOTBALL_KEY="YOUR_KEY"
5. Run:
   npm start
6. Open:
   http://localhost:3000

Without the API key, the site still opens, but it intentionally shows "API key needed" instead of inventing live games.

## Put it online for other people
Use a hosting service that can run a Node/Express server. Upload this whole project, set the environment variable `API_FOOTBALL_KEY` in the host's settings, and use the host's public URL.

IMPORTANT: Never paste the API key into `public/script.js` or `index.html`. The server keeps it private.

## Data provider
API-Football documents `/fixtures?live=all` for live fixtures and describes its live fixture/event data as updating every 15 seconds:
https://www.api-football.com/news/post/fifa-world-cup-2026-guide-to-using-data-with-api-sports

The project does not include an API key.
