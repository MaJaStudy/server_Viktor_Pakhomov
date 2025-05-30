const Num = document.getElementById("Num");
const Mun = document.getElementById("Mun");
let Rez = document.getElementById("Rez");
document.getElementById("Add").onclick = function(){
    Rez.value = Number(Num.value) + Number(Mun.value);
};
document.getElementById("Sub").onclick = function(){
    Rez.value = Number(Num.value) - Number(Mun.value);
};
document.getElementById("Mul").onclick = function(){
    Rez.value = Number(Num.value) * Number(Mun.value);
};
document.getElementById("Div").onclick = function(){
    if (Mun.value != 0)
    {
        Rez.value = Number(Num.value) / Number(Mun.value);
    }
    else
    {
        /*Rez.value="Делить на 0 нельзя";*/
        alert("Делить на 0 нельзя");
        return;
    }
};
document.getElementById("Clear").onclick = function(){
    Num.value="";
    Mun.value="";
    Rez.value="";
};

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode
    if (charCode > 31 && (charCode != 45 && (charCode != 46 &&(charCode < 48 || charCode > 57)))) 
      return false;
    return true;
  }