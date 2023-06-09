import './view-news.css';

export default function selectedNews(articles) {

    const container = document.querySelector('.container');
    container.innerHTML = '';

    // Create container element
const containerView = document.createElement('div');
containerView.classList.add('container-div');

// Create article title element
const title = document.createElement('h1');
title.classList.add('article-title');
title.textContent = `${articles.title}`;

// Create article meta element
const meta = document.createElement('p');
meta.classList.add('article-meta');
meta.textContent = `${articles.author} | ${articles.publishedAt}`

const image = document.createElement('img');
if (articles.urlToImage) {
    image.src = articles.urlToImage;
    image.alt = articles.title;
} else {
    image.src = 'https://via.placeholder.com/300x200.png?text=Placeholder+Image';
}
image.alt = articles.title;


// Create article content element
const content = document.createElement('div');
content.classList.add('article-content');

// Create paragraphs for article content
const paragraph1 = document.createElement('p');
paragraph1.textContent = `${articles.content}`;

const paragraph2 = document.createElement('p');
paragraph2.textContent = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.';

const paragraph3 = document.createElement('p');
paragraph3.textContent = "But a crowded field of competitors and technological hurdles have slowed both companies' anticipated journey from development to production.";

// Create "Read more" paragraph
const readMore = document.createElement('p');
const readMoreLink = document.createElement('a');
readMoreLink.href = 'https://www.reuters.com/technology/space/boeing-northrop-face-obstacles-commercializing-flagship-us-rocket-2023-06-07/';
readMoreLink.textContent = 'Read more on Reuters';
readMore.appendChild(readMoreLink);

// Append all elements to the container
content.appendChild(paragraph1);
content.appendChild(paragraph2);
content.appendChild(paragraph3);
content.appendChild(readMore);
containerView.appendChild(title);
containerView.appendChild(meta);
containerView.appendChild(image);
containerView.appendChild(content);

container.appendChild(containerView);

// Append container to the body or any desired parent element
// document.body.appendChild(container);





    
}