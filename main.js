document.addEventListener('DOMContentLoaded', function() {
    var path = window.location.pathname.split('/').pop();
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function(link) {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });
});