const form = document.querySelector("#searchForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const searchTerm = form.elements.query.value;
  const config = { params: { q: searchTerm } };
  const res = await axios.get(`https://api.tvmaze.com/search/shows/`, config);
  displayImages(res.data);
  form.elements.query.value = "";
});

const displayImages = (shows) => {
  for (let result of shows) {
    if (result.show.image) {
      const newImg = document.createElement("IMG");
      newImg.src = result.show.image.medium;
      newImg.classList.add("img-fluid");
      document.body.append(newImg);
    }
  }
};
