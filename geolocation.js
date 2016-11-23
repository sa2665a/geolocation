$(document).ready(function(){
	if ("geolocation" in navigator) {
  var button = document.getElementById('where-am-i');
  button.addEventListener('click', getLocation);
} else {
  alert("Geolocation is not available")
}

	function getLocation(){
		console.log('Getting location..');
		navigator.geolocation.getCurrentPosition(onLocation,onError,options);
	}

	function onLocation(position) {
		var lat = position.coords.latitude
		var lon= position.coords.longitude
		document.getElementById('position').innerHTML = 'Lat:' + position.coords.latitude + ',lon:' + position.coords.longitude
		displayMap(lat, lon);
	};


	function onError(error){
		console.log("Getting location failed: " + error);
	}

	var options = {
		enableHighAccuracy:true
	};

	function displayMap(lat, lon) {
  var urlRoot = "https://maps.googleapis.com/maps/api/staticmap?center=";
  var urlParams = "&zoom=13&size=500x300&maptype=roadmap";
  var url = urlRoot + lat + "," + lon + urlParams;
  var map = document.getElementById('map');
  map.setAttribute("src", url);
  console.log(url);

// para poner un marker pero no esta completo
	// var marker = new google.maps.Marker({
 //    position: position,
 //    title:"Hello World!"
	// });
	// marker.setMap(map);
}


});