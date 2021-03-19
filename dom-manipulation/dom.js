//api call to megaman bosses api
const apiCall = {
  name: "Chill Penguin",
  weapon: "Shotgun Ice",
  powers: ["copy", "slide", "throw ice"],
  weaknesses: "Fire Wave"
}

var weapons = document.getElementsByClassName("weapons")
// weaponsClass[0].replaceChild(apiCall.weapon, "Weapon1")
//weapons[0].innerHTML= `<li>${apiCall.weapon}</li>`

var li = document.createElement("li")
var text = document.createTextNode(apiCall.weapon)
apiWeapon = li.appendChild(text)
weapons[0].replaceChild(li, weapons[0].firstElementChild)

var powersClass = document.getElementsByClassName("powers")

var powerElements = apiCall.powers.map(power => {
  let li = document.createElement("li")
  let textNode = document.createTextNode(power)
  li.appendChild(textNode)
  return li
})

powersClass[0].replaceChildren(...powerElements)

//})











/*
console.log(document.firstChild);
console.log(document.lastChild);
var ul = document.querySelector("ul")
ul.removeChild(ul.lastElementChild)
console.log(ul)*/