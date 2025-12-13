function Submit() {
  let user_input = document.getElementById("number").value;
  if (user_input > 10 || user_input < 1) {
    alert("Please Enter a Number Between 1 to 10");
  } else if (user_input == "") {
    alert("Input Field Cannot be Empty");
  }

  let xx = Math.floor(Math.random() * 10) + 1;
  if (user_input > xx) {
    alert("OOPS SORRY !!! TRY A SMALLER NUMBER");
  } else if (user_input < xx) {
    alert("OOPS SORRY !!! TRY A LARGER NUMBER");
  } else {
    alert("CONGRATULATIONS !!! YOU GUESSED IT RIGHT");
  }
}
