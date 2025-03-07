import './style.css';
import { startTimer, pauseTimer, resetTimer, setDurations, changeMode, sessionState } from './timer.js';
import { alarmSound } from './notifications.js';
import { getWorkDuration, getBreakDuration, getLongBreakDuration, setWorkDuration, setBreakDuration, setLongBreakDuration } from './settings.js';
import { updateTimer, changeColor, initializeUI } from './ui.js';