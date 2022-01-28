
const timer = (element, endTime) => {

    const timerHelper = (num) => {
        if(num <= 9) {
            return '0' + num;
        }else {
            return num
        }
    }

    const getTimeRemaining = (end) => {
        const t = Date.parse(end) - new Date(),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 60000) % 60),
            hours = Math.floor((t / 3600000) % 24),
            days = Math.floor((t / 86400000) % 30);

            return {
                'total': t,
                'seconds': seconds, 
                'minutes': minutes, 
                'hours': hours, 
                'days': days 
            };
    };

    const showTime = (elem) => {
        const timerBlock = document.querySelector(elem),
            seconds = timerBlock.querySelector('#seconds'),
            minutes = timerBlock.querySelector('#minutes'),
            hours = timerBlock.querySelector('#hours'),
            days = timerBlock.querySelector('#days');
            const timer = setInterval(tick, 1000);
            tick();

        function tick() {
            
            const t = getTimeRemaining(endTime);
            seconds.innerHTML = timerHelper(t.seconds);
            minutes.innerHTML = timerHelper(t.minutes);
            hours.innerHTML = timerHelper(t.hours);
            days.innerHTML = timerHelper(t.days);
                
                if(t <= 0) {
                    seconds.innerHTML = '00';
                    minutes.innerHTML = '00';
                    hours.innerHTML = '00';
                    days.innerHTML = '00';
                    clearInterval(timer);
                }
            }
    };

    
    showTime(element);
    
}

export default timer;