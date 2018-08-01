export default function formatData(data, type) {
  let arr = data.entries
    .filter(movie => {
      if (movie.programType === type && movie.releaseYear >= 2010) return movie;
    })
    .sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    })
    .slice(0, 21);
  return arr;
}
