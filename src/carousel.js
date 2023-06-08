// export default function carousel() {

//   const carouselContainer = document.querySelector('.carousel-container');
  
//   const prevButton = document.querySelector('.carousel-prev');
// const nextButton = document.querySelector('.carousel-next');

// let slideIndex = 0;
// let timer;

// function showSlide(index) {
//   const slides = carouselContainer.querySelectorAll('.carousel-slide');
//   slides.forEach((slide, i) => {
//     if (i === index) {
//       slide.style.display = 'block';
//     } else {
//       slide.style.display = 'none';
//     }
//   });
// }

// function prevSlide() {
//   slideIndex--;
//   if (slideIndex < 0) {
//     slideIndex = slides.length - 1;
//   }
//   showSlide(slideIndex);
// }

// function nextSlide() {
//   slideIndex++;
//   const slides = carouselContainer.querySelectorAll('.carousel-slide');
//   if (slideIndex >= slides.length) {
//     slideIndex = 0;
//   }
//   showSlide(slideIndex);
// }

// function startAutoScroll() {
//   timer = setInterval(() => {
//     nextSlide();
//   }, 3000); // Adjust the duration (in milliseconds) between slides
// }

// function stopAutoScroll() {
//   clearInterval(timer);
// }

// prevButton.addEventListener('click', () => {
//   stopAutoScroll();
//   prevSlide();
// });

// nextButton.addEventListener('click', () => {
//   stopAutoScroll();
//   nextSlide();
// });

//   // Initialize the carousel
//   showSlide(slideIndex);
//   startAutoScroll();
// }


export default function carousel() {
  const carouselContainer = document.querySelector('.carousel-container');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');

  let slideIndex = 0;
  let slides;
  let timer; // Declare the timer variable

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = 'block';
      } else {
        slide.style.display = 'none';
      }
    });
  }

  function prevSlide() {
    slideIndex--;
    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }
    showSlide(slideIndex);
  }

  function nextSlide() {
    slideIndex++;
    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }
    showSlide(slideIndex);
  }

  function startAutoScroll() {
    timer = setInterval(() => {
      nextSlide();
    }, 3000);
  }

  function stopAutoScroll() {
    clearInterval(timer);
  }

  prevButton.addEventListener('click', () => {
    stopAutoScroll();
    prevSlide();
  });

  nextButton.addEventListener('click', () => {
    stopAutoScroll();
    nextSlide();
  });

  // Initialize the carousel
  slides = carouselContainer.querySelectorAll('.carousel-slide');
  showSlide(slideIndex);
  startAutoScroll();
}
