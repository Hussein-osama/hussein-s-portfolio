// Typing effect animation (if you want to extend the typing text feature)
document.addEventListener("DOMContentLoaded", function() {
    const typingText = document.querySelector('.typing-text');
    const textToType = "Hussein Osama";
    let index = 0;

    function typeText() {
        if (index < textToType.length) {
            typingText.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeText, 200);
        }
    }

    setTimeout(typeText, 1000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
window.onload = function() {
    const nameText = document.getElementById("nameText");
    
    // After the animation ends, hide the text
    nameText.addEventListener("animationend", () => {
        nameText.style.display = 'none'; // This will hide the text after the animation
    });
};

