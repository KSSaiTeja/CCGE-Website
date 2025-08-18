/**
 * CCGE - Corporate Commerce Global Education
 * Navigation Active State Management
 * Developed by: kssaiteja (saitej4865@gmail.com)
 * 
 * This script manages the active state of navigation links based on the current page.
 */

// Navigation Active State Management
document.addEventListener('DOMContentLoaded', function() {
    // Get current page URL
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Remove active class from all navigation links
    const navLinks = document.querySelectorAll('.navigation-bar nav ul li a');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current page link
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Handle responsive menu active states
    const responsiveLinks = document.querySelectorAll('.responsive-menu ul li a');
    responsiveLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    responsiveLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Special handling for course pages - make Courses link active
    if (currentPage.startsWith('class-single-')) {
        const coursesLink = document.querySelector('.navigation-bar nav ul li a[href="classes.html"]');
        if (coursesLink) {
            coursesLink.classList.add('active');
        }
        
        const responsiveCoursesLink = document.querySelector('.responsive-menu ul li a[href="classes.html"]');
        if (responsiveCoursesLink) {
            responsiveCoursesLink.classList.add('active');
        }
    }
});
