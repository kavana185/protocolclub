// Mobile menu toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector("nav ul").classList.toggle("active");
});

// Typing Effect (Optional)
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.typing');
    elements.forEach((el, index) => {
        let text = el.innerHTML;
        el.innerHTML = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                el.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, 100);
            }
        }
        setTimeout(type, 1000 * index);
    });
});

document.getElementById('burger-menu').addEventListener('click', function() {
    const mobileNav = document.getElementById('mobile-nav');
    mobileNav.classList.toggle('show');
});
