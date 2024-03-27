document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            let target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: "smooth"
                });
            }
        });
    });

    // Example dynamic action for the CTA button
    const ctaButton = document.querySelector('.cta button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            alert('Redirecting to reservation form...');
            // Implement the actual redirection or action here
            // For example, window.location.href = 'reservation.html';
        });
    }
});

// Placeholder for additional JavaScript functionality
// This can include modal interactions, dynamic content loading, etc.
