import categoryNews from "./category";

export default function switchTabs(){
    // Get all the navigation links
    const navLinks = document.querySelectorAll('.nav-link');

    // Attach click event listeners to each navigation link
    navLinks.forEach(function(link) {

        link.addEventListener('click', function(event) {
            
            // Prevent the default link behavior
            event.preventDefault();

            // Retrieve the value from the clicked element
            const clickedValue = link.getAttribute('data-value');

            // Use the value as needed
            // console.log(clickedValue);
            categoryNews(clickedValue);
        });
    });

}