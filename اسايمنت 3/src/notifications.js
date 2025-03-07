/*File for alarm sound*/

//used require so that webpack can track the right path
export const alarmSound=()=> {
    const sound = new Audio(require('./alert.mp3')); 
    sound.play();
}