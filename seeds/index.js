const sequelize = require('../config/connection');
const comment = require('./commentSeed');
const post = require('./postSeed');
const user = require('./userSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await user();

  await post();

  await comment();
  
  process.exit(0);
};

seedAll();