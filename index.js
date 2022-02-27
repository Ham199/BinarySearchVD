gsap.from('.beispielButton', { duration: 1, opacity: 0, ease: 'sine'})
gsap.from('.theorieButton', { duration: 1, opacity: 0, ease: 'sine'})
gsap.from('.simulationButton', { duration: 1, opacity: 0, ease: 'sine'})
gsap.from('.uebungButton', { duration: 1, opacity: 0, ease: 'sine'})
gsap.from('.banner', { duration: 1, opacity: 0, ease: 'power3'})


//Für eine Bildschirmbreite unter 500 px
if(window.innerWidth > 500) {
    const first_time= document.cookie;
    const tl = gsap.timeline({defaults: {ease: "power1.out"}});

    if(first_time == "visited"){
        skipIntro(tl)
    }
    if (first_time == ""){
        playIntro(tl)
    }

    document.cookie= "visited"
} else {
    mobileSkipIntro()

}
// Umsetzung ds Intros
function playIntro(tl){
    tl.to(".text", {y: "0%", duration: 1, stagger: 0.5});
    tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
    tl.to(".intro", {y: "-100%", duration: 1}, "-=1");
    tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1, ease: 'power1'});
    tl.fromTo(".big-text", {opacity: 0}, {opacity: 1, duration: 1}, "-=1");
    tl.from('.toolbar', {duration: 1, y: '-100%', ease: 'sine', duration: 1}, "-=1")
}

function skipIntro(tl){
    tl.to(".text", {opacity: 0});
    tl.to(".slider", {opacity: 0});
    tl.to(".intro", {opacity: 0});
    tl.to(".text", {y: "0%", duration: 0.1, stagger: 0.5});
    tl.to(".slider", {y: "-100%", duration: 0.1, delay: 0.5});
    tl.to(".intro", {y: "-100%", duration: 0.1}, "-=1");
    tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1, ease: 'power1'}, "-=1");
    tl.fromTo(".big-text", {opacity: 0}, {opacity: 1, duration: 0.5}, "-=2");
    tl.from('.toolbar', {y: '-100%', ease: 'sine', duration: 0.5}, "-=2")
}

function mobileSkipIntro(){
    gsap.to(".slider", {y: "100%", duration: 0});
    gsap.to(".intro", {y: "100%", duration: 0});
}

// Einblendung durch scrollen
$(window).on("load",function() {
    $(window).scroll(function() {
        let windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fade").each(function() {

            let objectBottom = $(this).offset().top + $(this).outerHeight();

            if(objectBottom < windowBottom) {
                if($(this).css("opacity")==0) {$(this).fadeTo(700,1);}
            }
        });
    }).scroll();
});

// Menü in Mobile-Version
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

//Alle Variablen
let NumberOfBars =0;
let ContainerSimulation = document.getElementById("arraySimulation");
let ContainerTrainer = document.getElementById("arrayTrainer");
let StartTrainer = 0;
let EndTrainer = 19;
let ArrayTrainer = [];
let StartSimulation = 0;
let EndSimulation = 19;
let FlagSimulation = 0;
let NumberTrainer = 0;

// Array für Simulation erstellen
function generateArraySimulation() {
    // Für Mobile Version 11 Balken & für Desktop-Version 20 Balken
    if (window.innerWidth < 960) {
        NumberOfBars = 11
        EndSimulation=10;
    } else{
        NumberOfBars = 20;

    }

    let ArraySimulation = [];

    // Array befüllen
    for(let i = 0; i < NumberOfBars; i++) {
        let ValueSimulation = Number(Math.ceil(Math.random() * 100));
        ArraySimulation.push(ValueSimulation);

    }
    // Array sortieren
    ArraySimulation.sort(function (a, b) {
        return a - b;
    });

    for(let i = 0; i < NumberOfBars; i++) {
        let DivValueSimulation = ArraySimulation[i];

        // Div Elemente werden erstellt
        let ElementSimulation = document.createElement("div");

        ElementSimulation.classList.add("blockSimulation");
        ElementSimulation.style.height = `${DivValueSimulation * 3}px`;

        let LabelSimulation = document.createElement("label");
        LabelSimulation.classList.add("blockId");
        LabelSimulation.innerText = DivValueSimulation;

        // Div Elemente werden zur HTML Datei hinzugefügt
        ElementSimulation.appendChild(LabelSimulation);
        ContainerSimulation.appendChild(ElementSimulation);
    }
}

// Funktion der Binären Suche für Simulation
async function binarySearchSimulation(delay = 3000) {
    let BlocksSimulation = document.querySelectorAll(".blockSimulation");
    let OutputSimulation= document.getElementById("textSimulation");
    let NumberSimulation = document.getElementById("nameSimulation").value;

    // Binäre Suche
    for(let i = 0; i < BlocksSimulation.length; i += 1) {
        BlocksSimulation[i].style.backgroundColor = "#5e7080";
    }

    OutputSimulation.innerText = "";

    while(StartSimulation <= EndSimulation) {

        let MidSimulation = Math.floor((StartSimulation + EndSimulation) / 2);
        BlocksSimulation[MidSimulation].style.backgroundColor = "#c50219";

        let ElementValueSimulation = Number(BlocksSimulation[MidSimulation].childNodes[0].innerHTML);

        // Verzögerung
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );

        //If Bedingung für "Element gefunden"
        if(ElementValueSimulation == NumberSimulation) {
            OutputSimulation.innerText = "Die Zahl wurde in der Zahlenmenge gefunden!";
            BlocksSimulation[MidSimulation].style.backgroundColor = "#36dc0a";
            FlagSimulation = 1;
            break;
        }
        //If Bedingungen für "Element ist kleiner/größer als die Mitte"
        if(ElementValueSimulation > NumberSimulation) {
            EndSimulation = MidSimulation - 1;

            for(let i = StartSimulation; i < MidSimulation; i += 1) {
                BlocksSimulation[i].style.backgroundColor = "#90da93";
            }
            for(let i = MidSimulation; i < BlocksSimulation.length; i += 1) {
                BlocksSimulation[i].style.backgroundColor = "#5e7080";
            }
        }else{
            StartSimulation = MidSimulation + 1;

            for(let i = MidSimulation; i <= EndSimulation; i += 1) {
                BlocksSimulation[i].style.backgroundColor = "#90da93";

            }
            for(let i = 0; i <= MidSimulation; i += 1) {
                BlocksSimulation[i].style.backgroundColor = "#5e7080";
            }
        }
    }
    //If Bedingungen für "Element ist nicht in der Zahlenmenge"
    if(FlagSimulation === 0) {
        OutputSimulation.innerText = "Die Zahl existiert nicht in der Zahlenmenge.";
    }
}

generateArraySimulation();
    // Array für Übung erstellen
function generateArrayTrainer() {
    // Für Mobile Version 11 Balken & für Desktop-Version 20 Balken
    if(window.innerWidth < 960) {
        NumberOfBars = 11;
        EndTrainer=10;
    }else{
        NumberOfBars = 20;
    }
    // Array befüllen
    for(let i = 0; i < NumberOfBars; i++) {
        let ValueTrainer = Number(Math.ceil(Math.random() * 100));
        ArrayTrainer.push(ValueTrainer);
    }
    //Array sortieren
    ArrayTrainer.sort(function (a, b) {
        return a - b;
    });
    let RandomNumber = Number(Math.ceil(Math.random() * NumberOfBars-1));
    let TextRandomNumber= document.getElementById("textRandom");
    ArrayRandomNumber =ArrayTrainer[RandomNumber];
    console.log(ArrayRandomNumber);
    console.log(RandomNumber);
    TextRandomNumber.innerText = "Suche nach der Nummer: "+ ArrayRandomNumber;
    for (let i = 0; i < NumberOfBars; i++) {
        // Div Elemente werden erstellt
        let DivValueTrainer = ArrayTrainer[i];

        let ElementTrainer = document.createElement("div");

        ElementTrainer.classList.add("blockTrainer");

        ElementTrainer.style.height = `${DivValueTrainer * 3}px`;

        let LabelTrainer = document.createElement("label");
        LabelTrainer.classList.add("blockId");
        LabelTrainer.innerText = DivValueTrainer;

        // Div Elemente werden zur HTML Datei hinzugefügt
        ElementTrainer.appendChild(LabelTrainer);
        ContainerTrainer.appendChild(ElementTrainer);
    }

}
generateArrayTrainer();
//Div Element nun anklickbar
let Clicked = document.getElementsByClassName('blockTrainer');
for (let i = 0; i < Clicked.length; i++ ){
    Clicked[i].addEventListener("click",function (){
        NumberTrainer = ArrayTrainer[i];
        Trainer();
    })

}

// Funktion für die interaktive Suche
function Trainer() {
    let BlocksTrainer = document.querySelectorAll(".blockTrainer");
    let OutputTrainer = document.getElementById("textTrainer");

    OutputTrainer.innerText = "";

    //Binäre Suche
    while(StartTrainer <= EndTrainer) {
        let MidTrainer = Math.floor((StartTrainer + EndTrainer) / 2);

        let DivValueTrainer = Number(BlocksTrainer[MidTrainer].childNodes[0].innerHTML);
        //If Bedingungen für "Finales Element gefunden"
        if(ArrayRandomNumber == NumberTrainer) {

            OutputTrainer.innerText = "Du hast es geschafft!";
            for (let i = 0; i < BlocksTrainer.length; i += 1) {
                BlocksTrainer[i].style.backgroundColor = "#36dc0a";
            }
            break;
        }else if(NumberTrainer == DivValueTrainer) {
            //If Bedingungen für "Richtiger Zwischenschritt"
            OutputTrainer.innerText = "Richtig!";
            BlocksTrainer[MidTrainer].style.backgroundColor = "#ffd700";

            if(ArrayRandomNumber < NumberTrainer) {
                EndTrainer = MidTrainer - 1;
                break;
            }else{
                StartTrainer = MidTrainer + 1;
                break;
            }

        }else{
            //If Bedingungen für "Falscher Zwischenschritt"
            OutputTrainer.innerText = "Falsch.";
            for(let i = 0; i < BlocksTrainer.length; i += 1) {
                BlocksTrainer[i].style.backgroundColor = "#c50219";
            }
            break;
        }
    }
}