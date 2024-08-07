
const PI = 3.141592653
let radius;
let result;
document.getElementById("mysubmit").onclick = function(){
    radius = document.getElementById("myradius").value;
    result = 2 * PI * radius;
    document.getElementById("myresult").textContent = `Apskritimo ilgis: ${result}cm`;
    document.getElementById("apvalintas").textContent = `Suapvalinus: ${Math.round(result)}cm`;
}




