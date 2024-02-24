function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("search");
  let cityElement = document.querySelector("cities");
  cityElement.innerHtml = searchInput.value;
}

let searchElement = document.querySelector("city-form");
searchElement.addEventListener("submit", handleSearchSubmit);
