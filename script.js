document.addEventListener('DOMContentLoaded', () => {
    
    // --- Hidden Messages Logic ---
    const buttons = document.querySelectorAll('.reveal-btn');
    const messages = document.querySelectorAll('.hidden-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const targetMessage = document.getElementById(targetId);

            // If the clicked button is already active, close the message
            if (button.classList.contains('active')) {
                button.classList.remove('active');
                targetMessage.style.display = 'none';
                return;
            }

            // Reset all buttons and hide all messages
            buttons.forEach(btn => btn.classList.remove('active'));
            messages.forEach(msg => msg.style.display = 'none');

            // Activate clicked button and show target message
            button.classList.add('active');
            targetMessage.style.display = 'block';
        });
    });

    // --- Mobile Flip Card Support ---
    // On touch devices, hover doesn't work well. We use click to toggle.
    const cards = document.querySelectorAll('.flip-card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            card.classList.toggle('active');
        });
    });

    // --- Smooth Scroll for Header Indicator ---
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const nextSection = document.querySelector('main');
            nextSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // --- Music Player Logic ---
    const musicBtn = document.getElementById('music-btn');
    const bgMusic = document.getElementById('bg-music');
    let isPlaying = false;

    if (musicBtn && bgMusic) {
        musicBtn.addEventListener('click', () => {
            if (isPlaying) {
                bgMusic.pause();
                musicBtn.classList.remove('playing');
                musicBtn.innerHTML = '<i class="fas fa-music"></i>';
            } else {
                bgMusic.play().catch(error => {
                    console.log("Audio play failed (likely due to browser autoplay policy):", error);
                    alert("Tap again to play music! (Browsers block auto-audio)");
                });
                musicBtn.classList.add('playing');
                musicBtn.innerHTML = '<i class="fas fa-pause"></i>';
            }
            isPlaying = !isPlaying;
        });
    }

    // --- Countdown Timer Logic ---
    // Set the date we met (YYYY, MM (0-11), DD)
    const startDate = new Date(2016, 4, 8); // Example: Jan 1, 2023

    function updateCountdown() {
        const now = new Date();
        const diff = now - startDate;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
    }

    setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    // --- Ripple Effect for Buttons ---
    const allButtons = document.querySelectorAll('button, .flip-card');
    
    allButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Only for buttons, not flip cards (flip cards have their own logic)
            if (this.classList.contains('flip-card')) return;

            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;

            let ripples = document.createElement('span');
            ripples.style.left = x + 'px';
            ripples.style.top = y + 'px';
            ripples.classList.add('ripple');
            this.appendChild(ripples);

            setTimeout(() => {
                ripples.remove();
            }, 600);
        });
    });
});
