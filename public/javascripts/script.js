/*$(window).ready(function() {
  
  var map = L.map('map'); 
  
  L.tileLayer('//{s}.tile.cloudmade.com/41339be4c5064686b781a5a00678de62/998/256/{z}/{x}/{y}.png', {
    maxZoom: 18
  }).addTo(map);

  var marker0 = L.marker([41.9425622, -87.6979302]).addTo(map); marker0.bindPopup("Hot Dougs"); 
  var marker1 = L.marker([41.498282, -87.84796]).addTo(map); marker1.bindPopup("Museum");
  var marker2 = L.marker([41.5437472, -87.6786466]).addTo(map); marker2.bindPopup("Library"); 
  var marker3 = L.marker([41.561708, -87.667423]).addTo(map); marker3.bindPopup("Twisted Q");
  
  var group = new L.featureGroup([marker0, marker1, marker2, marker3]);
  
  map.fitBounds(group.getBounds()); 
});*/

//https://a.tiles.mapbox.com/v3/examples.map-i875mjb7/12/2049/1362.png

$(window).ready(function() {

  var map = L.map('map').setView([51.505, -0.09], 13);

  // L.Icon.Default.imagePath = 'path-to-your-leaflet-images-folder';

    L.tileLayer('https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
        '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      id: 'examples.map-i875mjb7'
    }).addTo(map);


    L.marker([51.5, -0.09]).addTo(map)
      .bindPopup("<b>Hello world!</b><br />I am a popup.").openPopup();

    L.circle([51.508, -0.11], 500, {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5
    }).addTo(map).bindPopup("I am a circle.");

    L.polygon([
      [51.509, -0.08],
      [51.503, -0.06],
      [51.51, -0.047]
    ]).addTo(map).bindPopup("I am a polygon.");

    var popup = L.popup();

    function onMapClick(e) {
      popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
    }

    map.on('click', onMapClick);

//////////////////////////////////////////////////////////////////////

  var myStyle = {
    "color": "#ff7800",
    "weight": 10,
    "opacity": 0.9
};

  var myLines = [{
      "type": "LineString",
      // "coordinates": [[51.5, -0.09], [51.510, -0.227], [70.515, -0.33]]
      "coordinates": [[-0.09, 51.5], [-0.227, 51.510], [-0.33, 70.515]] // ***WARN: geoJson [lon, lat], leaflet [lat, lon]
  }];

  L.geoJson(myLines, {
      style: myStyle
  }).addTo(map);

//////////////////////////////////////////////////////////////////////
/*  var geoObj = {
    "type": "Features",
    "properties":{
      "name": "geo_name",
      "amenity": "amenity_name",
      "popupContent": "popupContent name"
    },
    "geometries": {
      "type": "Point",
      "coordinates": [51.55, -0.052]
    }
  };
  L.geoJson(geoObj).addTo(map);
  var dataLayer = L.geoJson(geoObj).addTo(map);
  // dataLayer.addData(someGeoJsonObj); // dataLayer is an empty object when add to map;*/
  
/*  var states = [{
    "type": "Feature",
    "properties": {"party": "Republican"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [51.509, -0.08],
            [51.503, -0.06],
            [51.51, -0.047],
            [51.51, -0.030]
        ]]
    }
}, {
    "type": "Feature",
    "properties": {"party": "Democrat"},
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [51.509, -0.10],
            [51.503, -0.12],
            [51.51, -0.07],
            [51.51, -0.032]
        ]]
    }
}]; //states is an array which contain an object => because L.geoJson need it in this format*/

/*var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.9
};

L.geoJson(states, {
    style: myStyle
}).addTo(map);


  var myLines = [{
      "type": "LineString",
      "coordinates": [[51.505, -0.09], [51.510, -0.14], [70.515, -0.19]]
  }, {
    "type": "LineString",
    "coordinates": [[51.505, -0.09], [59.505, -0.19], [51.505, -9.29]]
}];

  L.geoJson(myLines, {
      style: myStyle
  }).addTo(map);*/

});