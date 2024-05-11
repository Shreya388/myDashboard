import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Calender.css";

const MyCalender = () => {
    return (
        <>
            <div>
                <Calendar calendarType="gregory" />
            </div>
        </>
    );
}

export default MyCalender;