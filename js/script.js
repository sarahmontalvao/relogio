
const horaponteiro = document.querySelector('.horaponteiro');
const minutoponteiro = document.querySelector('.minutoponteiro');
const segundoponteiro = document.querySelector('.segundoponteiro');
const digitalhoras = document.getElementById('horas');
const digitalmin = document.getElementById('min');
const digitalseconds =document.getElementById('s');

const getTime = () => {

    const date = new Date();
   

    return {
        hours: date.getHours() ,
        minutes: date.getMinutes() ,
        seconds: date.getSeconds(),
    };
}

setInterval(() => {

    const {seconds, minutes, hours} = getTime();

    segundoponteiro.style.transform= ` translate(0, -50%) rotatez(${seconds * 6}deg) `;
    minutoponteiro.style.transform= ` translate(0, -50%) rotatez(${minutes * 6}deg) `;
    horaponteiro.style.transform= ` translate(0, -50%) rotatez(${hours * 30}deg) `;

    horas.textContent = hours;
    min.textContent = minutes;
    s.textContent = seconds;

}, 1000); 




