function scrollToAbout() {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
}

function animateText(element) {
    const text = element.textContent;
    element.textContent = '';
    element.style.opacity = '1';
    let totalDelay = 0;
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        if (char === ' ') {
            element.appendChild(document.createTextNode(' '));
        } else {
            const span = document.createElement('span');
            span.textContent = char;
            span.classList.add('animated-letter');
            span.style.animationDelay = totalDelay + 'ms';
            element.appendChild(span);
        }
        totalDelay += 30;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const heroTitle = document.querySelector('.hero h1');
    const heroSubtitle = document.querySelector('.hero p');

    animateText(heroTitle);
    animateText(heroSubtitle);
});