let homeScore = document.getElementById("score-home")
let guestScore = document.getElementById("score-guest")

let home = 0
let guest = 0

function homePlus1() {
    home += 1
    homeScore.textContent = home
}

function homePlus2() {
    home += 2
    homeScore.textContent = home
}

function homePlus3() {
    home += 3
    homeScore.textContent = home
}

function guestPlus1() {
    guest += 1
    guestScore.textContent = guest
}

function guestPlus2() {
    guest += 2
    guestScore.textContent = guest
}

function guestPlus3() {
    guest += 3
    guestScore.textContent = guest
}