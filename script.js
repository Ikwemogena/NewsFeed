// const carouselContainer = document.querySelector('.carousel-container');
// const prevButton = document.querySelector('.carousel-prev');
// const nextButton = document.querySelector('.carousel-next');

// let slideIndex = 0;

// function showSlide(index) {
//   const slides = carouselContainer.querySelectorAll('.carousel-slide');
//   slides.forEach((slide, i) => {
//     slide.style.transform = `translateX(${100 * (i - index)}%)`;
//   });
// }

// function prevSlide() {
//   slideIndex--;
//   if (slideIndex < 0) {
//     slideIndex = 0;
//   }
//   showSlide(slideIndex);
// }

// function nextSlide() {
//   const slides = carouselContainer.querySelectorAll('.carousel-slide');
//   if (slideIndex >= slides.length - 1) {
//     slideIndex = slides.length - 1;
//   } else {
//     slideIndex++;
//   }
//   showSlide(slideIndex);
// }

// prevButton.addEventListener('click', prevSlide);
// nextButton.addEventListener('click', nextSlide);

// // Initialize the carousel
// showSlide(slideIndex);


const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let slideIndex = 0;

function showSlide(index) {
  const slides = carouselContainer.querySelectorAll('.carousel-slide');
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
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function nextSlide() {
  const slides = carouselContainer.querySelectorAll('.carousel-slide');
  if (slideIndex >= slides.length - 1) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex++;
  }
  showSlide(slideIndex);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Initialize the carousel
showSlide(slideIndex);


// fetch data from newsapi
const url = 'https://newsapi.org/v2/';

const apiKey = '099148be22804e849a0c6fe022b7cf5e';

// fetch(`${url}top-headlines?apiKey=${apiKey}&q=news'`)

let headlines;

function callApi() {
    // fetch('https://newsapi.org/v2/top-headlines?apiKey=099148be22804e849a0c6fe022b7cf5e&country=us')
    fetch(`${url}top-headlines?apiKey=${apiKey}&country=us`)
    .then((response) => response.json())
    .then((data) => data.articles.forEach((article, index) => {
        const carouselHeadlineOne = document.querySelector('#first-headline');
        const carouselHeadlineTwo = document.querySelector('#second-headline');
        const carouselHeadlineThird = document.querySelector('#third-headline');

        const carouselImageOne = document.querySelector('#carousel-image-first');
        const carouselImageTwo = document.querySelector('#carousel-image-second');
        const carouselImageThird = document.querySelector('#carousel-image-third');

        carouselHeadlineOne.textContent = article.title;
        carouselImageOne.src = article.urlToImage;

        // if(article.urlToImage)console.log(article, index)

        if (index === 1){
            carouselHeadlineTwo.textContent = article.title;
            carouselImageTwo.src = article.urlToImage;
            carouselImageTwo.src = article.urlToImage;
        } else if (index === 2) {
            carouselHeadlineThird.textContent = article.title;
            carouselImageThird.src = article.urlToImage;
        }
        // console.log(article.title, index);
    }))
    .catch(err => console.log(err));
}


// const COUNTRY_LOCATION_API = '4efb6d0c0ad74c7aab5b78babfb9a26d';
// get headlines tailored to country
// function getCountry(){
    // fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${COUNTRY_LOCATION_API}`)
//     fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=4efb6d0c0ad74c7aab5b78babfb9a26d`)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
// }
// getCountry();

// get category headlines
function getHeadlines(category) {
    // fetch(`${url}top-headlines?apiKey=${apiKey}&category=${category}`)
    fetch(`${url}top-headlines?sources=bbc-news&apiKey=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data.articles)
        const categoryName = document.querySelector('#category-name');
        const catergoryHeadlineImage = document.querySelector('#category-headline-image');

        const categoryHeadlineOne = document.querySelector('.category-title-one');
        const categoryHeadlineTwo = document.querySelector('.category-title-two');

        const categoryArticleOne = document.querySelector('.category-article-one');
        const categoryArticleTwo = document.querySelector('.category-article-two');

        categoryName.textContent = `${category} News`;
        if (data.articles[0].urlToImage)catergoryHeadlineImage.src = data.articles[0].urlToImage;
        categoryHeadlineOne.textContent = data.articles[0].title;
        categoryArticleOne.textContent = data.articles[0].description;

        categoryHeadlineTwo.textContent = data.articles[1].title;
        categoryArticleTwo.textContent = data.articles[1].description;
    }        
        // data.articles.forEach((article, index) => {
    )
    .catch(err => console.log(err));
    // https://newsapi.org/v2/top-headlines?apiKey=099148be22804e849a0c6fe022b7cf5e&category=entertainment&country=ng
}

callApi();

getHeadlines('Trending');



