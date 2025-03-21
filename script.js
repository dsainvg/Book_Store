function toggleHomecategories() {
    document.getElementById("home").classList.toggle("seen");
  } 
  window.onclick = function(e) {
    if (!e.target.matches('.symbol')) {
    var home = document.getElementById("home");
      if (home.classList.contains('seen')) {
        home.classList.remove('seen');
      }
    }
  }