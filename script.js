var vsetkyFotky = $ ('#vsetky-fotky'); 

var mesta = [
    ["img/amsterdam.jpg", "HOLANDSKO - AMSTERDAM"], 
    ["img/ateny.jpg", "GRECKO - ATENY"], 
    ["img/berlin.jpg", "NEMECKO - BERLIN"], 
    ["img/london.jpg", "ANGLICKO - LONDYN"],
    ["img/madrid.jpg", "SPANIELSKO - MADRID"], 
    ["img/paris.jpg", "FRANCUZSKO - PARIZ"], 
    ["img/stokholm.jpg", "SVEDSKO - STOKHOLM"], 
    ["img/helsinki.jpg", "FINSKO - HELSINKI"], 
    ["img/oslo.jpg", "NORSKO - OSLO"], 
    ["img/rim.jpg", "TALIANSKO - RIM"], 
    ["img/praha.jpg", "CESKO - PRAHA"],
    ["img/budapest.jpg", "MADARSKO - BUDAPEST"]
];

var i = 1;

setInterval(function(){
    var poradie = i%mesta.length;
    vsetkyFotky
    .fadeOut(300, function() {vsetkyFotky[0].style.backgroundImage = "url('" + mesta[poradie][0] + "')"})
    .fadeIn(300);
    i++
},4000);

