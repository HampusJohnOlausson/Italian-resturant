/*--------Smooth Scroll---------*/

/**
 * Function for smooth scrolling on page.
 */
const smoothScroll = () => {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    
      anchor.addEventListener('click', function(e) {
    
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
    
    };
    smoothScroll();

    
    /*--------Add Cart----------*/

