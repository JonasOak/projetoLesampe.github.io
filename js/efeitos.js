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

// Ler mais e ler menos
function alternarTexto(event) {
  var textoCompleto = document.getElementById("textoCompleto");
  var lerMais = document.getElementById("lerMais");
  var inicio = window.scrollY || window.pageYOffset;

  if (textoCompleto.style.display === "none" || textoCompleto.style.display === "") {
    textoCompleto.style.display = "inline";
    lerMais.textContent = "Ler Menos";
  } else {
    textoCompleto.style.display = "none";
    lerMais.textContent = "Ler Mais...";
  }
  window.scrollTo(0, inicio);
  event.preventDefault();
}  
  
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