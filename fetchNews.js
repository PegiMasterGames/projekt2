async function fetchNews(page, pageSize) {
  const API_KEY = YOUR_API_KEY;
  const url = `https://newsapi.org/v2/top-headlines?page=${page}&pageSize=${pageSize}&apiKey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.articles;
}

module.exports = {
  fetchNews
};
