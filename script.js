let timeleft;
let timerIntraval;
let timeLap = false;

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-Btn');
const stopBtn = document.getElementById('stop-Btn');

const startTimer =(duration) =>{
    let timer= duration;
    
    timerIntraval=setInterval(() =>{
        const minutes = parseInt(timer/60,10);
        const seconds = parseInt(timer%60,10);

        const displayMin= minutes <10 ? '0'+ minutes : minutes;
        const displaySec= seconds <10 ? '0'+ seconds : seconds;

        timerDisplay.textContent= displayMin + ':'+ displaySec;

        if(--timer<0){
            clearInterval(timerIntraval);
            timerDisplay.textContent= 'Breath Out';

            setTimeout(() =>{
                timerDisplay.textContent= 'Breath In';
                startTimer(timeleft);
            },3000);
        }

    },1000);
}
    const stopTimer =() =>{
        clearInterval(timerIntraval);
        timerDisplay.textContent='breath In';
        timeLap= false;
    }
    startBtn.addEventListener('click',()=>{
        if(!timeLap){
            timeleft= 90;
            startTimer(timeleft);
            timeLap= true;
        }
    });
    stopBtn.addEventListener('click',() =>{
        stopTimer();
        timeLap= false;
    });
