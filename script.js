// Get the element with the ID "level"

const bottomEle = document.getElementById("level");

let domLevel = 0;


let parentEle = bottomEle;

while( parentEle !== document.documentElement){

    parentEle = parentEle.parentElement;

    domLevel++;
}

alert(`The level of the element is: ${domLevel}`)