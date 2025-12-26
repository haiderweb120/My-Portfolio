// Dark Mode Toggle[span_10](end_span)
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeBtn.innerText = document.body.classList.contains('dark-mode') ? "☀️" : "🌓";
});
// Smooth Scroll for Navigation[span_11](end_span)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', e => {
        if(link.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(link.hash);
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});