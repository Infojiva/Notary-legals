$(document).ready(function() {
let currentIndex = 0;
        const items = document.querySelectorAll('.carousel-item');
        const totalItems = items.length;
		function toggleClass(self) {
			console.log("toggle class");
			$('span', self).toggleClass('fa-caret-down fa-caret-up');
		}
		$('body').on('click', '.icon_toggle', function(){
     $('span', this).toggleClass('fa-caret-down fa-caret-up');
     
	});
        document.querySelector('.next').addEventListener('click', function() {
            if (currentIndex < totalItems - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        });

        document.querySelector('.prev').addEventListener('click', function() {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalItems - 1;
            }
            updateCarousel();
        });

        function updateCarousel() {
            document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        // Automatically slide every 3 seconds 
        setInterval(function() {
            if (currentIndex < totalItems - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        }, 5000);
    });
