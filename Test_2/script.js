


function Submits() {

  const nm = document.getElementById("name").value;
  const cn = document.getElementById("address").value;
  const em = document.getElementById("phone").value;
  const qf = document.getElementById("email").value;
  const cl = document.getElementById("payment").value;
  

  console.log("Name : " + nm);
  console.log("Address : " + cn);
  console.log("Phone : " + em);
  console.log("Email : " + qf);
  console.log("Payment : " + cl);
  

  alert("Enquiry Submitted");

  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("payment").value = "";
  
}



function buyProduct()
{

    

    const qq = document.getElementById("hoodie").value;
    const aa = document.getElementById("trimmer").value;
    const vv = document.getElementById("shoes").value;


    console.log("Product Name :"+qq);
    console.log("Product Name :"+aa);
    console.log("Product Name :"+vv);


    document.getElementById("hoodie").value="";
    document.getElementById("trimmer").value="";
    document.getElementById("trimmer").value="";

   

}























