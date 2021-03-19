console.log("hello")
var button = document.querySelector('button')

button.addEventListener('click', addParagraph)

function addParagraph() {
  console.log("callback working")
}