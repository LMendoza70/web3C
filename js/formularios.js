var formulario=document.getElementById("frmlogin")
var uss="admin", pss="0000",contador=0


formulario.addEventListener("submit",function (evento){
    evento.preventDefault()
    var usuario= document.getElementById("user").value
    var password=document.getElementById("pass").value
    var btn=document.getElementById("boton")
    var url="../respuestas.html"
    var parametros="?usuario="+encodeURIComponent(usuario)+"&contasenia="+encodeURIComponent(password)

    if(uss==usuario && pss==password){
        window.location.href=url+parametros
    }else if(contador<3){
        contador=contador+1
        alert("Credenciales incorrectas intento :"+contador)         
    }else
        btn.disabled=true

    console.log("hola")
})
console.log(formulario)