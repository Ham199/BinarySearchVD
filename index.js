
gsap.from('.beispiel_button', { duration: 1, opacity: 0, ease: 'sine'})
gsap.from('.theorie_button', { duration: 1, opacity: 0, ease: 'sine'})
gsap.from('.simulation_button', { duration: 1, opacity: 0, ease: 'sine'})
gsap.from('.ubung_button', { duration: 1, opacity: 0, ease: 'sine'})
gsap.from('.banner', { duration: 1, opacity: 0, ease: 'power3'})


gsap.to('.beispiel_titelbild',{
    scrollTrigger: { trigger: '.beispiel_titelbild', start: "top center" }, opacity: 1, ease: 'sine'
})
gsap.to('.theorie_titelbild',{
    scrollTrigger: { trigger: '.theorie_titelbild', start: "top center" }, opacity: 1, ease: 'sine'
})
gsap.to('.simulation_titelbild',{
    scrollTrigger: { trigger: '.simulation_titelbild', start: "top center" }, opacity: 1, ease: 'sine'
})
gsap.to('.beispiel',{
    scrollTrigger: { trigger: '.beispiel', start: "top center" }, opacity: 1, ease: 'sine'
})

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.5 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 ,ease: 'power1'});
tl.fromTo(".big-text", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.from('.toolbar', { duration: 1, y: '-100%', ease: 'sine', duration: 1 }, "-=1")
tl.from('.mittelpart', {duration: 3, y: '100%', ease: 'sine'}, "-=3")

let numberOfBars =0;
var containerBS = document.getElementById("arrayBS");
var containerSS = document.getElementById("arraySS");

let startSS = 0;
let endSS = 19;
let arrSS = [];
let startBS = 0;
let endBS = 19;
let flagBS = 0;
 let numSS = 0;
function showDropdown() {
    document.getElementById("popup").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches(".burger") || event.target.parentNode.matches(".burger")) {
        let dropdowns = document.getElementById("popup");

        dropdowns.classList.remove("show");
    }
}
function generatearrayBS() {
    if (window.innerWidth < 960) {
        numberOfBars = 11
        endBS=10;
    } else{
        numberOfBars = 20;

    }

    var arrBS = [];

// Array befüllen
    for (var i = 0; i < numberOfBars; i++) {
        var valBS = Number(Math.ceil(Math.random() * 100));
        arrBS.push(valBS);

    }

    arrBS.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < numberOfBars; i++) {
        var valueBS = arrBS[i];

        // Div Elemente werden erstellt
        var array_eleBS = document.createElement("div");


        array_eleBS.classList.add("blockBS");
        array_eleBS.style.height = `${valueBS * 3}px`;
       // array_eleBS.style.transform = `translate(${i * 30}px)`;

        var array_ele_labelBS = document.createElement("label");
        array_ele_labelBS.classList.add("block_id");
        array_ele_labelBS.innerText = valueBS;

        // Div Elemente werden zur HTML Datei hinzugefügt
        array_eleBS.appendChild(array_ele_labelBS);
        containerBS.appendChild(array_eleBS);
    }
}

// Binäre Suche
async function BinarySearch(delay = 2000) {
    var blocksBS = document.querySelectorAll(".blockBS");
    var outputBS= document.getElementById("textBS");
    var LeftArrow = document.getElementById("leftArrow");
    var RightArrow = document.getElementById("rightArrow");



    var numBS = document.getElementById("BSname").value;


    for (var i = 0; i < blocksBS.length; i += 1) {
        blocksBS[i].style.backgroundColor = "#6b5b95";
    }

    outputBS.innerText = "";

    // Iterativ


    while (startBS <= endBS) {

        var midBS = Math.floor((startBS + endBS) / 2);
        blocksBS[midBS].style.backgroundColor = "#FF4949";

        var valueBS = Number(blocksBS[midBS].childNodes[0].innerHTML);

        // 0.1 Sekunden Verzögerung
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );


        if (valueBS == numBS) {
            outputBS.innerText = "Die Zahl wurde in der Zahlenmenge gefunden!";
            blocksBS[midBS].style.backgroundColor = "#13CE66";
            flagBS = 1;
            break;
        }

        if (valueBS > numBS) {
            endBS = midBS - 1;

            LeftArrow.style.display = 'block';
            RightArrow.style.display = 'none';
            for (var i = startBS; i < midBS; i += 1) {
                blocksBS[i].style.backgroundColor = "#90da93";
            }
            for (var i = midBS; i < blocksBS.length; i += 1) {
                blocksBS[i].style.backgroundColor = "#6b5b95";
            }
        } else {
            startBS = midBS + 1;

            LeftArrow.style.display = 'none';
            RightArrow.style.display = 'block';
            for (var i = midBS; i <= endBS; i += 1) {
                blocksBS[i].style.backgroundColor = "#90da93";

            }
            for (var i = 0; i <= midBS; i += 1) {
                blocksBS[i].style.backgroundColor = "#6b5b95";
            }
            console.log("Start:"+startBS);
            console.log("Mid:"+midBS);
            console.log("End:"+endBS);
        }
    }
    if (flagBS === 0) {
        outputBS.innerText = "Die Zahl ist nicht in der Zahlenmenge enthalten";
    }
}

generatearrayBS();

function generatearraySS() {
    if (window.innerWidth < 960) {
        numberOfBars = 11;
        endSS=10;
    } else{
        numberOfBars = 20;
    }

    for (var i = 0; i < numberOfBars; i++) {
        // Return a value from 1 to 100 (both inclusive)
        var valSS = Number(Math.ceil(Math.random() * 100));
        arrSS.push(valSS);
    }


    arrSS.sort(function (a, b) {
        return a - b;
    });
    var RandomNumber = Number(Math.ceil(Math.random() * numberOfBars));
    var TextRN= document.getElementById("textRN");
    arrRN =arrSS[RandomNumber];
    console.log(arrRN);
    console.log(RandomNumber);
    TextRN.innerText = "Suche nach der Nummer: "+ arrRN;
    for (var i = 0; i < numberOfBars; i++) {
        var valueSS = arrSS[i];


        var array_eleSS = document.createElement("div");


        array_eleSS.classList.add("blockSS");


        array_eleSS.style.height = `${valueSS * 3}px`;
        //array_eleSS.style.transform = `translate(${i * 30}px)`;

        var array_ele_labelSS = document.createElement("label");
        array_ele_labelSS.classList.add("block_id");
        array_ele_labelSS.innerText = valueSS;


        array_eleSS.appendChild(array_ele_labelSS);
        containerSS.appendChild(array_eleSS);
    }

}
generatearraySS();

//Div Element anklickbar

var clicked = document.getElementsByClassName('blockSS');
for (let i = 0; i < clicked.length; i++ ){
    clicked[i].addEventListener("click",function (){
        numSS = arrSS[i];
        SelfSearch();
    })

}

// Funktion für die interaktive Suche
function SelfSearch() {
    var blocksSS = document.querySelectorAll(".blockSS");
    var outputSS = document.getElementById("textSS");

    outputSS.innerText = "";

    //Iterativ
    while (startSS <= endSS) {
        let midSS = Math.floor((startSS + endSS) / 2);

        var valueSS = Number(blocksSS[midSS].childNodes[0].innerHTML);


        if (arrRN == numSS) {

            outputSS.innerText = "Du hast es geschafft!";
            for (var i = 0; i < blocksSS.length; i += 1) {
                blocksSS[i].style.backgroundColor = "#ffd700";
            }
            break;
        } else if (numSS == valueSS) {


            outputSS.innerText = "Richtig";
            blocksSS[midSS].style.backgroundColor = "#3cc016";

            if (arrRN < numSS) {
                endSS = midSS - 1;
                break;
            } else  {
                startSS = midSS + 1;
                break;
            }
            break;

        } else {
            outputSS.innerText = "Falsch";
            for (var i = 0; i < blocksSS.length; i += 1) {
                blocksSS[i].style.backgroundColor = "#c50319";
            }
            break;
        }
    }



}

