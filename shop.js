document.addEventListener("DOMContentLoaded", function () {
    let ratings = document.querySelectorAll(".rating");

    ratings.forEach(rating => {
        let stars = rating.querySelectorAll(".fa-star");

        stars.forEach(star => {
            star.addEventListener("click", function () {
                this.classList.toggle("selected"); // Toggle only this star
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    let scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true
    });
});

function bookUs() {
    alert('We will get back to you shortly');
}

function hamburg() {
    const navbar = document.getElementById('sideNav');
    navbar.classList.add('show');
    document.querySelector('.hamburg').style.display = 'none';
    document.querySelector('.cancel').style.display = 'block';
}

function cancel() {
    const navbar = document.getElementById('sideNav');
    navbar.classList.remove('show');
    document.querySelector('.hamburg').style.display = 'block';
    document.querySelector('.cancel').style.display = 'none';
}

const slider = document.body;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('grabbing-cursor');
    slider.classList.remove('grab-cursor');
    startY = e.pageY - slider.offsetTop;
    scrollTop = slider.scrollTop;
});

slider.addEventListener('mouseleave', () => {
    if (!isDown) return;
    isDown = false;
    slider.classList.remove('grabbing-cursor');
    slider.classList.add('grab-cursor');
});

slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('grabbing-cursor');
    slider.classList.add('grab-cursor');
});

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const y = e.pageY - slider.offsetTop;
    const walk = (y - startY) * 3; //scroll-fast
    slider.scrollTop = scrollTop - walk;
});

function chart(){
    alert('Added Successfully')
}