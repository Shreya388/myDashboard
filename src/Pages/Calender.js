import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import "./Calender.css";

const MyCalendar = () => {
    return (
            <div className='MyCalendar'>
                <Calendar calendarType="gregory" />
            </div>
    );
}

export default MyCalendar;