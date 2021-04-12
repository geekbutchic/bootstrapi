const xhr = new XMLHttpRequest();
const button = document.querySelector("#button");
const img = document.querySelector("img");

xhr.addEventListener("loadend", () => {
  const data = JSON.parse(xhr.responseText);
  img.src = data.message;
});

button.addEventListener("click", () => {
  xhr.open("GET", "https://dog.ceo/api/breeds/image/random");
  xhr.setRequestHeader("Accept", "application/json");
  xhr.send();
});
