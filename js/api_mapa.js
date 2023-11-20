// Localização no google maps
function initMap() {
    var myLatLng = {lat: -12.933844305394144, lng: -38.50172459197853};
  
    var map = new google.maps.Map(document.getElementById('map'), {
      center: myLatLng,
      zoom: 15,
    });
  
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Lesampê'
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    initMap();
});