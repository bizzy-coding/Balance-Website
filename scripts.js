document.addEventListener("DOMContentLoaded", function() {


     function titleWord(e) {

        const titles = document.querySelectorAll('.titles h2');
        let currentIndex = 0;
      
        function showNextTitle() {
          titles[currentIndex].classList.remove('active');
          currentIndex = (currentIndex + 1) % titles.length;
          titles[currentIndex].classList.add('active');
        }

      
        titles[currentIndex].classList.add('active');
        const initialDelay = 1700; 
        const fullCycle = 6000; 
      
        setTimeout(function() {
          setInterval(showNextTitle, fullCycle);
        }, initialDelay);
    }
   
    titleWord();


  });
  