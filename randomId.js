function generateRandomGetId(userContext, events, done) {
  let getId = Math.random() * (10000000 - 9999000) + 9999000;
  userContext.vars.getId = getId;
  return done();
}

module.exports = {
  generateRandomGetId
}
