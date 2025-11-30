// console.log("hello0")
// window.console.log("hello world")

// console.dir(window.document.body);// print properties and methods

// function changeColor(){
//     document.body.style.background = "grey"
//     console.dir(document.body.childNodes[0])
//     document.body.childNodes[0].textContent = "green"
// }



//
const heading = document.getElementById("heading");
console.log(heading)
console.dir(heading)

const content = document.getElementsByClassName("content");
console.log(content)  // gives html collection similar to array
console.dir(content)

const paras = document.getElementsByTagName("p");
console.log(paras)

const firstElement = document.querySelector("p");
console.log(firstElement)

const allElement = document.querySelectorAll("p");
console.log(allElement) // returns the note list


