
let fecha = () => { fecha = new Date(); console.log(fecha.toLocaleString()) };


const registrar = () =>{
    let nombre = prompt("Di tu nombre")
    let mensaje = prompt("Dinos un mensaje")
    li.innerHTML = `<li>${nombre}  dice  ${mensaje}   <strong>|Mensaje enviado ${fecha}</strong></li>`


if(mensaje.length < 10){
    document.body.style.background = 'yellow'; 
    setTimeout(() => document.body.style.background = '', 5000); 
}
}
registrar(console.log(fecha())); 


 
 