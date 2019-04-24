DROP KEYSPACE IF EXISTS movieData;

CREATE KEYSPACE movieData
  WITH REPLICATION = {
   'class' : 'SimpleStrategy',
   'replication_factor' : 1
  };

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
