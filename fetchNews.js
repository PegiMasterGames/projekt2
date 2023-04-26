async function fetchNews(request) {
  const API_KEY = '53cb5e21d56e47928c007bde089e7f8c'; // API-KEY 
  const url = `https://newsapi.org/v2/top-headlines?page=${request.page}&pageSize=${request.pageSize}&apiKey=${API_KEY}`;

  const response = await fetch(url);
  const data = await response.json();

  return data.articles;
}

module.exports = {
  fetchNews
};