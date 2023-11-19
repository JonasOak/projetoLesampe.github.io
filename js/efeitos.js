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
  
/* Abrir e fechar ícones serviços home */
var coll = document.getElementsByClassName('icones-servicos');

for (var i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function() {
    
    var target = this.getAttribute('data-bs-target');
    var currentCollapses = document.querySelectorAll('.collapse.show');
    currentCollapses.forEach(function(collapse) {

      if (collapse.id !== target) {
        var bsCollapse = new bootstrap.Collapse(collapse);
        bsCollapse.hide();
      }
    });
  });
}


/* Efeito cards aba serviços */
function toggleCard(cardNumber) {
  var cards = document.querySelectorAll('.card');
  cards.forEach(function(card, index) {
    if (index + 1 === cardNumber) {
      card.classList.toggle('active');
    } else {
      card.classList.remove('active');
    }
  });
}