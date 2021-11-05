"use strict"


let section = document.getElementById("section");





let funcion = () =>{
    let fecha = new Date();
    let reloj = document.getElementById("reloj").innerHTML = `${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`

    if(fecha.getHours()>=5&&fecha.getHours()<12){
        section.className = "container";
    }
    else if(fecha.getHours()>=12&&fecha.getHours()<18){
        section.className = "containerTarde";
    }
    else if(fecha.getHours()>=18&&fecha.getHours()<=23||fecha.getHours()>=0&&fecha.getHours()<5){
        section.className = "containerNoche";
    }
}

setInterval(() =>{funcion()},1000);

