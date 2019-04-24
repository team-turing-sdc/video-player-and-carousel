DROP KEYSPACE IF EXISTS movieData;

CREATE KEYSPACE movieData
  WITH REPLICATION = {
   'class' : 'SimpleStrategy',
   'replication_factor' : 1
  } ;

