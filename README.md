# video-player-and-carousel

##Setup
- MongoDB should be installed and running on your machine

### Backend Requirements


GET - request url /associatedVideos - read movie name and associated videos - no request body - no side effect - response body: [{id:1, name:'2001: A Space Odyssey',associatedVideos:[{title: '...',url: '...'},{title: '...',url: '...'},{title: '...',url: '...'}]}]

POST - request url /associatedVideos - add movie name and associated videos to database - request body: {name: 'Shrek', associatedVideos:[{title: '...', url: '...'}, ...]} - side effect: add movie and associated videos to database - response body {name: Shrek, associatedVideos:[{title: '...', url: '...'}, ...]}

POST - request url /associatedVideos - edit specified movie name and associated videos in database - request body: {name: 'Shrek', associatedVideos:[{title: '...', url: '...'}, ...]} - update specified movie or associated videos in db - response body {name: 'Shrek 2', associatedVideos:[{title: '...', url: '...'}, ...]}

DELETE - request url /associatedVideos - remove specified movie name and associated videos from database - request body: {name: 'Shrek 2', associatedVideos:[{title: '...', url: '...'}, ...]} - side effect: delete specified movie name and associated videos from database - response body: {name: 'Shrek 2', associatedVideos:[{title: '...', url: '...'}, ...]}
