// ? Fetching category button
function loadCategories() {
  //fetch the data
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //convert promise to json
    .then((response) => response.json())
    //send data to display
    .then(
      (data) => showCategories(data.categories)
      // console.log(data.categories)
    );
}

function showCategories(categories) {
  const categoryContainer = document.getElementById("category-container");

  for (const cat of categories) {
    console.log(cat.category);
    const categoryDiv = document.createElement("div");

    categoryDiv.innerHTML = `
    <button id="btn-${cat.category_id}" onclick="loadVideosByCategory(${cat.category_id})" class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
    `;
    categoryContainer.append(categoryDiv);
  }
  //   console.log(categoryContainer);

  //   console.log(categories);
}

loadCategories();

// ? Fetching videos

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then(
      (vid) => showVideos(vid.videos)

      // console.log(vid.videos)
    );
}

//? Load videos by category
function loadVideosByCategory(id) {
  let urls = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  console.log(urls);
  fetch(urls)
    .then((response) => response.json())
    .then(
      (data) => {
        let clickedBtn = document.getElementById(`btn-${id}`);
        clickedBtn.classList.add("active");
        console.log(clickedBtn);

        showVideos(data.category);
      }

      // console.log(data.category)
    );
}

const showVideos = (video) => {
  const videoContainer = document.getElementById("video-container");
  console.log(video.length);
  // Showing default pictures in drawing button
  if (video.length == 0) {
    videoContainer.innerHTML = `
    <div
        class="flex flex-col gap-8 justify-center items-center col-span-full mt-24"
      >
        <img class="w-40 h-40" src="./assets/Icon.png" alt="" srcset="" />
        <h1 class="text-2xl font-bold">
          Oops!! Sorry, There is no content here
        </h1>
      </div>
    `;
    return;
  }

  videoContainer.innerHTML = "";
  video.forEach((vids) => {
    console.log(vids);
    const videoCard = document.createElement("div");
    videoCard.innerHTML = `
    <div class="card bg-base-100 shadow-sm">
    <figure class="relative object-cover">
      <img class="w-full h-52 object-cover"
        src="${vids.thumbnail}"
        alt="Shoes"
      />
      <span
        class="bg-black absolute text-white p-1 rounded-sm bottom-[5px] right-[5px]"
        >3hrs 56 min ago</span
      >
    </figure>
    <div class="flex gap-6 items-center mt-3">
      <div class="avatar">
        <div
          class="ring-primary ring-offset-base-100 w-8 h-8 rounded-full ring ring-offset-2"
        >
          <img
            class=""
            src="${vids.authors[0].profile_picture}"
          />
        </div>
      </div>

      <h2 class="card-title">
        ${vids.title}
      </h2>
    </div>
    <div class="mt-4 space-y-4">
      <p class="flex gap-4 items-center">
        ${vids.authors[0].profile_name}
        <span
          ><img
            class="w-4 h-4"
            src="https://img.icons8.com/?size=48&id=SRJUuaAShjVD&format=png"
            alt=""
            srcset=""
        /></span>
      </p>
      <p>${vids.others.views} Views</p>
    </div>
  </div>
    `;
    videoContainer.append(videoCard);
  });
};
