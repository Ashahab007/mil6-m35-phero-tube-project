// ? Fetching category button
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

// ? Fetching videos

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos#")
    .then((response) => response.json())
    .then((vid) => showVideos(vid.videos));
}

loadVideos();

const showVideos = (video) => {
  const videoContainer = document.getElementById("video-container");
  video.forEach((vids) => {
    // console.log(vids);
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    <div class="card bg-base-100 shadow-sm">
        <figure>
          <img
            src="${vids.thumbnail}"
          />
        </figure>
        <div class="card-body">
          <h2 class="card-title">${vids.title}</h2>
          <p>
            ${vids.description}
          </p>
          <div class="card-actions justify-end">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    `;
    videoContainer.append(videoCard);
  });
};
