/* Script şuan html e bağlı değil. Linklere tıklandığındaki renk değişimini ayarla 
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () =>{
    sidebar.style.display = 'block';
})
closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})
 bunlara sonra bak */
 function updateCountdown() {
    const targetDate = new Date("2024-06-22T10:00:00").getTime(); // Hedef tarih ve saat
    const now = new Date().getTime();
    const timeRemaining = targetDate - now;

    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    document.getElementById("day").innerText = days.toString().padStart(2, "0");
    document.getElementById("hour").innerText = hours.toString().padStart(2, "0");
    document.getElementById("minute").innerText = minutes.toString().padStart(2, "0");
    document.getElementById("second").innerText = seconds.toString().padStart(2, "0");
}

setInterval(updateCountdown, 1000);
updateCountdown(); // Sayfa yüklendiğinde hemen güncellemek için
