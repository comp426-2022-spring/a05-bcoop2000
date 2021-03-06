// Focus div based on nav button click
function focusOnHome() {
    document.getElementById("home").setAttribute("class", "active");
    document.getElementById("single").setAttribute("class","hidden");
    document.getElementById("multi").setAttribute("class","hidden");
    document.getElementById("guess").setAttribute("class","hidden");
}

function focusOnSingle() {
    document.getElementById("home").setAttribute("class", "hidden");
    document.getElementById("single").setAttribute("class","active");
    document.getElementById("multi").setAttribute("class","hidden");
    document.getElementById("guess").setAttribute("class","hidden");
}

function focusOnMulti() {
    document.getElementById("home").setAttribute("class", "hidden");
    document.getElementById("single").setAttribute("class","hidden");
    document.getElementById("multi").setAttribute("class","active");
    document.getElementById("guess").setAttribute("class","hidden");
}

function focusOnGuess() {
    document.getElementById("home").setAttribute("class", "hidden");
    document.getElementById("single").setAttribute("class","hidden");
    document.getElementById("multi").setAttribute("class","hidden");
    document.getElementById("guess").setAttribute("class","active");
}
// Flip one coin and show coin image to match result when button clicked
function flipSingle() {
    fetch("app/flip/", {mode: 'cors'})
        .then(function(response) {
            return response.json()
        })
        .then(function(result) {
            document.getElementById("result").innerHTML = result.flip;
            document.getElementById("quarter").setAttribute("src", "./assets/img/"+ result.flip + ".png");
    })
}
// Flip multiple coins and show coin images in table as well as summary results

// Enter number and press button to activate coin flip series

// Guess a flip by clicking either heads or tails button
