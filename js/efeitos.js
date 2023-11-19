// Zoom nos ícones
function aplicarZoom(zoom) {
  zoom.style.transform = "scale(1.3)";
}

function removerZoom(zoom) {
  zoom.style.transform = "scale(1)";
}

// Efeito de transição
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

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
  

/* Efeito cards aba serviços */
function toggleCard(cardNumber) {
  var card = document.querySelector('.card:nth-child(' + cardNumber + ')');
  card.classList.toggle('active');
}  