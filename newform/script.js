function enquirySubmit() {
  console.log("Submit Button Clicked");
  alert("Submit button clicked");

  const nm = document.getElementById("EnqName").value;
  const cn = document.getElementById("EnqContact").value;
  const em = document.getElementById("EnqEmail").value;
  const qf = document.getElementById("EnqQualification").value;
  const cl = document.getElementById("EnqCollege").value;
  const yr = document.getElementById("EnqYear").value;
  const br = document.getElementById("EnqBranch").value;

  console.log("Name : " + nm);
  console.log("Contact Number : " + cn);
  console.log("Email : " + em);
  console.log("Qualification : " + qf);
  console.log("College : " + cl);
  console.log("Year : " + yr);
  console.log("Branch : " + br);

  alert("Enquiry Submitted");

  document.getElementById("EnqName").value = "";
  document.getElementById("EnqContact").value = "";
  document.getElementById("EnqEmail").value = "";
  document.getElementById("EnqQualification").value = "";
  document.getElementById("EnqCollege").value = "";
  document.getElementById("EnqYear").value = "";
  document.getElementById("EnqBranch").value = "";
}

