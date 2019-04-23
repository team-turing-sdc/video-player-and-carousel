\timing ON
CREATE TABLE IF NOT EXISTS movieData(
  id SERIAL PRIMARY KEY,
  name text,
  associatedVideoTitle1 text,
  associatedVideoLink1 text,
  associatedVideoTitle2 text,
  associatedVideoLink2 text,
  associatedVideoTitle3 text,
  associatedVideoLink3 text,
  associatedVideoTitle4 text,
  associatedVideoLink4 text,
  associatedVideoTitle5 text,
  associatedVideoLink5 text
);

COPY movieData FROM '/Users/derrickbrandon/Desktop/hrr37/sdc/video-player-and-carousel/movieData.csv' WITH (FORMAT CSV, Header);
\timing OFF