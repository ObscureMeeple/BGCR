import { useState, useMemo, useEffect } from "react";

const GAME_NAMES = ["7 Wonders Duel (Arabic/English Edition)","Above and Below","Abyss","Adventure Games: The Dungeon","Agra","Akrotiri","Alhambra: The Dice Game","Alma Mater","Among the Stars","Among the Stars: Revival","Anachrony","Aquatica","Arborea","Arcana Rising","Architects of the West Kingdom","Arkham Horror (Third Edition)","Arkham Horror: The Card Game","Arkwright: The Card Game","Artifacts, Inc.","Assyria: Second Edition","Astra","Atheneum: Mystic Library","Ausonia","Azul","Azul: Queen's Garden","Bagh Chal","Bandada","Black Angel","Black Forest","Bonfire","Boonlake","Brass: Birmingham","Brass: Lancashire","Calico","Call to Adventure","Call to Adventure: Epic Origins","Call to Adventure: The Stormlight Archive","Carcassonne Big Box 6","Cascadia","Castellans","Cat Café","Cat Lady","Catan","Catan Dice Game","Catan Histories: Rise of the Inkas","Cavern Tavern","Celtae","Centauri Saga","Century: A New World","Century: Eastern Wonders","Century: Golem Edition","Century: Spice Road","Cerebria: The Inside World – Origin Box","Circadians: Chaos Order","Circadians: First Light","City of Iron: Second Edition","Clans of Caledonia","Clever Cubed","Coal Baron: The Great Card Game","Coimbra","Coloma: Deluxe Edition","Conspiracy: Abyss Universe","Continental Express","Control","Cosmogenesis","Countryside","Creature Caravan","Crown of Emara","Cyclades","Deep Sea Adventure","Deep Vents","Destinies","Dice Kingdoms of Valeria","Dice Miner","Dinosaur World","Drawn to Adventure","Duelosaur Island","Dune","Dune: Imperium","Efemeris","Eight-Minute Empire","Eight-Minute Empire: Legends","Elder Sign","Eldritch Horror","Empires of the Void II","Endless Winter: Paleoamericans","Etherfields","Evacuation","Everdell","Ex Libris","EXIT: The Game – The Lord of the Rings: Shadows over Middle-earth","Explorers of the North Sea","Ezra and Nehemiah","Fall of Rome","Fall of the Mountain King (Kickstarter Edition)","Fields of Arle","Fields of Green","Final Girl","First Martians: Adventures on the Red Planet","Five Tribes: The Djinns of Naqala","Fleet","Fleet Wharfside","Fleet: The Dice Game","Fog of Love","Folklore: The Affliction","Foothills","Forest Shuffle","Forges of Ravenshire","FrachtExpress","Furnace","Gaia Project","Galileo Galilei","Genotype: A Mendelian Genetics Game","Gentes: Deluxified Edition","Glen More II: Chronicles","Gloomhaven: Jaws of the Lion","Golem","Great Western Trail: Second Edition","Guild Academies of Valeria","Hadrian's Wall","Harmonies","Haven","Hero Realms","Heroes of Terrinoth","High Frontier 4 All","Horizons","Hostage Negotiator","Hostage Negotiator: Crime Wave","Imperial Settlers","Imperial Settlers: Roll & Write","Imperial Steam","In the Hall of the Mountain King","Inventors of the South Tigris","Isle of Trains","Isle of Trains: All Aboard","Islebound","ISS Vanguard","It's a Wonderful Kingdom: Legends","Jaipur","Kemet","Khôra: Rise of an Empire","Kingsport Festival","Klondike Rush","Land vs Sea","Lands of Galzyr","Leaving Earth","Legacy of Dragonholt","Legacy of Yu","Legends of Andor","Lords of Waterdeep","Lovecraft Letter","Lunar Base","Machi Koro","Mansions of Madness: Second Edition","Maracaibo","Margraves of Valeria","Marrakesh","Martians: A Story of Civilization","Master Sweets: Second Edition","Meadow","Megaland","Men-Nefer","Merchant of Venus (Second Edition)","Merchants Cove","Mercurial","Merlin: Big Box","Merv: The Heart of the Silk Road","Messina 1347","Mice and Mystics","Micro Cosmos","Minos: Dawn of the Bronze Age","Moon","Mundus Novus","Murano","Muse","Muse: Awakenings","Mythic Battles: Pantheon","Near and Far","Nemo's War (Second Edition)","Nova Luna","Nova Roma","Now or Never","Oathsworn: Into the Deepwood","On Mars","One Deck Dungeon","One Deck Dungeon: Forest of Shadows","Paladins of the West Kingdom","Palm Island","Paper Dungeons: A Dungeon Scrawler Game","PARKS","Patchwork","Pharaon","Piepmatz: Little Songbirds","Planet Unknown","Planetarium","Planted: A Game of Nature & Nurture","Port Royal","Proving Grounds","Punica: Rome vs Carthage","Quarriors!","Quests of Valeria","Raiders of Scythia","Raiders of the North Sea","Railroad Ink Challenge: Lush Green Edition","Railroad Ink Challenge: Shining Yellow Edition","Railroad Ink: Blazing Red Edition","Railroad Ink: Deep Blue Edition","Reavers of Midgard","Reign of Cthulhu","Res Arcana","Rise of Cthulhu","Rise to Nobility","Risk: Europe","Risk: Godstorm","Risk: Star Wars Edition","Risk: The Lord of the Rings Trilogy Edition","River of Gold","Roam","Robin Hood and the Merry Men","Robinson Crusoe: Adventures on the Cursed Island","Roll Player","Rollecate","Root","Rune Stones","Sabika","Sagani","Sagrada","Saltfjord","San Juan (Second Edition)","Sanctum","Sankoré: The Pride of Mansa Musa","Santa Maria","Scholars of the South Tigris","Scythe","Septima","SETI: Search for Extraterrestrial Intelligence","Shadow Kingdoms of Valeria","Shadows in the Forest","Shipwrights of the North Sea","Siege of Valeria","Sierra West","Silver & Gold","Skara Brae","Skora","Sleeping Gods","Sleeping Gods: Distant Skies (Gamefound Edition)","Sleeping Gods: Primeval Peril","Small Railroad Empires","Small World","Small World of Warcraft","Snowdonia: Deluxe Master Set","So, You've Been Eaten.","Solar Sphere","Solar Storm","Space Park","Spirit Island","Star Realms: Frontiers","Star Wars: Imperial Assault","Star Wars: Outer Rim","Star Wars: Rebellion","Star Wars: The Clone Wars","Stellar","Subastral","Sylvion","T.I.M.E Stories","Tabriz","Tainted Grail: Kings of Ruin (Gamefound Edition)","Tainted Grail: The Fall of Avalon","Tales of the Arabian Nights","Tekhenu: Obelisk of the Sun","Terraforming Mars","Terraforming Mars: Ares Expedition","That's Pretty Clever!","The 7th Continent","The Adventures of Robin Hood","The Anarchy","The Ancient World (Second Edition)","The Book of Rituals","The Castles of Burgundy","The Dwarves: Big Box","The Isle of Cats","The King Is Dead: Second Edition","The Lord of the Rings: Journeys in Middle-Earth","The Lord of the Rings: The Card Game","The Lost Spells Card Game","The Lost Words","The Search for Planet X","The Voynich Puzzle","The Witcher: Old World","This War of Mine: The Board Game","Three Sisters","Ticket to Ride: Europe – 15th Anniversary","Tides of Madness","Tides of Time","Tiletum","TIME Stories Revolution: The Hadal Project","Tiny Epic Defenders (Second Edition)","Tiny Epic Dinosaurs: Deluxe Edition","Tiny Epic Dungeons: Deluxe Edition","Tiny Epic Galaxies","Tiny Epic Galaxies BLAST OFF!","Tiny Epic Game of Thrones","Tiny Epic Pirates","Tiny Epic Quest","Tiny Epic Tactics","Tiny Epic Vikings: Deluxe Edition","Tiny Epic Western","Tiny Epic Zombies: Deluxe Edition","Trails","Trainmaker","Trambahn","Treelings","Troyes Dice","Twice as Clever!","Twilight Inscription","Under Falling Skies","Unsettled","Valeria: Card Kingdoms","Valley of the Kings: Premium Edition","Verdant","Villagers","Villages of Valeria","Vindication","Viscounts of the West Kingdom","War Chest","War of the Ring: Second Edition","Waste Knights: Second Edition","Wayfarers of the South Tigris","Weather Machine","Western Legends","Wingspan","Wingspan Asia","Xia: Legends of a Drift System","Yardmaster","Yardmaster Express","Yedo","ZÈRTZ"];
const PRELOADED_GAMES = GAME_NAMES.map(name=>({name,fun:0,complexity:0,replayability:0,components:0,theme:0,depth:0,mechanics:[],status:'unplayed',partnerStatus:'not_played',notes:'',sessions:[]}));
const CRITERIA = ['fun','complexity','replayability','components','theme','depth'];
const COLORS = {fun:'#e8614a',complexity:'#5b9bd5',replayability:'#6dbf7e',components:'#b07ad4',theme:'#e8a84a',depth:'#e06fa0'};
const ANCHORS = {
  fun:{0:'',1:'Actively unpleasant',2:'Boring',3:'Barely amusing',4:'Mildly entertaining',5:'Decent fun',6:'Enjoyable',7:'Fun — I look forward to it',8:'A great time every session',9:'Consistently thrilling',10:'Pure joy — all-time favourite'},
  complexity:{0:'',1:'One read-through and it clicks',2:'Read rulebook once or twice',3:'First sessions need rulebook; then card clarifications',4:'Re-read setup and scoring each time',5:'Rulebook open every session'},
  replayability:{0:'',1:'Single-play only',2:'Almost no variation',3:'Very low',4:'Low — repetitive after few plays',5:'Some variation',6:'Decent variety',7:'Good replay value',8:'High variety',9:'Virtually endless',10:'Infinite depth — lifelong game'},
  components:{0:'',1:'Cardboard only, no care for production',2:'Cheap plastic, thin cardboard, poor print quality',3:'Below average — thin tokens, weak artwork, basic plastic pieces',4:'Functional but cheap — decent cardboard, no visual effort',5:'Standard — basic meeples, thin tokens, simple boards, average artwork',6:'Wooden meeples, cardboard tokens (thin or thick), okay artwork, simple boards',7:'Wooden meeples (printed or not), thick cardboard tokens, decent artwork, premium insert',8:'Cards-only or standees/printed meeples, thick tokens, beautiful card & board artwork (must), metal/acrylic optional, dual-layer boards, premium insert',9:'3D minis, dual-layer boards, thick tokens, metal coins or acrylic tokens, superb artwork, premium insert',10:'3D painted minis, superb artwork throughout, metal coins and/or acrylic tokens, premium insert, innovative design'},
  theme:{0:'',1:'No theme — pure abstract',2:'Theme barely present',3:'Weak thematic integration',4:'Some flavour',5:'Decent theme',6:'Good atmosphere',7:'Strong theme',8:'Very immersive',9:'Exceptional',10:'Total immersion'},
  depth:{0:'',1:'Zero strategy — pure luck',2:'Minimal decisions',3:'Very light',4:'Some choices, little consequence',5:'Moderate depth',6:'Good strategic layer',7:'Deep — multiple strategies',8:'Very deep',9:'Highly strategic',10:'Infinite strategic complexity'}
};
const STATUSES = [
  {id:'unplayed', emoji:'🔵',label:'Unplayed',           color:'#7a7260'},
  {id:'learning', emoji:'📖',label:'Learning',           color:'#5b9bd5'},
  {id:'teachplay',emoji:'🎓',label:'Teach Play Done',    color:'#e8a84a'},
  {id:'clarify',  emoji:'❓',label:'Needs Clarification',color:'#e8614a'},
  {id:'ready',    emoji:'✅',label:'Ready to Play',      color:'#6dbf7e'},
  {id:'mastered', emoji:'🏆',label:'Mastered',           color:'#d4a843'},
];
const PARTNER_STATUSES = [
  {id:'not_played',  emoji:'👤',label:'Not played together',color:'#7a7260'},
  {id:'teaching',    emoji:'🎓',label:'Teaching needed',    color:'#5b9bd5'},
  {id:'refresher',   emoji:'🔄',label:'Needs a refresher',  color:'#e8a84a'},
  {id:'knows_it',    emoji:'✅',label:'She knows it',       color:'#6dbf7e'},
  {id:'not_her_type',emoji:'🚫',label:'Not her type',       color:'#e8614a'},
  {id:'dislikes_art', emoji:'🎨',label:'Dislikes art / theme',color:'#c0614a'},
];
const MECHANICS = [
  {id:'action_selection',label:'Action Selection',desc:'Choose from a menu of available actions on your turn.'},
  {id:'area_control',label:'Area Control',desc:'Dominate zones on a map with units.'},
  {id:'auction_bidding',label:'Auction / Bidding',desc:'Bid for resources, actions or cards.'},
  {id:'campaign_legacy',label:'Campaign / Legacy',desc:'The game evolves permanently between sessions.'},
  {id:'competitive',label:'Competitive',desc:'Every player for themselves — pure head-to-head.'},
  {id:'cooperative',label:'Cooperative',desc:'All players play against the game. Win or lose together.'},
  {id:'deck_building',label:'Deck Building',desc:'Start with a weak deck and improve it by buying better cards.'},
  {id:'dice_rolling',label:'Dice Rolling',desc:'Dice are a central mechanic, not just luck.'},
  {id:'drafting',label:'Drafting',desc:'Pick one card from a set that passes between players.'},
  {id:'engine_building',label:'Engine Building',desc:'Build a production engine that generates more resources over time.'},
  {id:'exploration',label:'Exploration',desc:'Discover the map or new content as you play.'},
  {id:'hand_management',label:'Hand Management',desc:'Manage your hand cards strategically.'},
  {id:'network_building',label:'Network Building',desc:'Build a network of connections — cities, relations, infrastructure.'},
  {id:'pattern_building',label:'Pattern Building',desc:'Create visual patterns for points. Ex: Azul, Sagrada.'},
  {id:'point_to_point',label:'Point to Point Movement',desc:'Move between connected locations on a map.'},
  {id:'polyomino',label:'Polyomino',desc:'Place Tetris-shaped pieces on a personal board or grid.'},
  {id:'push_your_luck',label:'Push Your Luck',desc:'Roll dice or draw cards and decide when to stop.'},
  {id:'resource_management',label:'Resource Management',desc:'Collect and spend resources efficiently.'},
  {id:'route_building',label:'Route Building',desc:'Build routes and connections across a map.'},
  {id:'set_collection',label:'Set Collection',desc:'Collect sets of cards/items for points.'},
  {id:'solo_mode',label:'Solo Mode',desc:'The game has an official single-player mode.'},
  {id:'storytelling',label:'Storytelling / Narrative',desc:'The game generates a story or has a central narrative.'},
  {id:'tableau_building',label:'Tableau Building',desc:'Build a personal tableau of cards/tiles in front of you.'},
  {id:'tile_placement',label:'Tile Placement',desc:'Place tiles on a board building something.'},
  {id:'trading',label:'Trading',desc:'Players trade resources or cards with each other.'},
  {id:'variable_powers',label:'Variable Player Powers',desc:'Each player has unique asymmetric abilities.'},
  {id:'worker_placement',label:'Worker Placement',desc:'Place workers on actions to claim them exclusively.'},
  {id:'task_fulfillment',label:'Task / Contract Fulfillment',desc:'Complete specific requirements to earn bonuses or points. Ex: Bonfire, Clans of Caledonia.'},
  {id:'choose_your_own_adventure',label:'Choose Your Own Adventure',desc:'Player choices branch the narrative. Ex: Above and Below, Tainted Grail.'},
  {id:'roll_flip_write',label:'Roll / Flip & Write',desc:'Mark boxes on a sheet using dice or cards.'},
  {id:'others',label:'Others',desc:'Mechanics that don\'t fit into the other categories.'},
];
const DEF_WEIGHTS = {fun:30,complexity:20,replayability:20,components:10,theme:15,depth:15};
const DEF_WEIGHTS_AXD = {fun:30,complexity:20,replayability:20,components:10,theme:15,depth:15};
const SK = 'bgr-v1';

function calcScore(g,w){
  const c=(g.complexity||0)*2,tot=w.fun+w.complexity+w.replayability+w.components+w.theme+(w.depth||0);
  if(!tot)return 0;
  return((g.fun||0)*w.fun+c*w.complexity+(g.replayability||0)*w.replayability+(g.components||0)*w.components+(g.theme||0)*w.theme+(g.depth||0)*(w.depth||0))/tot;
}
function isRated(g){return CRITERIA.some(k=>(g[k]||0)>0);}
function isRatedAxd(g){return CRITERIA.some(k=>(g['axd_'+k]||0)>0);}
function calcScoreAxd(g,w){const c=(g.axd_complexity||0)*2,tot=w.fun+w.complexity+w.replayability+w.components+w.theme+(w.depth||0);if(!tot)return 0;return((g.axd_fun||0)*w.fun+c*w.complexity+(g.axd_replayability||0)*w.replayability+(g.axd_components||0)*w.components+(g.axd_theme||0)*w.theme+(g.axd_depth||0)*(w.depth||0))/tot;}
function migrate(g){return{depth:0,complexity:0,mechanics:[],status:'unplayed',partnerStatus:'not_played',notes:'',sessions:[],axd_fun:0,axd_complexity:0,axd_replayability:0,axd_components:0,axd_theme:0,axd_depth:0,...g};}
function storeSave(data){try{localStorage.setItem(SK,JSON.stringify(data));return true;}catch(e){return false;}}
function storeLoad(){try{const r=localStorage.getItem(SK);if(r)return JSON.parse(r);}catch(e){}return null;}

const css=`
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=DM+Mono:wght@400;500&display=swap');
*{box-sizing:border-box;margin:0;padding:0;}
body{background:#0f0e0c;}
.app{background:#0f0e0c;color:#f0ead8;font-family:"DM Mono",monospace;min-height:100vh;}
.hdr{border-bottom:1px solid #2e2b24;padding:14px 20px;display:flex;align-items:center;gap:10px;}
.hdr-h1{font-family:"Playfair Display",serif;font-size:20px;font-weight:900;color:#d4a843;flex:1;}
.hdr-sub{color:#7a7260;font-size:9px;letter-spacing:2px;text-transform:uppercase;}
.hdr-status{font-size:10px;letter-spacing:1px;font-family:"DM Mono",monospace;margin-left:auto;flex-shrink:0;}
.loading-bar{height:3px;background:linear-gradient(90deg,transparent,#d4a843,transparent);background-size:200% 100%;animation:shimmer 1.2s infinite;}
@keyframes shimmer{0%{background-position:200% 0;}100%{background-position:-200% 0;}}
.tabs{display:flex;border-bottom:1px solid #2e2b24;overflow-x:auto;-webkit-overflow-scrolling:touch;}
.tab{background:none;border:none;border-bottom:2px solid transparent;color:#7a7260;font-family:"DM Mono",monospace;font-size:10px;letter-spacing:2px;text-transform:uppercase;padding:12px 13px;cursor:pointer;white-space:nowrap;flex-shrink:0;}
.tab.on{color:#d4a843;border-bottom-color:#d4a843;}
.wrap{max-width:900px;margin:0 auto;padding:16px 14px 60px;}
.card{background:#1a1916;border:1px solid #2e2b24;border-radius:4px;padding:18px;margin-bottom:14px;}
.card-title{font-family:"Playfair Display",serif;font-size:16px;color:#d4a843;margin-bottom:14px;}
.lbl{font-size:10px;letter-spacing:1.5px;text-transform:uppercase;color:#7a7260;display:block;margin-bottom:5px;}
.inp{background:#0f0e0c;border:1px solid #2e2b24;border-radius:3px;color:#f0ead8;font-family:"DM Mono",monospace;font-size:13px;padding:9px 11px;outline:none;width:100%;}
.inp:focus{border-color:#d4a843;}
.textarea{background:#0f0e0c;border:1px solid #2e2b24;border-radius:3px;color:#f0ead8;font-family:"DM Mono",monospace;font-size:12px;padding:9px 11px;outline:none;width:100%;resize:vertical;min-height:60px;}
.textarea:focus{border-color:#d4a843;}
.crit-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px;}
.crit{background:#222018;border:1px solid #2e2b24;border-radius:4px;padding:11px 13px;}
.crit-hdr{display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;}
.crit-name{font-size:10px;letter-spacing:1px;text-transform:uppercase;display:flex;align-items:center;gap:5px;}
.dot{width:7px;height:7px;border-radius:50%;flex-shrink:0;}
.crit-val{font-family:"Playfair Display",serif;font-size:17px;font-weight:700;color:#d4a843;}
.anchor{font-size:11px;color:#b0a890;font-style:italic;margin-top:4px;min-height:14px;line-height:1.4;}
input[type=range]{-webkit-appearance:none;width:100%;height:4px;border-radius:2px;outline:none;cursor:pointer;margin-top:3px;}
input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;width:18px;height:18px;border-radius:50%;background:#d4a843;cursor:pointer;}
.btn{background:#d4a843;color:#0f0e0c;border:none;border-radius:3px;font-family:"DM Mono",monospace;font-size:11px;letter-spacing:1.5px;text-transform:uppercase;padding:10px 20px;cursor:pointer;font-weight:500;}
.btn:hover{background:#e8c96a;}
.btn-g{background:none;border:1px solid #2e2b24;color:#7a7260;border-radius:3px;font-family:"DM Mono",monospace;font-size:10px;letter-spacing:1px;text-transform:uppercase;padding:6px 10px;cursor:pointer;}
.btn-g:hover,.btn-g.on{border-color:#d4a843;color:#d4a843;}
.btn-d{background:none;border:none;color:#7a7260;font-size:14px;cursor:pointer;padding:3px 6px;border-radius:3px;}
.btn-d:hover{color:#c0392b;}
.btn-sm{background:#d4a843;color:#0f0e0c;border:none;border-radius:3px;font-family:"DM Mono",monospace;font-size:10px;letter-spacing:1px;text-transform:uppercase;padding:6px 12px;cursor:pointer;font-weight:500;}
.btn-sm:hover{background:#e8c96a;}
.topbar{display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;flex-wrap:wrap;gap:7px;}
.topbar-btns{display:flex;gap:5px;flex-wrap:wrap;align-items:center;}
.count{font-size:10px;letter-spacing:1px;color:#7a7260;text-transform:uppercase;}
.count span{color:#d4a843;font-family:"Playfair Display",serif;font-size:16px;font-weight:700;}
.search-wrap{position:relative;margin-bottom:12px;}
.search-inp{background:#1a1916;border:1px solid #2e2b24;border-radius:3px;color:#f0ead8;font-family:"DM Mono",monospace;font-size:13px;padding:9px 32px 9px 12px;outline:none;width:100%;}
.search-inp:focus{border-color:#d4a843;}
.search-x{position:absolute;right:8px;top:50%;transform:translateY(-50%);background:none;border:none;color:#7a7260;cursor:pointer;font-size:13px;}
.grow{background:#1a1916;border:1px solid #2e2b24;border-radius:4px;padding:12px 15px;margin-bottom:6px;display:grid;grid-template-columns:30px 1fr auto auto;align-items:center;gap:10px;}
.grow:hover{border-color:#d4a843;}
.rank{font-family:"Playfair Display",serif;font-size:19px;font-weight:700;color:#2e2b24;text-align:center;}
.rank.t3{color:#d4a843;}
.gname{font-family:"Playfair Display",serif;font-size:14px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
.minibars{display:flex;gap:3px;margin-top:3px;}
.minibar{width:26px;height:3px;background:#2e2b24;border-radius:2px;overflow:hidden;}
.minibar-f{height:100%;border-radius:2px;}
.score-big{font-family:"Playfair Display",serif;font-size:24px;font-weight:700;color:#d4a843;white-space:nowrap;}
.score-sub{font-size:9px;color:#7a7260;letter-spacing:1px;text-align:right;}
.acts{display:flex;gap:4px;}
.sbadge{display:inline-flex;align-items:center;gap:3px;font-size:9px;padding:2px 7px;border-radius:10px;border:1px solid;margin-top:3px;}
.tags{display:flex;flex-wrap:wrap;gap:3px;margin-top:3px;}
.tag{background:#222018;border:1px solid #2e2b24;border-radius:10px;font-size:9px;padding:2px 6px;color:#7a7260;}
.ssel{display:flex;flex-wrap:wrap;gap:6px;margin-top:6px;}
.sbtn{background:#222018;border:1px solid #2e2b24;border-radius:20px;font-family:"DM Mono",monospace;font-size:10px;padding:5px 10px;cursor:pointer;color:#7a7260;}
.chip{background:#222018;border:1px solid #2e2b24;border-radius:20px;font-family:"DM Mono",monospace;font-size:10px;padding:5px 10px;cursor:pointer;color:#7a7260;user-select:none;}
.chip.on{background:#d4a843;border-color:#d4a843;color:#0f0e0c;font-weight:500;}
.overlay{position:fixed;inset:0;background:rgba(0,0,0,0.82);display:flex;align-items:center;justify-content:center;z-index:500;padding:14px;}
.modal{background:#1a1916;border:1px solid #d4a843;border-radius:6px;padding:20px;width:100%;max-width:560px;max-height:92vh;overflow-y:auto;}
.modal-hdr{display:flex;justify-content:space-between;align-items:center;margin-bottom:18px;}
.modal-title{font-family:"Playfair Display",serif;font-size:16px;color:#d4a843;}
.wrow{display:grid;grid-template-columns:130px 1fr 34px;align-items:center;gap:7px;margin-bottom:6px;}
.wlbl{font-size:10px;display:flex;align-items:center;gap:5px;}
.wval{font-size:10px;color:#d4a843;text-align:right;}
.sgrid{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.sc{background:#1a1916;border:1px solid #2e2b24;border-radius:4px;padding:16px;}
.sc.wide{grid-column:span 2;}
.stitle{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#7a7260;margin-bottom:10px;}
.sbig{font-family:"Playfair Display",serif;font-size:38px;font-weight:700;color:#d4a843;line-height:1;}
.ssub{font-size:11px;color:#7a7260;margin-top:4px;}
.brow{display:flex;justify-content:space-between;font-size:10px;color:#7a7260;margin-bottom:3px;}
.bbg{height:5px;background:#2e2b24;border-radius:3px;overflow:hidden;margin-bottom:7px;}
.bfill{height:100%;border-radius:3px;}
.tlist{list-style:none;}
.tlist li{display:flex;align-items:center;padding:5px 0;border-bottom:1px solid #2e2b24;font-size:11px;}
.tlist li:last-child{border-bottom:none;}
.buckets{display:flex;gap:6px;flex-wrap:wrap;margin-top:6px;}
.bucket{flex:1;min-width:52px;background:#222018;border:1px solid #2e2b24;border-radius:4px;padding:7px 5px;text-align:center;}
.bucketn{font-family:"Playfair Display",serif;font-size:20px;font-weight:700;}
.bucketl{font-size:8px;letter-spacing:0.8px;text-transform:uppercase;color:#7a7260;margin-top:2px;line-height:1.3;}
.chips{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px;}
.t10row{background:#1a1916;border:1px solid #2e2b24;border-radius:4px;padding:12px 15px;margin-bottom:6px;display:grid;grid-template-columns:30px 1fr auto;align-items:center;gap:10px;}
.t10row:hover{border-color:#d4a843;}
.empty{text-align:center;padding:36px 20px;color:#7a7260;}
.empty-big{font-family:"Playfair Display",serif;font-size:38px;opacity:0.3;margin-bottom:8px;}
.qrow{background:#1a1916;border:1px solid #2e2b24;border-radius:4px;padding:12px 15px;margin-bottom:6px;}
.qrow:hover{border-color:#d4a843;}
.wrow2{background:#1a1916;border:1px solid #2e2b24;border-radius:4px;padding:12px 15px;margin-bottom:6px;display:grid;grid-template-columns:1fr auto auto;align-items:center;gap:10px;}
.wrow2:hover{border-color:#d4a843;}
.suggest-card{background:#222018;border:2px solid #d4a843;border-radius:6px;padding:16px;margin-bottom:10px;cursor:pointer;}
.suggest-card:hover{background:#2a2820;}
.tonight-wrap{background:#222018;border:1px solid #2e2b24;border-radius:6px;padding:18px;margin-bottom:16px;}
.tonight-title{font-family:"Playfair Display",serif;font-size:15px;color:#d4a843;margin-bottom:14px;}
.tonight-row{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:12px;}
.forgotten-row{background:#1a1916;border:1px solid #e8a84a;border-radius:4px;padding:12px 15px;margin-bottom:6px;display:grid;grid-template-columns:1fr auto;align-items:center;gap:10px;}
.legend{background:#1a1916;border:1px solid #2e2b24;border-radius:4px;padding:12px 14px;margin-bottom:14px;}
.legend-title{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:#7a7260;}
.legend-grid{display:grid;grid-template-columns:1fr 1fr;gap:5px 16px;}
.legend-item{display:flex;align-items:center;gap:6px;font-size:10px;color:#7a7260;}
.divider{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:#7a7260;margin:16px 0 10px;}
@media(max-width:500px){.crit-grid{grid-template-columns:1fr;}.sgrid{grid-template-columns:1fr;}.sc.wide{grid-column:span 1;}.grow{grid-template-columns:26px 1fr auto auto;gap:7px;}}
`;

function StatusBadge({status,statuses=STATUSES}){const s=statuses.find(x=>x.id===status)||statuses[0];return <span className="sbadge" style={{color:s.color,borderColor:s.color,background:s.color+'18'}}>{s.emoji} {s.label}</span>;}
function StatusSelector({value,onChange,statuses=STATUSES}){return <div className="ssel">{statuses.map(s=><button key={s.id} className="sbtn" style={value===s.id?{borderColor:s.color,color:s.color,background:s.color+'22'}:{}} onClick={()=>onChange(s.id)}>{s.emoji} {s.label}</button>)}</div>;}
function CritSlider({label,color,k,max,value,onChange}){return(<div className="crit"><div className="crit-hdr"><div className="crit-name"><div className="dot" style={{background:color}}/>{label}</div><div className="crit-val">{value}</div></div><input type="range" min={0} max={max} value={value} style={{background:`linear-gradient(to right,#2e2b24 0%,${color} 100%)`}} onChange={e=>onChange(k,+e.target.value)}/><div className="anchor">{ANCHORS[k]?.[value]||''}</div></div>);}
function MechanicsSelector({selected,onChange}){function toggle(id){onChange(prev=>prev.includes(id)?prev.filter(x=>x!==id):[...prev,id]);}return(<div style={{display:'flex',flexWrap:'wrap',gap:6,marginTop:6}}>{MECHANICS.map(m=><div key={m.id} className={"chip"+(selected.includes(m.id)?' on':'')} onClick={()=>toggle(m.id)}>{m.label}</div>)}</div>);}
function MechanicsLegend(){const [open,setOpen]=useState(false);return(<div className="legend" style={{marginTop:8}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer'}} onClick={()=>setOpen(o=>!o)}><div className="legend-title">Mechanics legend</div><span style={{fontSize:10,color:'#7a7260'}}>{open?'▲ hide':'▼ show'}</span></div>{open&&<div style={{marginTop:8,display:'flex',flexDirection:'column',gap:5}}>{MECHANICS.map(m=><div key={m.id} style={{display:'flex',gap:8}}><span style={{fontSize:10,color:'#d4a843',minWidth:150,flexShrink:0}}>{m.label}</span><span style={{fontSize:10,color:'#7a7260',lineHeight:1.4}}>{m.desc}</span></div>)}</div>}</div>);}
function StatusLegend(){const [open,setOpen]=useState(false);return(<div className="legend"><div style={{display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer'}} onClick={()=>setOpen(o=>!o)}><div className="legend-title">Status legend</div><span style={{fontSize:10,color:'#7a7260'}}>{open?'▲ hide':'▼ show'}</span></div>{open&&<><div style={{fontSize:9,letterSpacing:1,textTransform:'uppercase',color:'#5b9bd5',marginBottom:6,marginTop:4}}>Play Status</div><div className="legend-grid" style={{marginBottom:10}}>{STATUSES.map(s=><div key={s.id} className="legend-item"><span>{s.emoji}</span><span style={{color:'#f0ead8'}}>{s.label}</span></div>)}</div><div style={{fontSize:9,letterSpacing:1,textTransform:'uppercase',color:'#e06fa0',marginBottom:6}}>Partner Status</div><div className="legend-grid">{PARTNER_STATUSES.map(s=><div key={s.id} className="legend-item"><span>{s.emoji}</span><span style={{color:'#f0ead8'}}>{s.label}</span></div>)}</div></>}</div>);}

function EditModal({game,weights,weightsAxd,onSave,onClose}){
  const [name,setName]=useState(game.name);
  const [vals,setVals]=useState({fun:game.fun||0,complexity:game.complexity||0,replayability:game.replayability||0,components:game.components||0,theme:game.theme||0,depth:game.depth||0});
  const [axdVals,setAxdVals]=useState({fun:game.axd_fun||0,complexity:game.axd_complexity||0,replayability:game.axd_replayability||0,components:game.axd_components||0,theme:game.axd_theme||0,depth:game.axd_depth||0});
  const [status,setStatus]=useState(game.status||'unplayed');
  const [partnerStatus,setPartnerStatus]=useState(game.partnerStatus||'not_played');
  const [notes,setNotes]=useState(game.notes||'');
  const [mechanics,setMechanics]=useState(game.mechanics||[]);
  const [sessions,setSessions]=useState(game.sessions||[]);
  const [screen,setScreen]=useState('info');
  const [ratingTab,setRatingTab]=useState('alex');
  const score=calcScore(vals,weights);
  const axdScore=calcScoreAxd({axd_fun:axdVals.fun,axd_complexity:axdVals.complexity,axd_replayability:axdVals.replayability,axd_components:axdVals.components,axd_theme:axdVals.theme,axd_depth:axdVals.depth},weightsAxd);
  function addSession(){const d=new Date().toISOString().slice(0,10);setSessions(s=>[...s,d]);}
  function removeSession(i){setSessions(s=>s.filter((_,idx)=>idx!==i));}
  function doSave(){onSave({...game,name:name.trim()||game.name,...vals,axd_fun:axdVals.fun,axd_complexity:axdVals.complexity,axd_replayability:axdVals.replayability,axd_components:axdVals.components,axd_theme:axdVals.theme,axd_depth:axdVals.depth,status,partnerStatus,notes,mechanics,sessions});}
  const alexColor='#5b9bd5'; const axdColor='#6dbf7e';
  return(<div className="overlay" onClick={e=>e.target===e.currentTarget&&onClose()}><div className="modal">
    <div className="modal-hdr">
      <div style={{display:'flex',flexDirection:'column',minWidth:0}}>
        <div className="modal-title" style={{fontSize:13,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{name}</div>
        <div style={{fontSize:9,color:'#7a7260',letterSpacing:1,textTransform:'uppercase',marginTop:2}}>{screen==='info'?'Info & Mechanics':'Ratings'}</div>
      </div>
      <div style={{display:'flex',gap:6,flexShrink:0}}>
        {screen==='ratings'&&<button className="btn-g" style={{fontSize:9,padding:'4px 8px'}} onClick={()=>setScreen('info')}>← Info</button>}
        {screen==='info'&&<button className="btn" style={{fontSize:9,padding:'4px 8px'}} onClick={()=>setScreen('ratings')}>Ratings →</button>}
        <button className="btn-d" onClick={onClose}>✕</button>
      </div>
    </div>

    {screen==='info'&&<>
      <div style={{marginBottom:10}}><label className="lbl">Game name</label><input className="inp" value={name} onChange={e=>setName(e.target.value)}/></div>
      <div style={{marginBottom:10}}><label className="lbl">Play Status</label><StatusSelector value={status} onChange={setStatus}/></div>
      <div style={{marginBottom:10}}><label className="lbl">Partner Status</label><StatusSelector value={partnerStatus} onChange={setPartnerStatus} statuses={PARTNER_STATUSES}/></div>
      <div style={{marginBottom:10}}><label className="lbl">Mechanics</label><MechanicsSelector selected={mechanics} onChange={setMechanics}/><MechanicsLegend/></div>
      <div style={{marginBottom:10}}><label className="lbl">Notes</label><textarea className="textarea" value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Personal notes, missing pieces, expansions worth buying..."/></div>
      <div style={{marginBottom:10}}><div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}}><label className="lbl" style={{marginBottom:0}}>Play Log ({sessions.length})</label><button className="btn-g" style={{fontSize:9,padding:'3px 8px'}} onClick={addSession}>+ Log today</button></div>{sessions.length>0&&<div style={{display:'flex',flexDirection:'column',gap:4,maxHeight:80,overflowY:'auto'}}>{[...sessions].reverse().map((d,i)=><div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',fontSize:10,color:'#a09880',background:'#1a1814',borderRadius:3,padding:'3px 8px'}}><span>▶ {d}</span><button onClick={()=>removeSession(sessions.length-1-i)} style={{background:'none',border:'none',color:'#5b5040',cursor:'pointer',fontSize:11,padding:0}}>✕</button></div>)}</div>}</div>
      <div style={{display:'flex',gap:8,marginTop:4}}>
        <button className="btn-g" style={{flex:1}} onClick={onClose}>Cancel</button>
        <button className="btn" style={{flex:1}} onClick={doSave}>Save</button>
        <button className="btn" style={{flex:1,background:'#2e2b24',borderColor:'#d4a843',color:'#d4a843'}} onClick={()=>setScreen('ratings')}>Ratings →</button>
      </div>
    </>}

    {screen==='ratings'&&<>
      <div style={{display:'flex',gap:0,marginBottom:10,borderBottom:'1px solid #2e2b24'}}>
        {[['alex','🤵 Alex'],['axd','👰 AXD']].map(([id,lbl])=><button key={id} onClick={()=>setRatingTab(id)} style={{flex:1,padding:'7px 0',background:'none',border:'none',cursor:'pointer',fontSize:11,fontFamily:'"DM Mono",monospace',color:ratingTab===id?(id==='alex'?alexColor:axdColor):'#7a7260',borderBottom:ratingTab===id?`2px solid ${id==='alex'?alexColor:axdColor}`:'2px solid transparent',letterSpacing:1,textTransform:'uppercase'}}>{lbl}</button>)}
      </div>
      {ratingTab==='alex'&&<>
        <div className="crit-grid" style={{marginBottom:6}}>{[['Fun','fun',COLORS.fun,10],['Complexity','complexity',COLORS.complexity,5],['Replayability','replayability',COLORS.replayability,10],['Components','components',COLORS.components,10],['Theme','theme',COLORS.theme,10],['Strategy','depth',COLORS.depth,10]].map(([lbl,k,col,mx])=>(<CritSlider key={k} label={lbl} color={col} k={k} max={mx} value={vals[k]} onChange={(k,v)=>setVals(p=>({...p,[k]:v}))}/>))}</div>
        <div style={{fontSize:11,color:alexColor,textAlign:'right',marginBottom:10}}>🤵 Score: <span style={{fontFamily:'"Playfair Display",serif',fontSize:15}}>{score.toFixed(1)}</span>/10</div>
      </>}
      {ratingTab==='axd'&&<>
        <div className="crit-grid" style={{marginBottom:6}}>{[['Fun','fun',axdColor,10],['Complexity','complexity','#4aa870',5],['Replayability','replayability',axdColor,10],['Components','components','#4aa870',10],['Theme','theme',axdColor,10],['Strategy','depth','#4aa870',10]].map(([lbl,k,col,mx])=>(<CritSlider key={k} label={lbl} color={col} k={k} max={mx} value={axdVals[k]} onChange={(k,v)=>setAxdVals(p=>({...p,[k]:v}))}/>))}</div>
        <div style={{fontSize:11,color:axdColor,textAlign:'right',marginBottom:10}}>👰 Score: <span style={{fontFamily:'"Playfair Display",serif',fontSize:15}}>{axdScore.toFixed(1)}</span>/10</div>
      </>}
      <div style={{display:'flex',gap:8}}>
        <button className="btn-g" style={{flex:1}} onClick={()=>setScreen('info')}>← Back</button>
        <button className="btn" style={{flex:2}} onClick={doSave}>💾 Save</button>
      </div>
    </>}
  </div></div>);
}

function AddPanel({weights,onAdd}){
  const [name,setName]=useState('');
  const [vals,setVals]=useState({fun:0,complexity:0,replayability:0,components:0,theme:0,depth:0});
  const [status,setStatus]=useState('unplayed');
  const [partnerStatus,setPartnerStatus]=useState('not_played');
  const score=calcScore(vals,weights);
  function handleAdd(){if(!name.trim()){alert('Please enter the game name!');return;}onAdd({name:name.trim(),...vals,status,partnerStatus,notes:'',mechanics:[]});setName('');setVals({fun:0,complexity:0,replayability:0,components:0,theme:0,depth:0});setStatus('unplayed');setPartnerStatus('not_played');}
  return(<div className="card"><div className="card-title">Rate a new game</div><div style={{marginBottom:12}}><label className="lbl">Game name</label><input className="inp" placeholder="e.g. Tainted Grail" value={name} onChange={e=>setName(e.target.value)}/></div><div className="crit-grid">{[['Fun','fun',COLORS.fun,10],['Complexity','complexity',COLORS.complexity,5],['Replayability','replayability',COLORS.replayability,10],['Components','components',COLORS.components,10],['Theme & Atmosphere','theme',COLORS.theme,10],['Strategic Depth','depth',COLORS.depth,10]].map(([lbl,k,col,mx])=>(<CritSlider key={k} label={lbl} color={col} k={k} max={mx} value={vals[k]} onChange={(k,v)=>setVals(p=>({...p,[k]:v}))}/>))}</div><div style={{marginBottom:12}}><label className="lbl">Play Status</label><StatusSelector value={status} onChange={setStatus}/></div><div style={{marginBottom:14}}><label className="lbl">Partner Status</label><StatusSelector value={partnerStatus} onChange={setPartnerStatus} statuses={PARTNER_STATUSES}/></div><div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:8}}><div style={{fontSize:11,color:'#7a7260'}}>Preview: <span style={{color:'#d4a843',fontFamily:'"Playfair Display",serif',fontSize:16}}>{score.toFixed(1)}</span>/10</div><button className="btn" onClick={handleAdd}>Add to collection</button></div></div>);
}

function ExportModal({text,onClose}){
  const [sel,setSel]=useState(false);
  function handleSelect(){setSel(true);const r=window.getSelection();const el=document.getElementById('export-div');if(el&&r){r.removeAllRanges();const range=document.createRange();range.selectNodeContents(el);r.addRange(range);}}
  return(<div className="overlay" onClick={e=>e.target===e.currentTarget&&onClose()}><div className="modal"><div className="modal-hdr"><div className="modal-title">📋 Export JSON</div><button className="btn-d" onClick={onClose}>✕</button></div>
    <div style={{fontSize:10,color:'#d4a843',marginBottom:8,textAlign:'center',letterSpacing:1}}>👇 Tap pe text → tot se selectează → Copy</div>
    <div id="export-div" onClick={handleSelect} style={{background:'#0f0e0c',border:'2px solid '+(sel?'#d4a843':'#2e2b24'),borderRadius:3,color:'#f0ead8',fontFamily:'"DM Mono",monospace',fontSize:9,padding:'9px 11px',height:300,overflowY:'auto',whiteSpace:'pre-wrap',wordBreak:'break-all',userSelect:'all',WebkitUserSelect:'all',cursor:'text'}}>{text}</div>
    {sel&&<div style={{fontSize:10,color:'#6dbf7e',marginTop:6,textAlign:'center'}}>✓ Selectat! Acum apasă Copy din meniul Android</div>}
    <div style={{display:'flex',gap:8,marginTop:10}}><button className="btn-g" style={{flex:1}} onClick={onClose}>Închide</button></div>
  </div></div>);}


function RankingPanel({games,weights,weightsAxd,onEdit,onDelete,onAddToQueue,onImport,onExport}){
  const [filter,setFilter]=useState('all');
  const [search,setSearch]=useState('');
  const [sortBy,setSortBy]=useState('score');
  const [view,setView]=useState('both');
  const sorted=useMemo(()=>{
    let f=games;
    if(filter==='rated')f=f.filter(isRated);
    else if(filter==='unrated')f=f.filter(g=>!isRated(g));
    else if(STATUSES.find(s=>s.id===filter))f=f.filter(g=>(g.status||'unplayed')===filter);
    if(view==='both_rated')f=f.filter(g=>isRated(g)&&isRatedAxd(g));
    if(search)f=f.filter(g=>g.name.toLowerCase().includes(search.toLowerCase()));
    const ws=f.map(g=>({...g,origIdx:games.indexOf(g),score:calcScore(g,weights),axdScore:calcScoreAxd(g,weightsAxd)}));
    if(sortBy==='az')return ws.sort((a,b)=>a.name.localeCompare(b.name));
    if(sortBy==='za')return ws.sort((a,b)=>b.name.localeCompare(a.name));
    if(view==='axd')return ws.sort((a,b)=>b.axdScore-a.axdScore);
    if(view==='both_rated')return ws.sort((a,b)=>b.score-a.score);
    return ws.sort((a,b)=>b.score-a.score);
  },[games,weights,weightsAxd,filter,search,sortBy,view]);
  function importJSON(){const i=document.createElement('input');i.type='file';i.accept='.json';i.onchange=e=>{const f=e.target.files[0];if(!f)return;const r=new FileReader();r.onload=ev=>{try{const data=JSON.parse(ev.target.result);if(Array.isArray(data)){onImport(data.map(migrate));alert('Imported '+data.length+' games!');}else alert('Invalid file.');}catch(e){alert('Could not read file.');}};r.readAsText(f);};i.click();}
  const alexColor='#5b9bd5';
  const axdColor='#6dbf7e';
  return(<div>
    <StatusLegend/>
    <div className="topbar">
      <div className="count">Total: <span>{games.length}</span> games</div>
      <div className="topbar-btns">
        {[['all','All'],['rated','● Rated'],['unrated','○ Unrated']].map(([id,lbl])=><button key={id} className={"btn-g"+(filter===id?' on':'')} onClick={()=>setFilter(id)}>{lbl}</button>)}
        {STATUSES.map(s=><button key={s.id} className={"btn-g"+(filter===s.id?' on':'')} title={s.label} onClick={()=>setFilter(s.id)}>{s.emoji}</button>)}
        <button className="btn-g" onClick={onExport}>📋 JSON</button>
        <button className="btn-g" onClick={importJSON}>⬆ Import</button>
      </div>
    </div>
    <div style={{display:'flex',gap:6,marginBottom:10,padding:'0 4px'}}>
      {[['both','👥 Both'],['alex','🤵 Alex'],['axd','👰 AXD'],['both_rated','⭐ Both Rated']].map(([id,lbl])=><button key={id} onClick={()=>setView(id)} style={{flex:1,padding:'5px 0',background:view===id?(id==='alex'?alexColor:id==='axd'?axdColor:id==='both_rated'?'#d4a843':'#2e2b24'):'#1a1814',border:'1px solid '+(view===id?(id==='alex'?alexColor:id==='axd'?axdColor:id==='both_rated'?'#d4a843':'#4e4838'):'#2e2b24'),borderRadius:3,cursor:'pointer',fontSize:9,fontFamily:'"DM Mono",monospace',color:view===id?(id==='both_rated'?'#0f0e0c':'#f0ead8'):'#7a7260',letterSpacing:0.5,textTransform:'uppercase'}}>{lbl}</button>)}
    </div>
    <input className="inp" placeholder="Search games..." value={search} onChange={e=>setSearch(e.target.value)} style={{marginBottom:10}}/>
    <div style={{display:'flex',gap:6,marginBottom:12,padding:'0 4px'}}>{[['score','Score'],['az','A→Z'],['za','Z→A']].map(([id,lbl])=><button key={id} className={"btn-g"+(sortBy===id?' on':'')} onClick={()=>setSortBy(id)} style={{flex:1}}>{lbl}</button>)}</div>
    {sorted.length===0?<div className="empty"><div className="empty-big">🎲</div><div style={{fontSize:11,letterSpacing:1,textTransform:'uppercase'}}>No games found</div></div>:sorted.map((g,i)=>(
      <div key={i} className="card" style={{marginBottom:8,borderLeft:`3px solid ${view==='axd'?axdColor:view==='alex'?alexColor:'#2e2b24'}`}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}>
          <div style={{flex:1,minWidth:0}}>
            <div className="gname">{g.name}</div>
            <div style={{display:'flex',gap:4,flexWrap:'wrap',marginTop:2}}><StatusBadge status={g.status}/>{g.partnerStatus&&g.partnerStatus!=='not_played'&&<StatusBadge status={g.partnerStatus} statuses={PARTNER_STATUSES}/>}</div>
            {g.sessions&&g.sessions.length>0&&<div style={{fontSize:9,color:'#5b9bd5',marginTop:3}}>▶ {g.sessions.length} play{g.sessions.length!==1?'s':''} · last: {g.sessions[g.sessions.length-1]}</div>}
            {g.mechanics&&g.mechanics.length>0&&<div className="tags" style={{marginTop:4}}>{g.mechanics.map(id=>{const m=MECHANICS.find(x=>x.id===id);return m?<span key={id} className="tag">{m.label}</span>:null;})}</div>}
          </div>
          <div style={{textAlign:'right',flexShrink:0,marginLeft:8}}>
            {(view==='both'||view==='alex'||view==='both_rated')&&<div style={{fontFamily:'"Playfair Display",serif',fontSize:view==='both'||view==='both_rated'?18:22,color:alexColor,lineHeight:1}}>{g.score.toFixed(1)}</div>}
            {(view==='both'||view==='both_rated')&&isRatedAxd(g)&&<div style={{fontFamily:'"Playfair Display",serif',fontSize:view==='both_rated'?16:16,color:axdColor,lineHeight:1.2}}>{g.axdScore.toFixed(1)}</div>}
            {view==='axd'&&<div style={{fontFamily:'"Playfair Display",serif',fontSize:22,color:axdColor,lineHeight:1}}>{g.axdScore.toFixed(1)}</div>}
            {(view==='both'||view==='both_rated')&&<div style={{fontSize:8,color:'#5b5040',marginTop:2}}>🤵 / 👰</div>}
          </div>
        </div>
        <div style={{display:'flex',gap:6,marginTop:8,flexWrap:'wrap'}}>
          <button className="btn-g" style={{fontSize:9,padding:'3px 8px'}} onClick={()=>onEdit(g.origIdx)}>✏ Edit</button>
          <button className="btn-g" style={{fontSize:9,padding:'3px 8px'}} onClick={()=>onAddToQueue(g.origIdx)}>+ Queue</button>
          <button className="btn-d" style={{fontSize:9,padding:'3px 8px',marginLeft:'auto'}} onClick={()=>onDelete(g.origIdx)}>✕</button>
        </div>
      </div>
    ))}
  </div>);
}

function WeightsPanel({weights,weightsAxd,onSave,onSaveAxd,onReset}){
  const [wTab,setWTab]=useState('alex');
  const [w,setW]=useState({...weights});
  const [wAxd,setWAxd]=useState({...weightsAxd});
  const total=CRITERIA.reduce((s,k)=>s+(w[k]||0),0);
  const totalAxd=CRITERIA.reduce((s,k)=>s+(wAxd[k]||0),0);
  const alexColor='#5b9bd5'; const axdColor='#6dbf7e';
  const CRIT_LIST=[['Fun','fun',COLORS.fun],['Complexity','complexity',COLORS.complexity],['Replayability','replayability',COLORS.replayability],['Components','components',COLORS.components],['Theme','theme',COLORS.theme],['Strategic Depth','depth',COLORS.depth]];
  return(<div>
    <div style={{display:'flex',gap:0,marginBottom:12,borderBottom:'1px solid #2e2b24'}}>
      {[['alex','🤵 Alex'],['axd','👰 AXD']].map(([id,lbl])=><button key={id} onClick={()=>setWTab(id)} style={{flex:1,padding:'7px 0',background:'none',border:'none',cursor:'pointer',fontSize:11,fontFamily:'"DM Mono",monospace',color:wTab===id?(id==='alex'?alexColor:axdColor):'#7a7260',borderBottom:wTab===id?`2px solid ${id==='alex'?alexColor:axdColor}`:'2px solid transparent',letterSpacing:1,textTransform:'uppercase'}}>{lbl}</button>)}
    </div>
    {wTab==='alex'&&<div className="card"><div className="card-title" style={{color:alexColor}}>🤵 Alex Weights</div>{CRIT_LIST.map(([lbl,k,col])=>(<div key={k} className="wrow"><div className="wlbl"><div className="dot" style={{background:col}}/>{lbl}</div><input type="range" min={5} max={50} value={w[k]||10} style={{background:`linear-gradient(to right,#2e2b24 0%,${col} 100%)`}} onChange={e=>setW(p=>({...p,[k]:+e.target.value}))}/><div className="wval">{w[k]}%</div></div>))}<div style={{fontSize:11,color:'#7a7260',marginTop:8}}>Total: <span style={{color:total===100?'#d4a843':'#e8614a'}}>{total}%</span></div><div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:16}}><button className="btn" style={{background:alexColor}} onClick={()=>onSave(w)}>Save Alex weights</button><button className="btn-g" style={{color:'#e8614a',borderColor:'#e8614a'}} onClick={onReset}>⚠️ Reset All Scores</button></div></div>}
    {wTab==='axd'&&<div className="card"><div className="card-title" style={{color:axdColor}}>👰 AXD Weights</div>{CRIT_LIST.map(([lbl,k])=>(<div key={k} className="wrow"><div className="wlbl"><div className="dot" style={{background:axdColor}}/>{lbl}</div><input type="range" min={5} max={50} value={wAxd[k]||10} style={{background:`linear-gradient(to right,#2e2b24 0%,${axdColor} 100%)`}} onChange={e=>setWAxd(p=>({...p,[k]:+e.target.value}))}/><div className="wval">{wAxd[k]}%</div></div>))}<div style={{fontSize:11,color:'#7a7260',marginTop:8}}>Total: <span style={{color:totalAxd===100?'#d4a843':'#e8614a'}}>{totalAxd}%</span></div><div style={{display:'flex',gap:10,flexWrap:'wrap',marginTop:16}}><button className="btn" style={{background:axdColor,color:'#0f0e0c'}} onClick={()=>onSaveAxd(wAxd)}>Save AXD weights</button></div></div>}
  </div>);
}

function StatsPanel({games,weights,weightsAxd}){
  const rated=games.filter(isRated).length;
  const ratedAxd=games.filter(isRatedAxd).length;
  const stCounts=STATUSES.map(s=>({...s,count:games.filter(g=>(g.status||'unplayed')===s.id).length}));
  const pCounts=PARTNER_STATUSES.map(s=>({...s,count:games.filter(g=>(g.partnerStatus||'not_played')===s.id).length}));
  const buckets=[1,2,3,4,5].map(v=>games.filter(g=>(g.complexity||0)===v).length);
  const bNames=['Very Light','Light','Med Light','Med Heavy','Heavy'];
  const bColors=[COLORS.replayability,'#6dbf7e','#e8a84a',COLORS.fun,COLORS.complexity];
  const statusGroups=STATUSES.map(s=>({...s,games:games.filter(g=>(g.status||'unplayed')===s.id).map(g=>({...g,score:calcScore(g,weights)})).sort((a,b)=>b.score-a.score)})).filter(s=>s.games.length>0);
  const [openStatus,setOpenStatus]=useState(null);
  return(<div className="sgrid">
    <div className="sc"><div className="stitle">Collection</div><div className="sbig">{games.length}</div><div className="ssub">games in library</div><div className="ssub" style={{marginTop:4,color:'#5b9bd5'}}>🤵 {rated} rated</div><div className="ssub" style={{color:'#6dbf7e'}}>👰 {ratedAxd} rated</div></div>
    <div className="sc wide"><div className="stitle">Play Status</div><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'5px 14px',marginTop:4}}>{stCounts.map(s=><div key={s.id} style={{display:'flex',justifyContent:'space-between',fontSize:11}}><span>{s.emoji} {s.label}</span><span style={{color:'#d4a843',fontFamily:'"Playfair Display",serif',fontSize:14}}>{s.count}</span></div>)}</div></div>
    <div className="sc wide"><div className="stitle">Partner Status</div><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'5px 14px',marginTop:4}}>{pCounts.map(s=><div key={s.id} style={{display:'flex',justifyContent:'space-between',fontSize:11}}><span>{s.emoji} {s.label}</span><span style={{color:'#d4a843',fontFamily:'"Playfair Display",serif',fontSize:14}}>{s.count}</span></div>)}</div></div>
    <div className="sc wide"><div className="stitle">Complexity Distribution</div><div className="buckets">{buckets.map((cnt,i)=><div key={i} className="bucket"><div className="bucketn" style={{color:bColors[i]}}>{cnt}</div><div className="bucketl">{bNames[i]}<br/>{i+1}</div></div>)}</div></div>
    <div className="sc wide"><div className="stitle">Games by Status</div><div style={{display:'flex',flexDirection:'column',gap:6,marginTop:4}}>{statusGroups.map(s=><div key={s.id}><div onClick={()=>setOpenStatus(openStatus===s.id?null:s.id)} style={{display:'flex',justifyContent:'space-between',alignItems:'center',cursor:'pointer',padding:'4px 0',borderBottom:'1px solid #2e2b24'}}><span style={{fontSize:11}}>{s.emoji} {s.label} <span style={{color:'#d4a843'}}>({s.games.length})</span></span><span style={{fontSize:10,color:'#5b5040'}}>{openStatus===s.id?'▲':'▼'}</span></div>{openStatus===s.id&&<div style={{maxHeight:200,overflowY:'auto',marginTop:4}}>{s.games.map((g,i)=><div key={i} style={{display:'flex',justifyContent:'space-between',fontSize:11,padding:'2px 4px',color:'#a09880'}}><span style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap',flex:1}}>{g.name}</span><span style={{color:'#d4a843',fontFamily:'"Playfair Display",serif',flexShrink:0,marginLeft:8}}>{g.score>0?g.score.toFixed(1):'—'}</span></div>)}</div>}</div>)}</div></div>
  </div>);
}

function Top10Panel({games,weights,weightsAxd}){
  const [view,setView]=useState('alex');
  const [limit,setLimit]=useState(10);
  const [crit,setCrit]=useState('score');
  const alexColor='#5b9bd5'; const axdColor='#6dbf7e';
  const rated=view==='axd'?games.filter(isRatedAxd):games.filter(isRated);
  const scored=rated.map(g=>({...g,alexScore:calcScore(g,weights),axdScore:calcScoreAxd(g,weightsAxd)}));
  const getVal=(g)=>{
    const src=view==='axd'?'axd_':'';
    if(crit==='score')return view==='axd'?g.axdScore:g.alexScore;
    return g[src+crit]||0;
  };
  const topN=scored.sort((a,b)=>getVal(b)-getVal(a)).slice(0,limit==='all'?9999:limit);
  const critLabel={score:'Score',fun:'Fun',replayability:'Replayability',components:'Components',theme:'Theme',depth:'Strategy'};
  return(<div>
    <div style={{display:'flex',gap:0,marginBottom:10,borderBottom:'1px solid #2e2b24'}}>
      {[['alex','🤵 Alex'],['axd','👰 AXD'],['both','👥 Both']].map(([id,lbl])=><button key={id} onClick={()=>setView(id)} style={{flex:1,padding:'7px 0',background:'none',border:'none',cursor:'pointer',fontSize:10,fontFamily:'"DM Mono",monospace',color:view===id?(id==='axd'?axdColor:id==='alex'?alexColor:'#d4a843'):'#7a7260',borderBottom:view===id?`2px solid ${id==='axd'?axdColor:id==='alex'?alexColor:'#d4a843'}`:'2px solid transparent',letterSpacing:1,textTransform:'uppercase'}}>{lbl}</button>)}
    </div>
    <div style={{display:'flex',gap:6,marginBottom:8,flexWrap:'wrap'}}>
      {[10,20,50,100,'all'].map(n=><button key={n} className={"btn-g"+(limit===n?' on':'')} onClick={()=>setLimit(n)} style={{fontSize:9,padding:'3px 8px'}}>Top {n==='all'?'All':n}</button>)}
    </div>
    <div style={{display:'flex',gap:4,marginBottom:12,flexWrap:'wrap'}}>
      {Object.entries(critLabel).map(([k,lbl])=><button key={k} className={"btn-g"+(crit===k?' on':'')} onClick={()=>setCrit(k)} style={{fontSize:9,padding:'3px 8px'}}>{lbl}</button>)}
    </div>
    {topN.length===0?<div className="empty"><div className="empty-big">🎲</div><div style={{fontSize:11,letterSpacing:1,textTransform:'uppercase'}}>No rated games</div></div>:
    <><div className="divider">Top {topN.length} by {critLabel[crit]} — {view==='alex'?'🤵 Alex':view==='axd'?'👰 AXD':'👥 Both'}</div>
    {topN.map((g,rank)=>(<div key={rank} className="t10row"><div className={"rank"+(rank<3?' t3':'')}>{rank+1}</div><div style={{minWidth:0}}><div className="gname">{g.name}</div>{g.mechanics?.length>0&&<div className="tags">{g.mechanics.map(id=>{const m=MECHANICS.find(x=>x.id===id);return m?<span key={id} className="tag">{m.label}</span>:null;})}</div>}</div><div style={{textAlign:'right',minWidth:60}}>
      {view!=='axd'&&<div style={{fontFamily:'"Playfair Display",serif',fontSize:view==='both'?15:20,color:alexColor,lineHeight:1.1}}>{(view==='both'?getVal({...g,alexScore:g.alexScore}):getVal(g)).toFixed(1)}</div>}
      {view==='both'&&isRatedAxd(g)&&<div style={{fontFamily:'"Playfair Display",serif',fontSize:13,color:axdColor,lineHeight:1.1}}>{g.axdScore.toFixed(1)}</div>}
      {view==='axd'&&<div style={{fontFamily:'"Playfair Display",serif',fontSize:20,color:axdColor,lineHeight:1}}>{getVal(g).toFixed(1)}</div>}
    </div></div>))}</>}
  </div>);
}

function QueuePanel({games,weights,queue,setQueue}){
  const [tonightTime,setTonightTime]=useState('medium');
  const [tonightWho,setTonightWho]=useState('both');
  const [tonightWeight,setTonightWeight]=useState('any');
  const [suggestions,setSuggestions]=useState([]);
  const [addSearch,setAddSearch]=useState('');
  const [showAddSearch,setShowAddSearch]=useState(false);
  const [addContext,setAddContext]=useState('Tonight');
  function getSuggestions(){let pool=games.filter(g=>{if(tonightWho==='solo'&&g.partnerStatus==='not_her_type')return false;if(tonightWho==='together'&&['not_played','not_her_type','dislikes_art'].includes(g.partnerStatus||'not_played'))return false;if(tonightWeight==='light'&&(g.complexity||0)>1)return false;if(tonightWeight==='medium'&&((g.complexity||0)<2||(g.complexity||0)>3))return false;if(tonightWeight==='heavy'&&(g.complexity||0)<4)return false;return !['unplayed','learning'].includes(g.status||'unplayed');});if(pool.length===0)pool=games.filter(g=>!['unplayed'].includes(g.status||'unplayed'));setSuggestions([...pool].sort(()=>Math.random()-0.5).slice(0,3).map(g=>({...g,score:calcScore(g,weights)})));}
  function addToQueue(g,context=''){if(queue.find(q=>q.name===g.name))return;setQueue(prev=>[...prev,{name:g.name,context,addedAt:Date.now()}]);}
  function removeFromQueue(name){setQueue(prev=>prev.filter(q=>q.name!==name));}
  const searchResults=addSearch.length>1?games.filter(g=>g.name.toLowerCase().includes(addSearch.toLowerCase())&&!queue.find(q=>q.name===g.name)).slice(0,6):[];
  return(<div>
    <div className="tonight-wrap">
      <div className="tonight-title">🎯 Tonight Pick</div>
      <div style={{fontSize:10,letterSpacing:1,textTransform:'uppercase',color:'#7a7260',marginBottom:8}}>How much time?</div>
      <div className="tonight-row">{[['short','Short'],['medium','Medium'],['long','All night']].map(([v,l])=><button key={v} className={"btn-g"+(tonightTime===v?' on':'')} onClick={()=>setTonightTime(v)}>{l}</button>)}</div>
      <div style={{fontSize:10,letterSpacing:1,textTransform:'uppercase',color:'#7a7260',marginBottom:8}}>Who is playing?</div>
      <div className="tonight-row">{[['solo','Solo'],['both','Together'],['any','Any']].map(([v,l])=><button key={v} className={"btn-g"+(tonightWho===v?' on':'')} onClick={()=>setTonightWho(v)}>{l}</button>)}</div>
      <div style={{fontSize:10,letterSpacing:1,textTransform:'uppercase',color:'#7a7260',marginBottom:8}}>Complexity?</div>
      <div className="tonight-row">{[['light','Light'],['medium','Medium'],['heavy','Heavy'],['any','Any']].map(([v,l])=><button key={v} className={"btn-g"+(tonightWeight===v?' on':'')} onClick={()=>setTonightWeight(v)}>{l}</button>)}</div>
      <button className="btn" onClick={getSuggestions}>✨ Suggest 3 games</button>
      {suggestions.length>0&&<div style={{marginTop:14}}><div className="divider">Suggestions</div>{suggestions.map((g,i)=><div key={i} className="suggest-card" onClick={()=>addToQueue(g,'Tonight')}><div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}><div style={{fontFamily:'"Playfair Display",serif',fontSize:15,color:'#f0ead8',flex:1,marginRight:8}}>{g.name}</div><div style={{fontFamily:'"Playfair Display",serif',fontSize:20,color:'#d4a843',flexShrink:0}}>{g.score.toFixed(1)}</div></div><div style={{display:'flex',gap:4,flexWrap:'wrap',marginTop:6}}><StatusBadge status={g.status}/>{g.partnerStatus&&g.partnerStatus!=='not_played'&&<StatusBadge status={g.partnerStatus} statuses={PARTNER_STATUSES}/>}</div><div style={{fontSize:9,color:'#7a7260',marginTop:6}}>Tap to add to queue →</div></div>)}</div>}
    </div>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10,flexWrap:'wrap',gap:8}}><div className="divider" style={{margin:0}}>Play Next Queue ({queue.length})</div><button className="btn-sm" onClick={()=>setShowAddSearch(!showAddSearch)}>+ Add game</button></div>
    {showAddSearch&&<div className="card" style={{marginBottom:12,padding:14}}>
      <input className="inp" placeholder="Search your collection..." value={addSearch} onChange={e=>setAddSearch(e.target.value)} autoFocus/>
      <div style={{display:'flex',gap:6,flexWrap:'wrap',marginTop:10,marginBottom:4}}>
        {[['🎮','Tonight'],['🎓','Teach Her'],['🃏','Teach Solo'],['📖','Teach New']].map(([emoji,label])=>(
          <button key={label} className={"btn-g"+(addContext===label?' on':'')} onClick={()=>setAddContext(label)} style={{fontSize:10}}>{emoji} {label}</button>
        ))}
      </div>
      {searchResults.length>0&&<div style={{marginTop:8}}>{searchResults.map((g,i)=><div key={i} style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'7px 0',borderBottom:'1px solid #2e2b24',cursor:'pointer'}} onClick={()=>{addToQueue(g,addContext);setAddSearch('');setShowAddSearch(false);}}><span style={{fontSize:13}}>{g.name}</span><StatusBadge status={g.status}/></div>)}</div>}
    </div>}
    {queue.length===0?<div className="empty"><div className="empty-big">🎮</div><div style={{fontSize:11,letterSpacing:1,textTransform:'uppercase'}}>Queue is empty</div></div>:queue.map((q,i)=>{const g=games.find(x=>x.name===q.name);const ctxColors={'Tonight':'#d4a843','Teach Her':'#e06fa0','Teach Solo':'#5b9bd5','Teach New':'#6dbf7e'};const ctxColor=ctxColors[q.context]||'#7a7260';return(<div key={i} className="qrow"><div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start'}}><div style={{flex:1,minWidth:0}}><div className="gname">{q.name}</div>{g&&<div style={{display:'flex',gap:4,flexWrap:'wrap',marginTop:4}}><StatusBadge status={g.status}/>{g.partnerStatus&&g.partnerStatus!=='not_played'&&<StatusBadge status={g.partnerStatus} statuses={PARTNER_STATUSES}/>}</div>}{q.context&&<div style={{fontSize:9,color:ctxColor,marginTop:4,fontWeight:500}}>📌 {q.context}</div>}</div><button className="btn-d" style={{marginLeft:8,flexShrink:0}} onClick={()=>removeFromQueue(q.name)}>✕</button></div></div>);})}
  </div>);
}

function WishlistPanel({games,wishlist,setWishlist,onMoveToCollection}){
  const [name,setName]=useState('');
  const [priority,setPriority]=useState('medium');
  const [note,setNote]=useState('');
  const [showAdd,setShowAdd]=useState(false);
  function addItem(){if(!name.trim())return;setWishlist(prev=>[...prev,{name:name.trim(),priority,note,addedAt:Date.now()}]);setName('');setPriority('medium');setNote('');setShowAdd(false);}
  const sorted=[...wishlist].sort((a,b)=>({high:0,medium:1,low:2}[a.priority]-{high:0,medium:1,low:2}[b.priority]));
  const pColors={high:'#e8614a',medium:'#e8a84a',low:'#6dbf7e'};
  const pLabels={high:'🔴 High',medium:'🟡 Medium',low:'🟢 Low'};
  return(<div>
    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12,flexWrap:'wrap',gap:8}}><div className="count">Wishlist: <span>{wishlist.length}</span> games</div><button className="btn-sm" onClick={()=>setShowAdd(!showAdd)}>+ Add to wishlist</button></div>
    {showAdd&&<div className="card" style={{marginBottom:14}}><div style={{marginBottom:10}}><label className="lbl">Game name</label><input className="inp" placeholder="e.g. Ark Nova" value={name} onChange={e=>setName(e.target.value)}/></div><div style={{marginBottom:10}}><label className="lbl">Priority</label><div style={{display:'flex',gap:6,marginTop:6}}>{['high','medium','low'].map(p=><button key={p} className="sbtn" style={priority===p?{borderColor:pColors[p],color:pColors[p],background:pColors[p]+'22'}:{}} onClick={()=>setPriority(p)}>{pLabels[p]}</button>)}</div></div><div style={{marginBottom:12}}><label className="lbl">Note (optional)</label><input className="inp" placeholder="Why you want it, price seen, etc." value={note} onChange={e=>setNote(e.target.value)}/></div><div style={{display:'flex',gap:8}}><button className="btn" onClick={addItem}>Add</button><button className="btn-g" onClick={()=>{setShowAdd(false);setName('');setNote('');}}>Cancel</button></div></div>}
    {sorted.length===0?<div className="empty"><div className="empty-big">🛒</div><div style={{fontSize:11,letterSpacing:1,textTransform:'uppercase'}}>Wishlist is empty</div></div>:sorted.map((item,i)=><div key={i} className="wrow2"><div style={{minWidth:0}}><div className="gname">{item.name}</div><div style={{display:'flex',gap:6,alignItems:'center',marginTop:4,flexWrap:'wrap'}}><span style={{fontSize:9,padding:'2px 7px',borderRadius:10,border:'1px solid',borderColor:pColors[item.priority],color:pColors[item.priority],background:pColors[item.priority]+'18'}}>{pLabels[item.priority]}</span>{item.note&&<span style={{fontSize:9,color:'#7a7260',fontStyle:'italic'}}>📝 {item.note}</span>}</div></div><button className="btn-sm" onClick={()=>onMoveToCollection(item)}>✓ Got it!</button><button className="btn-d" onClick={()=>setWishlist(prev=>prev.filter((_,j)=>j!==i))}>✕</button></div>)}
  </div>);
}

export default function App(){
  const [games,setGames]=useState(PRELOADED_GAMES.map(g=>migrate({...g})));
  const [weights,setWeights]=useState({...DEF_WEIGHTS});
  const [weightsAxd,setWeightsAxd]=useState({...DEF_WEIGHTS_AXD});
  const [queue,setQueue]=useState([]);
  const [wishlist,setWishlist]=useState([]);
  const [editIdx,setEditIdx]=useState(null);
  const [tab,setTab]=useState('ranking');
  const [saveStatus,setSaveStatus]=useState('loading');
  const [showExport,setShowExport]=useState(false);

  useEffect(()=>{
    const data=storeLoad();
    if(data){
      if(data.games)setGames(data.games.map(migrate));
      if(data.weights)setWeights({...DEF_WEIGHTS,...data.weights});
      if(data.weightsAxd)setWeightsAxd({...DEF_WEIGHTS_AXD,...data.weightsAxd});
      if(data.queue)setQueue(data.queue);
      if(data.wishlist)setWishlist(data.wishlist);
    }
    setSaveStatus('idle');
  },[]);

  function save(g,w,wAxd,q,wl){
    const ok=storeSave({games:g,weights:w,weightsAxd:wAxd,queue:q,wishlist:wl});
    setSaveStatus(ok?'saved':'error');
    setTimeout(()=>setSaveStatus('idle'),2500);
  }

  function handleAdd(g){const ng=[...games,g];setGames(ng);save(ng,weights,weightsAxd,queue,wishlist);setTab('ranking');}
  function handleSaveEdit(u){const ng=games.map((g,i)=>i===editIdx?u:g);setGames(ng);save(ng,weights,weightsAxd,queue,wishlist);setEditIdx(null);}
  function handleDelete(idx){if(!confirm('Delete '+games[idx].name+'?'))return;const ng=games.filter((_,i)=>i!==idx);setGames(ng);save(ng,weights,weightsAxd,queue,wishlist);}
  function handleSaveWeights(w){setWeights(w);save(games,w,weightsAxd,queue,wishlist);}
  function handleSaveWeightsAxd(w){setWeightsAxd(w);save(games,weights,w,queue,wishlist);}
  function handleReset(){if(!confirm('Reset ALL scores?'))return;const ng=games.map(g=>({...g,fun:0,complexity:0,replayability:0,components:0,theme:0,depth:0,axd_fun:0,axd_complexity:0,axd_replayability:0,axd_components:0,axd_theme:0,axd_depth:0,status:'unplayed',partnerStatus:'not_played'}));setGames(ng);save(ng,weights,weightsAxd,queue,wishlist);}
  function handleAddToQueue(idx){const g=games[idx];if(queue.find(q=>q.name===g.name)){alert(g.name+' already in queue!');return;}const nq=[...queue,{name:g.name,context:'From ranking',addedAt:Date.now()}];setQueue(nq);save(games,weights,weightsAxd,nq,wishlist);}
  function handleMoveToCollection(item){const ng=[...games,migrate({name:item.name})];const nwl=wishlist.filter(x=>x.name!==item.name);setGames(ng);setWishlist(nwl);save(ng,weights,weightsAxd,queue,nwl);}
  function handleImport(ng){setGames(ng);save(ng,weights,weightsAxd,queue,wishlist);}
  function handleSetQueue(upd){setQueue(prev=>{const nq=typeof upd==='function'?upd(prev):upd;save(games,weights,weightsAxd,nq,wishlist);return nq;});}
  function handleSetWishlist(upd){setWishlist(prev=>{const nwl=typeof upd==='function'?upd(prev):upd;save(games,weights,weightsAxd,queue,nwl);return nwl;});}

  const SC={loading:{color:'#d4a843',label:'⏳ Loading...'},saving:{color:'#d4a843',label:'💾 Saving...'},saved:{color:'#6dbf7e',label:'✓ Saved'},error:{color:'#e8614a',label:'⚠ Use JSON export!'},idle:{color:'transparent',label:''}};
  const TABS=[['add','+ Add'],['ranking','Ranking'],['weights','Weights'],['stats','Stats'],['top10','Top 10'],['queue','Queue 🎯'],['wishlist','Wishlist 🛒']];

  function getExportText(){return JSON.stringify(games.map(g=>({...g,score:+calcScore(g,weights).toFixed(2),axd_score:+calcScoreAxd(g,weightsAxd).toFixed(2)})).sort((a,b)=>b.score-a.score),null,2);}

  return(<>
    <style>{css}</style>
    <div className="app">
      <div className="hdr">
        <div className="hdr-h1">🎲 Board Game Ranking</div>
        <button onClick={()=>setShowExport(true)} style={{marginLeft:'auto',background:'#d4a843',color:'#0f0e0c',border:'none',borderRadius:3,fontFamily:'"DM Mono",monospace',fontSize:10,letterSpacing:1,textTransform:'uppercase',padding:'6px 12px',cursor:'pointer',fontWeight:500,flexShrink:0}}>📋 Export JSON</button>
      </div>
      <div className="tabs">{TABS.map(([t,l])=><button key={t} className={"tab"+(tab===t?' on':'')} onClick={()=>setTab(t)}>{l}</button>)}</div>
      <div className="wrap">
        {tab==='add'&&<AddPanel weights={weights} onAdd={handleAdd}/>}
        {tab==='ranking'&&<RankingPanel games={games} weights={weights} weightsAxd={weightsAxd} onEdit={setEditIdx} onDelete={handleDelete} onAddToQueue={handleAddToQueue} onImport={handleImport} onExport={()=>setShowExport(true)}/>}
        {tab==='weights'&&<WeightsPanel weights={weights} weightsAxd={weightsAxd} onSave={handleSaveWeights} onSaveAxd={handleSaveWeightsAxd} onReset={handleReset}/>}
        {tab==='stats'&&<StatsPanel games={games} weights={weights} weightsAxd={weightsAxd}/>}
        {tab==='top10'&&<Top10Panel games={games} weights={weights} weightsAxd={weightsAxd}/>}
        {tab==='queue'&&<QueuePanel games={games} weights={weights} queue={queue} setQueue={handleSetQueue}/>}
        {tab==='wishlist'&&<WishlistPanel games={games} wishlist={wishlist} setWishlist={handleSetWishlist} onMoveToCollection={handleMoveToCollection}/>}
      </div>
      {editIdx!==null&&<EditModal game={games[editIdx]} weights={weights} weightsAxd={weightsAxd} onSave={handleSaveEdit} onClose={()=>setEditIdx(null)}/>}
      {showExport&&<ExportModal text={getExportText()} onClose={()=>setShowExport(false)}/>}
    </div>
  </>);
}
