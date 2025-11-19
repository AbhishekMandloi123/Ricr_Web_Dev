function Submitnow() {
  console.log("Submit Button Clicked");
  alert("Submit button clicked");
  const pn = document.getElementById("personName").value;
  const cn = document.getElementById("contactNumber").value;
  const em = document.getElementById("email").value;
  const qw = document.getElementById("qualification").value;
  const cs = document.getElementById("collegeName").value;
  const yr = document.getElementById("year").value;
  const br = document.getElementById("branch").value;
  const srce = document.getElementById("sourceOfInfo").value;
  console.log("Person Name:" + pn);
  console.log("Contact Number:" + cn);
  console.log("Email:" + em);
  console.log("Qualification:" + qw);
  console.log("College/School Name:" + cs);
  console.log("Year:" + yr);
  console.log("Branch:" + br);
  console.log("Interested Course:" + course);
  console.log("Source Of Info:" + srce);

  

  document.getElementById("personName").value="";
  document.getElementById("contactNumber").value="";
  document.getElementById("email").value="";
  document.getElementById("qualification").value="";
  document.getElementById("collegeName").value="";
  document.getElementById("year").value="";
  document.getElementById("branch").value="";
  document.getElementById("sourceOfInfo").value="";
  

 
}
