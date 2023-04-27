const newsContainer = document.getElementById('news-container');

// Funkcja do pobierania newsów
async function fetchNews() {
  const response = await fetch('/news?page=1&pageSize=10');
  const articles = await response.json();

  articles.forEach(article => {
    const newsCard = document.createElement('div');
    newsCard.classList.add('news-card');

    const title = document.createElement('h2');
    title.classList.add('news-title');
    title.textContent = article.title;
    newsCard.appendChild(title);

    const description = document.createElement('p');
    description.classList.add('news-description');
    description.textContent = article.description;
    newsCard.appendChild(description);

    const author = document.createElement('p');
    author.classList.add('news-author');
    author.textContent = `By ${article.author}`;
    newsCard.appendChild(author);

    newsContainer.appendChild(newsCard);
  });
}

fetchNews();