let homeScore = document.getElementById("score-home")
let guestScore = document.getElementById("score-guest")

let home = 0
let guest = 0

function homePlusOne() {
    home += 1
    homeScore.textContent = home
}

function homePlusTwo() {
    home += 2
    homeScore.textContent = home
}

function homePlusThree() {
    home += 3
    homeScore.textContent = home
}

function guestPlusOne() {
    guest += 1
    guestScore.textContent = guest
}

function guestPlusTwo() {
    guest += 2
    guestScore.textContent = guest
}

function guestPlusThree() {
    guest += 3
    guestScore.textContent = guest
}