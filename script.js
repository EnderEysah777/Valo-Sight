//Agents
let agent=[];

function drawDuelistsTable(records){
  let html ="";
  let result = document.querySelector('#agents1');
  for(let rec of records){

    html+=`    
      <tr>
        <td>${rec.displayName}</td>
        <td><img src=${rec.displayIcon} style="width: 250;height: 250px;"></td>
        <td>${rec.description}</td>
      </tr>`;
  }

 result.innerHTML=html;
}

function drawInitiatorsTable(records){
  let html ="";
  let result = document.querySelector('#agents2');
  for(let rec of records){

    html+=`    
      <tr>
        <td>${rec.displayName}</td>
        <td><img src=${rec.displayIcon} style="width: 250;height: 250px;"></td>
        <td>${rec.description}</td>
      </tr>`;
  }

 result.innerHTML=html;
}

function drawSentinelsTable(records){
  let html ="";
  let result = document.querySelector('#agents3');
  for(let rec of records){

    html+=`    
      <tr>
        <td>${rec.displayName}</td>
        <td><img src=${rec.displayIcon} style="width: 250;height: 250px;"></td>
        <td>${rec.description}</td>
      </tr>`;
  }

 result.innerHTML=html;
}

function drawControllersTable(records){
  let html ="";
  let result = document.querySelector('#agents4');
  for(let rec of records){

    html+=`    
      <tr>
        <td>${rec.displayName}</td>
        <td><img src=${rec.displayIcon} style="width: 250;height: 250px;"></td>
        <td>${rec.description}</td>
      </tr>`;
  }

 result.innerHTML=html;
}

getAgents();

async function getAgents(){
  const response = await fetch("https://valorant-api.com/v1/agents/");
  const agent = await response.json();
  return agent.data;
  
}

async function filterByDuelists(){
  let agent = await getAgents();
  let filtered = [];
  for(let rec of agent){
    if(rec.displayName =="Neon" || rec.displayName =="Jett" || rec.displayName =="Reyna" || rec.displayName =="Yoru" || rec.displayName =="Pheonix" || rec.displayName =="Raze" )
      filtered.push(rec);
  }

  drawDuelistsTable(filtered);
}

async function filterByInitiators(){
  let agent = await getAgents();
  let filtered = [];
  for(let rec of agent){
    if((rec.displayName =="KAY/O" || rec.displayName =="Breach" || rec.displayName =="Skye" || rec.displayName =="Sova") && rec.isPlayableCharacter==true)
      filtered.push(rec);
  }

  drawInitiatorsTable(filtered);
}

async function filterBySentinels(){
  let agent = await getAgents();
  let filtered = [];
  for(let rec of agent){
    if(rec.displayName =="Cypher" || rec.displayName =="Killjoy" || rec.displayName =="Chamber" || rec.displayName =="Sage")
      filtered.push(rec);
  }

  drawSentinelsTable(filtered);
}

async function filterByControllers(){
  let agent = await getAgents();
  let filtered = [];
  for(let rec of agent){
    if(rec.displayName =="Brimstone" || rec.displayName =="Viper" || rec.displayName =="Omen" || rec.displayName =="Astra")
      filtered.push(rec);
  }

  drawControllersTable(filtered);
}

filterByDuelists();
filterByInitiators();
filterBySentinels();
filterByControllers();

//Weapons
let weapon=[];

function drawSidearmsTable(records){
  let html ="";
  let result = document.querySelector('#weapons1');
  for(let rec of records){

    html+=`    
      <tr>
        <td>${rec.displayName}</td>
        <td><img src=${rec.displayIcon}></td>
      </tr>`;
  }

 result.innerHTML=html;
}

function drawSMGsTable(records){
  let html ="";
  let result = document.querySelector('#weapons2');
  for(let rec of records){

    html+=`    
      <tr>
        <td>${rec.displayName}</td>
        <td><img src=${rec.displayIcon}></td>
      </tr>`;
  }

 result.innerHTML=html;
}

function drawShotgunsTable(records){
  let html ="";
  let result = document.querySelector('#weapons3');
  for(let rec of records){

    html+=`    
      <tr>
        <td>${rec.displayName}</td>
        <td><img src=${rec.displayIcon}></td>
      </tr>`;
  }

 result.innerHTML=html;
}

function drawRiflesTable(records){
  let html ="";
  let result = document.querySelector('#weapons4');
  for(let rec of records){

    html+=`    
      <tr>
        <td>${rec.displayName}</td>
        <td><img src=${rec.displayIcon}></td>
      </tr>`;
  }

 result.innerHTML=html;
}

function drawLMGsTable(records){
  let html ="";
  let result = document.querySelector('#weapons5');
  for(let rec of records){

    html+=`    
      <tr>
        <td>${rec.displayName}</td>
        <td><img src=${rec.displayIcon}></td>
      </tr>`;
  }

 result.innerHTML=html;
}

function drawSnipersTable(records){
  let html ="";
  let result = document.querySelector('#weapons6');
  for(let rec of records){

    html+=`    
      <tr>
        <td>${rec.displayName}</td>
        <td><img src=${rec.displayIcon}></td>
      </tr>`;
  }

 result.innerHTML=html;
}

function drawMeleeTable(records){
  let html ="";
  let result = document.querySelector('#weapons7');
  for(let rec of records){

    html+=`    
      <tr>
        <td>${rec.displayName}</td>
        <td><img src=${rec.displayIcon}></td>
      </tr>`;
  }

 result.innerHTML=html;
}

async function getWeapons(){
  const response = await fetch("https://valorant-api.com/v1/weapons/");
  const weapon = await response.json();
  return weapon.data;
  
}

getWeapons();

async function filterBySidearms(){
  let weapon = await getWeapons();
  let filtered = [];
  for(let rec of weapon){
    if(rec.displayName =="Class" || rec.displayName =="Frenzy" || rec.displayName =="Shorty" || rec.displayName =="Sheriff" || rec.displayName =="Ghost")
      filtered.push(rec);
  }

  drawSidearmsTable(filtered);
}

async function filterBySMGs(){
  let weapon = await getWeapons();
  let filtered = [];
  for(let rec of weapon){
    if(rec.displayName =="Stinger" || rec.displayName =="Spectre")
      filtered.push(rec);
  }

  drawSMGsTable(filtered);
}

async function filterByShotguns(){
  let weapon = await getWeapons();
  let filtered = [];
  for(let rec of weapon){
    if(rec.displayName =="Bucky" || rec.displayName =="Judge")
      filtered.push(rec);
  }

  drawShotgunsTable(filtered);
}

async function filterByRifles(){
  let weapon = await getWeapons();
  let filtered = [];
  for(let rec of weapon){
    if(rec.displayName =="Bulldog" || rec.displayName =="Guardian" || rec.displayName =="Phantom" || rec.displayName =="Vandal")
      filtered.push(rec);
  }

  drawRiflesTable(filtered);
}

async function filterByLMGs(){
  let weapon = await getWeapons();
  let filtered = [];
  for(let rec of weapon){
    if(rec.displayName =="Ares" || rec.displayName =="Odin")
      filtered.push(rec);
  }

  drawLMGsTable(filtered);
}

async function filterBySnipers(){
  let weapon = await getWeapons();
  let filtered = [];
  for(let rec of weapon){
    if(rec.displayName =="Marshal" || rec.displayName =="Operator")
      filtered.push(rec);
  }

  drawSnipersTable(filtered);
}

async function filterByMelee(){
  let weapon = await getWeapons();
  let filtered = [];
  for(let rec of weapon){
    if(rec.displayName =="Melee")
      filtered.push(rec);
  }

  drawMeleeTable(filtered);
}

filterBySidearms();
filterBySMGs();
filterByShotguns();
filterByRifles();
filterByLMGs();
filterBySnipers();
filterByMelee();

//Maps
function drawMapsTable(records){
  let html ="";
  let result = document.querySelector('#maps');

  
  for(let rec of records){

    html+=`    
      <tr id=${rec.displayName}>
        <td>${rec.displayName}</td>
        <td><img src=${rec.splash} style="width: 700;height: 500px;"></td>
        <td><img src=${rec.displayIcon} style="width: 300px; height: 300px;"></td>
      </tr>`;
  }

  result.innerHTML=html;
}

async function getMaps(){
  const response = await fetch("https://valorant-api.com/v1/maps/");
  const data = await response.json();
  drawMapsTable(data.data);
}

getMaps();

//Version

function drawVersion(records){
  let html ="";
  let result = document.querySelector('#patch1');

    html+=`    
        <p>Branch: ${records.branch}<br>
        Version: ${records.version}<br>
        Build Version: ${records.buildVersion}<br>
        Riot Client Version: ${records.riotClientVersion}<br>
        Build Date: ${records.buildDate}<br>
        </p>`;


  result.innerHTML=html;
}

async function getVersion(){
  const response = await fetch("https://valorant-api.com/v1/version/");
  const data = await response.json();
  drawVersion(data.data);
}

getVersion();


