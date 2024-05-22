document.addEventListener("DOMContentLoaded", function() {
    // Scrollbar
    const sections = document.querySelectorAll(".main-section");

    window.addEventListener("scroll", () => {
        let nextSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset + window.innerHeight * 0.5 >= sectionTop) {
                nextSection = section;
            }
        });

        if (nextSection) {
            switch (nextSection.id) {
                case "first-block":
                    console.log("case1")
                    document.documentElement.style.setProperty('--scrollbar-thumb-color', '#a6c0ca');
                    break;
                case "second-block":
                    console.log("case2")
                    document.documentElement.style.setProperty('--scrollbar-thumb-color', '#b69eb8');
                    break;
                case "third-block":
                    console.log("case3")
                    document.documentElement.style.setProperty('--scrollbar-thumb-color', '#96b18c');
                    break;
                case "fourth-block":
                    console.log("case4")
                    document.documentElement.style.setProperty('--scrollbar-thumb-color', '#c5bc8b');
                    break;
                default:
                    console.log("default")
                    document.documentElement.style.setProperty('--scrollbar-thumb-color', '#a6c0ca');
                    break;
            }
        }
    });
    
    // Sidebar
    const buttons = document.querySelectorAll(".aside-button");
    const sidebar = document.getElementById("nav-sidebar");

    console.log(buttons);

    buttons.forEach(item => {

        item.addEventListener('click', () => {
            sidebar.classList.toggle('show');
        });
    });
    
    // Countdown
    const countdownDate = new Date("2024-05-31T00:00:00");

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;

        if (distance < 0) {
            clearInterval(countdownInterval);
            document.getElementById('timer').innerText = "EXPIRED";
        }
    }

    const countdownInterval = setInterval(updateCountdown, 1000);

    // FAQ
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.icon');

        item.addEventListener('click', () => {
            answer.classList.toggle('show');
            icon.classList.toggle('rotate');
        });
    });

});
