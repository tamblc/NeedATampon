

var add = document.getElementById('addButton');

console.log("control.js hit")




add.onclick = function()
{
	L.mapbox.accessToken = 'pk.eyJ1IjoidGFtYmxjIiwiYSI6IjZYMlpVME0ifQ.SkFvnDEfXGkR2gLzVC6GXg';
	var map  = L.mapbox.map('map', 'tamblc.kpa72c76');
	console.log( L.control.locate());
	L.control.locate().addTo(map);
	map.setView([40, -74.50], 9);
	console.log('hit');
}