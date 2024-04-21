let searchForm = document.getElementById('search-form');
let searchArea = document.getElementById('search-area');
let searchSelect = document.getElementById('selected-option');
let showMore = document.getElementById('show-more');

let keyword = '';
let page = 1;
const accesskey = "SwGv_i9kJ8f5-SQ-IorO8CSDLFdKJ7LilDQvqabVbNM";

async function searchImages() {
  keyword = searchArea.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;

  if (page == 1) {
    searchSelect.innerHTML = "";
  }
  results.map((result) => {
    const image = document.createElement('img');
    image.src = result.urls.small;
    const imageLink = document.createElement('a');
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchSelect.appendChild(imageLink);
  })
  showMore.style.display = "block";
}

searchForm.addEventListener('submit', (e) => {
  e.preventDefault();
  searchImages();
  page = 1;
})

showMore.addEventListener('click', () => {
  page++;
  searchImages();
})