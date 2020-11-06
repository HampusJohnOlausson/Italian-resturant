/*--------Smooth Scroll---------*/

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

    

    /*-------Parallax effect---------*/

    /*
   const parallaxEffect = document.getElementById('parallax');

   window.addEventListener('scroll', function(){
    let offset = window.pageYOffset;
    parallaxEffect.style.backgroundPositionY = offset * 0.7 + 'px';

   });
*/