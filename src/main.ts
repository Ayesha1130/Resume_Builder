// Get current pathname (simulating usePathname hook)
const pathname = window.location.pathname;

// Function to handle active link class
function setActiveLink() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === pathname) {
            link.classList.add('active');
        }
    });

    const smallLinks = document.querySelectorAll('.small-screen-link');
    smallLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === pathname) {
            link.classList.add('active');
        }
    });
}

// Call function to set active link based on pathname
setActiveLink();

// Mobile Menu Toggle
let isMenuOpen = false;

function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    const smallMenu = document.getElementById('smallScreenMenu') as HTMLElement;
    const menuIcon = document.getElementById('<i class="fa-solid fa-bars"></i>') as HTMLElement;
    const closeIcon = document.getElementById('<i class="fa-solid fa-xmark"></i>') as HTMLElement;

    if (isMenuOpen) {
        smallMenu.style.display = 'block';
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    } else {
        smallMenu.style.display = 'none';
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () =>{
    
    const allToggleButtons = document.querySelectorAll('.toggle-button');
    
    allToggleButtons.forEach(element => {
        element.addEventListener('click',()=>{

         const togglebutton = element.getAttribute('data-target');

         if(togglebutton && togglebutton.trim()){
             const targetElement = document.getElementById(togglebutton);
        if(targetElement){
             if(targetElement.style.display === 'block' || targetElement.style.display === ' '){
                targetElement.style.display = 'none';

             }else{
                 targetElement.style.display = 'block';
             }
             
         }else{
             console.log(`No target element found ${togglebutton}`);
         }
        }else{
            console.log('No data-target attribute found');
 
        }
         
        })
        
    });
});


