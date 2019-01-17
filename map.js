var map = L.map('map').setView([25.018797, 121.542001], 18);

L.tileLayer('http://a.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; OpenStreetMap contributors',
  maxZoom: 18
}).addTo(map);

var parks = [
  [25.018797, 121.542001]
];

var parkIcon = L.icon({
  iconUrl: 'img/tower.png',
  iconRetinaUrl: 'img/tower.png',
  iconSize: [48, 48],
  iconAnchor: [12, 22],
  popupAnchor: [0, -24]
});

var markersArray = [];

for (var i = 0; i < parks.length; i++) {
  markersArray[i] = new L.marker(parks[i], {
    icon: parkIcon
  }).addTo(map);
}

var popup = L.popup({
  minWidth: 250
}).setContent('<img src="img/gotg.jpg"><h3><a href="https://en.wikipedia.org/wiki/Garden_of_the_Gods">Garden of the Gods</a></h3><p>The rock formations here are incredible!</p>');

markersArray[0].bindPopup(popup);

