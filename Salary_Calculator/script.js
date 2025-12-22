function Salary(){
    const Inputsalary= Number(document.getElementById("Salary").value);
 
    let salary = Number(Inputsalary);
    let TotalSalary=0;
    
    if(salary<=10000){
       let HRA =salary*0.2;
       let Da=salary*0.80;
        TotalSalary= salary + HRA+Da;
    }
    else if(salary<=20000){
      let  HRA =salary*0.25;
       let Da=salary*0.90;
        TotalSalary= salary + HRA+Da;
    }
    else if(salary>20000) {
       let HRA =salary*0.30;
      let  Da=salary*0.95;
        TotalSalary= salary + HRA+Da;
    }
    document.getElementById("result").innerText = "Total Salary :" + TotalSalary;
    console.log(Salary)
}