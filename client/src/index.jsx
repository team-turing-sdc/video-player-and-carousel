import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

const MOVIE_ID = 8; //hardcode for testing; should be modifiable by some external means later on

ReactDOM.render(<App movieID={MOVIE_ID}/>, document.getElementById('app'));