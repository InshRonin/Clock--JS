setInterval(() => {
    const date = new Date();
    let hours = date.getHours();
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    const amPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
    const formattedHours = String(hours).padStart(2, '0');

    var time = `${formattedHours}:${minutes}:${seconds} ${amPm}`;
    var timeNow = document.querySelector('.time');
    timeNow.innerHTML = time;
}, 1000);



