const songSpeed = 300;


window.onload = () => {
    //functie om het liedje op te halen en vervolgens nadat de startknop geklikt is
    //begint deze functie het spel
    const startButton = document.getElementById("js--startButton");
    startButton.addEventListener("click", async (event) => {
        startButton.parentNode.removeChild(startButton);

        console.log(document.getElementsByClassName("hideAtStart"))
        for(let v of document.getElementsByClassName("hideAtStart")){
            v.parentNode.removeChild(v);
        }
      

      var notes = await loadSong();
      startPlaying(notes);
    })

    
}



const  loadSong = () => {
    //functie haalt het liedje op
   return fetch("../song.json")
    .then(response => response.json())
    .then(json => {return(json[0]["notes"])});
}


const startPlaying = (notes) => {
    //functie speelt het liedje af en spawnt de noten
    var time = 0;
    while (notes.length > 0) {
        setTimeout(() =>{
            console.log("spawned");

            var tempNote = document.createElement("a-box");
    
            let random = Math.round(Math.random() * 7 - 3.5);
            tempNote.setAttribute('color', 'red');
            tempNote.setAttribute("position", random + " -3.5 -25");
            tempNote.setAttribute("scale", "0.5 0.5 0.5");
            tempNote.classList.add("js--interact");
            tempNote.setAttribute("material", " color: red; shader: flat; opacity: 0");
            tempNote.setAttribute("note", "");

            document.getElementById("js--scene").appendChild(tempNote);
            let an = document.createAttribute("animation");
            an.value = "property: opacity; easing: linear; dur: 2000; to: 1";
            tempNote.setAttribute("animation", an.value);

        },time * songSpeed);
        time += notes[0];
        notes.shift();
    }
}