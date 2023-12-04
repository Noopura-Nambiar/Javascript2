
var name = prompt("Who is your favorite tennis player?");
console.log(name);
alert( name+  " is a great choice!");

function turnBlue (element){
    element.style.color = "#3A9BDC";
}
//turns the men's singles title blue

function turnRed (element){
    element.style.color = "#ff073a";
}
//turns the women's singles title red

document.body.addEventListener("keyup",changeColor);

function changeColor(event){
    if(document.body.style.backgroundColor == "lightyellow"){
        document.body.style.backgroundColor = "green";
    } else {
        document.body.style.backgroundColor = "lightyellow";
    }
}

//changes background color when a key is released


//fun things to add after basic - when clicking on players maybe add a fun fact