
function Input(char) {
  const display = document.getElementById("display");

  if (char === "=") {
    try {
     
      display.value = eval(display.value);
    } catch (error) {
      alert("Invalid Expression");
      display.value = "";
    }
  } else if (char === "C") {
    display.value = "";
  } else {
    display.value = display.value + char;
  }
}


document.addEventListener("keydown", (e) => {
  const key = e.key;
  console.log("Pressed Key", key);

  if (key === "Enter") {
   
    Input("=");
    return;
  }

  if (key === "Backspace") {
   
    Input("C");
  }

  

  
});
