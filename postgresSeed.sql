SELECT GETDATE();
CREATE TABLE IF NOT EXISTS movieData(
  id SERIAL PRIMARY KEY,
  name VARCHAR,
  associatedVideoTitle1 VARCHAR,
  associatedVideoLink1 VARCHAR,
  associatedVideoTitle2 VARCHAR,
  associatedVideoLink2 VARCHAR,
  associatedVideoTitle3 VARCHAR,
  associatedVideoLink3 VARCHAR,
  associatedVideoTitle4 VARCHAR,
  associatedVideoLink4 VARCHAR,
  associatedVideoTitle5 VARCHAR,
  associatedVideoLink5 VARCHAR
);

COPY movieData FROM '/Users/derrickbrandon/Desktop/hrr37/sdc/video-player-and-carousel/movieData.csv' WITH (FORMAT CSV, HEADER);
SELECT GETDATE();