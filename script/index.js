function loadCategories() {
  //fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //convert promise to json
    .then((response) => response.json())
    //send data to display
    .then((data) => showCategories(data.categories));
}
loadCategories();

function showCategories(categories) {
  const categoryContainer = document.getElementById("category-container");

  for (const cat of categories) {
    // console.log(cat.category);
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
    <button class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
    `;
    categoryContainer.append(categoryDiv);
  }
  //   console.log(categoryContainer);

  //   console.log(categories);
}
