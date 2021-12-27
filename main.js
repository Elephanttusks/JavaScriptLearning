let btn = document.getElementById('button');

let text = document.getElementById('textfield');

let name = document.getElementById('boxname')

let color = document.getElementById('color')

let rainbow = ['red','orange','yellow','green','blue','purple','violet'];

function change() {

  let response = "pigs"

  text.innerText = ("Hello, " + name.value + ", you have gone through the pigsifying machine. You are now a pig.")

  /* text.innerText = (name.value) */
  console.log("Secret message for " + name.value)
  name.value = ""
}

function hues() {
   document.body.style.background = rainbow[Math.floor(7*Math.random())]
}

btn.addEventListener('click', change);

color.addEventListener('click', hues); 
