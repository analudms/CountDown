'use strict';

const formatDigit = (digit) => `0${digit}`.slice(-2)


const update = (temp) => {
    const seconds =  document.getElementById('seconds');
    const minutes =  document.getElementById('minutes');
    const hours =  document.getElementById('hours');
    const days =  document.getElementById('days');


    const numberSeconds = temp % 60;
    const numberMinutes = Math.floor((temp % (60 * 60) / 60));
    const numberHours = Math.floor((temp % (60 * 60 * 24)) / (60 * 60));
    const numberDays = Math.floor(temp / (60 * 60 * 24));

    seconds.textContent = formatDigit(numberSeconds);
    minutes.textContent = formatDigit(numberMinutes);
    hours.textContent = formatDigit(numberHours);
    days.textContent = formatDigit(numberDays);
}



const countDown = (temp) => {
    const stopCount = () => clearInterval(id);

    const count = () => {
        if (temp === 0){
            stopCount();
        }
        update(temp);
        temp --;
    }
    const id = setInterval(count, 1000);
}

const timeLeft = () => {
    const eventDay = new Date('2024-05-02 20:00:00');
    const today = Date.now();

    if (today > eventDay){
        const aviso = document.getElementById('aviso');

        aviso.textContent = `Live feita em ${eventDay}`;
        return 0;
 }

    return Math.floor((eventDay - today) / 1000);
}

countDown(timeLeft());