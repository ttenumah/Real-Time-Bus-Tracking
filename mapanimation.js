// This array contains the coordinates for all bus stops between MIT and Harvard
const busStops = [
  [-120.6592005260504, -35.28188155162981],
  [-120.65860619306838, 35.283261048226485],
  [-120.65495927540319, 35.28578040516457],
  [-120.6531549077237, 35.2871427994862],
  [-120.65301957996691, 35.29131821126444],
  [-120.65298349259348, 35.294079608646],
  [-120.65747437432731, 35.300428465199836],
  [-120.66358256134635, 35.302313926195446],
];

// TODO: add your own access token
mapboxgl.accessToken = 'pk.eyJ1IjoidHRlbnVtYWgiLCJhIjoiY2w1bGx1MG9nMGYxYzNrcGl6aXVmOWJvMiJ9.hp2Y0Zs4FxY0xjIOb8GJPw';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-120.66306934355481, 35.280014949416866],
  zoom: 14,
});

// TODO: add a marker to the map at the first coordinates in the array busStops. The marker variable should be named "marker"
var marker = new mapboxgl.Marker().setLngLat([-120.66306934355481, 35.280014949416866]).addTo(map);

// counter here represents the index of the current bus stop
let counter = 0;
function move() {
  // TODO: move the marker on the map every 1000ms. Use the function marker.setLngLat() to update the marker coordinates
  // Use counter to access bus stops in the array busStops
  // Make sure you call move() after you increment the counter.
  setTimeout(() => {
    if (counter >= busStops.length) return;
    marker.setLngLat(busStops[counter]);
    counter++;
    move();
  }, 2000);
}

// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
