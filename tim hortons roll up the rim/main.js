'use-strict'

//global variables

let prizeCount = {
    failed: 0,
    coffee: 0,
    donut: 0,
    bigPrize: 0,
}
let locations = {
    alberta: "alberta",
    bc: "british columbia",
    sk: "saskatchewan",
}
let result = document.getElementById("results")

// getting the players clicks
document.getElementById("once").addEventListener("click", simulateonce)
document.getElementById("five").addEventListener("click", fiveruns)
document.getElementById("fivehundreddonuts").addEventListener("click", manydonuts)
document.getElementById("grandwin").addEventListener("click", grandprize)


function simulateonce() {
            let locationData = document.getElementById("inpt").value.toLowerCase()
            if (locationData == locations.bc) {
                let itemrun = Math.random()
                if (itemrun<0.70) {
                    prizeCount.failed ++
                    document.getElementById("playAgain").innerHTML = prizeCount.failed
                    result.innerHTML += '<img src="images/tryAgain.png">'
                    console.log("playagain")
            }
                else if (itemrun<0.8) {
                    prizeCount.coffee ++
                    document.getElementById("coffee").innerHTML = prizeCount.coffee
                    result.innerHTML += '<img src="images/coffee.png">'
                    console.log("coffee")
            }
                else if (itemrun<0.9) {
                    prizeCount.donut ++
                    document.getElementById("donut").innerHTML = prizeCount.donut
                    result.innerHTML += '<img src="images/donut.png">'
                    console.log("donut")
            }
                else {
                    prizeCount.bigPrize ++
                    document.getElementById("grandprize").innerHTML = prizeCount.bigPrize
                    result.innerHTML += '<img src="images/hugePrize.jpeg">'
                    console.log("grandprize")
            }
    }
                else if(locationData == locations.alberta) {
                let itemrun2 = Math.random()
                if (itemrun2 <0.15) {
                    prizeCount.failed ++
                    document.getElementById("playAgain").innerHTML = prizeCount.failed
                    result.innerHTML += '<img src="images/tryAgain.png">'
                    console.log("playagain")
            }
                else if (itemrun2 < 0.55) {
                    prizeCount.coffee ++
                    document.getElementById("coffee").innerHTML = prizeCount.coffee
                    result.innerHTML += '<img src="images/coffee.png">'
                    console.log("coffee")
            }
                else if (itemrun2<0.95) {
                    prizeCount.donut ++
                    document.getElementById("donut").innerHTML = prizeCount.donut
                    result.innerHTML += '<img src="images/donut.png">'
                    console.log("donut")
            }
                else {
                    prizeCount.bigPrize ++
                    document.getElementById("grandprize").innerHTML = prizeCount.bigPrize
                    result.innerHTML += '<img src="images/hugePrize.jpeg">'
                    console.log("grandprize")
            }
    }
                else if(locationData == locations.sk) {
                    let itemrun2 = Math.random()
                    if (itemrun2 <0.70) {
                        prizeCount.failed ++
                        document.getElementById("playAgain").innerHTML = prizeCount.failed
                        result.innerHTML += '<img src="images/tryAgain.png">'
                        console.log("playagain")
            }
                    else if (itemrun2 < 0.71) {
                        prizeCount.coffee ++
                        document.getElementById("coffee").innerHTML = prizeCount.coffee
                        result.innerHTML += '<img src="images/coffee.png">'
                        console.log("coffee")
            }
                    else if (itemrun2<0.72) {
                        prizeCount.donut ++
                        document.getElementById("donut").innerHTML = prizeCount.donut
                        result.innerHTML += '<img src="images/donut.png">'
                        console.log("donut")
            }
                    else {
                        prizeCount.bigPrize ++
                        document.getElementById("grandprize").innerHTML = prizeCount.bigPrize
                        result.innerHTML += '<img src="images/hugePrize.jpeg">'
                        console.log("grandprize")
            }
    }



    else {
        document.getElementById("invalid").innerHTML = "INVALID INPUT!"
    }
}

function manydonuts() {
    while(prizeCount.donut<500) {
        simulateonce()
    }
}


function grandprize() {
    while(prizeCount.bigPrize<1) {
        simulateonce()
    }
}



function fiveruns () {
    for(let n=0; n < 5; n++) {
        simulateonce()
    }
}

