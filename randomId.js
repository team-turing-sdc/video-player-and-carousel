let postId = 10000001;

function generateRandomGetId(userContext, events, done) {
  let getId = Math.random() * (10000000 - 9999000) + 9999000;
  userContext.vars.getId = getId;
  return done();
}

function generateRandomPostId(userContext, events, done) {
  userContext.vars.postId = postId;
  postId++;
  return done();
}


module.exports = {
  generateRandomGetId,
  generateRandomPostId
}
