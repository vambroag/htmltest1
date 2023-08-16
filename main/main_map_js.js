let map;
let shopinfostatus = 0;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: new google.maps.LatLng(37.559196356896, 126.97736606652),
    zoom: 14,
    mapId: '31889289191ab1d3'
  });

  let meat = new google.maps.MarkerImage("../img/mapmarkerimg/meat.png");
  let fish = new google.maps.MarkerImage("../img/mapmarkerimg/fish.png");
  let restaurant = new google.maps.MarkerImage("../img/mapmarkerimg/restaurant.png");

  const features = [
    {
      position: new google.maps.LatLng(37.559349, 126.9773777),
      icon: new google.maps.MarkerImage("../img/mapmarkerimg/meat.png"),
    },
    {
      position: new google.maps.LatLng(37.559279, 126.977434),
      icon: new google.maps.MarkerImage("../img/mapmarkerimg/meat.png"),
    },
    {
      position: new google.maps.LatLng(37.5592515, 126.9773701),
      icon: new google.maps.MarkerImage("../img/mapmarkerimg/meat.png"),
    },
    {
      position: new google.maps.LatLng(37.5592209, 126.9774115),
      icon: new google.maps.MarkerImage("../img/mapmarkerimg/meat.png"),
    },
    {
      position: new google.maps.LatLng(37.5590489, 126.9777508),
      icon: new google.maps.MarkerImage("../img/mapmarkerimg/meat.png"),
    },
    {
      position: new google.maps.LatLng(37.559114, 126.9774099),
      icon: new google.maps.MarkerImage("../img/mapmarkerimg/fish.png"),
    },
    {
      position: new google.maps.LatLng(37.5590981, 126.9774544),
      icon: new google.maps.MarkerImage("../img/mapmarkerimg/fish.png"),
    },
    {
      position: new google.maps.LatLng(37.5590159, 126.9775489),
      icon: new google.maps.MarkerImage("../img/mapmarkerimg/fish.png"),
    },
    {
      position: new google.maps.LatLng(37.5592445, 126.977774),
      icon: new google.maps.MarkerImage("../img/mapmarkerimg/fish.png"),
    },
    {
      position: new google.maps.LatLng(37.5591502, 126.9775453),
      icon: new google.maps.MarkerImage("../img/mapmarkerimg/restaurant.png"),
    },
  ];

  // Create markers.
  for (let i = 0; i < features.length; i++) {
    /*
    const icon1 = {
      url: features[i].icon, // url
      scaledSize: new google.maps.Size(50, 50), // scaled size
      origin: new google.maps.Point(0, 0), // origin
      anchor: new google.maps.Point(0, 0) // anchor
    };*/


    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: features[i].icon,
      map: map,
    });

    marker.addListener("click", () => {
        location.replace('../map/index.html')
    });

    marker.setMap(map);
  }
}


window.initMap = initMap;