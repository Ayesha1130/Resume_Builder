// Get current pathname (simulating usePathname hook)
var pathname = window.location.pathname;
// Function to handle active link class
function setActiveLink() {
    var links = document.querySelectorAll('.nav-link');
    links.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === pathname) {
            link.classList.add('active');
        }
    });
    var smallLinks = document.querySelectorAll('.small-screen-link');
    smallLinks.forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('href') === pathname) {
            link.classList.add('active');
        }
    });
}
// Call function to set active link based on pathname
setActiveLink();
// Mobile Menu Toggle
var isMenuOpen = false;
function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    var smallMenu = document.getElementById('smallScreenMenu');
    var menuIcon = document.getElementById('<i class="fa-solid fa-bars"></i>');
    var closeIcon = document.getElementById('<i class="fa-solid fa-xmark"></i>');
    if (isMenuOpen) {
        smallMenu.style.display = 'block';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
    else {
        smallMenu.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}
document.addEventListener('DOMContentLoaded', function () {
    var allToggleButtons = document.querySelectorAll('.toggle-button');
    allToggleButtons.forEach(function (element) {
        element.addEventListener('click', function () {
            var togglebutton = element.getAttribute('data-target');
            if (togglebutton && togglebutton.trim()) {
                var targetElement = document.getElementById(togglebutton);
                if (targetElement) {
                    if (targetElement.style.display === 'block' || targetElement.style.display === ' ') {
                        targetElement.style.display = 'none';
                    }
                    else {
                        targetElement.style.display = 'block';
                    }
                }
                else {
                    console.log("No target element found ".concat(togglebutton));
                }
            }
            else {
                console.log('No data-target attribute found');
            }
        });
    });
});
