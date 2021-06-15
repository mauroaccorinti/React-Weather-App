import React from "react"


const Top = ({
    location: {city, stateCountry},
    date,
    ...props
}) => {

    const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"]
    const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

    var dayMonth = date.getDate() + " " + months[date.getMonth()];
    var weekDay = days[date.getDay()];

    return (
        <div className="top">
            <div className="location">
                <p className="city">{city}</p>
                <p className="country">{stateCountry}</p>
            </div>
            <div className="date">
                <p className="day-month">{dayMonth}</p>
                <p className="week-day">{weekDay}</p>
            </div>
        </div>
    );
}

export default Top;