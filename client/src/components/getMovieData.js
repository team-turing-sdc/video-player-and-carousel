const getMovieData = async (id  = 1) => {
  const response = await fetch(`http://localhost:3333/associatedVideos?movieID=${id}`, {
    method: "GET",
    headers: {
      "Content-Type":"application/json",
      "Cache-Control":"no-cache"
    }
  })
  const movieData = await response.json();
  console.log(movieData[0]);
  return movieData[0];
}

export default getMovieData;