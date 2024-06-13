let timer; 
const totalTime = 60; 

let timeLeft = totalTime; 
let isPaused = false; 

const startButton = document.querySelector(".start");
const buttonS = document.querySelector(".pause");
const buttonR = document.querySelector(".resume");
const buttonD = document.querySelector(".delete");

function visibility(start, pause, resume, deleteb) {
    startButton.style.display = start ? "inline-block" : "none";
    buttonS.style.display = pause ? "inline-block" : "none";
    buttonR.style.display = resume ? "inline-block" : "none";
    buttonD.style.display = deleteb ? "inline-block" : "none";
}

function startTimer() {
    if (timer || isPaused) {return}; 

    const reloj = document.querySelector('.conteo'); 
    visibility(false, true, false, true);

    timer = setInterval(() => { 
        let minutes = Math.floor(timeLeft / 60); 
        let seconds = timeLeft % 60; 
        
        minutes = minutes < 10 
         ? '0' + minutes 
         : minutes;
        seconds = seconds < 10 
         ? '0' + seconds 
         : seconds;
        
        reloj.textContent = `${minutes}:${seconds}`;
        
        if (timeLeft <= 0) {
            clearInterval(timer); 
            timer = null;
        }

        timeLeft--; 
    }, 1000); 
};

function pauseTimer() {
    if (!timer) return;

    clearInterval(timer);
    timer= null;
    isPaused = true;
    visibility(false, false, true, true);
};

function resetTimer() {
    clearInterval(timer);
    timer = null;

    timeLeft = totalTime; 
    const reloj = document.querySelector('.conteo');
    reloj.textContent = '01:00'; 
    visibility(true, false, false, false);
};

function resumeTimer() {
    if (timer || !isPaused) {return;}; 
    isPaused = false;   
    startTimer();
};

startButton.addEventListener("click", startTimer);
buttonS.addEventListener("click", pauseTimer);
buttonD.addEventListener("click", resetTimer);
buttonR.addEventListener("click", resumeTimer);



