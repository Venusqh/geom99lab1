function initMap() {
  const map = new google.maps.Map(document.getElementById("mapid"), {
    zoom: 3,
    center: { lat: 29.868, lng: 100.060 },
  });

  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
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
      infoWindow.setContent(location.name + " - visited in " + location.year);
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
  { lat: 23.1151, lng: 113.2952, name: Guangzhou, year:2000},
  { lat: 23.0121, lng: 113.1271, name: Foshan, year:2003},
  { lat: 23.0158, lng: 113.7591, name: Dongguan, year:2003},
  { lat: 21.2346, lng: 110.3916, name: Zhanjiang, year:2003},
  { lat: 23.0624, lng: 112.4749, name: Zhaoqing, year:2004},
  { lat: 23.7183, lng: 113.0357, name: Qingyuan, year:2004},
  { lat: 24.8201, lng: 113.5943, name: Shaoguan, year:2004},
  { lat: 21.8655, lng: 11.9956, name: Yangjiang, year:2004},
  { lat: 23.754, lng: 114.7023, name: Heyuan, year:2005},
  { lat: 22.9289, lng: 112.0432, name: Yunfu, year:2005},
  { lat: 22.3807, lng: 114.1978, name: HongKong, year:2006},
  { lat: 26.6039, lng: 106.6632, name: Guiyang, year:2006},
  { lat: 39.8956, lng: 116.4089, name: Beijing, year:2006},
  { lat: 39.1276, lng: 117.1946, name: Tianjin, year:2006},
  { lat: 18.9269, lng: 109.744, name: Hainan, year:2007},
  { lat: 29.711, lng: 118.3136, name: Huangshan, year:2007},
  { lat: 31.2282, lng: 121.5082, name: Shanghai, year:2008},
  { lat: 31.8404, lng: 117.2797, name: Hefei, year:2008},
  { lat: 22.5489, lng: 114.0905, name: Shenzhen, year:2009},
  { lat: 25.2747, lng: 110.3035, name: Guilin, year:2009},
  { lat: 34.2823, lng: 108.9555, name: Xian, year:2009},
  { lat: 26.4354, lng: 111.602, name: Yongzhou, year:2010},
  { lat: 28.1716, lng: 113.0102, name: Changsha, year:2010},
  { lat: 1.4109, lng: 103.7926, name: Singapore, year:2011},
  { lat: 3.0206, lng: 101.7065, name: Malaysia, year:2011},
  { lat: 37.5706, lng: 126.983, name: Seoul, year:2012},
  { lat: 33.3641, lng: 126.5382, name: Jeju-do, year:2012},
  { lat: 22.1908, lng: 113.548, name: Macao, year:2013},
  { lat: 35.6684, lng: 139.741, name: Tokyo, year:2013},
  { lat: 35.2051, lng: 136.8687, name: Nagoya, year:2013},
  { lat: 35.0042, lng: 135.7629, name: Kyoto, year:2013},
  { lat: -27.5107, lng: 153.0385, name: Brisbane, year:2014},
  { lat: -28.0112, lng: 153.4041, name: Gold Coast, year:2014},
  { lat: -32.0183, lng: 115.9354, name: Perth, year:2014},
  { lat: 40.7149, lng: -73.9521, name: New York, year:2015},
  { lat: 39.9599, lng: -75.1486, name: Philadelphia, year:2015},
  { lat: 38.8996, lng: -77.0238, name: Washington DC, year:2015},
  { lat: 42.3497, lng: -71.0781, name: Boston, year:2015},
  { lat: -33.8817, lng: 151.1705, name: Sydney, year:2016},
  { lat: -37.826, lng: 144.9977, name: Melbourne, year:2016},
  { lat: 30.2873, lng: 120.1746, name: Hangzhou, year:2017},
  { lat: 44.671, lng: -63.6753, name: Halifax, year:2017},
  { lat: 44.9923, lng: -64.1384, name: Windsor, year:2017},
  { lat: 49.2454, lng: -123.1017, name: Vancouver, year:2017},
  { lat: 24.5132, lng: 118.1053, name: Xiamen, year:2018},
  { lat: 44.4939, lng: -63.9161, name: Peggys Cove, year:2018},
  { lat: 46.0692, lng: -64.7067, name: Moncton, year:2018},
  { lat: 46.4105, lng: -63.7903, name: Summerside, year:2018},
  { lat: 45.5011, lng: -73.5776, name: Montreal, year:2018},
  { lat: 45.4313, lng: -75.6984, name: Ottawa, year:2018},
  { lat: 44.2543, lng: -76.5278, name: Kingston, year:2018},
  { lat: 43.6693, lng: -79.3946, name: Toronto, year:2018},
  { lat: 43.257, lng: -79.8857, name: Hamilton, year:2018},
  { lat: 34.6876, lng: 135.5249, name: Osaka, year:2019},
  { lat: 34.6723, lng: 133.9355, name: Okayama, year:2019},
  { lat: -2.3308, lng: 34.8425, name: Tanzania, year:2019},
  { lat: 34.0624, lng: -118.3567, name: Los Angeles, year:2019},
  { lat: 32.7446, lng: -117.1527, name: San Diego, year:2019},
  { lat: 32.0151, lng: 118.7853, name: Nanjing, year:2020},
  { lat: 36.0745, lng: 103.739, name: Lanzhou, year:2020},
  { lat: 40.0419, lng: 94.8077, name: Gansu, year:2020},
  { lat: 36.2762, lng: 100.626, name: Qinghai, year:2020},
  { lat: 22.7785, lng: 15.3663, name: Shanwei, year:2021},
  { lat: 23.3828, lng: 116.7034, name: Shantou, year:2021},
  { lat: 23.6625, lng: 116.6179, name: Chaozhou, year:2021},
  { lat: 30.654, lng: 104.0691, name: Chengdu, year:2021},
  { lat: 46.8068, lng: -71.2447, name: Québec City, year:2022},
  { lat: 51.0466, lng: -114.0398, name: Calgary, year:2023},
  { lat: 44.3424, lng: -78.7348, name: Lindsay, year:2023},
];
