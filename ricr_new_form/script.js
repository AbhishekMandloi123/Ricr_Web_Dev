function Submit(){

    const nm = document.getElementById("fullname").value;
    const em = document.getElementById("email").value;
    const ph = document.getElementById("phone").value;
    const db = document.getElementById("dob").value;

 if(/^[A-Za-z]+$/.test(nm))
 {
    alert("Wrong Input");
    return;
 }

 if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(em))
 {
    alert("Wrong Input");
    return;
 }

 if(!/^[6-9]\d{9}$/.test(ph))
 {
    alert("Wrong Input");
    return;
 }
 const currentyear = new Date().getFullYear();
 const birthyear = number(db.split("-")[0]);
 console.log(currentyear - birthyear);
    if(currentyear - birthyear < 18)
    {
        alert("Wrong Input");
        return;
    }



const data = {
    name: nm,
    email: em,
    phone: ph,
    dob: db
}

console.log(data);
}