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
});
