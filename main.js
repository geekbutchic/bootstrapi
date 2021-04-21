const URL = "https://dog.ceo/api/breeds/image/random";
const button = document.querySelector("#button");
const img = document.querySelector("img");

button.addEventListener("click", () => {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      img.src = data.message;
    });
});
