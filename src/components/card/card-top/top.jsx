import React from "react"


const Top = (props) => {
    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];


    var dayMonth = props.date.getDate() + " " + months[props.date.getMonth()];
    var weekDay = days[props.date.getDay()];

    return (
    <div class="top">
        <div class="location">
            <p class="city">{props.location.city}</p>
            <p class="country">{props.location.stateCountry}</p>
        </div>
        <div class="date">
            <p class="day-month">{dayMonth}</p>
            <p class="week-day">{weekDay}</p>
        </div>
    </div>
    );
}

export default Top;