const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;

import { showLoader, hideLoader } from './loader.js';

export default function searchNews(topic) {

  // different news sources
  const sourcesFilter = document.querySelector('#source-filter');
  sourcesFilter.addEventListener('change' ,function(){
    console.log(sourcesFilter.value);
    performSearch(topic, sourcesFilter.value);
  })


  const categoryFilter = document.querySelector('#section-filter');
  categoryFilter.addEventListener('change' ,function(){
    console.log(categoryFilter.value);
    performSearch(topic, null, categoryFilter.value);
  })

  performSearch(topic);  
}

function performSearch(topic, source, category){

  const errorContainer = document.getElementById('errorContainer');
  errorContainer.textContent = '';


  let url = `${apiUrl}top-headlines?q=${topic}&apiKey=${apiKey}`;

  if (source) {
    url += `&sources=${source}`;
  }

  if (category) {
    url += `&category=${category}`;
  }

  // if(sortBy) {
  //   url += '&sortBy=publishedAt';
  // }

  return fetch(url)
    .then(res => {
      showLoader();
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      const articles = data.articles;
      
      if (articles.length === 0) {
        console.log('No articles found');
        return []; // Return an empty array to avoid further errors
      }

      // if (!articles || articles.length === 0) {
      //   console.log('No articles found');
      //   showNoResultsMessage(topic);
      //   return []; // Return an empty array to avoid further errors
      // }
      showLoader();
      return articles;
    })
    .catch(err => {
      
      const errorContainer = document.getElementById('errorContainer');
      errorContainer.textContent = 'An error occurred while fetching news data.';
      console.error(err);

      
    })
    .then(articles => {
      console.log(articles);
      const containerMovements = document.querySelector('#article-results');

      const searchTopic = document.querySelector('.search-topic');
      searchTopic.textContent = ` Search Results for "${topic}"`;

      // if(articles.length === 0) {
        if (!articles || articles.length === 0) {
          containerMovements.innerHTML = '';
          console.log('No articles found');
          // showNoResultsMessage(topic);
          hideLoader();
          // return []; // Return an empty array to avoid further errors
        // } else {
        showLoader();
        
        containerMovements.innerHTML = '';
        
        containerMovements.insertAdjacentHTML('beforeend', `
        <div class="search-findings" style=" padding: 2rem;">
          <h2 style="font-size: 3rem;">No search results match the term “${topic}"</h2>
          <div style="font-size: 2rem;">
            <p>Some suggestions:</p>
              <ul>
                <li>Check spelling of all words</li>
                <li>Try different words that mean the same thing</li>
                <li>Enter fewer words</li>
              </ul>
          </div>     
        </div>
        `);
        hideLoader();
      } else {
        showLoader();
        containerMovements.innerHTML = '';
        articles.forEach((article, index) => {
          const html = `
          <div class="search-findings" style="display: flex;">
            <h4><a href="${article.url}" target="_blank">${article.title}</a></h4>
            
            ${article.urlToImage ? `<img src="${article.urlToImage}" alt="">` : ''}
          </div>
          
          `;
          containerMovements.insertAdjacentHTML('beforeend', html);

          if (index !== articles.length - 1) {
            containerMovements.insertAdjacentHTML('beforeend', '<hr style="height: 1px;background-color: #c5bebe8f; border: none;">');
          }
        });
        hideLoader();

    }
    });
}
