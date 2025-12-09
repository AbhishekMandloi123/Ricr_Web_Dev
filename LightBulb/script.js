function On() {
  document.getElementById("bulb").style.backgroundColor = "yellow";
}
function Off() {
  document.getElementById("bulb").style.backgroundColor = "white";
}

const userColor = document.getElementById("color");

userColor.addEventListener("change", () => changeBulbColour(userColor.value));

function changeBulbColour(color) {
  document.getElementById("bulb").style.backgroundColor = color;
} 

function SB_Control() {
  const btn = document.getElementById("SB_btn");
  if (btn.innerText === "On") {
    document.getElementById("SB_btn").innerText = "Off";
    document.getElementById("smartBulb").classList.add("on");
  } else {
    document.getElementById("SB_btn").innerText = "On";
    document.getElementById("smartBulb").classList.remove("on");
  }
}

function SB_Control2() {
  document.getElementById("smartBulb").classList.toggle("on");
}

document.getElementById("c1").addEventListener("mouseenter",()=>{
    fillcolor("violet")
})

document.getElementById("c1").addEventListener("mouseleaver",()=>{
    fillcolor("white")
})

document.getElementById("c2").addEventListener("mouseenter",()=>{
    fillcolor("indigo")
})

document.getElementById("c2").addEventListener("mouseleaver",()=>{
    fillcolor("white")
})

document.getElementById("c3").addEventListener("mouseenter",()=>{
    fillcolor("blue")
})

document.getElementById("c3").addEventListener("mouseleaver",()=>{
    fillcolor("white")
})

document.getElementById("c4").addEventListener("mouseenter",()=>{
    fillcolor("green")
})

document.getElementById("c4").addEventListener("mouseleaver",()=>{
    fillcolor("white")
})

document.getElementById("c5").addEventListener("mouseenter",()=>{
    fillcolor("yellow")
})

document.getElementById("c5").addEventListener("mouseleaver",()=>{
    fillcolor("white")
})

document.getElementById("c6").addEventListener("mouseenter",()=>{
    fillcolor("orange")
})

document.getElementById("c6").addEventListener("mouseleaver",()=>{
    fillcolor("white")
})

document.getElementById("c7").addEventListener("mouseenter",()=>{
    fillcolor("red")
})

document.getElementById("c7").addEventListener("mouseleaver",()=>{
    fillcolor("white")
})

function fillcolor(color){
    console.log(color);
    document.getElementById("rainbowBULB").style.backgroundColor=color;
}