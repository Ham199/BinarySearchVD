
gsap.from('.toolbar', { duration: 1, y: '-100%', ease: 'sine'})
gsap.from('.beispiel_button', { duration: 1, opacity: 0, ease: 'sine'})
gsap.from('.theorie_button', { duration: 1, opacity: 0, ease: 'sine'})
gsap.from('.simulation_button', { duration: 1, opacity: 0, ease: 'sine'})
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


var containerBS = document.getElementById("arrayBS");
var containerSS = document.getElementById("arraySS");
var RandomNumber = Number(Math.ceil(Math.random() * 20));
let startSS = 0;
let endSS = 19;


function generatearrayBS() {


    var arrBS = [];

// Array befüllen
    for (var i = 0; i < 20; i++) {
        var valBS = Number(Math.ceil(Math.random() * 100));
        arrBS.push(valBS);
    }

    arrBS.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < 20; i++) {
        var valueBS = arrBS[i];

        // Div Elemente werden erstellt
        var array_eleBS = document.createElement("div");


        array_eleBS.classList.add("blockBS");
        array_eleBS.style.height = `${valueBS * 3}px`;
        array_eleBS.style.transform = `translate(${i * 30}px)`;

        var array_ele_labelBS = document.createElement("label");
        array_ele_labelBS.classList.add("block_id");
        array_ele_labelBS.innerText = valueBS;

        // Div Elemente werden zur HTML Datei hinzugefügt
        array_eleBS.appendChild(array_ele_labelBS);
        containerBS.appendChild(array_eleBS);
    }
}

// Binäre Suche
async function BinarySearch(delay = 300) {
    var blocksBS = document.querySelectorAll(".blockBS");
    var outputBS= document.getElementById("textBS");


    var numBS = document.getElementById("BSname").value;


    for (var i = 0; i < blocksBS.length; i += 1) {
        blocksBS[i].style.backgroundColor = "#6b5b95";
    }

    outputBS.innerText = "";

    // Iterativ

    var startBS = 0;
    var endBS = 19;
    var flagBS = 0;
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
            blocksBS[midBS].style.backgroundColor = "#6b5b95";
        } else {
            startBS = midBS + 1;
            blocksBS[midBS].style.backgroundColor = "#6b5b95";
        }
    }
    if (flagBS === 0) {
        outputBS.innerText = "Die Zahl ist nicht in der Zahlenmenge enthalten";
    }
}




generatearrayBS();

function generatearraySS() {


    var arrSS = [];


    for (var i = 0; i < 20; i++) {
        // Return a value from 1 to 100 (both inclusive)
        var valSS = Number(Math.ceil(Math.random() * 100));
        arrSS.push(valSS);
    }


    arrSS.sort(function (a, b) {
        return a - b;
    });

    var TextRN= document.getElementById("textRN");
    arrRN =arrSS[RandomNumber];
    TextRN.innerText = "Suche nach der Nummer: "+ arrRN;
    for (var i = 0; i < 20; i++) {
        var valueSS = arrSS[i];


        var array_eleSS = document.createElement("div");


        array_eleSS.classList.add("blockSS");


        array_eleSS.style.height = `${valueSS * 3}px`;
        array_eleSS.style.transform = `translate(${i * 30}px)`;

        var array_ele_labelSS = document.createElement("label");
        array_ele_labelSS.classList.add("block_id");
        array_ele_labelSS.innerText = valueSS;


        array_eleSS.appendChild(array_ele_labelSS);
        containerSS.appendChild(array_eleSS);
    }

}
generatearraySS();

// Funktion für die interaktive Suche
async function SelfSearch(delay = 300) {
    var blocksSS = document.querySelectorAll(".blockSS");
    var outputSS = document.getElementById("textSS");
    


    var numSS = document.getElementById("SSname").value;


    outputSS.innerText = "";



   //Iterativ
    while (startSS <= endSS) {
        let midSS = Math.floor((startSS + endSS) / 2);

        var valueSS = Number(blocksSS[midSS].childNodes[0].innerHTML);


        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );


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



