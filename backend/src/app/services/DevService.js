const github = require('../../config/github')
const Dev = require('../models/Dev');

//index, show, store, update, destroy

module.exports = {
  async listDevs(req, res) {
    const devs = await Dev.find();
    return devs;
  },

  async validateUsername(github_username) {
    const dev = Dev.findOne({ github_username })
    return dev
  },

  async getUserData(github_username) {
    const response = await github.get(`/${github_username}`);
    
    return response;
  },

  async createDev(github_username, name, avatar_url, bio, techs, location) {
      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs,
        location
      })
      return dev;
    },

  async updateDevData(id, name, bio, techs, location) {
    //nome avatar bio localização tecnologias

    const dev = await Dev.findByIdAndUpdate(id, {
      name,
      bio,
      techs,
      location
    });

    return dev;
  },

  async findDevToDelete(id) {
    const dev = Dev.findById(id);
    return dev
},

  async deleteDev(id) {
    await Dev.findByIdAndDelete(id)
  },
};
