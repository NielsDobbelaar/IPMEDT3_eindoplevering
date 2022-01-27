const songSpeed = 600;

var score = 0;
 
var hitsound;
var misssound;

window.onload = () => {
    hitsound = document.getElementById("js--hit_entity");
    misssound = document.getElementById("js--miss_entity");
    //functie om het liedje op te halen en vervolgens nadat de startknop geklikt is
    //begint deze functie het spel
    const startButton = document.getElementById("js--startButton");
    startButton.addEventListener("click", async (event) => {
        startButton.parentNode.removeChild(startButton);

        for (let v of document.getElementsByClassName("hideAtStart")) {
            v.parentNode.removeChild(v);
        }



        var notes = await loadSong();
        startPlaying(notes);
    })

    const reStartButton = document.getElementById("js--reStartButton");
    reStartButton.addEventListener("click", async (event) => {
        // verplaatst het eindmenu nadat de speler op start heeft geklikt
        reStartButton.setAttribute("position", "10000" + " " + reStartButton.getAttribute("position").y + " " + reStartButton.getAttribute("position").z)

        for (let v of document.getElementsByClassName("eindMenu")) {
            v.setAttribute("position", "10000" + " " + v.getAttribute("position").y + " " + v.getAttribute("position").z)
        }

        var notes = await loadSong();
        startPlaying(notes);
    })

}



const loadSong = () => {
    //functie haalt het liedje op
    return fetch("song.json")
        .then(response => response.json())
        .then(json => {
            return (json[0]["notes"])
        });
}


const startPlaying = (notes) => {
    //functie speelt het liedje af en spawnt de noten
    var time = 0;
    while (notes.length > 0) {
        setTimeout(() => {

            var tempNote = document.createElement("a-entity");

            let random = Math.round(Math.random() * 7 - 3.5);
            tempNote.setAttribute('color', 'red');
            tempNote.setAttribute("position", random + " 7.5 -25");
            tempNote.setAttribute("scale", "0.05 0.05 0.05");
            tempNote.classList.add("js--interact");
            tempNote.setAttribute("gltf-model", "#note")
            tempNote.setAttribute("material", " color: red; shader: flat; opacity: 0");
            tempNote.setAttribute("rotation", "0 -90 -45")
            tempNote.setAttribute("note", "");

            document.getElementById("js--scene").appendChild(tempNote);
            let an = document.createAttribute("animation");
            an.value = "property: opacity; easing: linear; dur: 2000; to: 1";
            tempNote.setAttribute("animation", an.value);

        }, time * songSpeed);
        time += notes[0];
        notes.shift();
    }
    setTimeout(() => {
        openEindMenu();
    }, time * songSpeed + 5000);
}

const openEindMenu = () => {
    // opent eindMenu en update de score
    var scoreText = document.getElementById("js--score-text");
    scoreText.setAttribute("text", "value: score : " + score + "; color:white; align:center; wrapCount:25");

    for (let v of document.getElementsByClassName("eindMenu")) {
        v.setAttribute("position", "0" + " " + v.getAttribute("position").y + " " + v.getAttribute("position").z)
    }
}