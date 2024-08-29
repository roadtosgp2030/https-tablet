const oneDay = 86400000;
const oneHour = 3600000;
const oneMinute = 60000;

export default function (msTime) {
    let day = 0;
    let hour = 0;
    let minute = 0;
    while (msTime > 0) {
        if (msTime >= oneDay) {
            day++;
            msTime -= oneDay;
        } else if (msTime >= oneHour) {
            hour++;
            msTime -= oneHour;
        } else if (msTime >= oneMinute) {
            minute++;
            msTime -= oneMinute;
        } else {
            msTime = 0;
        }
    }

    // return `${day} ${day > 1 ? 'days' : 'day'} ${hour} ${hour > 1 ? 'hours' : 'hour'} ${minute} ${minute > 0 ? 'minutes' : 'minute'}`
    return {
        dayTime: {
            value: day,
            text: day > 1 ? "days" : "day",
        },
        hourTime: {
            value: hour,
            text: hour > 1 ? "hours" : "hour",
        },
        minuteTime: {
            value: minute,
            text: minute > 1 ? "minutes" : "minute",
        },
    };
}
