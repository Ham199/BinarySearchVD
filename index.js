let maxValue = 20;
let numberOfBars = 10;
let barIndex = 0;
let lastIndex = numberOfBars-2;
let listBar, thisBar, nextBar = null;

let range = document.getElementById("range");
let tlAnimationStart = gsap.timeline();
let tlAnimationDecide = gsap.timeline();

let btnNext = document.getElementById("btnNext");
let btnPlay = document.getElementById("btnPlay");
btnNext.addEventListener("click", function(){
    if(!tlAnimationStart.isActive()&&!tlAnimationDecide.isActive()){
        decide();
    }
});
btnPlay.addEventListener("click", function(){
    if(!tlAnimationStart.isActive()&&!tlAnimationDecide.isActive()){
        tlAnimationDecide
            .eventCallback("onComplete", decide)
            .timeScale(4);
        ;
        decide();
    }
});


function init(){
    for(let i=0; i<numberOfBars; i++){
        let random = Math.round((maxValue - 1) * Math.random()) +1;

        let node = document.createElement("div");
        let height = random * 100 / maxValue;
        node.innerText = random;
        node.setAttribute("data-value", random);
        node.setAttribute("style", "height: "+height+"%;");
        node.setAttribute("class", "bar");
        range.appendChild(node);
    }
    animationStart();
}


function animationStart(){
    tlAnimationStart
        .add("startTl")
        .set(".bar", {autoAlpha:0, x:+50})
        .from(".btn",{x:"-=200", duration: 1, stagger: 0.2, autoAlpha:0, ease: "back.out(2)"})
        .from("h2",{duration: 2, ease: "back.out(3)", x:+500, autoAlpha:0}, "startTL")
        .to(".bar", {duration: 0.9, stagger: 0.2, autoAlpha:1, ease:"back.out(3)" , x:0},"startTl")
    ;
}


function decide(){
    listBar = document.getElementsByClassName("bar");
    thisBar = listBar[barIndex];
    nextBar = listBar[barIndex+1];

    tlAnimationDecide
        .to( thisBar, {className:"bar bar_hlgt"})
        .to( nextBar, {className:"bar bar_hlgt"}, "<")
    ;

    if(lastIndex < 0){
        tlAnimationDecide.kill();
        gsap.to(".btn", {autoAlpha:0, duration:1});
    }else{
        if(barIndex < lastIndex){
            barIndex++;
        }else{
            barIndex = 0;
            lastIndex--;
        }
    }

    if(parseInt(thisBar.dataset.value) > parseInt(nextBar.dataset.value)){
        tlAnimationDecide
            .to( thisBar,{className:"bar bar_high", duration:0.5})
            .to( nextBar,{className:"bar bar_low", duration:0.5},"<")
            .to( thisBar, {scale: 0, transformOrigin: "center bottom", duration:0.5, ease: "power4.in"})
            .to( nextBar, {scale: 0, transformOrigin: "center bottom", duration: 0.8, ease: "power4.in"}, "<")
            .call(swap,[thisBar, nextBar],">")
            .to( thisBar, {scale: 1, transformOrigin: "center bottom", duration:0.5, ease: "power2.out"})
            .to( nextBar, {scale: 1, transformOrigin: "center bottom", duration: 0.8, ease: "power2.out"}, "<")
            .to( thisBar, {className:"bar"})
            .to( nextBar, {className:"bar"}, "<")
        ;
    }else{
        tlAnimationDecide
            .to( thisBar,{className:"bar bar_low", duration:0.5})
            .to( nextBar,{className:"bar bar_high", duration:0.5},"<")
            .to( thisBar, {className:"bar"})
            .to( nextBar, {className:"bar"}, "<")
        ;
    }
}

function swap(node1, node2){
    const parent = node1.parentNode;
    const oldNode = parent.removeChild(node1);
    node2.after(oldNode);
}

window.addEventListener('DOMContentLoaded', function(){
    init();
});
