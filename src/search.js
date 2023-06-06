// const apiKey = process.env.API_KEY;
// const apiUrl = process.env.API_URL;

// export default function searchNews(topic) {
//   // const searchResultsContainer = document.querySelector('.search-findings');
//   // searchResultsContainer.innerHTML = '<div class="loader"></div>';

//   return fetch(`${apiUrl}top-headlines?q=${topic}&apiKey=${apiKey}`)
//     .then(res => {
//       if (!res.ok) {
//         throw new Error('Network response was not ok');
//       }
//       return res.json();
//     })
//     .then(data => {
//       const articles = data.articles;
//       // const image = data.articles.urlToImage;
//       if (articles.length === 0) {
//         console.log('No articles found');
//       }
//       return articles;
//     })
//     .catch(err => console.log(err))
//     .then(articles => {
//       console.log(articles);
//       // console.log(articles.urlToImage);
//       // console.log(image);
//       // Clear the previous search results
//       // searchResultsContainer.innerHTML = '';



//       const containerMovements = document.querySelector('#article-results');

//     articles.forEach(article => {
//       console.log(article);

//       const html = `
//           <div class="search-findings" style="display: flex;">
//               <h3>${article.title}</h3>
//               <img src="${article.urlToImage}" alt="" srcset="">
//               <hr>
//           </div>
//       `

//       containerMovements.insertAdjacentHTML('beforeend', html);
//     });



//       // Generate the search results HTML dynamically
//       // const searchResultsHTML = 
      
//       // generateSearchResultsHTML(articles, topic);

//       // Display the search results in the container
//       // searchResultsContainer.innerHTML = searchResultsHTML;
//     });
// }

// function generateSearchResultsHTML(articles, topic) {

//   // const containerMovements = document.querySelector('.search-section');

//   //   articles.forEach(article => {
//   //     console.log(article);

//   //     const html = `
//   //     <div class="hidden" id="search-results" >
//   //               <div class="filter">
//   //                   <h3>Filter-by</h3>
//   //                   <div class="filter-by">
//   //                       <div>
//   //                           <label for="section-filter">Section</label>
//   //                           <select name="" id="section-filter">
//   //                               <option value="">All</option>  
//   //                               <option value="">Business</option>
//   //                               <option value="">Technology</option>
//   //                               <option value="">Sports</option>
//   //                           </select>
//   //                       </div>
//   //                       <div>
//   //                           <label for="source-filter">Source</label>
//   //                           <select name="" id="source-filter">
//   //                               <option value="">All</option>  
//   //                               <option value="">BBC</option>
//   //                               <option value="">CNN</option>
//   //                               <option value="">Aljazeera</option>
//   //                           </select>
//   //                       </div>
//   //                       <div>
//   //                           <label for="date-filter">Date Range</label>
//   //                       <select name="" id="date-filter">
//   //                           <option value="">Any time</option>  
//   //                           <option value="">Past 24 hours</option>
//   //                           <option value="">Past Week</option>
//   //                           <option value="">Past Month</option>
//   //                       </select>
//   //                       </div>
//   //                   </div>
    
//   //               </div>
//   //               <div>
//   //                   <h3>Search Newspaper.com</h3>
//   //                   <div class="search">
//   //                       <input type="text" placeholder="Search" id="search"> 
//   //                       <form>
//   //                           <input type="text" id="search-results" placeholder="What are you looking for today?">
//   //                       </form>
//   //                       <i class="fas fa-search" id="search-icon"></i>
//   //                   </div>
//   //                   <div>
//   //                       <h2>Search Results for "${topic}":</h2>
//   //                   <div class="results">
//   //                       <p>Results</p>
//   //                       <p>Sort</p>
//   //                   </div>
//   //                   <div style="box-shadow: 0 1px 16px 10px rgba(64,64,64,.08);">
//   //                       <div class="search-findings" style="display: flex;">
//   //                           <h3>title
//   //                           </h3>
//   //                           <img src="https://www.infomoney.com.br/wp-content/uploads/2019/06/eletrobras-2.jpg?quality=70" alt="" srcset="">
//   //                       </div>
//   //                   </div>
//   //                   </div>
//   //               </div>
//   //           </div>
//   //     `

//   //     containerMovements.insertAdjacentHTML('afterbegin', html);
//   //   });



// }


const apiKey = 'df7afeb1485345018df3761a0291db32';
const apiUrl = 'https://newsapi.org/v2/';

export default function searchNews(topic) {
  return fetch(`${apiUrl}top-headlines?q=${topic}&apiKey=${apiKey}`)
    .then(res => {
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      const articles = data.articles;
      if (articles.length === 0) {
        console.log('No articles found');
      }
      return articles;
    })
    .catch(err => console.log(err))
    .then(articles => {
      console.log(articles);
      const containerMovements = document.querySelector('#article-results');

      const searchTopic = document.querySelector('.search-topic');
      searchTopic.textContent = ` Search Results for "${topic}"`;

      if(articles.length === 0) {
        containerMovements.insertAdjacentHTML('beforeend', `
        <div class="search-findings" style=" padding: 2rem;">
              <h3 style="font-size: 3rem;">No search results match the term “${topic}"</h3>
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
      } else {

      articles.forEach(article => {
        const html = `
          <div class="search-findings" style="display: flex;">
              <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
              
              ${article.urlToImage ? `<img src="${article.urlToImage}" alt="">` : ''}
          </div>
        `;
        containerMovements.insertAdjacentHTML('beforeend', html);
      });

    }
    });
}
