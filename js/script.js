
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

         if (hours < 10) {
        digitalhoras.textContent = '0' + hours;
    } else {
        digitalhoras.textContent = hours;
      }

        if (minutes < 10) {
    digitalmin.textContent = '0' + minutes;
    } else {
    digitalmin.textContent = minutes;
    }

        if (seconds < 10) {
    digitalseconds.textContent = '0' + seconds;
    } else {
    digitalseconds.textContent = seconds;
    }




}, 1000); 




