"use strict";
(self["webpackChunknewsfeedapi"] = self["webpackChunknewsfeedapi"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,600&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Inter&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
    scroll-behavior: smooth;
}
  

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

body {
    font-family: 'Playfair Display', serif;
    background-color: #f5f5f5;
    color: #000000;
}

.header {
    /* position: fixed; */
    background-color: #f0f0f0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 1rem;
    height: 0.5rem;
    font-size: 1.2rem;
    /* background-color: #fff;
    padding: 20px 0;
    border-bottom: 1px solid #eee; */
}

.header-title{
    font-weight: 600;
}


.search-findings {
    margin-bottom: 20px;
  }
  
  .search-findings h3 {
    font-size: 20px;
    margin-bottom: 10px;
  }
  
  .search-findings img {
    max-width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  
  .search-findings p {
    font-size: 16px;
    margin-bottom: 10px;
  }
  
  .search-findings .article-divider {
    border: none;
    border-top: 1px solid #ddd;
    margin-top: 10px;
  }

  #article-results {
    border-radius: 0.5rem;
    box-shadow: 0 1px 16px 10px rgba(64,64,64,.08);
  }
  

.search {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    max-width: 500px;
}

.search-findings {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    /* border: 1px solid red; */
    border-radius: 1rem;
    padding: 1rem;
    /* box-shadow: 0 1px 16px 10px rgba(64,64,64,.08); */
}

.search-findings>img {
    width: 138px;
    height: auto;
    border-radius: 0.5rem
}

#search-results {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    /* margin: 2rem 0 0 0; */
    padding: 0 2rem;
    
}

#search-results h2 {
    font-size: 3rem;
    margin: 0 0 1rem 0;
}

.filter{
    position: fixed;
    bottom: 2rem;
    left: 2rem;
    padding: 1rem;
    z-index: 100;
} 

/* .filter {
    position: sticky;
    bottom: 2rem;
    left: 2rem;
    padding: 1rem;
    z-index: 100;
    background-color: #fff;
    border-radius: 0.5rem;
    box-shadow: 0 1px 16px 10px rgba(64, 64, 64, 0.08);
  } */
  
  
.filter-by {
    font-size: 1.2rem;
    
        /* position: fixed;
        top: 0;
        width: 100%;
        background-color: white;
        z-index: 999; */
      
    padding: 25px;
    border-radius: 0.5rem;
    box-shadow: 0 1px 16px 10px rgba(64,64,64,.08);     
}

.filter h3{
    margin: 0 0 16px;
}

.filter-by > div >label {
    margin: 0 0 2px;
}

.results {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0rem;
}


input[type=text]{
    width: 100%; 
    font-size: 1rem;
    width: 300px;
    height: 40px;
    border:2px solid #aaa;
    border-radius: 8px;
    margin:8px 0; 
    outline:none;
    padding:8px;
    box-sizing:border-box;
    transition: 10s;
}
  
input[type=text]:focus{
    border-color:dodgerBlue;
    box-shadow:0 0 8px 0 dodgerBlue;
}


.container {
    /* max-width: 1000px; Example: Set the maximum width of the container */
    margin: 0 auto; /* Example: Center the container horizontally */
    padding: 20px; /* Example: Add padding to the container */
    /* Additional styling properties for the container */
}

header ul{
    display: flex;
    gap: 2rem;
    list-style: none;
}

a{
    text-decoration: none;
    color: #000;
} 

.carousel {
    position: relative;
    width: 100%;
    max-width: 100%; /* Update to use maximum width of the screen */
    margin: 0 auto;
    overflow: hidden;
    height: 400px; /* Set the desired height of the carousel */
  }
  
  .carousel-container {
    display: flex;
    width: 100%;
    height: 100%; /* Ensure the container fills the carousel height */
  }
  .carousel-caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    font-size: 2rem;
    text-align: center;
  }
  
  .carousel-slide {
    flex-shrink: 0;
    width: 100%;
    position: relative;
  }

  /* /* .carousel-slide {

  } */
  
  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* background-color: rgba(255, 255, 255, 0.5); Adjust the color and opacity as needed */
    background-color: rgba(66, 65, 65, 0.5);
  }
  
  
  .carousel-slide img {
    width: 100%;
    height: 100%; /* Make the images fill the slide height */
    object-fit: cover; /* Maintain aspect ratio and cover the slide */
  }
  
  .carousel-prev,
  .carousel-next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: transparent;
    border: none;
    color: #000;
    font-size: 24px;
    padding: 10px;
  }
  .carousel-prev:hover,
  .carousel-next:hover {
    color: red;
    background-color: #fff;
    border-radius: 2rem;

  }

  .carousel-prev {
    left: 10px;
  }
  
  .carousel-next {
    right: 10px;
  }

  

/* #trending {
    display: flex;
    flex-direction: column;
    justify-content: center;
} */

.trending-items{
    display: flex;
    /* justify-content: center; */
    /* flex-wrap: wrap; */
    gap: 2rem;
    margin-top: 2rem;
    padding: 0 7rem;
}
.trending-items h3 {
    margin-bottom: 1rem;
}

.category {
    /* margin-top: 2rem; */
    /* padding: 0 3rem; */
    color: #000000;

    display: flex;
    flex-direction: column;
    /* width: 50%; */
    width: 300px;
}


.category img {
    margin: 1.3rem 0 1rem 0;
    /* height: 400px; */
    /* width: 291px; */

    height: auto;
    width: 291px;

    /* height: 400px;
    width: auto; */
    /* border-radius: 0.2rem; */
}

.sub-headline {
    display: flex;
    flex-direction: column;
    width: 50%;
    color: #000000;
    
    padding: 0 1rem;
    /* margin-top: 2rem; */
    /* margin-bottom: 2rem; */
}

.sub-headline img {
    width: 414px;
    height: 294px;
    margin-bottom: 1rem;
    /* border-radius: 0.5rem; */
}

/* for h1 header */
/* sub category article titles */
#category-title,
#sub-headline {
    margin: 0 0 20px;
    /* margin: 1rem 0 1rem 0; */
    font-size: 2rem;
    font-weight: 200;
}

/* articles */
#article,
#category-article {
    margin: 0 0 20px;
    /* margin: 1rem 0 1rem 0; */
    font-size: 1rem;
    font-weight: 200;
}

.sub-headline .description {
    margin-bottom: 1rem;
    /* margin: 1rem 0 1rem 0; */
    font-size: 1rem;
    /* line-height: 1.2; */
}

.sub-headline > div {
    padding: 0 0 10px;
}

#about-newspaper {
    background-color: #eeeeee;
    padding: 2rem;
    margin: 1rem;
    border-radius: 0.5rem;
}

#about-newspaper h4 {
    margin-bottom: 0.4rem;
}

.latest-stories {
    display: flex;
    flex-direction: column;
    width: 50%;
}

.latest-stories h2 {
    font-size: 2.5rem;
    /* width: 70%; */
    font-weight: 500;
    /* margin-bottom: 1rem; */
}
.latest-stories h4 {
    font-size: 1.2rem;
    /* margin: 0 0 20px; */
    margin: 20px 0 35px;
}

.latest-stories>div p {
    font-size: 1rem;
    margin: 0 0 20px;
}

.latest-stories>div img {
    width: 315px;
    height: 250px;
    margin: 30px 0 30px;
}

#date {
    font-weight: 500;
    padding: 1rem 0 0.5rem 0;
}

#read-more {
    font-weight: 500;
    font-weight: 600;
    padding: 0.5rem 0 1rem 0;
}


.truncate {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
    width: 400px;
}

.image-placeholder {
    position: relative;
    width: 400px;
    height: 200px;
    background-color: #f2f2f2;
}
  
.placeholder-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 1rem;
    color: #888888;
}
  

/* footer */

footer {
    border: 1px solid #000000;
    color: #fff;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* padding: 3rem 2rem 0.5rem; */
    padding: 6rem 6rem 2rem;
    
}

.site-footer {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
}

.site-footer h3 {
    margin-bottom: 1rem;
}

.footer-nav {
    width: 315px;
}

.footer-nav h3 {
    margin-bottom: 1rem;
}

.footer-nav ul {
    font-family: 'Inter', sans-serif;
    color: #fff;
    list-style: none;
    padding-top: 1.5rem;
}

.footer-nav a {
    color: #c5c5c5;
    text-decoration: none;
}

.social-icons ul {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}


.footer-bottom {
    display: flex;
    color: #c5c5c5;
    justify-content: space-between;
    align-items: center;
    /* margin: 1.5rem 0 0 0; */
    margin-top: 3rem;
}

.footer-bottom ul {
    list-style-type: none;
}




/* social icons */

.social-icons{
  color: #ffffff;
}

.social-icons a {
    text-decoration: none;
    color: #c5c5c5;
}

.hidden {
    display: none;
}





@media (max-width: 576px) {
    .header {
        background-color: #888888;
        flex-direction: column;
        align-items: flex-start;
        padding: 0.5rem;
    }

    .search {
        /* flex-direction: column; */
        gap: 0;
    }

    .container {
        padding: 5px;
    }

    header ul {
        display: none;
    }

    .carousel {
        width: 10000px;
        height: 300px;
    }

    .carousel-caption {
        font-size: 1rem;
    }

    .carousel-prev,
    .carousel-next {
        font-size: 20px;
        padding: 5px;
    }

    .trending-items {
        display: block;
        /* gap: 1.5rem; */
        padding: 0;
    }

    .category {
        width: 100%;
    }

    .category img {
        width: 100%;
    }

    .sub-headline {
        width: 100%;
        display: block;
        color: #000000;
        padding: 0;
        margin-top: 1.2rem;
    }

    .sub-headline img {
        width: 100%;
        height: auto;
    }

    .latest-stories{
        width: 100%;
    }

    .latest-stories h2 {
        font-size: 1.8rem;
    }

    .latest-stories h4 {
        font-size: 1rem;
    }

    .latest-stories > div p {
        font-size: 0.9rem;
    }

    .latest-stories > div img {
        width: 100%;
        height: auto;
    }

    .truncate {
        width: 310px;
    }

    footer {
        display: block;
        padding: 1rem;
    }
    
    .site-footer {
        flex-direction: column;
        align-items: flex-start;
    }

    .footer-nav {
        width: 100%;
    }

    .footer-bottom {
        flex-direction: column;
        gap: 0.5rem;
        align-items: start;
    }


}


/* loader */

.loader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
}
      
.loader {
    border: 4px solid #f3f3f3;
    border-top: 4px solid #000000;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
}
      
@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}
      
      


.article-divider {
    border: none;
    border-top: 1px solid #ddd;
    margin: 10px 0;
}
  `, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,600&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');\r\n\r\n\r\nhtml {\r\n    scroll-behavior: smooth;\r\n}\r\n  \r\n\r\n*{\r\n    box-sizing: border-box;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    font-family: 'Playfair Display', serif;\r\n    background-color: #f5f5f5;\r\n    color: #000000;\r\n}\r\n\r\n.header {\r\n    /* position: fixed; */\r\n    background-color: #f0f0f0;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 2rem 1rem;\r\n    height: 0.5rem;\r\n    font-size: 1.2rem;\r\n    /* background-color: #fff;\r\n    padding: 20px 0;\r\n    border-bottom: 1px solid #eee; */\r\n}\r\n\r\n.header-title{\r\n    font-weight: 600;\r\n}\r\n\r\n\r\n.search-findings {\r\n    margin-bottom: 20px;\r\n  }\r\n  \r\n  .search-findings h3 {\r\n    font-size: 20px;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .search-findings img {\r\n    max-width: 100%;\r\n    height: auto;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .search-findings p {\r\n    font-size: 16px;\r\n    margin-bottom: 10px;\r\n  }\r\n  \r\n  .search-findings .article-divider {\r\n    border: none;\r\n    border-top: 1px solid #ddd;\r\n    margin-top: 10px;\r\n  }\r\n\r\n  #article-results {\r\n    border-radius: 0.5rem;\r\n    box-shadow: 0 1px 16px 10px rgba(64,64,64,.08);\r\n  }\r\n  \r\n\r\n.search {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n    max-width: 500px;\r\n}\r\n\r\n.search-findings {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    gap: 1rem;\r\n    /* border: 1px solid red; */\r\n    border-radius: 1rem;\r\n    padding: 1rem;\r\n    /* box-shadow: 0 1px 16px 10px rgba(64,64,64,.08); */\r\n}\r\n\r\n.search-findings>img {\r\n    width: 138px;\r\n    height: auto;\r\n    border-radius: 0.5rem\r\n}\r\n\r\n#search-results {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 1rem;\r\n    /* margin: 2rem 0 0 0; */\r\n    padding: 0 2rem;\r\n    \r\n}\r\n\r\n#search-results h2 {\r\n    font-size: 3rem;\r\n    margin: 0 0 1rem 0;\r\n}\r\n\r\n.filter{\r\n    position: fixed;\r\n    bottom: 2rem;\r\n    left: 2rem;\r\n    padding: 1rem;\r\n    z-index: 100;\r\n} \r\n\r\n/* .filter {\r\n    position: sticky;\r\n    bottom: 2rem;\r\n    left: 2rem;\r\n    padding: 1rem;\r\n    z-index: 100;\r\n    background-color: #fff;\r\n    border-radius: 0.5rem;\r\n    box-shadow: 0 1px 16px 10px rgba(64, 64, 64, 0.08);\r\n  } */\r\n  \r\n  \r\n.filter-by {\r\n    font-size: 1.2rem;\r\n    \r\n        /* position: fixed;\r\n        top: 0;\r\n        width: 100%;\r\n        background-color: white;\r\n        z-index: 999; */\r\n      \r\n    padding: 25px;\r\n    border-radius: 0.5rem;\r\n    box-shadow: 0 1px 16px 10px rgba(64,64,64,.08);     \r\n}\r\n\r\n.filter h3{\r\n    margin: 0 0 16px;\r\n}\r\n\r\n.filter-by > div >label {\r\n    margin: 0 0 2px;\r\n}\r\n\r\n.results {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    margin: 1rem 0rem;\r\n}\r\n\r\n\r\ninput[type=text]{\r\n    width: 100%; \r\n    font-size: 1rem;\r\n    width: 300px;\r\n    height: 40px;\r\n    border:2px solid #aaa;\r\n    border-radius: 8px;\r\n    margin:8px 0; \r\n    outline:none;\r\n    padding:8px;\r\n    box-sizing:border-box;\r\n    transition: 10s;\r\n}\r\n  \r\ninput[type=text]:focus{\r\n    border-color:dodgerBlue;\r\n    box-shadow:0 0 8px 0 dodgerBlue;\r\n}\r\n\r\n\r\n.container {\r\n    /* max-width: 1000px; Example: Set the maximum width of the container */\r\n    margin: 0 auto; /* Example: Center the container horizontally */\r\n    padding: 20px; /* Example: Add padding to the container */\r\n    /* Additional styling properties for the container */\r\n}\r\n\r\nheader ul{\r\n    display: flex;\r\n    gap: 2rem;\r\n    list-style: none;\r\n}\r\n\r\na{\r\n    text-decoration: none;\r\n    color: #000;\r\n} \r\n\r\n.carousel {\r\n    position: relative;\r\n    width: 100%;\r\n    max-width: 100%; /* Update to use maximum width of the screen */\r\n    margin: 0 auto;\r\n    overflow: hidden;\r\n    height: 400px; /* Set the desired height of the carousel */\r\n  }\r\n  \r\n  .carousel-container {\r\n    display: flex;\r\n    width: 100%;\r\n    height: 100%; /* Ensure the container fills the carousel height */\r\n  }\r\n  .carousel-caption {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: #fff;\r\n    font-size: 2rem;\r\n    text-align: center;\r\n  }\r\n  \r\n  .carousel-slide {\r\n    flex-shrink: 0;\r\n    width: 100%;\r\n    position: relative;\r\n  }\r\n\r\n  /* /* .carousel-slide {\r\n\r\n  } */\r\n  \r\n  .image-overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    /* background-color: rgba(255, 255, 255, 0.5); Adjust the color and opacity as needed */\r\n    background-color: rgba(66, 65, 65, 0.5);\r\n  }\r\n  \r\n  \r\n  .carousel-slide img {\r\n    width: 100%;\r\n    height: 100%; /* Make the images fill the slide height */\r\n    object-fit: cover; /* Maintain aspect ratio and cover the slide */\r\n  }\r\n  \r\n  .carousel-prev,\r\n  .carousel-next {\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    background-color: transparent;\r\n    border: none;\r\n    color: #000;\r\n    font-size: 24px;\r\n    padding: 10px;\r\n  }\r\n  .carousel-prev:hover,\r\n  .carousel-next:hover {\r\n    color: red;\r\n    background-color: #fff;\r\n    border-radius: 2rem;\r\n\r\n  }\r\n\r\n  .carousel-prev {\r\n    left: 10px;\r\n  }\r\n  \r\n  .carousel-next {\r\n    right: 10px;\r\n  }\r\n\r\n  \r\n\r\n/* #trending {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n} */\r\n\r\n.trending-items{\r\n    display: flex;\r\n    /* justify-content: center; */\r\n    /* flex-wrap: wrap; */\r\n    gap: 2rem;\r\n    margin-top: 2rem;\r\n    padding: 0 7rem;\r\n}\r\n.trending-items h3 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.category {\r\n    /* margin-top: 2rem; */\r\n    /* padding: 0 3rem; */\r\n    color: #000000;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* width: 50%; */\r\n    width: 300px;\r\n}\r\n\r\n\r\n.category img {\r\n    margin: 1.3rem 0 1rem 0;\r\n    /* height: 400px; */\r\n    /* width: 291px; */\r\n\r\n    height: auto;\r\n    width: 291px;\r\n\r\n    /* height: 400px;\r\n    width: auto; */\r\n    /* border-radius: 0.2rem; */\r\n}\r\n\r\n.sub-headline {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n    color: #000000;\r\n    \r\n    padding: 0 1rem;\r\n    /* margin-top: 2rem; */\r\n    /* margin-bottom: 2rem; */\r\n}\r\n\r\n.sub-headline img {\r\n    width: 414px;\r\n    height: 294px;\r\n    margin-bottom: 1rem;\r\n    /* border-radius: 0.5rem; */\r\n}\r\n\r\n/* for h1 header */\r\n/* sub category article titles */\r\n#category-title,\r\n#sub-headline {\r\n    margin: 0 0 20px;\r\n    /* margin: 1rem 0 1rem 0; */\r\n    font-size: 2rem;\r\n    font-weight: 200;\r\n}\r\n\r\n/* articles */\r\n#article,\r\n#category-article {\r\n    margin: 0 0 20px;\r\n    /* margin: 1rem 0 1rem 0; */\r\n    font-size: 1rem;\r\n    font-weight: 200;\r\n}\r\n\r\n.sub-headline .description {\r\n    margin-bottom: 1rem;\r\n    /* margin: 1rem 0 1rem 0; */\r\n    font-size: 1rem;\r\n    /* line-height: 1.2; */\r\n}\r\n\r\n.sub-headline > div {\r\n    padding: 0 0 10px;\r\n}\r\n\r\n#about-newspaper {\r\n    background-color: #eeeeee;\r\n    padding: 2rem;\r\n    margin: 1rem;\r\n    border-radius: 0.5rem;\r\n}\r\n\r\n#about-newspaper h4 {\r\n    margin-bottom: 0.4rem;\r\n}\r\n\r\n.latest-stories {\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 50%;\r\n}\r\n\r\n.latest-stories h2 {\r\n    font-size: 2.5rem;\r\n    /* width: 70%; */\r\n    font-weight: 500;\r\n    /* margin-bottom: 1rem; */\r\n}\r\n.latest-stories h4 {\r\n    font-size: 1.2rem;\r\n    /* margin: 0 0 20px; */\r\n    margin: 20px 0 35px;\r\n}\r\n\r\n.latest-stories>div p {\r\n    font-size: 1rem;\r\n    margin: 0 0 20px;\r\n}\r\n\r\n.latest-stories>div img {\r\n    width: 315px;\r\n    height: 250px;\r\n    margin: 30px 0 30px;\r\n}\r\n\r\n#date {\r\n    font-weight: 500;\r\n    padding: 1rem 0 0.5rem 0;\r\n}\r\n\r\n#read-more {\r\n    font-weight: 500;\r\n    font-weight: 600;\r\n    padding: 0.5rem 0 1rem 0;\r\n}\r\n\r\n\r\n.truncate {\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    cursor: pointer;\r\n    width: 400px;\r\n}\r\n\r\n.image-placeholder {\r\n    position: relative;\r\n    width: 400px;\r\n    height: 200px;\r\n    background-color: #f2f2f2;\r\n}\r\n  \r\n.placeholder-text {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    font-size: 1rem;\r\n    color: #888888;\r\n}\r\n  \r\n\r\n/* footer */\r\n\r\nfooter {\r\n    border: 1px solid #000000;\r\n    color: #fff;\r\n    background-color: #000000;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    /* padding: 3rem 2rem 0.5rem; */\r\n    padding: 6rem 6rem 2rem;\r\n    \r\n}\r\n\r\n.site-footer {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    /* align-items: center; */\r\n}\r\n\r\n.site-footer h3 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.footer-nav {\r\n    width: 315px;\r\n}\r\n\r\n.footer-nav h3 {\r\n    margin-bottom: 1rem;\r\n}\r\n\r\n.footer-nav ul {\r\n    font-family: 'Inter', sans-serif;\r\n    color: #fff;\r\n    list-style: none;\r\n    padding-top: 1.5rem;\r\n}\r\n\r\n.footer-nav a {\r\n    color: #c5c5c5;\r\n    text-decoration: none;\r\n}\r\n\r\n.social-icons ul {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: 0.5rem;\r\n}\r\n\r\n\r\n.footer-bottom {\r\n    display: flex;\r\n    color: #c5c5c5;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    /* margin: 1.5rem 0 0 0; */\r\n    margin-top: 3rem;\r\n}\r\n\r\n.footer-bottom ul {\r\n    list-style-type: none;\r\n}\r\n\r\n\r\n\r\n\r\n/* social icons */\r\n\r\n.social-icons{\r\n  color: #ffffff;\r\n}\r\n\r\n.social-icons a {\r\n    text-decoration: none;\r\n    color: #c5c5c5;\r\n}\r\n\r\n.hidden {\r\n    display: none;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n@media (max-width: 576px) {\r\n    .header {\r\n        background-color: #888888;\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n        padding: 0.5rem;\r\n    }\r\n\r\n    .search {\r\n        /* flex-direction: column; */\r\n        gap: 0;\r\n    }\r\n\r\n    .container {\r\n        padding: 5px;\r\n    }\r\n\r\n    header ul {\r\n        display: none;\r\n    }\r\n\r\n    .carousel {\r\n        width: 10000px;\r\n        height: 300px;\r\n    }\r\n\r\n    .carousel-caption {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .carousel-prev,\r\n    .carousel-next {\r\n        font-size: 20px;\r\n        padding: 5px;\r\n    }\r\n\r\n    .trending-items {\r\n        display: block;\r\n        /* gap: 1.5rem; */\r\n        padding: 0;\r\n    }\r\n\r\n    .category {\r\n        width: 100%;\r\n    }\r\n\r\n    .category img {\r\n        width: 100%;\r\n    }\r\n\r\n    .sub-headline {\r\n        width: 100%;\r\n        display: block;\r\n        color: #000000;\r\n        padding: 0;\r\n        margin-top: 1.2rem;\r\n    }\r\n\r\n    .sub-headline img {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n\r\n    .latest-stories{\r\n        width: 100%;\r\n    }\r\n\r\n    .latest-stories h2 {\r\n        font-size: 1.8rem;\r\n    }\r\n\r\n    .latest-stories h4 {\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .latest-stories > div p {\r\n        font-size: 0.9rem;\r\n    }\r\n\r\n    .latest-stories > div img {\r\n        width: 100%;\r\n        height: auto;\r\n    }\r\n\r\n    .truncate {\r\n        width: 310px;\r\n    }\r\n\r\n    footer {\r\n        display: block;\r\n        padding: 1rem;\r\n    }\r\n    \r\n    .site-footer {\r\n        flex-direction: column;\r\n        align-items: flex-start;\r\n    }\r\n\r\n    .footer-nav {\r\n        width: 100%;\r\n    }\r\n\r\n    .footer-bottom {\r\n        flex-direction: column;\r\n        gap: 0.5rem;\r\n        align-items: start;\r\n    }\r\n\r\n\r\n}\r\n\r\n\r\n/* loader */\r\n\r\n.loader-container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    height: 40vh;\r\n}\r\n      \r\n.loader {\r\n    border: 4px solid #f3f3f3;\r\n    border-top: 4px solid #000000;\r\n    border-radius: 50%;\r\n    width: 40px;\r\n    height: 40px;\r\n    animation: spin 2s linear infinite;\r\n}\r\n      \r\n@keyframes spin {\r\n    0% {\r\n        transform: rotate(0deg);\r\n    }\r\n    100% {\r\n        transform: rotate(360deg);\r\n    }\r\n}\r\n      \r\n      \r\n\r\n\r\n.article-divider {\r\n    border: none;\r\n    border-top: 1px solid #ddd;\r\n    margin: 10px 0;\r\n}\r\n  "],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ carousel)
/* harmony export */ });
function carousel() {

  const carouselContainer = document.querySelector('.carousel-container');
  
  const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let slideIndex = 0;
let timer;

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
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  const slides = carouselContainer.querySelectorAll('.carousel-slide');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function startAutoScroll() {
  timer = setInterval(() => {
    nextSlide();
  }, 3000); // Adjust the duration (in milliseconds) between slides
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
showSlide(slideIndex);
startAutoScroll();


    // const carouselContainer = document.querySelector('.carousel-container');
  // const prevButton = document.querySelector('.carousel-prev');
  // const nextButton = document.querySelector('.carousel-next');

  // let slideIndex = 0;

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
}

/***/ }),

/***/ "./src/loader.js":
/*!***********************!*\
  !*** ./src/loader.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hideLoader: () => (/* binding */ hideLoader),
/* harmony export */   showLoader: () => (/* binding */ showLoader)
/* harmony export */ });
// export default function loader() {
    
//     // Usage example
//     showLoader();

//     // Simulate an asynchronous operation
//     setTimeout(() => {
//     hideLoader();
//     }, 3000);

// }

const loaderContainer = document.querySelector('.loader-container');

function showLoader() {
  loaderContainer.style.display = 'flex';
}

function hideLoader() {
  loaderContainer.style.display = 'none';
}


/***/ }),

/***/ "./src/script.js":
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _search_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.js */ "./src/search.js");
/* harmony import */ var _carousel_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./carousel.js */ "./src/carousel.js");
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.js */ "./src/loader.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const apiKey = "df7afeb1485345018df3761a0291db32";
const apiUrl = "https://newsapi.org/v2/";

(0,_carousel_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
getWorldNews();
callApi();
// getHeadlines('ng');
getCountryInfo();
getCategoryNews();

function callApi() {

  (0,_loader_js__WEBPACK_IMPORTED_MODULE_2__.showLoader)();
    fetch(`${apiUrl}top-headlines?apiKey=${apiKey}&country=us`)
    .then((response) => {
      (0,_loader_js__WEBPACK_IMPORTED_MODULE_2__.showLoader)();
        if (response.ok) {
          
            return response.json();
        } else {
            throw new Error(apiMessage);
        }
    })
    .then((data) => data.articles.forEach((article, index) => {
      (0,_loader_js__WEBPACK_IMPORTED_MODULE_2__.hideLoader)();
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
    .finally(() => (0,_loader_js__WEBPACK_IMPORTED_MODULE_2__.hideLoader)());
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

            // articleOneDate.textContent = ;

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
            (0,_search_js__WEBPACK_IMPORTED_MODULE_0__["default"])(searchTerm);
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


/***/ }),

/***/ "./src/search.js":
/*!***********************!*\
  !*** ./src/search.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ searchNews)
/* harmony export */ });
/* harmony import */ var _loader_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader.js */ "./src/loader.js");
const apiKey = "df7afeb1485345018df3761a0291db32";
const apiUrl = "https://newsapi.org/v2/";



function searchNews(topic) {

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
      (0,_loader_js__WEBPACK_IMPORTED_MODULE_0__.showLoader)();
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      return res.json();
    })
    .then(data => {
      const articles = data.articles;
      
      // if (articles.length === 0) {
      //   console.log('No articles found');
      // }

      if (!articles || articles.length === 0) {
        console.log('No articles found');
        showNoResultsMessage(topic);
        return []; // Return an empty array to avoid further errors
      }
      (0,_loader_js__WEBPACK_IMPORTED_MODULE_0__.showLoader)();
      return articles;
    })
    .catch(err => {
      const errorContainer = document.getElementById('errorContainer');
      errorContainer.textContent = 'An error occurred while fetching news data.';
      console.log(err);
      // console.log(err)
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
          return []; // Return an empty array to avoid further errors
          
        } else if (articles.length === 1){
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_0__.showLoader)();
        
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
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_0__.hideLoader)();
      } else {
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_0__.showLoader)();
        containerMovements.innerHTML = '';
        articles.forEach(article => {
          const html = `
            <div class="search-findings" style="display: flex;">
              <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
              
              ${article.urlToImage ? `<img src="${article.urlToImage}" alt="">` : ''}
            </div>
          `;
          containerMovements.insertAdjacentHTML('beforeend', html);
        });
        (0,_loader_js__WEBPACK_IMPORTED_MODULE_0__.hideLoader)();

    }
    });
}


function showNoResultsMessage(topic) {
  const containerMovements = document.querySelector('#article-results');

  const searchTopic = document.querySelector('.search-topic');
  searchTopic.textContent = ` Search Results for "${topic}"`;
  console.log('shownoresults')

  containerMovements.innerHTML = '';

  containerMovements.insertAdjacentHTML('beforeend', `
    <div class="search-findings" style=" padding: 2rem;">
      <h2 style="font-size: 3rem;">No search results match the term "${topic}"</h2>
      <div style="font-size: 2rem;">
        <p>Some suggestions:</p>
        <ul>
          <li>Check the spelling of all words</li>
          <li>Try different words that mean the same thing</li>
          <li>Enter fewer words</li>
        </ul>
      </div>     
    </div>
  `);
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/script.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDMEc7QUFDakI7QUFDekYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRixnSUFBZ0ksTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQ3RLLG1IQUFtSDtBQUNuSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUIsb0JBQW9CO0FBQ3BCLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEIsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIsd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQiw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxnRkFBZ0YsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sYUFBYSxPQUFPLEtBQUssYUFBYSxRQUFRLE9BQU8sV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSx1QkFBdUIsdUJBQXVCLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxzQkFBc0IsV0FBVyxZQUFZLHVCQUF1QixPQUFPLEtBQUssVUFBVSxVQUFVLHNCQUFzQixNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLHNCQUFzQix5QkFBeUIsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxLQUFLLE1BQU0sVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsUUFBUSxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksVUFBVSxZQUFZLGFBQWEsV0FBVyxRQUFRLEtBQUssWUFBWSxhQUFhLGNBQWMsV0FBVyxXQUFXLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sWUFBWSxhQUFhLE9BQU8sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFVBQVUsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsUUFBUSxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksVUFBVSxhQUFhLE1BQU0sVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVB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c3R5bGUuY3NzIiwid2VicGFjazovL25ld3NmZWVkYXBpLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9uZXdzZmVlZGFwaS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25ld3NmZWVkYXBpLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL25ld3NmZWVkYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL25ld3NmZWVkYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9uZXdzZmVlZGFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9uZXdzZmVlZGFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9uZXdzZmVlZGFwaS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL25ld3NmZWVkYXBpLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vbmV3c2ZlZWRhcGkvLi9zcmMvY2Fyb3VzZWwuanMiLCJ3ZWJwYWNrOi8vbmV3c2ZlZWRhcGkvLi9zcmMvbG9hZGVyLmpzIiwid2VicGFjazovL25ld3NmZWVkYXBpLy4vc3JjL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly9uZXdzZmVlZGFwaS8uL3NyYy9zZWFyY2guanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMDswLDUwMDswLDcwMDsxLDQwMDsxLDYwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1JbnRlciZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xyXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XHJcbn1cclxuICBcclxuXHJcbip7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ1BsYXlmYWlyIERpc3BsYXknLCBzZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbiAgICBoZWlnaHQ6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlOyAqL1xyXG59XHJcblxyXG4uaGVhZGVyLXRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuXHJcbi5zZWFyY2gtZmluZGluZ3Mge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1maW5kaW5ncyBoMyB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWZpbmRpbmdzIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuc2VhcmNoLWZpbmRpbmdzIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLnNlYXJjaC1maW5kaW5ncyAuYXJ0aWNsZS1kaXZpZGVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcblxyXG4gICNhcnRpY2xlLXJlc3VsdHMge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMTZweCAxMHB4IHJnYmEoNjQsNjQsNjQsLjA4KTtcclxuICB9XHJcbiAgXHJcblxyXG4uc2VhcmNoIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAwLjVyZW07XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWZpbmRpbmdzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcclxuICAgIHBhZGRpbmc6IDFyZW07XHJcbiAgICAvKiBib3gtc2hhZG93OiAwIDFweCAxNnB4IDEwcHggcmdiYSg2NCw2NCw2NCwuMDgpOyAqL1xyXG59XHJcblxyXG4uc2VhcmNoLWZpbmRpbmdzPmltZyB7XHJcbiAgICB3aWR0aDogMTM4cHg7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW1cclxufVxyXG5cclxuI3NlYXJjaC1yZXN1bHRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZ2FwOiAxcmVtO1xyXG4gICAgLyogbWFyZ2luOiAycmVtIDAgMCAwOyAqL1xyXG4gICAgcGFkZGluZzogMCAycmVtO1xyXG4gICAgXHJcbn1cclxuXHJcbiNzZWFyY2gtcmVzdWx0cyBoMiB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICBtYXJnaW46IDAgMCAxcmVtIDA7XHJcbn1cclxuXHJcbi5maWx0ZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDJyZW07XHJcbiAgICBsZWZ0OiAycmVtO1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuICAgIHotaW5kZXg6IDEwMDtcclxufSBcclxuXHJcbi8qIC5maWx0ZXIge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIGJvdHRvbTogMnJlbTtcclxuICAgIGxlZnQ6IDJyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDE2cHggMTBweCByZ2JhKDY0LCA2NCwgNjQsIDAuMDgpO1xyXG4gIH0gKi9cclxuICBcclxuICBcclxuLmZpbHRlci1ieSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIFxyXG4gICAgICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICAgICAgei1pbmRleDogOTk5OyAqL1xyXG4gICAgICBcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxNnB4IDEwcHggcmdiYSg2NCw2NCw2NCwuMDgpOyAgICAgXHJcbn1cclxuXHJcbi5maWx0ZXIgaDN7XHJcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xyXG59XHJcblxyXG4uZmlsdGVyLWJ5ID4gZGl2ID5sYWJlbCB7XHJcbiAgICBtYXJnaW46IDAgMCAycHg7XHJcbn1cclxuXHJcbi5yZXN1bHRzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBtYXJnaW46IDFyZW0gMHJlbTtcclxufVxyXG5cclxuXHJcbmlucHV0W3R5cGU9dGV4dF17XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICNhYWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBtYXJnaW46OHB4IDA7IFxyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgcGFkZGluZzo4cHg7XHJcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XHJcbiAgICB0cmFuc2l0aW9uOiAxMHM7XHJcbn1cclxuICBcclxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1c3tcclxuICAgIGJvcmRlci1jb2xvcjpkb2RnZXJCbHVlO1xyXG4gICAgYm94LXNoYWRvdzowIDAgOHB4IDAgZG9kZ2VyQmx1ZTtcclxufVxyXG5cclxuXHJcbi5jb250YWluZXIge1xyXG4gICAgLyogbWF4LXdpZHRoOiAxMDAwcHg7IEV4YW1wbGU6IFNldCB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgY29udGFpbmVyICovXHJcbiAgICBtYXJnaW46IDAgYXV0bzsgLyogRXhhbXBsZTogQ2VudGVyIHRoZSBjb250YWluZXIgaG9yaXpvbnRhbGx5ICovXHJcbiAgICBwYWRkaW5nOiAyMHB4OyAvKiBFeGFtcGxlOiBBZGQgcGFkZGluZyB0byB0aGUgY29udGFpbmVyICovXHJcbiAgICAvKiBBZGRpdGlvbmFsIHN0eWxpbmcgcHJvcGVydGllcyBmb3IgdGhlIGNvbnRhaW5lciAqL1xyXG59XHJcblxyXG5oZWFkZXIgdWx7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAycmVtO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59IFxyXG5cclxuLmNhcm91c2VsIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiBVcGRhdGUgdG8gdXNlIG1heGltdW0gd2lkdGggb2YgdGhlIHNjcmVlbiAqL1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgaGVpZ2h0OiA0MDBweDsgLyogU2V0IHRoZSBkZXNpcmVkIGhlaWdodCBvZiB0aGUgY2Fyb3VzZWwgKi9cclxuICB9XHJcbiAgXHJcbiAgLmNhcm91c2VsLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIEVuc3VyZSB0aGUgY29udGFpbmVyIGZpbGxzIHRoZSBjYXJvdXNlbCBoZWlnaHQgKi9cclxuICB9XHJcbiAgLmNhcm91c2VsLWNhcHRpb24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY2Fyb3VzZWwtc2xpZGUge1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIC8qIC8qIC5jYXJvdXNlbC1zbGlkZSB7XHJcblxyXG4gIH0gKi9cclxuICBcclxuICAuaW1hZ2Utb3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7IEFkanVzdCB0aGUgY29sb3IgYW5kIG9wYWNpdHkgYXMgbmVlZGVkICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCA2NSwgNjUsIDAuNSk7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5jYXJvdXNlbC1zbGlkZSBpbWcge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIE1ha2UgdGhlIGltYWdlcyBmaWxsIHRoZSBzbGlkZSBoZWlnaHQgKi9cclxuICAgIG9iamVjdC1maXQ6IGNvdmVyOyAvKiBNYWludGFpbiBhc3BlY3QgcmF0aW8gYW5kIGNvdmVyIHRoZSBzbGlkZSAqL1xyXG4gIH1cclxuICBcclxuICAuY2Fyb3VzZWwtcHJldixcclxuICAuY2Fyb3VzZWwtbmV4dCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuICAuY2Fyb3VzZWwtcHJldjpob3ZlcixcclxuICAuY2Fyb3VzZWwtbmV4dDpob3ZlciB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcblxyXG4gIH1cclxuXHJcbiAgLmNhcm91c2VsLXByZXYge1xyXG4gICAgbGVmdDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmNhcm91c2VsLW5leHQge1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG5cclxuICBcclxuXHJcbi8qICN0cmVuZGluZyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59ICovXHJcblxyXG4udHJlbmRpbmctaXRlbXN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXHJcbiAgICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXHJcbiAgICBnYXA6IDJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgcGFkZGluZzogMCA3cmVtO1xyXG59XHJcbi50cmVuZGluZy1pdGVtcyBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uY2F0ZWdvcnkge1xyXG4gICAgLyogbWFyZ2luLXRvcDogMnJlbTsgKi9cclxuICAgIC8qIHBhZGRpbmc6IDAgM3JlbTsgKi9cclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG5cclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgLyogd2lkdGg6IDUwJTsgKi9cclxuICAgIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuXHJcbi5jYXRlZ29yeSBpbWcge1xyXG4gICAgbWFyZ2luOiAxLjNyZW0gMCAxcmVtIDA7XHJcbiAgICAvKiBoZWlnaHQ6IDQwMHB4OyAqL1xyXG4gICAgLyogd2lkdGg6IDI5MXB4OyAqL1xyXG5cclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiAyOTFweDtcclxuXHJcbiAgICAvKiBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgd2lkdGg6IGF1dG87ICovXHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAwLjJyZW07ICovXHJcbn1cclxuXHJcbi5zdWItaGVhZGxpbmUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBcclxuICAgIHBhZGRpbmc6IDAgMXJlbTtcclxuICAgIC8qIG1hcmdpbi10b3A6IDJyZW07ICovXHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAycmVtOyAqL1xyXG59XHJcblxyXG4uc3ViLWhlYWRsaW5lIGltZyB7XHJcbiAgICB3aWR0aDogNDE0cHg7XHJcbiAgICBoZWlnaHQ6IDI5NHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDAuNXJlbTsgKi9cclxufVxyXG5cclxuLyogZm9yIGgxIGhlYWRlciAqL1xyXG4vKiBzdWIgY2F0ZWdvcnkgYXJ0aWNsZSB0aXRsZXMgKi9cclxuI2NhdGVnb3J5LXRpdGxlLFxyXG4jc3ViLWhlYWRsaW5lIHtcclxuICAgIG1hcmdpbjogMCAwIDIwcHg7XHJcbiAgICAvKiBtYXJnaW46IDFyZW0gMCAxcmVtIDA7ICovXHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogMjAwO1xyXG59XHJcblxyXG4vKiBhcnRpY2xlcyAqL1xyXG4jYXJ0aWNsZSxcclxuI2NhdGVnb3J5LWFydGljbGUge1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcclxuICAgIC8qIG1hcmdpbjogMXJlbSAwIDFyZW0gMDsgKi9cclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi5zdWItaGVhZGxpbmUgLmRlc2NyaXB0aW9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgICAvKiBtYXJnaW46IDFyZW0gMCAxcmVtIDA7ICovXHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAvKiBsaW5lLWhlaWdodDogMS4yOyAqL1xyXG59XHJcblxyXG4uc3ViLWhlYWRsaW5lID4gZGl2IHtcclxuICAgIHBhZGRpbmc6IDAgMCAxMHB4O1xyXG59XHJcblxyXG4jYWJvdXQtbmV3c3BhcGVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWVlZWU7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgbWFyZ2luOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xyXG59XHJcblxyXG4jYWJvdXQtbmV3c3BhcGVyIGg0IHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcclxufVxyXG5cclxuLmxhdGVzdC1zdG9yaWVzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLmxhdGVzdC1zdG9yaWVzIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgLyogd2lkdGg6IDcwJTsgKi9cclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAxcmVtOyAqL1xyXG59XHJcbi5sYXRlc3Qtc3RvcmllcyBoNCB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgIC8qIG1hcmdpbjogMCAwIDIwcHg7ICovXHJcbiAgICBtYXJnaW46IDIwcHggMCAzNXB4O1xyXG59XHJcblxyXG4ubGF0ZXN0LXN0b3JpZXM+ZGl2IHAge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbWFyZ2luOiAwIDAgMjBweDtcclxufVxyXG5cclxuLmxhdGVzdC1zdG9yaWVzPmRpdiBpbWcge1xyXG4gICAgd2lkdGg6IDMxNXB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIG1hcmdpbjogMzBweCAwIDMwcHg7XHJcbn1cclxuXHJcbiNkYXRlIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBwYWRkaW5nOiAxcmVtIDAgMC41cmVtIDA7XHJcbn1cclxuXHJcbiNyZWFkLW1vcmUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMCAxcmVtIDA7XHJcbn1cclxuXHJcblxyXG4udHJ1bmNhdGUge1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmltYWdlLXBsYWNlaG9sZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiA0MDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG59XHJcbiAgXHJcbi5wbGFjZWhvbGRlci10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogIzg4ODg4ODtcclxufVxyXG4gIFxyXG5cclxuLyogZm9vdGVyICovXHJcblxyXG5mb290ZXIge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvKiBwYWRkaW5nOiAzcmVtIDJyZW0gMC41cmVtOyAqL1xyXG4gICAgcGFkZGluZzogNnJlbSA2cmVtIDJyZW07XHJcbiAgICBcclxufVxyXG5cclxuLnNpdGUtZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xyXG59XHJcblxyXG4uc2l0ZS1mb290ZXIgaDMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmZvb3Rlci1uYXYge1xyXG4gICAgd2lkdGg6IDMxNXB4O1xyXG59XHJcblxyXG4uZm9vdGVyLW5hdiBoMyB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4uZm9vdGVyLW5hdiB1bCB7XHJcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XHJcbn1cclxuXHJcbi5mb290ZXItbmF2IGEge1xyXG4gICAgY29sb3I6ICNjNWM1YzU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5zb2NpYWwtaWNvbnMgdWwge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBnYXA6IDAuNXJlbTtcclxufVxyXG5cclxuXHJcbi5mb290ZXItYm90dG9tIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBjb2xvcjogI2M1YzVjNTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKiBtYXJnaW46IDEuNXJlbSAwIDAgMDsgKi9cclxuICAgIG1hcmdpbi10b3A6IDNyZW07XHJcbn1cclxuXHJcbi5mb290ZXItYm90dG9tIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLyogc29jaWFsIGljb25zICovXHJcblxyXG4uc29jaWFsLWljb25ze1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uc29jaWFsLWljb25zIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6ICNjNWM1YzU7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODg4ODtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuc2VhcmNoIHtcclxuICAgICAgICAvKiBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyAqL1xyXG4gICAgICAgIGdhcDogMDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaGVhZGVyIHVsIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJvdXNlbCB7XHJcbiAgICAgICAgd2lkdGg6IDEwMDAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwtY2FwdGlvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJvdXNlbC1wcmV2LFxyXG4gICAgLmNhcm91c2VsLW5leHQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnRyZW5kaW5nLWl0ZW1zIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAvKiBnYXA6IDEuNXJlbTsgKi9cclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXRlZ29yeSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhdGVnb3J5IGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Yi1oZWFkbGluZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxLjJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLnN1Yi1oZWFkbGluZSBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAubGF0ZXN0LXN0b3JpZXN7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmxhdGVzdC1zdG9yaWVzIGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDEuOHJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubGF0ZXN0LXN0b3JpZXMgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAubGF0ZXN0LXN0b3JpZXMgPiBkaXYgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmxhdGVzdC1zdG9yaWVzID4gZGl2IGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG5cclxuICAgIC50cnVuY2F0ZSB7XHJcbiAgICAgICAgd2lkdGg6IDMxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIGZvb3RlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMXJlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLnNpdGUtZm9vdGVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgfVxyXG5cclxuICAgIC5mb290ZXItbmF2IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyLWJvdHRvbSB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDAuNXJlbTtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbi8qIGxvYWRlciAqL1xyXG5cclxuLmxvYWRlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDB2aDtcclxufVxyXG4gICAgICBcclxuLmxvYWRlciB7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuICAgICAgXHJcbkBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG59XHJcbiAgICAgIFxyXG4gICAgICBcclxuXHJcblxyXG4uYXJ0aWNsZS1kaXZpZGVyIHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbn1cclxuICBgLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBSUE7SUFDSSx1QkFBdUI7QUFDM0I7OztBQUdBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCOztvQ0FFZ0M7QUFDcEM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7OztBQUdBO0lBQ0ksbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsZUFBZTtJQUNmLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLDhDQUE4QztFQUNoRDs7O0FBR0Y7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isb0RBQW9EO0FBQ3hEOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWjtBQUNK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QUFjO1FBQ2QsY0FBYztRQUNkLFVBQVU7UUFDVixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0Qix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsV0FBVztRQUNYLGtCQUFrQjtJQUN0Qjs7O0FBR0o7OztBQUdBLFdBQVc7O0FBRVg7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSTtRQUNJLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0kseUJBQXlCO0lBQzdCO0FBQ0o7Ozs7O0FBS0E7SUFDSSxZQUFZO0lBQ1osMEJBQTBCO0lBQzFCLGNBQWM7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsLHdnaHRAMCw0MDA7MCw1MDA7MCw3MDA7MSw0MDA7MSw2MDAmZGlzcGxheT1zd2FwJyk7XFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SW50ZXImZGlzcGxheT1zd2FwJyk7XFxyXFxuXFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbn1cXHJcXG4gIFxcclxcblxcclxcbip7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUGxheWZhaXIgRGlzcGxheScsIHNlcmlmO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xcclxcbiAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlciB7XFxyXFxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDFyZW07XFxyXFxuICAgIGhlaWdodDogMC41cmVtO1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLmhlYWRlci10aXRsZXtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnNlYXJjaC1maW5kaW5ncyB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zZWFyY2gtZmluZGluZ3MgaDMge1xcclxcbiAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zZWFyY2gtZmluZGluZ3MgaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5zZWFyY2gtZmluZGluZ3MgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLnNlYXJjaC1maW5kaW5ncyAuYXJ0aWNsZS1kaXZpZGVyIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICNhcnRpY2xlLXJlc3VsdHMge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxyXFxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDE2cHggMTBweCByZ2JhKDY0LDY0LDY0LC4wOCk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG5cXHJcXG4uc2VhcmNoIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtZmluZGluZ3Mge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgcmVkOyAqL1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xcclxcbiAgICBwYWRkaW5nOiAxcmVtO1xcclxcbiAgICAvKiBib3gtc2hhZG93OiAwIDFweCAxNnB4IDEwcHggcmdiYSg2NCw2NCw2NCwuMDgpOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLWZpbmRpbmdzPmltZyB7XFxyXFxuICAgIHdpZHRoOiAxMzhweDtcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAwLjVyZW1cXHJcXG59XFxyXFxuXFxyXFxuI3NlYXJjaC1yZXN1bHRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMXJlbTtcXHJcXG4gICAgLyogbWFyZ2luOiAycmVtIDAgMCAwOyAqL1xcclxcbiAgICBwYWRkaW5nOiAwIDJyZW07XFxyXFxuICAgIFxcclxcbn1cXHJcXG5cXHJcXG4jc2VhcmNoLXJlc3VsdHMgaDIge1xcclxcbiAgICBmb250LXNpemU6IDNyZW07XFxyXFxuICAgIG1hcmdpbjogMCAwIDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuLmZpbHRlcntcXHJcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICBib3R0b206IDJyZW07XFxyXFxuICAgIGxlZnQ6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG59IFxcclxcblxcclxcbi8qIC5maWx0ZXIge1xcclxcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xcclxcbiAgICBib3R0b206IDJyZW07XFxyXFxuICAgIGxlZnQ6IDJyZW07XFxyXFxuICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIHotaW5kZXg6IDEwMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcclxcbiAgICBib3gtc2hhZG93OiAwIDFweCAxNnB4IDEwcHggcmdiYSg2NCwgNjQsIDY0LCAwLjA4KTtcXHJcXG4gIH0gKi9cXHJcXG4gIFxcclxcbiAgXFxyXFxuLmZpbHRlci1ieSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICBcXHJcXG4gICAgICAgIC8qIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICB6LWluZGV4OiA5OTk7ICovXFxyXFxuICAgICAgXFxyXFxuICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG4gICAgYm94LXNoYWRvdzogMCAxcHggMTZweCAxMHB4IHJnYmEoNjQsNjQsNjQsLjA4KTsgICAgIFxcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyIGgze1xcclxcbiAgICBtYXJnaW46IDAgMCAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZmlsdGVyLWJ5ID4gZGl2ID5sYWJlbCB7XFxyXFxuICAgIG1hcmdpbjogMCAwIDJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnJlc3VsdHMge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIG1hcmdpbjogMXJlbSAwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5pbnB1dFt0eXBlPXRleHRde1xcclxcbiAgICB3aWR0aDogMTAwJTsgXFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgd2lkdGg6IDMwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJvcmRlcjoycHggc29saWQgI2FhYTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICBtYXJnaW46OHB4IDA7IFxcclxcbiAgICBvdXRsaW5lOm5vbmU7XFxyXFxuICAgIHBhZGRpbmc6OHB4O1xcclxcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XFxyXFxuICAgIHRyYW5zaXRpb246IDEwcztcXHJcXG59XFxyXFxuICBcXHJcXG5pbnB1dFt0eXBlPXRleHRdOmZvY3Vze1xcclxcbiAgICBib3JkZXItY29sb3I6ZG9kZ2VyQmx1ZTtcXHJcXG4gICAgYm94LXNoYWRvdzowIDAgOHB4IDAgZG9kZ2VyQmx1ZTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIC8qIG1heC13aWR0aDogMTAwMHB4OyBFeGFtcGxlOiBTZXQgdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGNvbnRhaW5lciAqL1xcclxcbiAgICBtYXJnaW46IDAgYXV0bzsgLyogRXhhbXBsZTogQ2VudGVyIHRoZSBjb250YWluZXIgaG9yaXpvbnRhbGx5ICovXFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7IC8qIEV4YW1wbGU6IEFkZCBwYWRkaW5nIHRvIHRoZSBjb250YWluZXIgKi9cXHJcXG4gICAgLyogQWRkaXRpb25hbCBzdHlsaW5nIHByb3BlcnRpZXMgZm9yIHRoZSBjb250YWluZXIgKi9cXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHVse1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDJyZW07XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmF7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICMwMDA7XFxyXFxufSBcXHJcXG5cXHJcXG4uY2Fyb3VzZWwge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtd2lkdGg6IDEwMCU7IC8qIFVwZGF0ZSB0byB1c2UgbWF4aW11bSB3aWR0aCBvZiB0aGUgc2NyZWVuICovXFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICBoZWlnaHQ6IDQwMHB4OyAvKiBTZXQgdGhlIGRlc2lyZWQgaGVpZ2h0IG9mIHRoZSBjYXJvdXNlbCAqL1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY2Fyb3VzZWwtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTsgLyogRW5zdXJlIHRoZSBjb250YWluZXIgZmlsbHMgdGhlIGNhcm91c2VsIGhlaWdodCAqL1xcclxcbiAgfVxcclxcbiAgLmNhcm91c2VsLWNhcHRpb24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICBjb2xvcjogI2ZmZjtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJvdXNlbC1zbGlkZSB7XFxyXFxuICAgIGZsZXgtc2hyaW5rOiAwO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogLyogLmNhcm91c2VsLXNsaWRlIHtcXHJcXG5cXHJcXG4gIH0gKi9cXHJcXG4gIFxcclxcbiAgLmltYWdlLW92ZXJsYXkge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpOyBBZGp1c3QgdGhlIGNvbG9yIGFuZCBvcGFjaXR5IGFzIG5lZWRlZCAqL1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY2LCA2NSwgNjUsIDAuNSk7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIFxcclxcbiAgLmNhcm91c2VsLXNsaWRlIGltZyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7IC8qIE1ha2UgdGhlIGltYWdlcyBmaWxsIHRoZSBzbGlkZSBoZWlnaHQgKi9cXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7IC8qIE1haW50YWluIGFzcGVjdCByYXRpbyBhbmQgY292ZXIgdGhlIHNsaWRlICovXFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jYXJvdXNlbC1wcmV2LFxcclxcbiAgLmNhcm91c2VsLW5leHQge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGNvbG9yOiAjMDAwO1xcclxcbiAgICBmb250LXNpemU6IDI0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICB9XFxyXFxuICAuY2Fyb3VzZWwtcHJldjpob3ZlcixcXHJcXG4gIC5jYXJvdXNlbC1uZXh0OmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMnJlbTtcXHJcXG5cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jYXJvdXNlbC1wcmV2IHtcXHJcXG4gICAgbGVmdDogMTBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNhcm91c2VsLW5leHQge1xcclxcbiAgICByaWdodDogMTBweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIFxcclxcblxcclxcbi8qICN0cmVuZGluZyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbn0gKi9cXHJcXG5cXHJcXG4udHJlbmRpbmctaXRlbXN7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcclxcbiAgICAvKiBmbGV4LXdyYXA6IHdyYXA7ICovXFxyXFxuICAgIGdhcDogMnJlbTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMnJlbTtcXHJcXG4gICAgcGFkZGluZzogMCA3cmVtO1xcclxcbn1cXHJcXG4udHJlbmRpbmctaXRlbXMgaDMge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY2F0ZWdvcnkge1xcclxcbiAgICAvKiBtYXJnaW4tdG9wOiAycmVtOyAqL1xcclxcbiAgICAvKiBwYWRkaW5nOiAwIDNyZW07ICovXFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcblxcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAvKiB3aWR0aDogNTAlOyAqL1xcclxcbiAgICB3aWR0aDogMzAwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jYXRlZ29yeSBpbWcge1xcclxcbiAgICBtYXJnaW46IDEuM3JlbSAwIDFyZW0gMDtcXHJcXG4gICAgLyogaGVpZ2h0OiA0MDBweDsgKi9cXHJcXG4gICAgLyogd2lkdGg6IDI5MXB4OyAqL1xcclxcblxcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIHdpZHRoOiAyOTFweDtcXHJcXG5cXHJcXG4gICAgLyogaGVpZ2h0OiA0MDBweDtcXHJcXG4gICAgd2lkdGg6IGF1dG87ICovXFxyXFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDAuMnJlbTsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnN1Yi1oZWFkbGluZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIHdpZHRoOiA1MCU7XFxyXFxuICAgIGNvbG9yOiAjMDAwMDAwO1xcclxcbiAgICBcXHJcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcclxcbiAgICAvKiBtYXJnaW4tdG9wOiAycmVtOyAqL1xcclxcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAycmVtOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViLWhlYWRsaW5lIGltZyB7XFxyXFxuICAgIHdpZHRoOiA0MTRweDtcXHJcXG4gICAgaGVpZ2h0OiAyOTRweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG4gICAgLyogYm9yZGVyLXJhZGl1czogMC41cmVtOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4vKiBmb3IgaDEgaGVhZGVyICovXFxyXFxuLyogc3ViIGNhdGVnb3J5IGFydGljbGUgdGl0bGVzICovXFxyXFxuI2NhdGVnb3J5LXRpdGxlLFxcclxcbiNzdWItaGVhZGxpbmUge1xcclxcbiAgICBtYXJnaW46IDAgMCAyMHB4O1xcclxcbiAgICAvKiBtYXJnaW46IDFyZW0gMCAxcmVtIDA7ICovXFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogYXJ0aWNsZXMgKi9cXHJcXG4jYXJ0aWNsZSxcXHJcXG4jY2F0ZWdvcnktYXJ0aWNsZSB7XFxyXFxuICAgIG1hcmdpbjogMCAwIDIwcHg7XFxyXFxuICAgIC8qIG1hcmdpbjogMXJlbSAwIDFyZW0gMDsgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBmb250LXdlaWdodDogMjAwO1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViLWhlYWRsaW5lIC5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxuICAgIC8qIG1hcmdpbjogMXJlbSAwIDFyZW0gMDsgKi9cXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICAvKiBsaW5lLWhlaWdodDogMS4yOyAqL1xcclxcbn1cXHJcXG5cXHJcXG4uc3ViLWhlYWRsaW5lID4gZGl2IHtcXHJcXG4gICAgcGFkZGluZzogMCAwIDEwcHg7XFxyXFxufVxcclxcblxcclxcbiNhYm91dC1uZXdzcGFwZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlZWVlO1xcclxcbiAgICBwYWRkaW5nOiAycmVtO1xcclxcbiAgICBtYXJnaW46IDFyZW07XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuI2Fib3V0LW5ld3NwYXBlciBoNCB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdGVzdC1zdG9yaWVzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgd2lkdGg6IDUwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmxhdGVzdC1zdG9yaWVzIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiAyLjVyZW07XFxyXFxuICAgIC8qIHdpZHRoOiA3MCU7ICovXFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIC8qIG1hcmdpbi1ib3R0b206IDFyZW07ICovXFxyXFxufVxcclxcbi5sYXRlc3Qtc3RvcmllcyBoNCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICAvKiBtYXJnaW46IDAgMCAyMHB4OyAqL1xcclxcbiAgICBtYXJnaW46IDIwcHggMCAzNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubGF0ZXN0LXN0b3JpZXM+ZGl2IHAge1xcclxcbiAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIG1hcmdpbjogMCAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5sYXRlc3Qtc3Rvcmllcz5kaXYgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDMxNXB4O1xcclxcbiAgICBoZWlnaHQ6IDI1MHB4O1xcclxcbiAgICBtYXJnaW46IDMwcHggMCAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jZGF0ZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIHBhZGRpbmc6IDFyZW0gMCAwLjVyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuI3JlYWQtbW9yZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIHBhZGRpbmc6IDAuNXJlbSAwIDFyZW0gMDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLnRydW5jYXRlIHtcXHJcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uaW1hZ2UtcGxhY2Vob2xkZXIge1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHdpZHRoOiA0MDBweDtcXHJcXG4gICAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcXHJcXG59XFxyXFxuICBcXHJcXG4ucGxhY2Vob2xkZXItdGV4dCB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiA1MCU7XFxyXFxuICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgY29sb3I6ICM4ODg4ODg7XFxyXFxufVxcclxcbiAgXFxyXFxuXFxyXFxuLyogZm9vdGVyICovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAvKiBwYWRkaW5nOiAzcmVtIDJyZW0gMC41cmVtOyAqL1xcclxcbiAgICBwYWRkaW5nOiA2cmVtIDZyZW0gMnJlbTtcXHJcXG4gICAgXFxyXFxufVxcclxcblxcclxcbi5zaXRlLWZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cXHJcXG59XFxyXFxuXFxyXFxuLnNpdGUtZm9vdGVyIGgzIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1uYXYge1xcclxcbiAgICB3aWR0aDogMzE1cHg7XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbmF2IGgzIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmZvb3Rlci1uYXYgdWwge1xcclxcbiAgICBmb250LWZhbWlseTogJ0ludGVyJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItbmF2IGEge1xcclxcbiAgICBjb2xvcjogI2M1YzVjNTtcXHJcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc29jaWFsLWljb25zIHVsIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbi5mb290ZXItYm90dG9tIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6ICNjNWM1YzU7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgLyogbWFyZ2luOiAxLjVyZW0gMCAwIDA7ICovXFxyXFxuICAgIG1hcmdpbi10b3A6IDNyZW07XFxyXFxufVxcclxcblxcclxcbi5mb290ZXItYm90dG9tIHVsIHtcXHJcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBzb2NpYWwgaWNvbnMgKi9cXHJcXG5cXHJcXG4uc29jaWFsLWljb25ze1xcclxcbiAgY29sb3I6ICNmZmZmZmY7XFxyXFxufVxcclxcblxcclxcbi5zb2NpYWwtaWNvbnMgYSB7XFxyXFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgY29sb3I6ICNjNWM1YzU7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcXHJcXG4gICAgLmhlYWRlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4ODg4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgICAgcGFkZGluZzogMC41cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWFyY2gge1xcclxcbiAgICAgICAgLyogZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgKi9cXHJcXG4gICAgICAgIGdhcDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY29udGFpbmVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBoZWFkZXIgdWwge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2Fyb3VzZWwge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMDAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYXJvdXNlbC1jYXB0aW9uIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2Fyb3VzZWwtcHJldixcXHJcXG4gICAgLmNhcm91c2VsLW5leHQge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50cmVuZGluZy1pdGVtcyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIC8qIGdhcDogMS41cmVtOyAqL1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2F0ZWdvcnkge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhdGVnb3J5IGltZyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc3ViLWhlYWRsaW5lIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICBtYXJnaW4tdG9wOiAxLjJyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN1Yi1oZWFkbGluZSBpbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxhdGVzdC1zdG9yaWVze1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxhdGVzdC1zdG9yaWVzIGgyIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5sYXRlc3Qtc3RvcmllcyBoNCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxhdGVzdC1zdG9yaWVzID4gZGl2IHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmxhdGVzdC1zdG9yaWVzID4gZGl2IGltZyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudHJ1bmNhdGUge1xcclxcbiAgICAgICAgd2lkdGg6IDMxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGZvb3RlciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHBhZGRpbmc6IDFyZW07XFxyXFxuICAgIH1cXHJcXG4gICAgXFxyXFxuICAgIC5zaXRlLWZvb3RlciB7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3Rlci1uYXYge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvb3Rlci1ib3R0b20ge1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGdhcDogMC41cmVtO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxufVxcclxcblxcclxcblxcclxcbi8qIGxvYWRlciAqL1xcclxcblxcclxcbi5sb2FkZXItY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGhlaWdodDogNDB2aDtcXHJcXG59XFxyXFxuICAgICAgXFxyXFxuLmxvYWRlciB7XFxyXFxuICAgIGJvcmRlcjogNHB4IHNvbGlkICNmM2YzZjM7XFxyXFxuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMDAwMDAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGFuaW1hdGlvbjogc3BpbiAycyBsaW5lYXIgaW5maW5pdGU7XFxyXFxufVxcclxcbiAgICAgIFxcclxcbkBrZXlmcmFtZXMgc3BpbiB7XFxyXFxuICAgIDAlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcclxcbiAgICB9XFxyXFxuICAgIDEwMCUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG4gICAgICBcXHJcXG4gICAgICBcXHJcXG5cXHJcXG5cXHJcXG4uYXJ0aWNsZS1kaXZpZGVyIHtcXHJcXG4gICAgYm9yZGVyOiBub25lO1xcclxcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcXHJcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxyXFxufVxcclxcbiAgXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhcm91c2VsKCkge1xyXG5cclxuICBjb25zdCBjYXJvdXNlbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1jb250YWluZXInKTtcclxuICBcclxuICBjb25zdCBwcmV2QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLXByZXYnKTtcclxuY29uc3QgbmV4dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1uZXh0Jyk7XHJcblxyXG5sZXQgc2xpZGVJbmRleCA9IDA7XHJcbmxldCB0aW1lcjtcclxuXHJcbmZ1bmN0aW9uIHNob3dTbGlkZShpbmRleCkge1xyXG4gIGNvbnN0IHNsaWRlcyA9IGNhcm91c2VsQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbC1zbGlkZScpO1xyXG4gIHNsaWRlcy5mb3JFYWNoKChzbGlkZSwgaSkgPT4ge1xyXG4gICAgaWYgKGkgPT09IGluZGV4KSB7XHJcbiAgICAgIHNsaWRlLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2xpZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHJldlNsaWRlKCkge1xyXG4gIHNsaWRlSW5kZXgtLTtcclxuICBpZiAoc2xpZGVJbmRleCA8IDApIHtcclxuICAgIHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoIC0gMTtcclxuICB9XHJcbiAgc2hvd1NsaWRlKHNsaWRlSW5kZXgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBuZXh0U2xpZGUoKSB7XHJcbiAgc2xpZGVJbmRleCsrO1xyXG4gIGNvbnN0IHNsaWRlcyA9IGNhcm91c2VsQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJvdXNlbC1zbGlkZScpO1xyXG4gIGlmIChzbGlkZUluZGV4ID49IHNsaWRlcy5sZW5ndGgpIHtcclxuICAgIHNsaWRlSW5kZXggPSAwO1xyXG4gIH1cclxuICBzaG93U2xpZGUoc2xpZGVJbmRleCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0YXJ0QXV0b1Njcm9sbCgpIHtcclxuICB0aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgIG5leHRTbGlkZSgpO1xyXG4gIH0sIDMwMDApOyAvLyBBZGp1c3QgdGhlIGR1cmF0aW9uIChpbiBtaWxsaXNlY29uZHMpIGJldHdlZW4gc2xpZGVzXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN0b3BBdXRvU2Nyb2xsKCkge1xyXG4gIGNsZWFySW50ZXJ2YWwodGltZXIpO1xyXG59XHJcblxyXG5wcmV2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHN0b3BBdXRvU2Nyb2xsKCk7XHJcbiAgcHJldlNsaWRlKCk7XHJcbn0pO1xyXG5cclxubmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBzdG9wQXV0b1Njcm9sbCgpO1xyXG4gIG5leHRTbGlkZSgpO1xyXG59KTtcclxuXHJcbi8vIEluaXRpYWxpemUgdGhlIGNhcm91c2VsXHJcbnNob3dTbGlkZShzbGlkZUluZGV4KTtcclxuc3RhcnRBdXRvU2Nyb2xsKCk7XHJcblxyXG5cclxuICAgIC8vIGNvbnN0IGNhcm91c2VsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLWNvbnRhaW5lcicpO1xyXG4gIC8vIGNvbnN0IHByZXZCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtcHJldicpO1xyXG4gIC8vIGNvbnN0IG5leHRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtbmV4dCcpO1xyXG5cclxuICAvLyBsZXQgc2xpZGVJbmRleCA9IDA7XHJcblxyXG4gIC8vIGZ1bmN0aW9uIHNob3dTbGlkZShpbmRleCkge1xyXG4gIC8vICAgY29uc3Qgc2xpZGVzID0gY2Fyb3VzZWxDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLmNhcm91c2VsLXNsaWRlJyk7XHJcbiAgLy8gICBzbGlkZXMuZm9yRWFjaCgoc2xpZGUsIGkpID0+IHtcclxuICAvLyAgICAgaWYgKGkgPT09IGluZGV4KSB7XHJcbiAgLy8gICAgICAgc2xpZGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgLy8gICAgIH0gZWxzZSB7XHJcbiAgLy8gICAgICAgc2xpZGUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAvLyAgICAgfVxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBmdW5jdGlvbiBwcmV2U2xpZGUoKSB7XHJcbiAgLy8gICBzbGlkZUluZGV4LS07XHJcbiAgLy8gICBpZiAoc2xpZGVJbmRleCA8IDApIHtcclxuICAvLyAgICAgc2xpZGVJbmRleCA9IDA7XHJcbiAgLy8gICB9XHJcbiAgLy8gICBzaG93U2xpZGUoc2xpZGVJbmRleCk7XHJcbiAgLy8gfVxyXG5cclxuICAvLyBmdW5jdGlvbiBuZXh0U2xpZGUoKSB7XHJcbiAgLy8gICBjb25zdCBzbGlkZXMgPSBjYXJvdXNlbENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCcuY2Fyb3VzZWwtc2xpZGUnKTtcclxuICAvLyAgIGlmIChzbGlkZUluZGV4ID49IHNsaWRlcy5sZW5ndGggLSAxKSB7XHJcbiAgLy8gICAgIHNsaWRlSW5kZXggPSBzbGlkZXMubGVuZ3RoIC0gMTtcclxuICAvLyAgIH0gZWxzZSB7XHJcbiAgLy8gICAgIHNsaWRlSW5kZXgrKztcclxuICAvLyAgIH1cclxuICAgIFxyXG4gIC8vICAgc2hvd1NsaWRlKHNsaWRlSW5kZXgpO1xyXG4gIC8vIH1cclxuXHJcbiAgLy8gcHJldkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHByZXZTbGlkZSk7XHJcbiAgLy8gbmV4dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG5leHRTbGlkZSk7XHJcblxyXG4gIC8vIC8vIEluaXRpYWxpemUgdGhlIGNhcm91c2VsXHJcbiAgLy8gc2hvd1NsaWRlKHNsaWRlSW5kZXgpO1xyXG59IiwiLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZGVyKCkge1xyXG4gICAgXHJcbi8vICAgICAvLyBVc2FnZSBleGFtcGxlXHJcbi8vICAgICBzaG93TG9hZGVyKCk7XHJcblxyXG4vLyAgICAgLy8gU2ltdWxhdGUgYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvblxyXG4vLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbi8vICAgICBoaWRlTG9hZGVyKCk7XHJcbi8vICAgICB9LCAzMDAwKTtcclxuXHJcbi8vIH1cclxuXHJcbmNvbnN0IGxvYWRlckNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXItY29udGFpbmVyJyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2hvd0xvYWRlcigpIHtcclxuICBsb2FkZXJDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVMb2FkZXIoKSB7XHJcbiAgbG9hZGVyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5pbXBvcnQgc2VhcmNoTmV3cyBmcm9tICcuL3NlYXJjaC5qcyc7XHJcbmltcG9ydCBjYXJvdXNlbCBmcm9tICcuL2Nhcm91c2VsLmpzJztcclxuaW1wb3J0IHsgc2hvd0xvYWRlciwgaGlkZUxvYWRlciB9IGZyb20gJy4vbG9hZGVyLmpzJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XHJcblxyXG5jb25zdCBhcGlLZXkgPSBwcm9jZXNzLmVudi5BUElfS0VZO1xyXG5jb25zdCBhcGlVcmwgPSBwcm9jZXNzLmVudi5BUElfVVJMO1xyXG5cclxuY2Fyb3VzZWwoKTtcclxuZ2V0V29ybGROZXdzKCk7XHJcbmNhbGxBcGkoKTtcclxuLy8gZ2V0SGVhZGxpbmVzKCduZycpO1xyXG5nZXRDb3VudHJ5SW5mbygpO1xyXG5nZXRDYXRlZ29yeU5ld3MoKTtcclxuXHJcbmZ1bmN0aW9uIGNhbGxBcGkoKSB7XHJcblxyXG4gIHNob3dMb2FkZXIoKTtcclxuICAgIGZldGNoKGAke2FwaVVybH10b3AtaGVhZGxpbmVzP2FwaUtleT0ke2FwaUtleX0mY291bnRyeT11c2ApXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgc2hvd0xvYWRlcigpO1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGFwaU1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5hcnRpY2xlcy5mb3JFYWNoKChhcnRpY2xlLCBpbmRleCkgPT4ge1xyXG4gICAgICBoaWRlTG9hZGVyKCk7XHJcbiAgICAgIGNvbnN0IGNhcm91c2VsSGVhZGxpbmVPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3QtaGVhZGxpbmUnKTtcclxuICAgICAgY29uc3QgY2Fyb3VzZWxIZWFkbGluZVR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWNvbmQtaGVhZGxpbmUnKTtcclxuICAgICAgY29uc3QgY2Fyb3VzZWxIZWFkbGluZVRoaXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoaXJkLWhlYWRsaW5lJyk7XHJcblxyXG4gICAgICBjb25zdCBjYXJvdXNlbEltYWdlT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Nhcm91c2VsLWltYWdlLWZpcnN0Jyk7XHJcbiAgICAgIGNvbnN0IGNhcm91c2VsSW1hZ2VUd28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2Fyb3VzZWwtaW1hZ2Utc2Vjb25kJyk7XHJcbiAgICAgIGNvbnN0IGNhcm91c2VsSW1hZ2VUaGlyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYXJvdXNlbC1pbWFnZS10aGlyZCcpO1xyXG5cclxuICAgICAgY2Fyb3VzZWxIZWFkbGluZU9uZS50ZXh0Q29udGVudCA9IGFydGljbGUudGl0bGU7XHJcbiAgICAgIGNhcm91c2VsSW1hZ2VPbmUuc3JjID0gYXJ0aWNsZS51cmxUb0ltYWdlO1xyXG5cclxuICAgICAgLy8gaWYoYXJ0aWNsZS51cmxUb0ltYWdlKWNvbnNvbGUubG9nKGFydGljbGUsIGluZGV4KVxyXG5cclxuICAgICAgaWYgKGluZGV4ID09PSAxKXtcclxuICAgICAgICAgIGNhcm91c2VsSGVhZGxpbmVUd28udGV4dENvbnRlbnQgPSBhcnRpY2xlLnRpdGxlO1xyXG4gICAgICAgICAgY2Fyb3VzZWxJbWFnZVR3by5zcmMgPSBhcnRpY2xlLnVybFRvSW1hZ2U7XHJcbiAgICAgICAgICBjYXJvdXNlbEltYWdlVHdvLnNyYyA9IGFydGljbGUudXJsVG9JbWFnZTtcclxuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gMikge1xyXG4gICAgICAgICAgY2Fyb3VzZWxIZWFkbGluZVRoaXJkLnRleHRDb250ZW50ID0gYXJ0aWNsZS50aXRsZTtcclxuICAgICAgICAgIGNhcm91c2VsSW1hZ2VUaGlyZC5zcmMgPSBhcnRpY2xlLnVybFRvSW1hZ2U7XHJcbiAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcnRpY2xlLnRpdGxlLCBpbmRleCk7XHJcbiAgICB9KSlcclxuICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcclxuICAgIC5maW5hbGx5KCgpID0+IGhpZGVMb2FkZXIoKSk7XHJcbn1cclxuXHJcblxyXG4vLyBjb25zdCBDT1VOVFJZX0xPQ0FUSU9OX0FQSSA9ICc0ZWZiNmQwYzBhZDc0YzdhYWI1Yjc4YmFiZmI5YTI2ZCc7XHJcbi8vIGdldCBoZWFkbGluZXMgdGFpbG9yZWQgdG8gY291bnRyeVxyXG4vLyBmdW5jdGlvbiBnZXRDb3VudHJ5KCl7XHJcbiAgICAvLyBmZXRjaChgaHR0cHM6Ly9hcGkuaXBnZW9sb2NhdGlvbi5pby9pcGdlbz9hcGlLZXk9JHtDT1VOVFJZX0xPQ0FUSU9OX0FQSX1gKVxyXG4vLyAgICAgZmV0Y2goYGh0dHBzOi8vYXBpLmlwZ2VvbG9jYXRpb24uaW8vaXBnZW8/YXBpS2V5PTRlZmI2ZDBjMGFkNzRjN2FhYjViNzhiYWJmYjlhMjZkYClcclxuLy8gICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxyXG4vLyAgICAgLnRoZW4oKGRhdGEpID0+IGNvbnNvbGUubG9nKGRhdGEpKVxyXG4vLyB9XHJcbi8vIGdldENvdW50cnkoKTtcclxuXHJcbi8vIGdldCBjYXRlZ29yeSBoZWFkbGluZXNcclxuZnVuY3Rpb24gZ2V0SGVhZGxpbmVzKGNvdW50cnlUYWcsIGNvdW50cnlOYW1lKSB7XHJcbiAgICAvLyBmZXRjaChgJHt1cmx9dG9wLWhlYWRsaW5lcy9zb3VyY2VzP2FwaUtleT0ke2FwaUtleX0mY2F0ZWdvcnk9JHtjYXRlZ29yeX1gKVxyXG4gICAgZmV0Y2goYCR7YXBpVXJsfXRvcC1oZWFkbGluZXM/YXBpS2V5PSR7YXBpS2V5fSZjb3VudHJ5PSR7Y291bnRyeVRhZ31gKVxyXG4gICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYXBpTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuYXJ0aWNsZXMpOyAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudHJ5LWhlYWRsaW5lJyk7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5TmFtZS50ZXh0Q29udGVudCA9IGBVcGRhdGVzIGZyb20gJHtjb3VudHJ5TmFtZX0gYDtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50cnlEYXRlT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvdW50cnktZGF0ZS1vbmUnKTtcclxuICAgICAgICAgICAgY291bnRyeURhdGVPbmUudGV4dENvbnRlbnQgPSBkYXRhLmFydGljbGVzWzBdLmF1dGhvcjtcclxuICAgICAgICAgICAgLy8gZGlzcGxheURhdGUoY291bnRyeURhdGVPbmUsIGRhdGEuYXJ0aWNsZXNbMF0ucHVibGlzaGVkQXQpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb3VudHJ5RGF0ZVR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5LWRhdGUtdHdvJyk7XHJcbiAgICAgICAgICAgIC8vIGRpc3BsYXlEYXRlKGNvdW50cnlEYXRlVHdvLCBkYXRhLmFydGljbGVzWzFdLnB1Ymxpc2hlZEF0KVxyXG4gICAgICAgICAgICBjb3VudHJ5RGF0ZVR3by50ZXh0Q29udGVudCA9IGRhdGEuYXJ0aWNsZXNbMV0uYXV0aG9yO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY291bnRyeURhdGVUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb3VudHJ5LWRhdGUtdGhyZWUnKTtcclxuICAgICAgICAgICAgLy8gZGlzcGxheURhdGUoY291bnRyeURhdGVUaHJlZSwgZGF0YS5hcnRpY2xlc1syXS5wdWJsaXNoZWRBdClcclxuICAgICAgICAgICAgY291bnRyeURhdGVUaHJlZS50ZXh0Q29udGVudCA9IGRhdGEuYXJ0aWNsZXNbMl0uYXV0aG9yO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY291bnRyeUhlYWRsaW5lT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvdW50cnktaGVhZGxpbmUtb25lJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50cnlIZWFkbGluZVR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudHJ5LWhlYWRsaW5lLXR3bycpO1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudHJ5SGVhZGxpbmVUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudHJ5LWhlYWRsaW5lLXRocmVlJyk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjYXRlZ29yeURlc2NyaXB0aW9uT25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvdW50cnktZGVzY3JpcHRpb24tb25lJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5RGVzY3JpcHRpb25Ud28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY291bnRyeS1kZXNjcmlwdGlvbi10d28nKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNhdGVnb3J5RGVzY3JpcHRpb25UaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb3VudHJ5LWRlc2NyaXB0aW9uLXRocmVlJyk7ICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgY291bnRyeUhlYWRsaW5lT25lLnRleHRDb250ZW50ID0gZGF0YS5hcnRpY2xlc1swXS50aXRsZTtcclxuICAgICAgICAgICAgY2F0ZWdvcnlEZXNjcmlwdGlvbk9uZS50ZXh0Q29udGVudCA9IGRhdGEuYXJ0aWNsZXNbMF0uZGVzY3JpcHRpb247XHJcblxyXG4gICAgICAgICAgICBjb3VudHJ5SGVhZGxpbmVUd28udGV4dENvbnRlbnQgPSBkYXRhLmFydGljbGVzWzFdLnRpdGxlO1xyXG4gICAgICAgICAgICBjYXRlZ29yeURlc2NyaXB0aW9uVHdvLnRleHRDb250ZW50ID0gZGF0YS5hcnRpY2xlc1sxXS5kZXNjcmlwdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGNvdW50cnlIZWFkbGluZVRocmVlLnRleHRDb250ZW50ID0gZGF0YS5hcnRpY2xlc1syXS50aXRsZTtcclxuICAgICAgICAgICAgY2F0ZWdvcnlEZXNjcmlwdGlvblRocmVlLnRleHRDb250ZW50ID0gZGF0YS5hcnRpY2xlc1syXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgICAgICAgICAgLy8gZGF0YS5hcnRpY2xlcy5mb3JFYWNoKChhcnRpY2xlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgIClcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gICAgLy8gaHR0cHM6Ly9uZXdzYXBpLm9yZy92Mi90b3AtaGVhZGxpbmVzP2FwaUtleT0wOTkxNDhiZTIyODA0ZTg0OWEwYzZmZTAyMmI3Y2Y1ZSZjYXRlZ29yeT1lbnRlcnRhaW5tZW50JmNvdW50cnk9bmdcclxufVxyXG5cclxuLy8gY29udmVydCBkYXRlXHJcbmZ1bmN0aW9uIGRpc3BsYXlEYXRlKGRhdGVEaXNwbGF5LCBkYXRlRm9ybWF0KXtcclxuICAgIGNvbnN0IGRhdGVTdHJpbmcgPSBkYXRlRm9ybWF0O1xyXG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpO1xyXG5cclxuICAgIC8vIGRhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKVxyXG4gICAgLy8gY29uc3Qgb3B0aW9ucyA9IHsgdGltZVpvbmU6ICdVVEMnIH07XHJcbiAgICAvLyBjb25zdCBmb3JtYXR0ZWREYXRlID0gZGF0ZS50b0xvY2FsZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKTtcclxuXHJcblxyXG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgd2Vla2RheTogJ2xvbmcnLCBtb250aDogJ2xvbmcnLCBkYXk6ICdudW1lcmljJywgaG91cjogJ251bWVyaWMnLCBtaW51dGU6ICdudW1lcmljJyB9O1xyXG4gICAgY29uc3QgZm9ybWF0dGVkRGF0ZSA9IGRhdGUudG9Mb2NhbGVTdHJpbmcoJ2VuLVVTJywgb3B0aW9ucyk7XHJcblxyXG4gIGRhdGVEaXNwbGF5LnRleHRDb250ZW50ID0gZm9ybWF0dGVkRGF0ZTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFdvcmxkTmV3cygpIHtcclxuICAgIGZldGNoKGAke2FwaVVybH10b3AtaGVhZGxpbmVzP2NvdW50cnk9dXMmYXBpS2V5PSR7YXBpS2V5fWApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYXBpTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGRhdGE9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEuYXJ0aWNsZXMpXHJcblxyXG5cclxuICAgICAgICAgICAgY29uc3Qgd29ybGRJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3b3JsZC1uZXdzLWltYWdlJyk7XHJcblxyXG4gICAgICAgICAgICB3b3JsZEltYWdlLnNyYyA9IGRhdGEuYXJ0aWNsZXNbMF0udXJsVG9JbWFnZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGhlYWRsaW5lc1xyXG4gICAgICAgICAgICBjb25zdCB3b3JsZE5ld3NPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ybGQtbmV3cy1vbmUnKTtcclxuICAgICAgICAgICAgY29uc3Qgd29ybGROZXdzVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmxkLW5ld3MtdHdvJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkTmV3c1RocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmxkLW5ld3MtdGhyZWUnKTtcclxuXHJcbiAgICAgICAgICAgIHdvcmxkTmV3c09uZS50ZXh0Q29udGVudCA9IGRhdGEuYXJ0aWNsZXNbMF0udGl0bGU7XHJcbiAgICAgICAgICAgIHdvcmxkTmV3c1R3by50ZXh0Q29udGVudCA9IGRhdGEuYXJ0aWNsZXNbMV0udGl0bGU7XHJcbiAgICAgICAgICAgIHdvcmxkTmV3c1RocmVlLnRleHRDb250ZW50ID0gZGF0YS5hcnRpY2xlc1syXS50aXRsZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFydGljbGVzXHJcblxyXG4gICAgICAgICAgICBjb25zdCB3b3JsZEFydGljbGVPbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud29ybGQtYXJ0aWNsZS1vbmUnKTtcclxuICAgICAgICAgICAgY29uc3Qgd29ybGRBcnRpY2xlVHdvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmxkLWFydGljbGUtdHdvJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHdvcmxkQXJ0aWNsZVRocmVlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndvcmxkLWFydGljbGUtdGhyZWUnKTtcclxuXHJcbiAgICAgICAgICAgIHdvcmxkQXJ0aWNsZU9uZS50ZXh0Q29udGVudCA9IGRhdGEuYXJ0aWNsZXNbMF0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHdvcmxkQXJ0aWNsZVR3by50ZXh0Q29udGVudCA9IGRhdGEuYXJ0aWNsZXNbMV0uZGVzY3JpcHRpb247XHJcbiAgICAgICAgICAgIHdvcmxkQXJ0aWNsZVRocmVlLnRleHRDb250ZW50ID0gZGF0YS5hcnRpY2xlc1syXS5kZXNjcmlwdGlvbjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn1cclxuXHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCB0cnVuY2F0ZUVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50cnVuY2F0ZVwiKTtcclxuICAgIFxyXG4gICAgdHJ1bmNhdGVFbGVtZW50cy5mb3JFYWNoKGZ1bmN0aW9uKGVsZW1lbnQpIHtcclxuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKFwidHJ1bmNhdGVcIik7IC8vIFRvZ2dsZSB0aGUgdHJ1bmNhdGUgY2xhc3NcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbik7XHJcblxyXG5jb25zdCBhcGlNZXNzYWdlID0gJ1NvcnJ5LCBBUEkgbm8gbG9uZ2VyIGF2YWlsYWJsZSB3aWxsIGJlIGJhY2sgdXAgc29vbic7XHJcblxyXG4vLyBmZXRjaCB0ZWNobm9sb2d5IG5ld3MgZnJvbSB0ZWNoIGNydW5jaFxyXG5mdW5jdGlvbiBnZXRDYXRlZ29yeU5ld3MoKSB7XHJcbiAgICBmZXRjaChgJHthcGlVcmx9dG9wLWhlYWRsaW5lcz9hcGlLZXk9JHthcGlLZXl9JnNvdXJjZXM9dGVjaGNydW5jaGApXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYXBpTWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmFydGljbGVzKVxyXG5cclxuICAgICAgICAgICAgLy8gaW1hZ2VzXHJcbiAgICAgICAgICAgIGNvbnN0IHRlY2hJbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZWNoLW5ld3MtaW1hZ2Utb25lJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRlY2hJbWFnZVR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZWNoLW5ld3MtaW1hZ2UtdHdvJyk7XHJcblxyXG4gICAgICAgICAgICB0ZWNoSW1hZ2Uuc3JjID0gZGF0YS5hcnRpY2xlc1swXS51cmxUb0ltYWdlO1xyXG4gICAgICAgICAgICB0ZWNoSW1hZ2VUd28uc3JjID0gZGF0YS5hcnRpY2xlc1sxXS51cmxUb0ltYWdlO1xyXG5cclxuICAgICAgICAgICAgLy8gaGVhZGxpbmVzXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZWNoQXJ0aWNsZU9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10aXRsZS1vbmUnKTtcclxuICAgICAgICAgICAgY29uc3QgdGVjaEFydGljZVR3byA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10aXRsZS10d28nKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgdGVjaEFydGljbGVUaHJlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10aXRsZS10aHJlZScpO1xyXG5cclxuICAgICAgICAgICAgdGVjaEFydGljbGVPbmUudGV4dENvbnRlbnQgPSBkYXRhLmFydGljbGVzWzBdLnRpdGxlO1xyXG4gICAgICAgICAgICB0ZWNoQXJ0aWNlVHdvLnRleHRDb250ZW50ID0gZGF0YS5hcnRpY2xlc1sxXS50aXRsZTtcclxuICAgICAgICAgICAgLy8gdGVjaEFydGljbGVUaHJlZS50ZXh0Q29udGVudCA9IGRhdGEuYXJ0aWNsZXNbMl0udGl0bGU7XHJcblxyXG4gICAgICAgICAgICAvLyBkYXRlc1xyXG4gICAgICAgICAgICBjb25zdCBhcnRpY2xlT25lRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10aXRsZS1vbmUtZGF0ZScpO1xyXG4gICAgICAgICAgICBjb25zdCBhcnRpY2xlVHdvRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10aXRsZS10d28tZGF0ZScpO1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheURhdGUoYXJ0aWNsZU9uZURhdGUsIGRhdGEuYXJ0aWNsZXNbMF0ucHVibGlzaGVkQXQpXHJcbiAgICAgICAgICAgIGRpc3BsYXlEYXRlKGFydGljbGVUd29EYXRlLCBkYXRhLmFydGljbGVzWzFdLnB1Ymxpc2hlZEF0KVxyXG5cclxuICAgICAgICAgICAgLy8gYXJ0aWNsZU9uZURhdGUudGV4dENvbnRlbnQgPSA7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKVxyXG5cclxufVxyXG5cclxuXHJcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1pbnB1dCcpO1xyXG5jb25zdCBuYXZCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWJhcicpO1xyXG5jb25zdCBzZWFyY2hJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaC1pY29uJyk7XHJcblxyXG5zZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xyXG4gICAgbmF2QmFyLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xyXG4gICAgc2VhcmNoSW5wdXQuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XHJcbn0pO1xyXG5cclxuXHJcbi8vIGhpZGUgaG9tZVxyXG5jb25zdCBjYXJvdXNlbERpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xyXG5jb25zdCB0cmVuZGluZyA9ICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdHJlbmRpbmcnKTtcclxuXHJcbmNvbnN0IHNlYXJjaFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoLXNlY3Rpb24nKTtcclxuXHJcbnNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgIGNhcm91c2VsRGlzcGxheS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICB0cmVuZGluZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICAgICAgICBzZWFyY2hJbnB1dC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuXHJcbiAgICAgICAgc2VhcmNoU2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHNlYXJjaFRlcm0gPSBzZWFyY2hJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICAgICAgaWYgKHNlYXJjaFRlcm0gIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdTZWFyY2ggdGVybTonLCBzZWFyY2hUZXJtKTtcclxuICAgICAgICAgICAgc2VhcmNoTmV3cyhzZWFyY2hUZXJtKTtcclxuICAgICAgICAgICAgLy8gc2VhcmNoTmV3cyhzZWFyY2hUZXJtLCAxLCAxMCk7XHJcblxyXG4gICAgICAgICAgICBuYXZCYXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KTtcclxuXHJcbi8vIHNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcbi8vICAgICBjb25zdCBzZWFyY2hUZXJtID0gc2VhcmNoSW5wdXQudmFsdWUudHJpbSgpO1xyXG4vLyAgICAgaWYgKHNlYXJjaFRlcm0gIT09ICcnKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ1NlYXJjaCB0ZXJtOicsIHNlYXJjaFRlcm0pO1xyXG4vLyAgICAgICAgIC8vIHNlYXJjaE5ld3Moc2VhcmNoVGVybSk7XHJcbi8vICAgICB9XHJcbi8vIH0pO1xyXG5cclxuICAgIFxyXG5cclxuICAgIFxyXG5cclxuICAgIFxyXG5cclxuICAgIFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldENvdW50cnlJbmZvKCkge1xyXG4gIGZldGNoKCdodHRwczovL2lwYXBpLmNvL2pzb24vJylcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICBjb25zdCBjb3VudHJ5VGFnID0gZGF0YS5jb3VudHJ5O1xyXG4gICAgICBjb25zdCBjb3VudHJ5TmFtZSA9IGRhdGEuY291bnRyeV9uYW1lO1xyXG4gICAgICBnZXRIZWFkbGluZXMoY291bnRyeVRhZywgY291bnRyeU5hbWUpO1xyXG4gICAgICBjb25zb2xlLmxvZyhjb3VudHJ5VGFnLCBjb3VudHJ5TmFtZSk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgfSk7XHJcbn1cclxuIiwiY29uc3QgYXBpS2V5ID0gcHJvY2Vzcy5lbnYuQVBJX0tFWTtcclxuY29uc3QgYXBpVXJsID0gcHJvY2Vzcy5lbnYuQVBJX1VSTDtcclxuXHJcbmltcG9ydCB7IHNob3dMb2FkZXIsIGhpZGVMb2FkZXIgfSBmcm9tICcuL2xvYWRlci5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzZWFyY2hOZXdzKHRvcGljKSB7XHJcblxyXG4gIC8vIGRpZmZlcmVudCBuZXdzIHNvdXJjZXNcclxuICBjb25zdCBzb3VyY2VzRmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvdXJjZS1maWx0ZXInKTsgIFxyXG4gIHNvdXJjZXNGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJyAsZnVuY3Rpb24oKXtcclxuICAgIGNvbnNvbGUubG9nKHNvdXJjZXNGaWx0ZXIudmFsdWUpO1xyXG4gICAgcGVyZm9ybVNlYXJjaCh0b3BpYywgc291cmNlc0ZpbHRlci52YWx1ZSk7XHJcbiAgfSlcclxuXHJcblxyXG4gIGNvbnN0IGNhdGVnb3J5RmlsdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlY3Rpb24tZmlsdGVyJyk7XHJcbiAgY2F0ZWdvcnlGaWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJyAsZnVuY3Rpb24oKXtcclxuICAgIGNvbnNvbGUubG9nKGNhdGVnb3J5RmlsdGVyLnZhbHVlKTtcclxuICAgIHBlcmZvcm1TZWFyY2godG9waWMsIG51bGwsIGNhdGVnb3J5RmlsdGVyLnZhbHVlKTtcclxuICB9KVxyXG5cclxuICBwZXJmb3JtU2VhcmNoKHRvcGljKTsgIFxyXG59XHJcblxyXG5mdW5jdGlvbiBwZXJmb3JtU2VhcmNoKHRvcGljLCBzb3VyY2UsIGNhdGVnb3J5KXtcclxuICBjb25zdCBlcnJvckNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlcnJvckNvbnRhaW5lcicpO1xyXG4gIGVycm9yQ29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XHJcblxyXG5cclxuICBsZXQgdXJsID0gYCR7YXBpVXJsfXRvcC1oZWFkbGluZXM/cT0ke3RvcGljfSZhcGlLZXk9JHthcGlLZXl9YDtcclxuXHJcbiAgaWYgKHNvdXJjZSkge1xyXG4gICAgdXJsICs9IGAmc291cmNlcz0ke3NvdXJjZX1gO1xyXG4gIH1cclxuXHJcbiAgaWYgKGNhdGVnb3J5KSB7XHJcbiAgICB1cmwgKz0gYCZjYXRlZ29yeT0ke2NhdGVnb3J5fWA7XHJcbiAgfVxyXG5cclxuICAvLyBpZihzb3J0QnkpIHtcclxuICAvLyAgIHVybCArPSAnJnNvcnRCeT1wdWJsaXNoZWRBdCc7XHJcbiAgLy8gfVxyXG5cclxuICByZXR1cm4gZmV0Y2godXJsKVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgc2hvd0xvYWRlcigpO1xyXG4gICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmV0d29yayByZXNwb25zZSB3YXMgbm90IG9rJyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgIGNvbnN0IGFydGljbGVzID0gZGF0YS5hcnRpY2xlcztcclxuICAgICAgXHJcbiAgICAgIC8vIGlmIChhcnRpY2xlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgLy8gICBjb25zb2xlLmxvZygnTm8gYXJ0aWNsZXMgZm91bmQnKTtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgaWYgKCFhcnRpY2xlcyB8fCBhcnRpY2xlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnTm8gYXJ0aWNsZXMgZm91bmQnKTtcclxuICAgICAgICBzaG93Tm9SZXN1bHRzTWVzc2FnZSh0b3BpYyk7XHJcbiAgICAgICAgcmV0dXJuIFtdOyAvLyBSZXR1cm4gYW4gZW1wdHkgYXJyYXkgdG8gYXZvaWQgZnVydGhlciBlcnJvcnNcclxuICAgICAgfVxyXG4gICAgICBzaG93TG9hZGVyKCk7XHJcbiAgICAgIHJldHVybiBhcnRpY2xlcztcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgY29uc3QgZXJyb3JDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXJyb3JDb250YWluZXInKTtcclxuICAgICAgZXJyb3JDb250YWluZXIudGV4dENvbnRlbnQgPSAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgZmV0Y2hpbmcgbmV3cyBkYXRhLic7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGVycilcclxuICAgIH0pXHJcbiAgICAudGhlbihhcnRpY2xlcyA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGFydGljbGVzKTtcclxuICAgICAgY29uc3QgY29udGFpbmVyTW92ZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FydGljbGUtcmVzdWx0cycpO1xyXG5cclxuICAgICAgY29uc3Qgc2VhcmNoVG9waWMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXRvcGljJyk7XHJcbiAgICAgIHNlYXJjaFRvcGljLnRleHRDb250ZW50ID0gYCBTZWFyY2ggUmVzdWx0cyBmb3IgXCIke3RvcGljfVwiYDtcclxuXHJcbiAgICAgIC8vIGlmKGFydGljbGVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIGlmICghYXJ0aWNsZXMgfHwgYXJ0aWNsZXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICBjb250YWluZXJNb3ZlbWVudHMuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygnTm8gYXJ0aWNsZXMgZm91bmQnKTtcclxuICAgICAgICAgIC8vIHNob3dOb1Jlc3VsdHNNZXNzYWdlKHRvcGljKTtcclxuICAgICAgICAgIHJldHVybiBbXTsgLy8gUmV0dXJuIGFuIGVtcHR5IGFycmF5IHRvIGF2b2lkIGZ1cnRoZXIgZXJyb3JzXHJcbiAgICAgICAgICBcclxuICAgICAgICB9IGVsc2UgaWYgKGFydGljbGVzLmxlbmd0aCA9PT0gMSl7XHJcbiAgICAgICAgc2hvd0xvYWRlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnRhaW5lck1vdmVtZW50cy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBcclxuICAgICAgICBjb250YWluZXJNb3ZlbWVudHMuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1maW5kaW5nc1wiIHN0eWxlPVwiIHBhZGRpbmc6IDJyZW07XCI+XHJcbiAgICAgICAgICA8aDIgc3R5bGU9XCJmb250LXNpemU6IDNyZW07XCI+Tm8gc2VhcmNoIHJlc3VsdHMgbWF0Y2ggdGhlIHRlcm0g4oCcJHt0b3BpY31cIjwvaDI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAycmVtO1wiPlxyXG4gICAgICAgICAgICA8cD5Tb21lIHN1Z2dlc3Rpb25zOjwvcD5cclxuICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICA8bGk+Q2hlY2sgc3BlbGxpbmcgb2YgYWxsIHdvcmRzPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5UcnkgZGlmZmVyZW50IHdvcmRzIHRoYXQgbWVhbiB0aGUgc2FtZSB0aGluZzwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+RW50ZXIgZmV3ZXIgd29yZHM8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj4gICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGApO1xyXG4gICAgICAgIGhpZGVMb2FkZXIoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaG93TG9hZGVyKCk7XHJcbiAgICAgICAgY29udGFpbmVyTW92ZW1lbnRzLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgIGFydGljbGVzLmZvckVhY2goYXJ0aWNsZSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBodG1sID0gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWZpbmRpbmdzXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O1wiPlxyXG4gICAgICAgICAgICAgIDxoMz48YSBocmVmPVwiJHthcnRpY2xlLnVybH1cIiB0YXJnZXQ9XCJfYmxhbmtcIj4ke2FydGljbGUudGl0bGV9PC9hPjwvaDM+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgJHthcnRpY2xlLnVybFRvSW1hZ2UgPyBgPGltZyBzcmM9XCIke2FydGljbGUudXJsVG9JbWFnZX1cIiBhbHQ9XCJcIj5gIDogJyd9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgYDtcclxuICAgICAgICAgIGNvbnRhaW5lck1vdmVtZW50cy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGh0bWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGhpZGVMb2FkZXIoKTtcclxuXHJcbiAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dOb1Jlc3VsdHNNZXNzYWdlKHRvcGljKSB7XHJcbiAgY29uc3QgY29udGFpbmVyTW92ZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FydGljbGUtcmVzdWx0cycpO1xyXG5cclxuICBjb25zdCBzZWFyY2hUb3BpYyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtdG9waWMnKTtcclxuICBzZWFyY2hUb3BpYy50ZXh0Q29udGVudCA9IGAgU2VhcmNoIFJlc3VsdHMgZm9yIFwiJHt0b3BpY31cImA7XHJcbiAgY29uc29sZS5sb2coJ3Nob3dub3Jlc3VsdHMnKVxyXG5cclxuICBjb250YWluZXJNb3ZlbWVudHMuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIGNvbnRhaW5lck1vdmVtZW50cy5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcclxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtZmluZGluZ3NcIiBzdHlsZT1cIiBwYWRkaW5nOiAycmVtO1wiPlxyXG4gICAgICA8aDIgc3R5bGU9XCJmb250LXNpemU6IDNyZW07XCI+Tm8gc2VhcmNoIHJlc3VsdHMgbWF0Y2ggdGhlIHRlcm0gXCIke3RvcGljfVwiPC9oMj5cclxuICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMnJlbTtcIj5cclxuICAgICAgICA8cD5Tb21lIHN1Z2dlc3Rpb25zOjwvcD5cclxuICAgICAgICA8dWw+XHJcbiAgICAgICAgICA8bGk+Q2hlY2sgdGhlIHNwZWxsaW5nIG9mIGFsbCB3b3JkczwvbGk+XHJcbiAgICAgICAgICA8bGk+VHJ5IGRpZmZlcmVudCB3b3JkcyB0aGF0IG1lYW4gdGhlIHNhbWUgdGhpbmc8L2xpPlxyXG4gICAgICAgICAgPGxpPkVudGVyIGZld2VyIHdvcmRzPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj4gICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgYCk7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9