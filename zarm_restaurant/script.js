document.addEventListener('DOMContentLoaded', () => {

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if the link is on the menu page and pointing to a contact section on the index page
            if (window.location.pathname.includes('menu.html') && this.getAttribute('href').includes('index.html')) {
                return; // Let the default link behavior handle it
            }
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Modal functionality
    const modal = document.getElementById('menu-item-modal');
    if (modal) {
        const modalImg = document.getElementById('modal-img');
        const modalTitle = document.getElementById('modal-title');
        const modalDescription = document.getElementById('modal-description');
        const closeButton = document.querySelector('.close-button');

        document.querySelectorAll('.menu-gallery-item').forEach(item => {
            item.addEventListener('click', () => {
                const title = item.getAttribute('data-title');
                const description = item.getAttribute('data-description');
                const imgSrc = item.getAttribute('data-img');

                modalTitle.textContent = title;
                modalDescription.textContent = description;
                modalImg.src = imgSrc;

                modal.style.display = 'block';
            });
        });

        // Close modal events
        closeButton.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (event) => {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    }
});
