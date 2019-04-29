
function generateRandomGetId(userContext, events, done) {
  let getId = Math.random() * (10000000 - 9999000) + 9999000;
  userContext.vars.getId = getId;
  return done();
}

let postId = 10000000;

function generateRandomPostId(userContext, events, done) {
  postId++;
  userContext.vars.postId = postId;
  return done();
}


module.exports = {
  generateRandomGetId: generateRandomGetId,
  generateRandomPostId: generateRandomPostId
}
