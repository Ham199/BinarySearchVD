

var containerBS = document.getElementById("arrayBS");
var containerSS = document.getElementById("arraySS");
//var citynames = {Berlin, Düsseldorf, Frankfurt, Hamburg, Köln, Leipzig, München, Stuttgart}
// Function to generate the array of blocks
var RandomNumber = Number(Math.ceil(Math.random() * 20));


// Function to generate the array of blocks
function generatearrayBS() {

// Creating an array
    var arrBS = [];

// Filling array with random values
    for (var i = 0; i < 20; i++) {
        // Return a value from 1 to 100 (both inclusive)
        var valBS = Number(Math.ceil(Math.random() * 100));
        arrBS.push(valBS);
    }

// Sorting Array in ascending order
    arrBS.sort(function (a, b) {
        return a - b;
    });

    for (var i = 0; i < 20; i++) {
        var valueBS = arrBS[i];

        // Creating element div
        var array_eleBS = document.createElement("div");

        // Adding class 'block' to div
        array_eleBS.classList.add("blockBS");

        // Adding style to div
        array_eleBS.style.height = `${valueBS * 3}px`;
        array_eleBS.style.transform = `translate(${i * 30}px)`;

        // Creating label element for displaying
        // size of particular block
        var array_ele_labelBS = document.createElement("label");
        array_ele_labelBS.classList.add("block_id");
        array_ele_labelBS.innerText = valueBS;

        // Appending created elements to index.html
        array_eleBS.appendChild(array_ele_labelBS);
        containerBS.appendChild(array_eleBS);
    }
}

// Asynchronous BinarySearch function
async function BinarySearch(delay = 300) {
    var blocksBS = document.querySelectorAll(".blockBS");
    var outputBS= document.getElementById("textBS");

    //Extracting the value of the element to be searched
    var numBS = document.getElementById("BSname").value;

    //Colouring all the blocks voilet
    for (var i = 0; i < blocksBS.length; i += 1) {
        blocksBS[i].style.backgroundColor = "#6b5b95";
    }

    outputBS.innerText = "";

    // BinarySearch Algorithm

    var startBS = 0;
    var endBS = 19;
    var flagBS = 0;
    while (startBS <= endBS) {
        //Middle index
        var midBS = Math.floor((startBS + endBS) / 2);
        blocksBS[midBS].style.backgroundColor = "#FF4949";

        //Value at mid index
        var valueBS = Number(blocksBS[midBS].childNodes[0].innerHTML);

        // To wait for .1 sec
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );

        //Current element is equal to the element
        //entered by the user
        if (valueBS == numBS) {
            outputBS.innerText = "Element Found";
            blocksBS[midBS].style.backgroundColor = "#13CE66";
            flagBS = 1;
            break;
        }
        //Current element is greater than the element
        //entered by the user
        if (valueBS > numBS) {
            endBS = midBS - 1;
            blocksBS[midBS].style.backgroundColor = "#6b5b95";
        } else {
            startBS = midBS + 1;
            blocksBS[midBS].style.backgroundColor = "#6b5b95";
        }
    }
    if (flagBS === 0) {
        outputBS.innerText = "Element Not Found";
    }
}

// Calling generatearray function


generatearrayBS();

function generatearraySS() {

// Creating an array
    var arrSS = [];

// Filling array with random values
    for (var i = 0; i < 20; i++) {
        // Return a value from 1 to 100 (both inclusive)
        var valSS = Number(Math.ceil(Math.random() * 100));
        arrSS.push(valSS);
    }

// Sorting Array in ascending order
    arrSS.sort(function (a, b) {
        return a - b;
    });
// Random Number
    var TextRN= document.getElementById("textRN");
    arrRN =arrSS[RandomNumber];
    TextRN.innerText = "Suche nach der Nummer: "+ arrRN;
    for (var i = 0; i < 20; i++) {
        var valueSS = arrSS[i];

        // Creating element div
        var array_eleSS = document.createElement("div");

        // Adding class 'block' to div
        array_eleSS.classList.add("blockSS");

        // Adding style to div
        array_eleSS.style.height = `${valueSS * 3}px`;
        array_eleSS.style.transform = `translate(${i * 30}px)`;

        // Creating label element for displaying
        // size of particular block
        var array_ele_labelSS = document.createElement("label");
        array_ele_labelSS.classList.add("block_id");
        array_ele_labelSS.innerText = valueSS;

        // Appending created elements to index.html
        array_eleSS.appendChild(array_ele_labelSS);
        containerSS.appendChild(array_eleSS);
    }

}
generatearraySS();

// Asynchronous SelfSearch function
async function SelfSearch(delay = 300) {
    var blocksSS = document.querySelectorAll(".blockSS");
    var outputSS = document.getElementById("textSS");
    var MidSS = document.getElementById("MidRN");

//Extracting the value of the element to be searched
    var numSS = document.getElementById("SSname").value;

//Colouring all the blocks voilet
    for (var i = 0; i < blocksSS.length; i += 1) {
        blocksSS[i].style.backgroundColor = "#125b95";
    }

    outputSS.innerText = "";


    var startSS = 0;
    var endSS = 19;
    var flagSS = 0;

        //Middle index
        var midSS = Math.floor((startSS + endSS) / 2);

        //Value at mid index
        var valueSS = Number(blocksSS[midSS].childNodes[0].innerHTML);
    MidSS.innerText = "Mitte" + valueSS;
        // To wait for .1 sec
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, delay)
        );



        //Current element is equal to the element
        //entered by the user
        if (valueSS == numSS) {


            outputSS.innerText = "Right";
            blocksSS[midSS].style.backgroundColor = "#40bd1c";

        }

    if  (arrRN == numSS) {

        outputSS.innerText = "Finished";
        for (var i = 0; i < blocksSS.length; i += 1) {
            blocksSS[i].style.backgroundColor = "#d2b41d";
        }

    }
         else {
        outputSS.innerText = "False";
        for (var i = 0; i < blocksSS.length; i += 1) {
            blocksSS[i].style.backgroundColor = "#c7071d";
        }
        }


}

// Calling generatearray function



/* function binaryseach(array,target){
    let left = 0;
    let right=array.length - 1;

    while (left < right){
        let mid = Math.floor((left + right) / 2 );
        if(target === array[mid]){

            return mid;
        } else if (target < array[mid]){
            right = mid - 1;
        } else{
            left = mid + 1;
        }

    }
return false;
}
*/
