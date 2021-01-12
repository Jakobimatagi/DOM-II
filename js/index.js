// Your code goes here

const enlargePhoto = document.querySelector('img');

enlargePhoto.addEventListener("mouseover", function(event){
    event.target.style.width = "75%";
});

const highlight = document.querySelector("h2");

document.addEventListener("keydown", function(event){
    if (event.key === "Escape"){
        highlight.style.color = "orange";
    }
});

highlight.addEventListener("dblclick", function(event){
    highlight.style.color = "black";
})

window.addEventListener('load', (event) =>{
    console.log("Page is fully loaded.")
})

const alertHello = document.querySelector('h1');

alertHello.addEventListener('click', function(){ alert("Hello")});

