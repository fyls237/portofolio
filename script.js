document.addEventListener('DOMContentLoaded', () => {
    // Current Year Logic
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Burger Menu Logic
    const burgerBtn = document.getElementById('burgerBtn');
    const mainNav = document.getElementById('mainNav');

    if (burgerBtn && mainNav) {
        burgerBtn.addEventListener('click', () => {
            mainNav.classList.toggle('active');

            // Optional: Animate burger to X
            burgerBtn.classList.toggle('open');
        });
    }

    // Close menu when clicking a link (mobile UX)
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                burgerBtn.classList.remove('open');
            }
        });
    });
});
