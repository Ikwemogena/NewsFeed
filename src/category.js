import './category.css';
import selectedNews from './viewNews';
import {showLoader, hideLoader} from './loader';

const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;

export default function categoryNews(category) {

    // Get all the navigation links

    const container = document.querySelector('.container');


    // clear container
    container.innerHTML = '';

    const mainDiv = document.createElement('div');
    mainDiv.className = 'main-div';

    // Create the h1 element
    const h1Element = document.createElement('h1');

    // Set the text content of the h1 element
    h1Element.textContent = `${category}`;
    mainDiv.appendChild(h1Element);


    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';
    mainDiv.appendChild(gridContainer);

    // Append the h1 element to the document body or any other desired parent element
    container.appendChild(mainDiv);



    // let articles = [];



    fetch(`${apiUrl}/top-headlines?country=us&category=${category}&apiKey=${apiKey}`)
        .then(response => {
            showLoader();
            // response.json();
            if (!response.ok) {
                throw Error('ERROR');
            } else {
                return response.json();
            }
            
        })
        .catch(error => console.log(error))
        .then(data => {
            showLoader();
            console.log(data.articles);

            const articles = data.articles;

            const gridContainer = document.querySelector('.grid-container');

            articles.forEach(article => {

                const div = document.createElement('div');
                div.className = 'grid-item';

                const link = document.createElement('a');
                link.href = article.url;
                link.target = '_blank'; // Open the link in a new tab

                const image = document.createElement('img');
                if (article.urlToImage) {
                    image.src = article.urlToImage;
                } else {
                    image.src = 'https://via.placeholder.com/300x200.png?text=Placeholder+Image';
                }
                image.alt = article.title;
                link.appendChild(image);

                const h2 = document.createElement('h2');
                h2.textContent = article.title;
                link.appendChild(h2);

                div.appendChild(link);
                gridContainer.appendChild(div);

                const p = document.createElement('p');
                p.textContent = article.author;
                div.appendChild(p);

                // const h2 = document.createElement('h2');
                // h2.textContent = article.title;
                
                // div.appendChild(h2);
                
                gridContainer.appendChild(div);

                link.addEventListener('click', () => {
                    clicked(article);
                  });

                // link.addEventListener('click', clicked(article));
            });
        })
    console.log(category);
}


function clicked(article) {
    console.log('Clicked article:', article);
    selectedNews(article)
  }