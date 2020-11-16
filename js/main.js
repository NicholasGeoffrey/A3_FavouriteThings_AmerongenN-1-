import { fetchData } from "./modules/TheDataMiner.js";

(() => {

    console.log('loaded');




function retrieveProjectInfo(event) {
    if (!event.target.id) {return}

    fetchData(`./includes/index.php?id=${event.target.id}`).then(data => console.log(data)).catch(err => console.log(err));
}

function displayCollection(showcase) {
    let collectionGallery = document.querySelector('collection-gallery'),
        collectionTemplate = document.querySelector('#collection-template').content;

        for (let collection in showcase) {
            let currentCollection = collectionTemplate.cloneNode(true),
            currentCollectionText = currentCollection.querySelector('.collection').children;
        
            currentCollectionText[0].src = `images/${showcase[collection].poster}`;
            currentCollectionText[0].id = showcase[collection].id;
            currentCollectionText[1].textContent = showcase[collection].title;
            currentCollectionText[2].textContent = showcase[collection].description;
            
            currentCollection.addEventListener
            collectionGallery.appendChild(currentCollection);
        
        }
        collectionGallery.addEventListener("click", retrieveProjectInfo);
}
   
fetchData("./includes/index.php").then(data => displayCollection(data)).catch(err => console.log(err)); 

})();