/* File for timer implementation */

//some variables needed to make the tiemr work
let timer;
let isRunning = false;
//I needed to export the variables, but I had an error, so with some reseach I found that putting them in an object fixed it
export const sessionState = {
    isWorkSession: true,
    isBreak: false,
    isLongBreak: false,
};
//default time durations
let workDuration = 25 * 60;
let breakDuration = 5 * 60;
let longBreakDuration = 15 * 60;
let timeLeft = workDuration;
var sessionCounter = 0;
//initial time is for the progress bar fucntionlity
let initialTime;

export const startTimer=(updateUI, switchMode, playSound)=> {
    initialTime=timeLeft;
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateUI(timeLeft,initialTime);
            } 
            else {
                clearInterval(timer);
                playSound();
            if (sessionState.isWorkSession) {
                    sessionCounter++;
                    sessionState.isBreak=true;
                    sessionState.isLongBreak=false;
                    sessionState.isWorkSession=false; 
                    timeLeft=breakDuration;                   
                    switchMode(!sessionState.isBreak);

                }

            else if(sessionState.isBreak) 
                {
                sessionState.isBreak=false;
                sessionState.isLongBreak=false;
                sessionState.isWorkSession=true;
                timeLeft=workDuration; 
                switchMode(sessionState.isWorkSession);
                 

                }    
            if (sessionCounter % 4 === 0) {
                sessionState.isLongBreak=true;
                sessionState.isBreak=false;
                sessionState.isWorkSession=false;                  
                timeLeft=longBreakDuration;
                switchMode(!sessionState.isLongBreak);
                } 

                updateUI(timeLeft);
                isRunning = false; 
            }
        }, 1000);

    }
}


//pause stops the interval
export const pauseTimer=()=> {
    clearInterval(timer);
    isRunning = false;
}

//reset is mode specific, without that it will be always resting to a specific number ( we don't want that)
export const resetTimer=(updateUI)=> {
    clearInterval(timer);
    isRunning = false;
    if(sessionState.isWorkSession){
        updateUI(workDuration)
    }
    else if(sessionState.isBreak)
    {
        updateUI(breakDuration)
    }
    else if(sessionState.isLongBreak)
    {
        updateUI(longBreakDuration)
    }

}

//update the duration, the values are passed from the input whenever it is updated
export const setDurations=(work, shortBreak, longBreak)=> {
    workDuration = work * 60;
    breakDuration = shortBreak * 60;
    longBreakDuration = longBreak * 60;
    
    if (!isRunning) {
        if(sessionState.isWorkSession){
            timeLeft=workDuration;
        }
        else if(sessionState.isBreak){
            timeLeft=breakDuration;
        }        
        else if(sessionState.isLongBreak){
            timeLeft=longBreakDuration;
        }
    }
    else if (isRunning){
        pauseTimer();
        if(sessionState.isWorkSession){
            timeLeft=workDuration;
        }
        else if(sessionState.isBreak){
            timeLeft=breakDuration;
        }        
        else if(sessionState.isLongBreak){
            timeLeft=longBreakDuration;
        }
    }
    }


    //change between modes using buttons
export const changeMode=(mode,updateUI,switchMode)=>{
    if(mode==="work"){
        sessionState.isWorkSession = true;
        sessionState.isBreak=false;
        isRunning=false;
        sessionState.isLongBreak=false;
        timeLeft=workDuration;
        updateUI(timeLeft);
        switchMode(true);
        clearInterval(timer);
    }
    else if(mode==="short"){
        sessionState.isWorkSession = false;
        sessionState.isBreak=true;
        isRunning=false;
        sessionState.isLongBreak=false;
        timeLeft=breakDuration;
        updateUI(timeLeft);
        switchMode(false);
        clearInterval(timer);
    }    
    else if(mode==="long"){
        sessionState.isWorkSession = false;
        sessionState.isBreak=false;
        isRunning=false;
        sessionState.isLongBreak=true;
        timeLeft=longBreakDuration;
        updateUI(timeLeft);
        switchMode(false);
        clearInterval(timer);
    }
}
