const getMovieData = async (id  = 10000000) => {
  try {
    const response = await fetch(`18.217.213.55:3333/associatedVideos/${id}`, {
      method: "GET",
      headers: {
        "Content-Type":"application/json",
        "Cache-Control":"no-cache"
      }
    })

    const movieData = await response.json();
    console.log(`movie data: `, movieData);
    const resultObject = movieData[0][0];
    const result = {
      id: resultObject.id,
      name: resultObject.name,
      associatedVideos: [
        {
          title: resultObject.associatedvideotitle1,
          url: resultObject.associatedvideolink1
        },
        {
          title: resultObject.associatedvideotitle2,
          url: resultObject.associatedvideolink2
        },
        {
          title: resultObject.associatedvideotitle3,
          url: resultObject.associatedvideolink3
        },
        {
          title: resultObject.associatedvideotitle4,
          url: resultObject.associatedvideolink4
        },
        {
          title: resultObject.associatedvideotitle5,
          url: resultObject.associatedvideolink5
        }
      ]
    }
    return result;
  } catch (err) {
    console.log(`WARNING ERROR LOOK OUT: `, err);
  }

}

export default getMovieData;