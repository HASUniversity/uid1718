$(function () {
    $("#header").toolbar();
    $("#footer").toolbar();
});

$(document).ready(function () {
    var map = L.map('kaart').setView([51.505, -0.09], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([51.5, -0.09]).addTo(map)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        .openPopup();
    
// De volgende code zorgt ervoor dat de kaart na 300 msec wordt ververst zodat hij wel schermvullend is
    $(function(){
        setTimeout(function(){
           window.dispatchEvent(new Event('resize')); 
        }, 300);
    });
});
