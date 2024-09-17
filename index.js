const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");
let newRandomNumberForImages = Math.floor(Math.random() * 10) + 1;
btnEl.addEventListener("click", () => {
  // just to check we do the clg stuff
  //   console.log("clicked");
  //   console.log(Math.floor(Math.random() * 10) + 1);
  // now main purpose of this eventlistener is to genarate new images
  addNewImages();
});

function addNewImages() {
  for (let index = 0; index < 10; index++) {
    const newImgEl = document.createElement("img");
    newImgEl.src = `https://picsum.photos/300?random=${Math.floor(
      Math.random() * 2000
    )}`;

    imageContainerEl.appendChild(newImgEl);
  }
}
