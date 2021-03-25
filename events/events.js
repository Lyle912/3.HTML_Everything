console.log("hello")
var button = document.querySelector('button')

button.addEventListener('click', addParagraph)

function addParagraph() {
  if (!document.getElementById("buttonPar")) {
    let paragraph = document.createElement("p")
    paragraph.setAttribute("id", "buttonPar")
    paragraph.appendChild(document.createTextNode("How you doing?"))
    button.after(paragraph)
    return
  }
  document.getElementById("buttonPar").remove()
}

document.addEventListener("keypress", callback)

function callback(event){
  if(event.code ==="Equal") addParagraph()
  if(event.code ==="KeyX") button.removeEventListener('click', addParagraph)
}

var letsGo = document.querySelector(".special")
var articleGo = document.querySelector("article")
letsGo.addEventListener("click", function(){
  alert("test")
}, true)

articleGo.addEventListener("click",function(){
  alert("i went first")
},true)
