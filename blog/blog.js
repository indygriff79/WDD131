const articles = [
  {
    id: 1,
    title: 'Septimus Heap Book One: Magyk',
    date: '2022-07-05',
    description:
      'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
    imgAlt: 'Book cover for Septimus Heap 1',
    ages: '10-14',
    genre: 'Fantasy',
    stars: '****'
  },
  {
    id: 2,
    title: 'Magnus Chase Book One: Sword of Summer',
    date: '2021-12-12',
    description:
      'Rick Riordan tries his hand with Norse Mythology, and the end result is good.',
    imgSrc:
      'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
    imgAlt: 'Book cover for Magnus Chase 1',
    ages: '12-16',
    genre: 'Fantasy',
    stars: '⭐⭐⭐⭐'
  }
];

const articlesSection = document.getElementById('articles');

articles.forEach(article => {
  const articleEl = document.createElement('article');

  articleEl.innerHTML = `
    <div class="meta">
      <time datetime="${article.date}">${new Date(article.date).toDateString()}</time>
      <div><strong>Ages:</strong> ${article.ages}</div>
      <div><strong>Genre:</strong> ${article.genre}</div>
      <div><strong>Rating:</strong> ${article.stars}</div>
    </div>
    <div class="content">
      <h2>${article.title}</h2>
      <img src="${article.imgSrc}" alt="${article.imgAlt}" />
      <p>${article.description}</p>
    </div>
  `;

  articlesSection.appendChild(articleEl);
});



