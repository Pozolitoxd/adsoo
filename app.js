//button login abrir modal
const modal = document.getElementById('content');
const btnLogin=document.getElementById('login');
btnLogin.onclick=function(){
    modal.style.display='flex';
}
//button cerrar modal
const btnCerrar=document.getElementById('cerrar');
btnCerrar.onclick=function(){
    modal.style.display='none';
}
//button ingresar 
const btnIngresar =document.getElementById('ingresar');
const correo= document.getElementById('correo');
const passwordd =document.getElementById('contra');
btnIngresar.onclick=function(){
    if(correo.value=='pepe@gmail.com' && passwordd.value=='123456'){
        window.location.href='panel.html';
    }
}