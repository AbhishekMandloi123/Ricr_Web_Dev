let b=1 , c=1 , s=0 , g=0;
const img = document.getElementById("image").src;    

if(img === "http://127.0.0.1:5500/JavaScript/PhotoEditingTool/index.html"){

    document.getElementById("image").style.display ="none";
}

function uploadimage(){
    const file = document.getElementById("upload").files[0];

    const fileURl = URL.createObjectURL(file);

    document.getElementById("image").src = fileURl;
    document.getElementById("image").style.display ="block";
    document.getElementById("uploadlable").style.display ="none";



}
function changeBrightness(){     
    const value=document.getElementById("Brightness").value;
    b=(value*2/10);

}
function changeContrast(){
    const value=document.getElementById("Contrast").value;
    document.getElementById("image").style.filter=`contrast(${value*2/100})`

}
function changeGrayscale(){
    const value=document.getElementById("Grayscale").value;
    document.getElementById("image").style.filter=`grayscale(${value*2/100})`

}
function changeSepia(){
    const value=document.getElementById("Sepia").value;
    document.getElementById("image").style.filter=`sepia(${value*2/100})`

}
function changeSaturated(){
    const value=document.getElementById("Saturated").value;
    document.getElementById("image").style.filter=`saturated(${value*2/100})`

}
function changeBlur(){
    const value=document.getElementById("Blur").px;
    document.getElementById("image").style.filter=`blur(${value*2/100})`

}