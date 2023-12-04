
var answer = prompt("How long was the shortest Grand Slam? (minutes)").toLowerCase();
if (answer === "23") {
  alert("Great! The match was won by Suzanne Lenglen in the 1922 Grand Slam.");
} else {
  alert("Sorry, that was incorrect, it was 23 minutes by Suzanne Lenglen.");
}

function turnBlue (element){
    element.style.color = "#0073cf";
}
//turns the australian open blue when clicked on
function turnBrick (element){
    element.style.color = "#AA4A44";
}
//turns the french open brick red when clicked on
function turnPurple (element){
    element.style.color = "#800080";
}
//turns the wimbledon purple when clicked on
function turnGreen (element){
    element.style.color = "#046306";
}
//turns the us open green when clicked on

document.body.addEventListener("keydown",changeColor);

function changeColor(event){
    if(document.body.style.backgroundColor == "lightskyblue"){
        document.body.style.backgroundColor = "white";
    } else {
        document.body.style.backgroundColor = "lightskyblue";
    }
}

//changes background color when a key is pressed

document.getElementById('g').style.color = 'gray';
document.getElementById('r').style.color = 'gray';
document.getElementById('a').style.color = 'gray';
document.getElementById('y').style.color = 'gray';
//makes everything with the id gray, gray