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

//simulating the program once
function simulateonce() {
            //gets the users location
            let locationData = document.getElementById("inpt").value.toLowerCase()
            //Simulation for British Columbia
            if (locationData == locations.bc) {
                let itemrun = Math.random()
                //playagain code
                if (itemrun<0.70) {
                    prizeCount.failed ++
                    document.getElementById("playAgain").innerHTML = prizeCount.failed
                    result.innerHTML += '<img src="images/tryAgain.png">'
                    console.log("playagain")
            }
                //code for the coffee
                else if (itemrun<0.8) {
                    prizeCount.coffee ++
                    document.getElementById("coffee").innerHTML = prizeCount.coffee
                    result.innerHTML += '<img src="images/coffee.png">'
                    console.log("coffee")
            }
                //code for the donut
                else if (itemrun<0.9) {
                    prizeCount.donut ++
                    document.getElementById("donut").innerHTML = prizeCount.donut
                    result.innerHTML += '<img src="images/donut.png">'
                    console.log("donut")
            }
                //code for the grandprize
                else {
                    prizeCount.bigPrize ++
                    document.getElementById("grandprize").innerHTML = prizeCount.bigPrize
                    result.innerHTML += '<img src="images/hugePrize.jpeg">'
                    console.log("grandprize")
            }
    }
            //simulation for alberta
            else if(locationData == locations.alberta) {
                let itemrun2 = Math.random()
                // code for the play again
                if (itemrun2 <0.15) {
                    prizeCount.failed ++
                    document.getElementById("playAgain").innerHTML = prizeCount.failed
                    result.innerHTML += '<img src="images/tryAgain.png">'
                    console.log("playagain")
            }
                //code for the coffee
                else if (itemrun2 < 0.55) {
                    prizeCount.coffee ++
                    document.getElementById("coffee").innerHTML = prizeCount.coffee
                    result.innerHTML += '<img src="images/coffee.png">'
                    console.log("coffee")
            }
                //code for the donut
                else if (itemrun2<0.95) {
                    prizeCount.donut ++
                    document.getElementById("donut").innerHTML = prizeCount.donut
                    result.innerHTML += '<img src="images/donut.png">'
                    console.log("donut")
            }
                //code for the grandprize
                else {
                    prizeCount.bigPrize ++
                    document.getElementById("grandprize").innerHTML = prizeCount.bigPrize
                    result.innerHTML += '<img src="images/hugePrize.jpeg">'
                    console.log("grandprize")
            }
    }
            // simulation for saskatchewan
            else if(locationData == locations.sk) {
                let itemrun2 = Math.random()
                //code for the playagain
                if (itemrun2 <0.70) {
                    prizeCount.failed ++
                    document.getElementById("playAgain").innerHTML = prizeCount.failed
                    result.innerHTML += '<img src="images/tryAgain.png">'
                    console.log("playagain")
            }
                //code for the coffee
                else if (itemrun2 < 0.71) {
                    prizeCount.coffee ++
                    document.getElementById("coffee").innerHTML = prizeCount.coffee
                    result.innerHTML += '<img src="images/coffee.png">'
                    console.log("coffee")
            }
                //code for the donut
                else if (itemrun2<0.72) {
                    prizeCount.donut ++
                    document.getElementById("donut").innerHTML = prizeCount.donut
                    result.innerHTML += '<img src="images/donut.png">'
                    console.log("donut")
            }
                //code for the grandprize
                else {
                    prizeCount.bigPrize ++
                    document.getElementById("grandprize").innerHTML = prizeCount.bigPrize
                    result.innerHTML += '<img src="images/hugePrize.jpeg">'
                    console.log("grandprize")
            }
    }


            //this is the code if the user inputs an invalid province, or spells it incorrectly
            else {
                document.getElementById("invalid").innerHTML = "INVALID INPUT!"
    }
}
//simulate until 500 donuts
function manydonuts() {
    while(prizeCount.donut<500) {
        simulateonce()
    }
}

//simulate until granprize is won
function grandprize() {
    while(prizeCount.bigPrize<1) {
        simulateonce()
    }
}


//simulate five times
function fiveruns () {
    for(let n=0; n < 5; n++) {
        simulateonce()
    }
}

