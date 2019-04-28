
let generateRandomGetId = (userContext, events, done) {
  userContext.vars.getId = Math.random() * (10000000 - 9999000) + 9999000;
  return done();
}
