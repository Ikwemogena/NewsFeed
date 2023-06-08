import './category.css';

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
    h1Element.textContent = `Category: ${category}`;
    mainDiv.appendChild(h1Element);


    const gridContainer = document.createElement('div');
    gridContainer.className = 'grid-container';
    mainDiv.appendChild(gridContainer);

    // Append the h1 element to the document body or any other desired parent element
    container.appendChild(mainDiv);



    let articles = [];

    // fetch(`${apiUrl}/top-headlines?country=us&category=${category}&apiKey=${apiKey}`)
    //     .then(response => response.json())
    //     .catch(error => console.log(error))
    //     .then(data => {
    //         console.log(data.articles);

    //         articles = data.articles;
    //         const gridContainer = document.getElementById('gridContainer');
    //         articles.forEach(article => {
    //         const div = document.createElement('div');
    //         div.className = 'grid-item';
    //         const h2 = document.createElement('h2');
    //         h2.textContent = article.title;
    //         const p = document.createElement('p');
    //         p.textContent = article.content;
    //         div.appendChild(h2);
    //         div.appendChild(p);
    //         gridContainer.appendChild(div);
    //         // mainDiv.appendChild(gridContainer);
    //         });

    //         const mainDiv = document.querySelector('main-div');
    //         mainDiv.appendChild(gridContainer);
    //     })


    fetch(`${apiUrl}/top-headlines?country=us&category=${category}&apiKey=${apiKey}`)
        .then(response => response.json())
        .catch(error => console.log(error))
        .then(data => {
            console.log(data.articles);

            const articles = data.articles;
            const gridContainer = document.querySelector('.grid-container');

            articles.forEach(article => {
            const div = document.createElement('div');
            div.className = 'grid-item';

            const image = document.createElement('img');
            image.src = article.urlToImage;
            image.alt = article.title;
            div.appendChild(image);

            const h2 = document.createElement('h2');
            h2.textContent = article.title;
            // const p = document.createElement('p');
            // p.textContent = article.content;
            div.appendChild(h2);
            // div.appendChild(p);
            gridContainer.appendChild(div);
            });
        })





    console.log(category);
}