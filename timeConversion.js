// Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

// Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

// Function Description

// Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

// timeConversion has the following parameter(s):

// s: a string representing time in 12 hour format



function timeConversion(s) {

    const timeArray = s.slice(0, 8).split(':');

    if (s.includes('PM')) {
        if (timeArray[0] == 12) {
            timeArray[0] = '12'
        } else {
            timeArray[0] = Number(timeArray[0]) + 12
        }

        // s.includes('AM')

    } else {
        if (timeArray[0] == 12) {
            timeArray[0] = '00'
        } else {
            timeArray[0] = timeArray[0]
        }
    }

    return timeArray.join(':');

}