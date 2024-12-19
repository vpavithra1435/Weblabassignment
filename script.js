$(document).ready(function () {
    // Smooth Scroll
    $('a').on('click', function (event) {
        if (this.hash !== '') {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // Simple Popup
    $('.btn').on('click', function () {
        alert('Navigating to: ' + $(this).text());
    });
});
