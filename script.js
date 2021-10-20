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
},14000);

var clock = setInterval(
    function time(){
        var date_now = new Date();
        var hr = date_now.getHours();
        var min = date_now.getMinutes();

        if (hr < 10){
            hr = "0" + hr;
        }
        if (min < 10){
            min = "0" + min;
        }

        hour.textContent = hr;
        minute.textContent = min;
    },1000);