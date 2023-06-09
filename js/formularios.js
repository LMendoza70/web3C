var formulario=document.getElementById("frmlogin")
var uss="admin", pss="0000"
formulario.addEventListener("submit",function (evento){
    evento.preventDefault()
    var usuario= document.getElementById("user").value
    var password=document.getElementById("pass").value

    if(uss==usuario && pss==password){
        window.location.href="../respuestas.html"
    }else{
        alert("Credenciales incorrectas")
    }

    console.log("hola")
})
console.log(formulario)