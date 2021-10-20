var vsetkyFotky = $ ('#vsetky-fotky'); 
var nazovMesta = $ ('#nazov-mesta'); 
var nazovPamiatky = $ ('#pamiatka'); 
var mesta = [
    ["img/amsterdam.jpg", "HOLANDSKO - AMSTERDAM", "Veterné mlyny"], 
    ["img/ateny.jpg", "GRÉCKO - ATÉNY", "Akropola"], 
    ["img/berlin.jpg", "NEMECKO - BERLÍN", "Brandenburská brána"], 
    ["img/london.jpg", "ANGLICKO - LONDÝN", "Big Ben"],
    ["img/madrid.jpg", "ŠPANIELSKO - MADRID", "Kráľovský palác"], 
    ["img/paris.jpg", "FRANCÚZSKO - PARÍŽ", "Musée du Louvre"], 
    ["img/stokholm.jpg", "ŠVÉDSKO - ŠTOKHOLM", "Štokholm"],
    ["img/helsinki.jpg", "FÍNSKO - HELSINKI", "Evanjelická katedrála"], 
    ["img/oslo.jpg", "NÓRSKO - OSLO", "Oslo"], 
    ["img/rim.jpg", "TALIANSKO - RÍM", "Koloseum"], 
    ["img/praha.jpg", "ČESKO - PRAHA", "Pražský hrad"],
    ["img/budapest.jpg", "MAĎARSKO - BUDAPEŠŤ", "Parlament"]
];

var i = 1;

setInterval(function(){
    var poradie = i%mesta.length;
    vsetkyFotky
    .fadeOut(300, function() {vsetkyFotky[0].style.backgroundImage = "url('" + mesta[poradie][0] + "')"})
    .fadeIn(300);
    nazovMesta.text(mesta[poradie][1]);
    nazovPamiatky.text(mesta[poradie][2]);
    i++
},4000);

