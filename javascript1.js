//maybe make a poll of why people are interested in tennis like a comments section
var name = prompt("Hi! Why are you interested in Tennis?");
//user prompt

var userColor = prompt("Choose a background color:");
document.body.style.backgroundColor = userColor;
//changes background color to whatever the user inputs

function turnPurple (element){
    element.style.color = "purple";
}
//turns the h3 titles purple when clicked on

document.body.addEventListener("keydown",changeColor);

function changeColor(event){
    if(document.body.style.backgroundColor == "lightgreen"){
        document.body.style.backgroundColor = "lightblue";
    } else {
        document.body.style.backgroundColor = "lightgreen";
    }
}

//changes background color when a key is pressed

var p = document.getElementById("tennis");
p.setAttribute(
    "style",
    "background-color:blue;font-size: 50px"
);
//changes the title tennis to make the background blue and the size 50px

