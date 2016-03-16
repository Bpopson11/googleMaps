exports.initMap = function() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.523452, lng: -122.676207},
    zoom: 13
  });
}
