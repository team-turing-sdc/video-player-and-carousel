DROP KEYSPACE IF EXISTS movieData;

CREATE KEYSPACE movieData
  WITH REPLICATION = {
   'class' : 'SimpleStrategy',
   'replication_factor' : 1
};

USE movieData;

CREATE TABLE movieData.movieData (
id int PRIMARY KEY,
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

COPY movieData.movieData (id, name, associatedVideoTitle1, associatedVideoLink1, associatedVideoTitle2, associatedVideoLink2, associatedVideoTitle3, associatedVideoLink3, associatedVideoTitle4, associatedVideoLink4, associatedVideoTitle5, associatedVideoLink5) FROM '/Users/derrickbrandon/Desktop/hrr37/sdc/video-player-and-carousel/movieData.csv' WITH HEADER = TRUE AND DELIMITER = ',' ;