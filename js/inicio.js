//var let const 
var v1,v2,res,caja;
function captura1(){
    v1=document.getElementById("v1").value
    v1=Number.parseFloat(v1)
}

function captura2(){
    v2=document.getElementById("val2").value
    v2=Number.parseFloat(v2)
    caja=document.getElementById("resultado")
}
function sum(){
    res=v1+v2
    caja.textContent="El resultado de la suma es : "+res
    //console.log("El resultado de la suma es : "+res);
}

function resta(){
    res=v1-v2;
    caja.textContent="El resultado de la resta es : "+res;
}

function mul(){
    res=v1*v2
    caja.textContent="El resultado de la multiplicacion es : "+res
}

function div(){
    res=v1/v2
    caja.textContent="El resultado de la division es : "+res
}