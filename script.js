var vsetkyFotky = $ ('#vsetky-fotky'); 
var nazovMesta = vsetkyFotky.children().first()
var mesta = [
    ["img/amsterdam.jpg", "HOLANDSKO - AMSTERDAM"], 
    ["img/ateny.jpg", "GRÉCKO - ATÉNY"], 
    ["img/berlin.jpg", "NEMECKO - BERLÍN"], 
    ["img/london.jpg", "ANGLICKO - LONDÝN"],
    ["img/madrid.jpg", "ŠPANIELSKO - MADRID"], 
    ["img/paris.jpg", "FRANCÚZSKO - PARÍŽ"], 
    ["img/stokholm.jpg", "ŠVÉDSKO - ŠTOKHOLM"], 
    ["img/helsinki.jpg", "FÍNSKO - HELSINKI"], 
    ["img/oslo.jpg", "NÓRSKO - OSLO"], 
    ["img/rim.jpg", "TALIANSKO - RÍM"], 
    ["img/praha.jpg", "ČESKO - PRAHA"],
    ["img/budapest.jpg", "MAĎARSKO - BUDAPEŠŤ"]
];

var i = 1;

setInterval(function(){
    var poradie = i%mesta.length;
    vsetkyFotky
    .fadeOut(300, function() {vsetkyFotky[0].style.backgroundImage = "url('" + mesta[poradie][0] + "')"})
    .fadeIn(300);
    nazovMesta.text(mesta[poradie][1]);
    i++
},4000);

