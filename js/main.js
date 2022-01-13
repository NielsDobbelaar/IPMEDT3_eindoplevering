const songSpeed = 500;


window.onload = () => {
    const startButton = document.getElementById("js--startButton");

    startButton.addEventListener("click", (event) => {
        startButton.parentNode.removeChild(startButton);
        var tempNotes = [2,2,4,2,2,1,2];

        startPlaying(tempNotes);
    })

    
}



const loadSong = () => {

}


const startPlaying = (notes) => {
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