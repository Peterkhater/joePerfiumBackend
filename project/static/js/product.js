$(document).ready(function () {
    function initCarousel() {
        // Destroy any existing carousel instance to prevent duplication
        $('.owl-carousel').trigger('destroy.owl.carousel');
        
        // Reinitialize the carousel
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: true,
            items: 4
        });
    }

    // Initialize on page load
    initCarousel();

    // If using AJAX navigation, reinitialize when content changes
    $(document).on('click', '.product-link', function () {
        setTimeout(initCarousel, 500); // Slight delay to ensure content is loaded
    });
});
