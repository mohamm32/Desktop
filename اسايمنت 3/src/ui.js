/*File for UI and other functions that are not directly related to the alarm functionality */
import { startTimer, pauseTimer, resetTimer, setDurations, changeMode,sessionState } from './timer.js';
import { alarmSound } from './notifications.js';
import { getWorkDuration, getBreakDuration, getLongBreakDuration, setWorkDuration, setBreakDuration, setLongBreakDuration } from './settings.js';
/* Poiting to all neded UI components */
const minutesCount = document.getElementById('minutes');
const secondsCount = document.getElementById('seconds');
const startButton = document.getElementById('start-btn');
const pauseButton = document.getElementById('pause-btn');
const resetButton = document.getElementById('reset-btn');
const workInput = document.getElementById('work-duration');
const breakInput = document.getElementById('break-duration');
const longBreakInput = document.getElementById('long-break-duration');
const workButton=document.getElementById('work-btn');
const shortButton=document.getElementById('short-btn');
const longButton=document.getElementById('long-btn');
const tasks=document.getElementById("tasks-container");
const addButton=document.getElementById("add-btn");
const progressBar=document.getElementById("progress-bar")
let currentMode="work";

//update the visual of the timer every second
export const updateTimer=(time,startTime)=> {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    minutesCount.textContent = String(minutes).padStart(2, '0');
    secondsCount.textContent = String(seconds).padStart(2, '0');
    const progress = (time / startTime) * 100;
    progressBar.setAttribute("value",progress) 

}
//a function to maintain colors between mulitple modes
export const changeColor=(isWorkSession)=> {
    const mainContainer = document.querySelector(".main-container");
    mainContainer.style.backgroundColor = isWorkSession ? "rgb(248, 81, 81)" : "#1ba2ff";
    startButton.style.backgroundColor = isWorkSession ? "rgb(248, 141, 141)" : "#67c1ff";
    pauseButton.style.backgroundColor = isWorkSession ? "rgb(248, 141, 141)" : "#67c1ff";
    resetButton.style.backgroundColor = isWorkSession ? "rgb(248, 141, 141)" : "#67c1ff";
    workButton.style.backgroundColor = isWorkSession ? "rgb(248, 141, 141)" : "#67c1ff";
    shortButton.style.backgroundColor = isWorkSession ? "rgb(248, 141, 141)" : "#67c1ff";
    longButton.style.backgroundColor = isWorkSession ? "rgb(248, 141, 141)" : "#67c1ff";
    addButton.style.backgroundColor = isWorkSession ? "rgb(248, 141, 141)" : "#67c1ff";

}

//implementing buttons functionality
startButton.addEventListener('click', () => startTimer(updateTimer, changeColor, alarmSound));
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', () => resetTimer(updateTimer));
//diffrenciated between modes, this will help in the timer logic, updating time and reseting
workButton.addEventListener('click',()=>{changeMode("work",updateTimer,changeColor)
    currentMode="work"
    sessionState.isWorkSession=true;
    sessionState.isBreak=false;
    sessionState.isLongBreak=false;
})
shortButton.addEventListener('click',()=>{changeMode("short",updateTimer,changeColor)
    currentMode="short"
    sessionState.isBreak=true;
    sessionState.isLongBreak=false;
    sessionState.isWorkSession=false;

})
longButton.addEventListener('click',()=>{changeMode("long",updateTimer,changeColor)
    currentMode="long"
    sessionState.isBreak=false;
    sessionState.isLongBreak=true;
    sessionState.isWorkSession=false;
})

//task adding, when ever a user clicks the add button a task will be added and they can modify the name of it
addButton.addEventListener('click',()=>{
    const newTask=document.createElement("input")
    const checkBox=document.createElement("input")
    const doneSpan=document.createElement("span")
    tasks.append(newTask);
    tasks.append(checkBox);
    tasks.append(doneSpan);
    newTask.classList.add("task-inputs");
    checkBox.setAttribute("type","checkBox")
    doneSpan.textContent="Done?"
})

//when the document loads take the values of each duration and send them to the timer
document.addEventListener("DOMContentLoaded", () => {
    workInput.value = getWorkDuration();
    breakInput.value = getBreakDuration();
    longBreakInput.value = getLongBreakDuration();

    setDurations(getWorkDuration(), getBreakDuration(), getLongBreakDuration());
    updateTimer(workInput.value*60)


});
//when inputs are modified values are also modified, it is mode specific, so that if I edit in a mode it does not affect other modes
workInput.addEventListener('input', () => {
    validateInput(workInput);
    setWorkDuration(workInput.value);
    setDurations(workInput.value, breakInput.value, longBreakInput.value);
    if(currentMode==="work"){
        updateTimer(workInput.value*60)

    }
});

breakInput.addEventListener('input', () => {
    validateInput(breakInput);
    setBreakDuration(breakInput.value);
    setDurations(workInput.value, breakInput.value, longBreakInput.value);
    if(currentMode==="short"){
        updateTimer(breakInput.value*60)

    }


});

longBreakInput.addEventListener('input', () => {
    validateInput(longBreakInput);
    setLongBreakDuration(longBreakInput.value);
    setDurations(workInput.value, breakInput.value, longBreakInput.value);
    if(currentMode==="long"){
        updateTimer(longBreakInput.value*60)

    }

});

//validation previting negative,empty,and non numeric values
const validateInput=(userInput)=> {
    userInput.value = userInput.value.replace(/\D/g, '');//regular exp, replace anything that is not a number with ''
    if (userInput.value === "" || parseInt(userInput.value) < 1) {
        userInput.value = 1; 
    }
}

