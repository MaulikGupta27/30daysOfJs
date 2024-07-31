//Activity -1

//Task 1: select element by id and change its text content
let idSelect = document.getElementById("head");
idSelect.innerText = "New Heading";

//Task 2: select element by class and change its bg color
let classSelect = document.getElementsByClassName("para");
classSelect[0].style.background = "yellow";


//Activity -2

//Task 3: create new div element with some text and append it to body
let body = document.querySelector("body");
let newDiv = document.createElement("div");
newDiv.innerText = "This is a new div element.";
body.append(newDiv);

//Task 4: create new li element and add it to an existing ul list.
let ul = document.querySelector("ul");
let li = document.createElement("li");
li.innerText = "This is a new li.";
ul.append(li);


//Activity -3

//Task 5: select an html element and remove it from DOM
newDiv.remove();

//Task 6: remove the last child of a specific html element
ul.removeChild(ul.lastChild);


//Activity -4

//Task 7: select an html element and change one of its attributes
let element = document.getElementById("liOne")
element.setAttribute("class", "para");

//Task 8: add and remove a CSS class to/from an HTML element
ul.classList.add("highlight");  //added
ul.classList.remove("highlight");   //removed


//Activity -5: Event Handling

//Task 9: add a click event listener to a button that changes the text content of a paragraph
let btnClick = document.getElementById("firstBtn");
btnClick.addEventListener("click", () => {
    para1.innerHTML = "Changed text"
})

//Task 10: add mouseover event listener to element that changes its border color
let borderC = document.getElementById("img");
borderC.addEventListener("mouseover",()=>{
    borderC.style.border = "solid";
    borderC.style.borderColor = "red";
})