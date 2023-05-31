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

// const apiKey = '099148be22804e849a0c6fe022b7cf5e';

const apiKey = 'df7afeb1485345018df3761a0291db32';

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
function getHeadlines(country) {
    // fetch(`${url}top-headlines/sources?apiKey=${apiKey}&category=${category}`)
    fetch(`https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&country=${country}`)
        .then((response) => response.json())
        .then((data) => {
            // console.log(data.articles);        
            const categoryName = document.querySelector('#country-headline');
            categoryName.textContent = `Updates from ${country} `;
            // const catergoryHeadlineImage = document.querySelector('#category-headline-image');

            // date

            // if(data.article.source.name.includes('nigeria'))console.log(article, index)


            const countryDateOne = document.querySelector('.country-date-one');
            displayDate(countryDateOne, data.articles[0].publishedAt)

            const countryDateTwo = document.querySelector('.country-date-two');
            displayDate(countryDateTwo, data.articles[1].publishedAt)

            const countryDateThree = document.querySelector('.country-date-three');
            displayDate(countryDateThree, data.articles[2].publishedAt)



            const countryHeadlineOne = document.querySelector('#country-headline-one');
            const countryHeadlineTwo = document.querySelector('#country-headline-two');
            const countryHeadlineThree = document.querySelector('#country-headline-three');

            const categoryDescriptionOne = document.querySelector('#country-description-one');
            const categoryDescriptionTwo = document.querySelector('#country-description-two');

            const categoryDescriptionThree = document.querySelector('#country-description-three');          

            
              
            countryHeadlineOne.textContent = data.articles[0].title;
            categoryDescriptionOne.textContent = data.articles[0].description;

            countryHeadlineTwo.textContent = data.articles[1].title;
            categoryDescriptionTwo.textContent = data.articles[1].description;

            countryHeadlineThree.textContent = data.articles[2].title;
            categoryDescriptionThree.textContent = data.articles[2].description;
        }        
            // data.articles.forEach((article, index) => {
        )
        .catch(err => console.log(err));
    // https://newsapi.org/v2/top-headlines?apiKey=099148be22804e849a0c6fe022b7cf5e&category=entertainment&country=ng
}

callApi();

getHeadlines('ng');


// convert date
function displayDate(dateDisplay, dateFormat){
    const dateString = dateFormat;
    const date = new Date(dateString);
    const options = { timeZone: 'UTC' };
    const formattedDate = date.toLocaleString('en-US', options);

    dateDisplay.textContent = formattedDate;
}


function getWorldNews() {
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data=> {
            // console.log(data.articles)


            const worldImage = document.querySelector('#world-news-image');

            worldImage.src = data.articles[0].urlToImage;

            // headlines
            const worldNewsOne = document.querySelector('.world-news-one');
            const worldNewsTwo = document.querySelector('.world-news-two');
            const worldNewsThree = document.querySelector('.world-news-three');

            worldNewsOne.textContent = data.articles[0].title;
            worldNewsTwo.textContent = data.articles[1].title;
            worldNewsThree.textContent = data.articles[2].title;

            // articles

            const worldArticleOne = document.querySelector('.world-article-one');
            const worldArticleTwo = document.querySelector('.world-article-two');
            const worldArticleThree = document.querySelector('.world-article-three');

            worldArticleOne.textContent = data.articles[0].description;
            worldArticleTwo.textContent = data.articles[1].description;
            worldArticleThree.textContent = data.articles[2].description;
        })
        .catch(err => console.log(err));
}

getWorldNews();

document.addEventListener("DOMContentLoaded", function() {
    const truncateElements = document.querySelectorAll(".truncate");
    
    truncateElements.forEach(function(element) {
      element.addEventListener("click", function() {
        this.classList.toggle("truncate"); // Toggle the truncate class
      });
    });
  }
);


// fetch technology news from tech crunch
function getCategoryNews() {
    fetch(`https://newsapi.org/v2/top-headlines?apiKey=df7afeb1485345018df3761a0291db32&sources=techcrunch`)
        .then(res => res.json())
        .then(data => {
            console.log(data.articles)

            // images
            const techImage = document.querySelector('.tech-news-image-one');
            const techImageTwo = document.querySelector('.tech-news-image-two');

            techImage.src = data.articles[0].urlToImage;
            techImageTwo.src = data.articles[1].urlToImage;

            // headlines

            const techArticleOne = document.querySelector('.category-title-one');
            const techArticeTwo = document.querySelector('.category-title-two');
            // const techArticleThree = document.querySelector('.category-title-three');

            techArticleOne.textContent = data.articles[0].title;
            techArticeTwo.textContent = data.articles[1].title;
            // techArticleThree.textContent = data.articles[2].title;


            // dates
            const articleOneDate = document.querySelector('.category-title-one-date');
            const articleTwoDate = document.querySelector('.category-title-two-date');

            displayDate(articleOneDate, data.articles[0].publishedAt)
            displayDate(articleTwoDate, data.articles[1].publishedAt)

            // articleOneDate.textContent = ;

        })
        .catch(err => console.log(err))

}

getCategoryNews();


// function newsSearch(wordInput){
//     wordInput

// }
