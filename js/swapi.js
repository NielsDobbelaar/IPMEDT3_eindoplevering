AFRAME.registerComponent("planets", {
  init:  function() {
    const planets = document.querySelectorAll("[planeten]");
    const BASE_URL = "https://swapi.dev/api/";
    const PLANETS = "planets/"
    this.newPlanets = function(){
      for(let i = 0; i < planets.length; i++){
        let randomNum = Math.floor(Math.random() * 10) + 1;
        fetch(BASE_URL + PLANETS + randomNum)
          .then(response => response.json())
          .then(data => planets[i].setAttribute("value", "Target planet: \n" + data.name));
      }
    }
    this.el.addEventListener("click",this.newPlanets);
  },
  update: function() {
    this.newPlanets();
  },
});

function refresh(){
  let planetComponent = document.querySelector('[planets]').components.planets;
  planetComponent.update()
}
