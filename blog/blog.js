const articles = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
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
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	}
];

const blogContainer = document.getElementById("blog-articles");
articles.forEach(article => {
	const articleElem = document.createElement("div");

	const meta = document.createElement("div");
	meta.className = "article-meta";
	  meta.innerHTML = `
    <div><strong>Date:</strong> ${article.date}</div>
    <div><strong>Ages:</strong> ${article.ages}</div>
    <div><strong>Genre:</strong> ${article.genre}</div>
  `;

  const title = document.createElement("div");
  title.className = "book-title";
  title.textContent = article.title;

  const img = document.createElement("img");
  img.src = article.imgSrc;
  img.alt = article.imgAlt;
  img.className = "book-cover";

  const description = document.createElement("p");
  description.textContent = article.description;

  articleElem.appendChild(meta);
  articleElem.appendChild(title);
  articleElem.appendChild(img);
  articleElem.appendChild(description);

  blogContainer.appendChild(articleElem);
});
