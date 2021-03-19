console.log("hello")
var button = document.querySelector('button')

button.addEventListener('click', addParagraph)

function addParagraph() {
  if (!document.getElementById("buttonPar")) {
    let paragraph = document.createElement("p")
    paragraph.setAttribute("id", "buttonPar")
    paragraph.appendChild(document.createTextNode("How you doing?"))
    button.after(paragraph)
  }
  else document.getElementById("buttonPar").remove()
}

document.addEventListener("keypress", callback)

function callback(event){
  if(event.code ==="Equal") addParagraph()
  if(event.code ==="KeyX") button.removeEventListener('click', addParagraph)
}