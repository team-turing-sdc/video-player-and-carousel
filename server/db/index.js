const Sequelize = require('sequelize');
const Model = Sequelize.Model;
const sequelize = new Sequelize('movieData', 'derrickbrandon', '',{
  host: 'localhost',
  dialect:'postgres'
});

// verify that there's a connection to the postgres database
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
});

class Movie extends Model {};
Movie.init({
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  associatedVideoTitle1: {
    type: Sequelize.STRING
  },
  associatedVideoLink1: {
    type: Sequelize.STRING
  },
  associatedVideoTitle2: {
    type: Sequelize.STRING
  },
  associatedVideoLink2: {
    type: Sequelize.STRING
  },
  associatedVideoTitle3: {
    type: Sequelize.STRING
  },
  associatedVideoLink3: {
    type: Sequelize.STRING
  },
  associatedVideoTitle4: {
    type: Sequelize.STRING
  },
  associatedVideoLink4: {
    type: Sequelize.STRING
  },
  associatedVideoTitle5: {
    type: Sequelize.STRING
  },
  associatedVideoLink5: {
    type: Sequelize.STRING
  }
}, {
  sequelize,
  modelName: 'user'
});

let getMovieData = (id, callback) => {
  let query = `SELECT * FROM moviedata WHERE id=${id}`;
  sequelize.query(query).then(movie => {
    callback(null, movie);
  }).catch(err => err ? callback(err) : callback(null));
};

let deleteMovie = (id, callback) => {
  let query = `DELETE FROM moviedata WHERE id=${id}`;

  sequelize.query(query).then(movie => {
    callback(null, movie);
  }).catch(err => err ? callback(err) : callback(null));
}

module.exports = {
  getMovieData: getMovieData,
  deleteMovie: deleteMovie
}

