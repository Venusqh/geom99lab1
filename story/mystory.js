function initMap() {
  const map = new google.maps.Map(document.getElementById("mapid"), {
    zoom: 1,
    center: { lat: 29.868, lng: 100.060 },
  });

  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
  // Create an info window
  const infoWindow = new google.maps.InfoWindow();

  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    const marker = new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
      //map: map
    });

    // Open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(location.lat + ", " + location.lng + " - Visited: " + location.year);
      infoWindow.open(map, marker);
    });

    return marker;
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers);
}

const locations = [
  { lat: 23.1151, lng: 113.2952, year:2000},
  { lat: 23.0121, lng: 113.1271, year:2003},
  { lat: 23.0158, lng: 113.7591, year:2003},
  { lat: 21.2346, lng: 110.3916, year:2003},
  { lat: 23.0624, lng: 112.4749, year:2004},
  { lat: 23.7183, lng: 113.0357, year:2004},
  { lat: 24.8201, lng: 113.5943, year:2004},
  { lat: 21.8655, lng: 11.9956, year:2004},
  { lat: 23.754, lng: 114.7023, year:2005},
  { lat: 22.9289, lng: 112.0432, year:2005},
  { lat: 22.3807, lng: 114.1978, year:2006},
  { lat: 26.6039, lng: 106.6632, year:2006},
  { lat: 39.8956, lng: 116.4089, year:2006},
  { lat: 39.1276, lng: 117.1946, year:2006},
  { lat: 18.9269, lng: 109.744, year:2007},
  { lat: 29.711, lng: 118.3136, year:2007},
  { lat: 31.2282, lng: 121.5082, year:2008},
  { lat: 31.8404, lng: 117.2797, year:2008},
  { lat: 22.5489, lng: 114.0905, year:2009},
  { lat: 25.2747, lng: 110.3035, year:2009},
  { lat: 34.2823, lng: 108.9555, year:2009},
  { lat: 26.4354, lng: 111.602, year:2010},
  { lat: 28.1716, lng: 113.0102, year:2010},
  { lat: 1.4109, lng: 103.7926, year:2011},
  { lat: 3.0206, lng: 101.7065, year:2011},
  { lat: 37.5706, lng: 126.983, year:2012},
  { lat: 33.3641, lng: 126.5382, year:2012},
  { lat: 22.1908, lng: 113.548, year:2013},
  { lat: 35.6684, lng: 139.741, year:2013},
  { lat: 35.2051, lng: 136.8687, year:2013},
  { lat: 35.0042, lng: 135.7629, year:2013},
  { lat: -27.5107, lng: 153.0385, year:2014},
  { lat: -28.0112, lng: 153.4041, year:2014},
  { lat: -32.0183, lng: 115.9354, year:2014},
  { lat: 40.7149, lng: -73.9521, year:2015},
  { lat: 39.9599, lng: -75.1486, year:2015},
  { lat: 38.8996, lng: -77.0238, year:2015},
  { lat: 42.3497, lng: -71.0781, year:2015},
  { lat: -33.8817, lng: 151.1705, year:2016},
  { lat: -37.826, lng: 144.9977, year:2016},
  { lat: 30.2873, lng: 120.1746, year:2017},
  { lat: 44.671, lng: -63.6753, year:2017},
  { lat: 44.9923, lng: -64.1384, year:2017},
  { lat: 49.2454, lng: -123.1017, year:2017},
  { lat: 24.5132, lng: 118.1053, year:2018},
  { lat: 44.4939, lng: -63.9161, year:2018},
  { lat: 46.0692, lng: -64.7067, year:2018},
  { lat: 46.4105, lng: -63.7903, year:2018},
  { lat: 45.5011, lng: -73.5776, year:2018},
  { lat: 45.4313, lng: -75.6984, year:2018},
  { lat: 44.2543, lng: -76.5278, year:2018},
  { lat: 43.6693, lng: -79.3946, year:2018},
  { lat: 43.257, lng: -79.8857, year:2018},
  { lat: 34.6876, lng: 135.5249, year:2019},
  { lat: 34.6723, lng: 133.9355, year:2019},
  { lat: -2.3308, lng: 34.8425, year:2019},
  { lat: 34.0624, lng: -118.3567, year:2019},
  { lat: 32.7446, lng: -117.1527, year:2019},
  { lat: 32.0151, lng: 118.7853, year:2020},
  { lat: 36.0745, lng: 103.739, year:2020},
  { lat: 40.0419, lng: 94.8077, year:2020},
  { lat: 36.2762, lng: 100.626, year:2020},
  { lat: 22.7785, lng: 15.3663, year:2021},
  { lat: 23.3828, lng: 116.7034, year:2021},
  { lat: 23.6625, lng: 116.6179, year:2021},
  { lat: 30.654, lng: 104.0691, year:2021},
  { lat: 46.8068, lng: -71.2447, year:2022},
  { lat: 51.0466, lng: -114.0398, year:2023},
  { lat: 44.3424, lng: -78.7348, year:2023},  
];
