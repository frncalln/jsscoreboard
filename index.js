let scoreHome = document.getElementById("scorebox-home")
let scoreGuest = document.getElementById("scorebox-guest")

let homeScore = 0
let guestScore = 0


function homePoints1(){
    homeScore += 1
    scoreHome.textContent = homeScore
}
console.log(homePoints1)

function homePoints2(){
    homeScore += 2
    scoreHome.textContent = homeScore
}
console.log(homePoints2)

function homePoints3(){
    homeScore +=3
    scoreHome.textContent = homeScore
}
console.log(homePoints3)

function guessPoints1(){
    guestScore += 1
    scoreGuest.textContent = guestScore
}
console.log(guestPoints1)

function guessPoints2(){
    guestScore += 2
    scoreGuest.textContent = guestScore
}
console.log(guestPoints2)

function guessPoints3(){
    guestScore +=3
    scoreGuest.textContent = guestScore
}
console.log(guessPoints3)