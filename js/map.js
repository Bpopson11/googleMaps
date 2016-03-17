exports.initMap = function() {

var map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 45.523452, lng: -122.676207},
  zoom: 12

  });

var fact1 = '<div class="content">'+
    '<div id="fact1">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Mount Tabor</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Mount Tabor</b>, is a volcano. Well it was. Portland is just one of two cities in the US that have a dormant volcano found within city limits. While there are no current predictions of it reawakening anytime soon, residents in the area are required by the state to have additional volcano coverage included in their homeowners insurance. Just in case.</p>'+'<button class="btn btn-success" value="wrong">True</button><button class="btn btn-danger">False</button>'+
    '</div>';

var infowindow1 = new google.maps.InfoWindow( {
  content: fact1
});

var marker1 = new google.maps.Marker( {
  position: {lat: 45.517985, lng: -122.594776},
  map: map,
  title: ""
});



var fact2 = '<div class="content">'+
    '<div id="fact2">'+
    '</div>'+
    '<h1 id="firstHeading2" class="firstHeading">Oregon Humane Society</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Oregon Humane Society</b>, marks the final resting place of Bobbie the Wonder Dog. Bobbie successfully navigated his way home after getting lost in Indiana! That is a 2800 mile trip!</p>'+'<button class="btn btn-success" value="correct">True</button><button class="btn btn-danger" value="wrong">False</button>'+
    '</div>';

var infowindow2 = new google.maps.InfoWindow( {
  content: fact2
});

var marker2 = new google.maps.Marker( {
  position: {lat: 45.579153, lng: -122.652616},
  map: map,
  title: ""
});

var fact3 = '<div class="content">'+
    '<div id="fact4">'+
    '</div>'+
    '<h1 id="firstHeading3" class="firstHeading">Willamette River</h1>'+
    '<div id="bodyContent3">'+
    '<p><b>The Willamette River</b>, was home to possibly the first river boat brothel madam, Nancy Boggs.  It was said she had easy access to the entire area along the river, with a large client base as Portland did not yet have bridges in the late 1800s. She did not pay any taxes to the city.</p>'+'<button class="btn btn-success" value="correct">True</button><button class="btn btn-danger" value="wrong">False</button>'+
    '</div>';

var infowindow3 = new google.maps.InfoWindow( {
  content: fact3
});

var marker3 = new google.maps.Marker( {
  position: {lat: 45.525878, lng: -122.667664},
  map: map,
  title: ""
});

var fact4 = '<div class="content">'+
    '<div id="fact4">'+
    '</div>'+
    '<h1 id="firstHeading4" class="firstHeading">Oaks Park</h1>'+
    '<div id="bodyContent4">'+
    '<p><b>Oaks Park</b>, has been the "Coney Island of the Northwest" since 1905. A well loved attraction located just south of Portland proper, it is one of the oldest amusement parks in the US. It even has a skating rink! Did you know that it is actually illegal to get married in a skating rink? <a href="HTTP://voodoodoughnut.com/voodoo-doughnut-weddings.php">Donut shop?</a> Totally fine!</p>'+'<button class="btn btn-success" value="correct">True</button><button class="btn btn-danger" value="wrong">False</button>'+
    '</div>';

var infowindow4 = new google.maps.InfoWindow( {
  content: fact4
});

var marker4 = new google.maps.Marker( {
  position: {lat: 45.471880, lng: -122.66162},
  map: map,
  title: ""
});


var fact5 = '<div class="content">'+
    '<div id="fact5">'+
    '</div>'+
    '<h1 id="firstHeading5" class="firstHeading">Forest Park</h1>'+
    '<div id="bodyContent5">'+
    '<p><b>Forest Park</b> is the largest urban forest to be found in the United States. It is struggling with invasive ivy though. As Portland benefits from the beauty of this park, all citizens are charged with the task of removing any invasive ivy found on the trees. Park Rangers are always on hand with chalomine lotion as the invasive ivy and poison ivy look the same.</p>'+'<button class="btn btn-success" value="wrong">True</button><button class="btn btn-danger" value="correct">False</button>'+
    '</div>';

var infowindow5 = new google.maps.InfoWindow( {
  content: fact5
});

var marker5 = new google.maps.Marker( {
  position: {lat: 45.578244, lng: -122.775006},
  map: map,
  title: ""
});

var fact6 = '<div class="content">'+
    '<div id="fact6">'+
    '</div>'+
    '<h1 id="firstHeading6" class="firstHeading">Pittock Mansion</h1>'+
    '<div id="bodyContent6">'+
    '<p><b>Pittock Mansion</b> is a French Renaissance-style château in the West Hills of Portland. The mansion was originally built in 1909 as a private home for London-born publisher Henry Pittock and his wife, Georgiana. It is said that the Mansion is haunted by the ghosts of Henry and Georgiana. Visitors have reported hearing mutterings and complaints about the influx of Californians to the city.</p>'+'<button class="btn btn-success" value="wrong">True</button><button class="btn btn-danger" value="correct">False</button>'+
    '</div>';

var infowindow6 = new google.maps.InfoWindow( {
  content: fact6
});

var marker6 = new google.maps.Marker( {
  position: {lat: 45.525219, lng: -122.716309},
  map: map,
  title: ""
});

var fact7 = '<div class="content">'+
    '<div id="fact7">'+
    '</div>'+
    '<h1 id="firstHeading7" class="firstHeading">Rain or Shine</h1>'+
    '<div id="bodyContent7">'+
    '<p><b>Rain or Shine</b> coffee is a cute shop neslted in SE off Division. Known for their eclectic variety of drinks, the Lavendar or Cardamom lattes are local favorites. What makes this shop unique though is that in order to qualify to be a barista, you must have at least one visible tattoo.</p>'+'<button class="btn btn-success" value="wrong">True</button><button class="btn btn-danger" value="correct">False</button>'+
    '</div>';

var infowindow7 = new google.maps.InfoWindow( {
  content: fact7
});

var marker7 = new google.maps.Marker( {
  position: {lat: 45.505491, lng: -122.601835},
  map: map,
  title: ""
});

var fact8 = '<div class="content">'+
    '<div id="fact8">'+
    '</div>'+
    '<h1 id="firstHeading8" class="firstHeading">Collins Beach</h1>'+
    '<div id="bodyContent8">'+
    '<p><b>Collins Beach</b> is a popular destination for Portlanders in the summer. A little over a mile long many people can be seen playing in the Columbia River, catching some sun, and sometimes they are seen wearing nothing but a pirate hat! Part of Collins Beach is one of two Clothing Optional beachs in the state.</p>'+'<button class="btn btn-success" value="correct">True</button><button class="btn btn-danger" value="wrong">False</button>'+
    '</div>';

var infowindow8 = new google.maps.InfoWindow( {
  content: fact8
});

var marker8 = new google.maps.Marker( {
  position: {lat: 45.788729, lng: -122.787344},
  map: map,
  title: ""
});

var fact9 = '<div class="content">'+
    '<div id="fact9">'+
    '</div>'+
    '<h1 id="firstHeading9" class="firstHeading">Beaverton</h1>'+
    '<div id="bodyContent9">'+
    '<p><b>Beaverton</b> got its name from the large population of beavers in the area.  </p>'+'<button class="btn btn-success">True</button><button class="btn btn-danger">False</button>'+
    '</div>';

var infowindow9 = new google.maps.InfoWindow( {
  content: fact9
});

var marker9 = new google.maps.Marker( {
  position: {lat: 45.497113, lng: -122.845688},
  map: map,
  title: ""
});


marker1.addListener('click', function() {
  infowindow1.open(map, marker1);
});

marker2.addListener('click', function() {
  infowindow2.open(map, marker2);
});

marker3.addListener('click', function() {
  infowindow3.open(map, marker3);
});

marker4.addListener('click', function() {
  infowindow4.open(map, marker4);
});

marker5.addListener('click', function() {
  infowindow5.open(map, marker5);
});

marker6.addListener('click', function() {
  infowindow6.open(map, marker6);
});

marker7.addListener('click', function() {
  infowindow7.open(map, marker7);
});

marker8.addListener('click', function() {
  infowindow8.open(map, marker8);
});

marker9.addListener('click', function() {
  infowindow9.open(map, marker9);
});

};
