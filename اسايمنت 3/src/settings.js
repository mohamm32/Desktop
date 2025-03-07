/*File for user prefrences, where if the user updates a filed and refreshes the page the value that they want will be 
Stored and called from the local storage*/

//for user prefrences, I used localStorage so when the user refresh the page, info will still be there
export const getWorkDuration=()=> {
    return parseInt(localStorage.getItem("workDuration")) || 25;
}

export const getBreakDuration=()=> {
    return parseInt(localStorage.getItem("breakDuration")) || 5;
}

export const getLongBreakDuration=()=> {
    return parseInt(localStorage.getItem("longBreakDuration")) || 15;
}

//some additional value validation here (extra testing)
export const setWorkDuration=(value)=> {
    if (value >= 1) {
        localStorage.setItem("workDuration", value);
    }

}

export const setBreakDuration=(value)=> {  
    if (value >= 1 ) {
        localStorage.setItem("breakDuration", value);
    }
}

export const setLongBreakDuration=(value)=> {
    if (value >= 1) {
        localStorage.setItem("longBreakDuration", value);
    }
}