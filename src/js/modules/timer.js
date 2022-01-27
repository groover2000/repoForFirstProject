
const timer = (element, endTime) => {

    const getTimeRemaining = (end) => {
        const t = Date.parse(end) - new Date(),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 60000) % 60),
            hours = Math.floor((t / 3600000) % 24),
            days = Math.floor((t / 86400000) % 30);

            console.log(seconds);
            console.log(minutes);
            console.log(hours);
            console.log(days);
             
    }
    getTimeRemaining(element);

}

export default timer;