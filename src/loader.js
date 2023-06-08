// export default function loader() {
    
//     // Usage example
//     showLoader();

//     // Simulate an asynchronous operation
//     setTimeout(() => {
//     hideLoader();
//     }, 3000);

// }

const loaderContainer = document.querySelector('.loader-container');

export function showLoader() {
  loaderContainer.style.display = 'flex';
}

export function hideLoader() {
  loaderContainer.style.display = 'none';
}
