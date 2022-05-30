import { useEffect } from "react";

export default function CountDownTimer() {

    let newYears = "9 Jun 2022"

    function countdown() {
        const newYearsDate = new Date(newYears);
        const currentDate = new Date();
    
        const totalSeconds = (newYearsDate - currentDate) / 1000;
    
        const days = Math.floor(totalSeconds / 3600 / 24);
        const hours = Math.floor(totalSeconds / 3600) % 24;
        const mins = Math.floor(totalSeconds / 60) % 60;
        const seconds = Math.floor(totalSeconds) % 60;
    
        // daysEl.innerHTML = days;
        // hoursEl.innerHTML = formatTime(hours);
        // minsEl.innerHTML = formatTime(mins);
        // secondsEl.innerHTML = formatTime(seconds);
    }

    function formatTime(time) {
        return time < 10 ? `0${time}` : time;
    }

    useEffect()

    return(
        <div className="countdown-container">
            <div className="countdown-el days-c">
                <p className="big-text" id="days">0</p>
                <span>days</span>
            </div>
            <div className="countdown-el hours-c">
                <p className="big-text" id="hours">0</p>
                <span>hours</span>
            </div>
            <div className="countdown-el mins-c">
                <p className="big-text" id="mins">0</p>
                <span>mins</span>
            </div>
            <div className="countdown-el seconds-c">
                <p className="big-text" id="seconds">0</p>
                <span>seconds</span>
            </div>
        </div>
    )
}