function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function updateLocalTime() {
    const now = new Date();
    const timeZoneOffsetMinutes = 330;
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const localTimeInMilliseconds = utc + (timeZoneOffsetMinutes * 60000);
    const localTime = new Date(localTimeInMilliseconds);
    const hours = localTime.getHours().toString().padStart(2, '0');
    const minutes = localTime.getMinutes().toString().padStart(2, '0');
    const seconds = localTime.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById('local-time').textContent = ` (Time: ${timeString})`;
    }

updateLocalTime();

updateLocalTime();
 