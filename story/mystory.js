// https://github.com/googlemaps/js-samples/tree/main/samples/advanced-markers-basic-style

async function initMap() {
  // Request needed libraries
  const { Map } = await google.maps.importLibrary("maps")
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary("marker")

  const map = new google.maps.Map(document.getElementById("mapid"), {
    zoom: 3,
    center: { lat: 29.868, lng: 100.060 },
  });
 
  // Create an info window
  const infoWindow = new google.maps.InfoWindow();

  // Markers basic styles
  // Adjust the scale
  const pinScale = new PinElement({
    scale: 1.5,
  });
  // Change the glyph color.
  const pinGlyph = new PinElement({
    glyphColor: "white",
  });
  // Change the border color.
  const pinBorder = new PinElement({
    borderColor: "white",
  });

  // Add some markers to the map.
  const markers = locations.map((location) => {
    const marker = new google.maps.Marker({
      position: location,
      icon: {
        path: pinScale.path, 
        scale: pinScale.scale, 
        fillColor: pinGlyph.glyphColor, 
        strokeColor: pinBorder.borderColor, 
      }
    });

    // Open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.setContent(location.placeName + " visited in " + location.year);
      infoWindow.open(map, marker);
    });

    return marker;
  });

  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}

const locations = [
  { lat: 23.1151, lng: 113.2952, placeName: 'Guangzhou', year:2000},
  { lat: 23.0121, lng: 113.1271, placeName: 'Foshan', year:2003},
  { lat: 23.0158, lng: 113.7591, placeName: 'Dongguan', year:2003},
  { lat: 21.2346, lng: 110.3916, placeName: 'Zhanjiang', year:2003},
  { lat: 23.0624, lng: 112.4749, placeName: 'Zhaoqing', year:2004},
  { lat: 23.7183, lng: 113.0357, placeName: 'Qingyuan', year:2004},
  { lat: 24.8201, lng: 113.5943, placeName: 'Shaoguan', year:2004},
  { lat: 21.8655, lng: 11.9956, placeName: 'Yangjiang', year:2004},
  { lat: 23.754, lng: 114.7023, placeName: 'Heyuan', year:2005},
  { lat: 22.9289, lng: 112.0432, placeName: 'Yunfu', year:2005},
  { lat: 22.3807, lng: 114.1978, placeName: 'HongKong', year:2006},
  { lat: 26.6039, lng: 106.6632, placeName: 'Guiyang', year:2006},
  { lat: 39.8956, lng: 116.4089, placeName: 'Beijing', year:2006},
  { lat: 39.1276, lng: 117.1946, placeName: 'Tianjin', year:2006},
  { lat: 18.9269, lng: 109.744, placeName: 'Hainan', year:2007},
  { lat: 29.711, lng: 118.3136, placeName: 'Huangshan', year:2007},
  { lat: 31.2282, lng: 121.5082, placeName: 'Shanghai', year:2008},
  { lat: 31.8404, lng: 117.2797, placeName: 'Hefei', year:2008},
  { lat: 22.5489, lng: 114.0905, placeName: 'Shenzhen', year:2009},
  { lat: 25.2747, lng: 110.3035, placeName: 'Guilin', year:2009},
  { lat: 34.2823, lng: 108.9555, placeName: 'Xian', year:2009},
  { lat: 26.4354, lng: 111.602, placeName: 'Yongzhou', year:2010},
  { lat: 28.1716, lng: 113.0102, placeName: 'Changsha', year:2010},
  { lat: 1.4109, lng: 103.7926, placeName: 'Singapore', year:2011},
  { lat: 3.0206, lng: 101.7065, placeName: 'Malaysia', year:2011},
  { lat: 37.5706, lng: 126.983, placeName: 'Seoul', year:2012},
  { lat: 33.3641, lng: 126.5382, placeName: 'Jeju-do', year:2012},
  { lat: 22.1908, lng: 113.548, placeName: 'Macao', year:2013},
  { lat: 35.6684, lng: 139.741, placeName: 'Tokyo', year:2013},
  { lat: 35.2051, lng: 136.8687, placeName: 'Nagoya', year:2013},
  { lat: 35.0042, lng: 135.7629, placeName: 'Kyoto', year:2013},
  { lat: -27.5107, lng: 153.0385, placeName: 'Brisbane', year:2014},
  { lat: -28.0112, lng: 153.4041, placeName: 'Gold Coast', year:2014},
  { lat: -32.0183, lng: 115.9354, placeName: 'Perth', year:2014},
  { lat: 40.7149, lng: -73.9521, placeName: 'New York', year:2015},
  { lat: 39.9599, lng: -75.1486, placeName: 'Philadelphia', year:2015},
  { lat: 38.8996, lng: -77.0238, placeName: 'Washington DC', year:2015},
  { lat: 42.3497, lng: -71.0781, placeName: 'Boston', year:2015},
  { lat: -33.8817, lng: 151.1705, placeName: 'Sydney', year:2016},
  { lat: -37.826, lng: 144.9977, placeName: 'Melbourne', year:2016},
  { lat: 30.2873, lng: 120.1746, placeName: 'Hangzhou', year:2017},
  { lat: 44.671, lng: -63.6753, placeName: 'Halifax', year:2017},
  { lat: 44.9923, lng: -64.1384, placeName: 'Windsor', year:2017},
  { lat: 49.2454, lng: -123.1017, placeName: 'Vancouver', year:2017},
  { lat: 24.5132, lng: 118.1053, placeName: 'Xiamen', year:2018},
  { lat: 44.4939, lng: -63.9161, placeName: 'Peggys Cove', year:2018},
  { lat: 46.0692, lng: -64.7067, placeName: 'Moncton', year:2018},
  { lat: 46.4105, lng: -63.7903, placeName: 'Summerside', year:2018},
  { lat: 45.5011, lng: -73.5776, placeName: 'Montreal', year:2018},
  { lat: 45.4313, lng: -75.6984, placeName: 'Ottawa', year:2018},
  { lat: 44.2543, lng: -76.5278, placeName: 'Kingston', year:2018},
  { lat: 43.6693, lng: -79.3946, placeName: 'Toronto', year:2018},
  { lat: 43.257, lng: -79.8857, placeName: 'Hamilton', year:2018},
  { lat: 34.6876, lng: 135.5249, placeName: 'Osaka', year:2019},
  { lat: 34.6723, lng: 133.9355, placeName: 'Okayama', year:2019},
  { lat: -2.3308, lng: 34.8425, placeName: 'Tanzania', year:2019},
  { lat: 34.0624, lng: -118.3567, placeName: 'Los Angeles', year:2019},
  { lat: 32.7446, lng: -117.1527, placeName: 'San Diego', year:2019},
  { lat: 32.0151, lng: 118.7853, placeName: 'Nanjing', year:2020},
  { lat: 36.0745, lng: 103.739, placeName: 'Lanzhou', year:2020},
  { lat: 40.0419, lng: 94.8077, placeName: 'Gansu', year:2020},
  { lat: 36.2762, lng: 100.626, placeName: 'Qinghai', year:2020},
  { lat: 22.7785, lng: 15.3663, placeName: 'Shanwei', year:2021},
  { lat: 23.3828, lng: 116.7034, placeName: 'Shantou', year:2021},
  { lat: 23.6625, lng: 116.6179, placeName: 'Chaozhou', year:2021},
  { lat: 30.654, lng: 104.0691, placeName: 'Chengdu', year:2021},
  { lat: 46.8068, lng: -71.2447, placeName: 'Québec City', year:2022},
  { lat: 51.0466, lng: -114.0398, placeName: 'Calgary', year:2023},
  { lat: 44.3424, lng: -78.7348, placeName: 'Lindsay', year:2023},
];

// more ideas: split-map-panes with satellite/streetview?; inset-map?; polyline? 