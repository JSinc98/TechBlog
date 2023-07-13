const sequelize = require('../config/connection');
const comment = require('./commentSeed');
const post = require('./postSeed');
const user = require('./userSeed');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await comment();

  await post();

  await user();
  
  process.exit(0);
};

seedAll();