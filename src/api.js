export async function loadMovies() {
  const axios = require("axios").default;
  try {
    const response = await axios.get(
      "http://www.omdbapi.com/?apikey=b502738f&s=matrix&year=2012"
    );
    const arrayMovies = response.data.Search;
    const data = arrayMovies
      .filter(function(item) {
        return item.Year > "2002";
      })
      .map(function({ Title, Year }) {
        return { Title, Year };
      });
    return data;
  } catch (error) {
    return error;
  }
}
