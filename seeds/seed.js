const sequelize = require('../config/connection');
const { User, Project, Comment } = require('../models');

const userData = require('./userData.json');
const projectData = require('./projectData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const project of projectData) {
    await Project.create({
      ...project,
      user_id: users[Math.floor(Math.random() * users.length)].id, // is this creating a random user id?? shouldnt we use the use id form session 
    });
  }

  process.exit(0);
};

seedDatabase();
