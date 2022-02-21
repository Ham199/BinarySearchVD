
gsap.registerEffect(ScrollTrigger);


gsap.from('.beispiel_button', { duration: 1, opacity: 0, ease: 'sine'})
gsap.from('.theorie_button', { duration: 1, opacity: 0, ease: 'sine'})
gsap.from('.simulation_button', { duration: 1, opacity: 0, ease: 'sine'})
gsap.from('.uebung_button', { duration: 1, opacity: 0, ease: 'sine'})
gsap.from('.banner', { duration: 1, opacity: 0, ease: 'power3'})


//Für eine Bildschirmbreite unter 500 px
if (window.innerWidth > 500) {

    const tl = gsap.timeline({defaults: {ease: "power1.out"}});

   /* tl.to(".text", {y: "0%", duration: 1, stagger: 0.5});
    tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
    tl.to(".intro", {y: "-100%", duration: 1}, "-=1");
    */tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1, ease: 'power1'});
    tl.fromTo(".big-text", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
    tl.from('.toolbar', {duration: 1, y: '-100%', ease: 'sine', duration: 1}, "-=1")

} else {
    gsap.to(".slider", {y: "100%", duration: 0});
    gsap.to(".intro", {y: "100%", duration: 0});

}

$(window).on("load",function() {
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity")==0) {$(this).fadeTo(700,1);}
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});


document.addEventListener("click", e=>{
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if(!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    let currentDropdown
    if(isDropdownButton){
    currentDropdown = e.target.closest('[data-dropdown]')
        currentDropdown.classList.toggle('active')
    }
    document.querySelectorAll("[data-dropdown].active").forEach(dropdown =>{
        if (dropdown=== currentDropdown) return
        dropdown.classList("active")
    })

})



let NumberOfBars =0;
var ContainerSimulation = document.getElementById("arraySimulation");
var ContainerTrainer = document.getElementById("arrayTrainer");
let StartTrainer = 0;
let EndTrainer = 19;
let ArrayTrainer = [];
let StartSimulation = 0;
let EndSimulation = 19;
let FlagSimulation = 0;
let NumberTrainer = 0;



// Array erstellen
function generateArraySimulation() {
    if (window.innerWidth < 960) {
        NumberOfBars = 11
        EndSimulation=10;
    } else{
        NumberOfBars = 20;

    }

    var ArraySimulation = [];

// Array befüllen
    for (var i = 0; i < NumberOfBars; i++) {
        var ValueSimulation = Number(Math.ceil(Math.random() * 100));
        ArraySimulation.push(ValueSimulation);

    }

    ArraySimulation.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < NumberOfBars; i++) {
        var DivValueSimulation = ArraySimulation[i];

        // Div Elemente werden erstellt
        var ElementSimulation = document.createElement("div");


        ElementSimulation.classList.add("blockSimulation");
        ElementSimulation.style.height = `${DivValueSimulation * 3}px`;

        var LabelSimulation = document.createElement("label");
        LabelSimulation.classList.add("blockId");
        LabelSimulation.innerText = DivValueSimulation;

        // Div Elemente werden zur HTML Datei hinzugefügt
        ElementSimulation.appendChild(LabelSimulation);
        ContainerSimulation.appendChild(ElementSimulation);
    }
}

// Binäre Suche
async function binarySearchSimulation(delay = 3000) {
    var BlocksSimulation = document.querySelectorAll(".blockSimulation");
    var OutputSimulation= document.getElementById("textSimulation");
    var NumberSimulation = document.getElementById("nameSimulation").value;


    for (var i = 0; i < BlocksSimulation.length; i += 1) {
        BlocksSimulation[i].style.backgroundColor = "#5e7080";
    }

    OutputSimulation.innerText = "";

    // Iterativ


    while (StartSimulation <= EndSimulation) {

        var MidSimulation = Math.floor((StartSimulation + EndSimulation) / 2);
        BlocksSimulation[MidSimulation].style.backgroundColor = "#c50219";

        var ElementValueSimulation = Number(BlocksSimulation[MidSimulation].childNodes[0].innerHTML);

        // Verzögerung
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );


        if (ElementValueSimulation == NumberSimulation) {
            OutputSimulation.innerText = "Die Zahl wurde in der Zahlenmenge gefunden!";
            BlocksSimulation[MidSimulation].style.backgroundColor = "#36dc0a";
            FlagSimulation = 1;
            break;
        }

        if (ElementValueSimulation > NumberSimulation) {
            EndSimulation = MidSimulation - 1;

            for (var i = StartSimulation; i < MidSimulation; i += 1) {
                BlocksSimulation[i].style.backgroundColor = "#90da93";
            }
            for (var i = MidSimulation; i < BlocksSimulation.length; i += 1) {
                BlocksSimulation[i].style.backgroundColor = "#5e7080";
            }
        } else {
            StartSimulation = MidSimulation + 1;

            for (var i = MidSimulation; i <= EndSimulation; i += 1) {
                BlocksSimulation[i].style.backgroundColor = "#90da93";

            }
            for (var i = 0; i <= MidSimulation; i += 1) {
                BlocksSimulation[i].style.backgroundColor = "#5e7080";
            }
        }
    }
    if (FlagSimulation === 0) {
        OutputSimulation.innerText = "Die Zahl existiert nicht in der Zahlenmenge.";
    }
}

generateArraySimulation();

function generateArrayTrainer() {
    if (window.innerWidth < 960) {
        NumberOfBars = 11;
        EndTrainer=10;
    } else{
        NumberOfBars = 20;
    }

    for (var i = 0; i < NumberOfBars; i++) {
        // Return a value from 1 to 100 (both inclusive)
        var ValueTrainer = Number(Math.ceil(Math.random() * 100));
        ArrayTrainer.push(ValueTrainer);
    }


    ArrayTrainer.sort(function (a, b) {
        return a - b;
    });
    var RandomNumber = Number(Math.ceil(Math.random() * NumberOfBars-1));
    var TextRandomNumber= document.getElementById("textRandom");
    ArrayRandomNumber =ArrayTrainer[RandomNumber];
    console.log(ArrayRandomNumber);
    console.log(RandomNumber);
    TextRandomNumber.innerText = "Suche nach der Nummer: "+ ArrayRandomNumber;
    for (var i = 0; i < NumberOfBars; i++) {
        var DivValueTrainer = ArrayTrainer[i];


        var ElementTrainer = document.createElement("div");


        ElementTrainer.classList.add("blockTrainer");


        ElementTrainer.style.height = `${DivValueTrainer * 3}px`;

        var LabelTrainer = document.createElement("label");
        LabelTrainer.classList.add("blockId");
        LabelTrainer.innerText = DivValueTrainer;


        ElementTrainer.appendChild(LabelTrainer);
        ContainerTrainer.appendChild(ElementTrainer);
    }

}
generateArrayTrainer();

//Div Element anklickbar

var Clicked = document.getElementsByClassName('blockTrainer');
for (let i = 0; i < Clicked.length; i++ ){
    Clicked[i].addEventListener("click",function (){
        NumberTrainer = ArrayTrainer[i];
        Trainer();
    })

}

// Funktion für die interaktive Suche
function Trainer() {
    var BlocksTrainer = document.querySelectorAll(".blockTrainer");
    var OutputTrainer = document.getElementById("textTrainer");

    OutputTrainer.innerText = "";

    //Iterativ
    while (StartTrainer <= EndTrainer) {
        let MidTrainer = Math.floor((StartTrainer + EndTrainer) / 2);

        var DivValueTrainer = Number(BlocksTrainer[MidTrainer].childNodes[0].innerHTML);


        if (ArrayRandomNumber == NumberTrainer) {

            OutputTrainer.innerText = "Du hast es geschafft!";
            for (var i = 0; i < BlocksTrainer.length; i += 1) {
                BlocksTrainer[i].style.backgroundColor = "#ffd700";
            }
            break;
        } else if (NumberTrainer == DivValueTrainer) {


            OutputTrainer.innerText = "Richtig";
            BlocksTrainer[MidTrainer].style.backgroundColor = "#36dc0a";

            if (ArrayRandomNumber < NumberTrainer) {
                EndTrainer = MidTrainer - 1;
                break;
            } else  {
                StartTrainer = MidTrainer + 1;
                break;
            }
            break;

        } else {
            OutputTrainer.innerText = "Falsch";
            for (var i = 0; i < BlocksTrainer.length; i += 1) {
                BlocksTrainer[i].style.backgroundColor = "#c50219";
            }
            break;
        }
    }
}

