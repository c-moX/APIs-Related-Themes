//--------------------------------------
// // For the search button:
// const searchBtn = document.getElementById("search-btn")
//     .addEventListener('click', getImages);

// // For the displayed images:
// function getImages() {
//     let searchInput = document.getElementById("input-field").value;
//     // Loop and any coded here
// }
fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
    // .then(response => {
    //     console.log(response.meals);
    // })
    .then(response => response.json())
    .then(data => displayImages(data.meals))

    .catch(err => {
        console.error(err);
    });

const displayImages = images => {
    const imagesContainer = document.getElementById("images-container");
    // imagesContainer.innerHTML = "";
    images.forEach(image => {
        console.log('Images:', image.strMealThumb, 'ID:', image.idMeal, 'Name:', image.strMeal); // xxx::xxx
        const imageDiv = document.createElement('div');
        imageDiv.className = 'col-3';
        imageDiv.innerHTML = `
                    <div class="p-1 my-3 border bg-light meal-box">
                        <div class="photo-frame">
                            <img src="${image.strMealThumb}" class="img-fluid" alt="Meal-img">
                        </div>
                        <div class="">
                            <p class="">Meal Name: ${image.strMeal}</p>
                            <p class="">Meal ID: ${image.idMeal} <a href="#" class="get-meal">Get Meal</a></p>
                        </div>
                    </div>
                `;
        imagesContainer.appendChild(imageDiv);
    });
}
