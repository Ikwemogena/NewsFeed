'use strict';
import searchNews from './search.js';
import carousel from './carousel.js';
import { showLoader, hideLoader } from './loader.js';
import './style.css';

import switchTabs from './switchTabs.js';

switchTabs();

const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;

carousel();
getWorldNews();
callApi();
// getHeadlines('ng');
getCountryInfo();
getCategoryNews();

function callApi() {

  showLoader();
    fetch(`${apiUrl}top-headlines?apiKey=${apiKey}&country=us`)
    .then((response) => {
      showLoader();
        if (response.ok) {
          
            return response.json();
        } else {
            throw new Error(apiMessage);
        }
    })
    .then((data) => data.articles.forEach((article, index) => {
      hideLoader();
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
    .catch(err => console.log(err))
    .finally(() => hideLoader());
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
function getHeadlines(countryTag, countryName) {
    // fetch(`${url}top-headlines/sources?apiKey=${apiKey}&category=${category}`)
    fetch(`${apiUrl}top-headlines?apiKey=${apiKey}&country=${countryTag}`)
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(apiMessage);
            }
        })
        .then((data) => {
            console.log(data.articles);        
            const categoryName = document.querySelector('#country-headline');
            categoryName.textContent = `Updates from ${countryName} `;

            const countryDateOne = document.querySelector('.country-date-one');
            countryDateOne.textContent = data.articles[0].author;
            // displayDate(countryDateOne, data.articles[0].publishedAt)

            const countryDateTwo = document.querySelector('.country-date-two');
            // displayDate(countryDateTwo, data.articles[1].publishedAt)
            countryDateTwo.textContent = data.articles[1].author;

            const countryDateThree = document.querySelector('.country-date-three');
            // displayDate(countryDateThree, data.articles[2].publishedAt)
            countryDateThree.textContent = data.articles[2].author;

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

// convert date
function displayDate(dateDisplay, dateFormat){
    const dateString = dateFormat;
    const date = new Date(dateString);

    // date = new Date(dateString)
    // const options = { timeZone: 'UTC' };
    // const formattedDate = date.toLocaleString('en-US', options);


    const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    const formattedDate = date.toLocaleString('en-US', options);

  dateDisplay.textContent = formattedDate;
}


function getWorldNews() {
    fetch(`${apiUrl}top-headlines?country=us&apiKey=${apiKey}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(apiMessage);
            }
        })
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



document.addEventListener("DOMContentLoaded", function() {
    const truncateElements = document.querySelectorAll(".truncate");
    
    truncateElements.forEach(function(element) {
      element.addEventListener("click", function() {
        this.classList.toggle("truncate"); // Toggle the truncate class
      });
    });
  }
);

const apiMessage = 'Sorry, API no longer available will be back up soon';

// fetch technology news from tech crunch
function getCategoryNews() {
    fetch(`${apiUrl}top-headlines?apiKey=${apiKey}&sources=techcrunch`)
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(apiMessage);
            }
        })
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


            // const articleOneLink = document.querySelector('.category-title-one-link');
            // const articleTwoLink = document.querySelector('.category-title-two-link');

            // articleOneDate.textContent = ;
1
        })
        .catch(err => console.log(err))

}


const searchInput = document.querySelector('#search-input');
const navBar = document.querySelector('.nav-bar');
const searchIcon = document.querySelector('#search-icon');

searchIcon.addEventListener('click', function() {
    console.log('clicked');
    navBar.classList.toggle('hidden');
    searchInput.classList.toggle('hidden');
});


// hide home
const carouselDisplay = document.querySelector('#home');
const trending =  document.querySelector('#trending');

const searchSection = document.querySelector('#search-section');

searchInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        carouselDisplay.classList.add('hidden');
        trending.classList.add('hidden');
        searchInput.classList.add('hidden');

        searchSection.classList.remove('hidden');
        event.preventDefault();
        const searchTerm = searchInput.value.trim();
        if (searchTerm !== '') {
            console.log('Search term:', searchTerm);
            searchNews(searchTerm);
            // searchNews(searchTerm, 1, 10);

            navBar.classList.remove('hidden');
        }
    }
});

// searchInput.addEventListener('input', function() {
//     const searchTerm = searchInput.value.trim();
//     if (searchTerm !== '') {
//         console.log('Search term:', searchTerm);
//         // searchNews(searchTerm);
//     }
// });

    

    

    

    

















function getCountryInfo() {
  fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      const countryTag = data.country;
      const countryName = data.country_name;
      getHeadlines(countryTag, countryName);
      console.log(countryTag, countryName);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}
