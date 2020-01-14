const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

//index, show, store, update, destroy

module.exports = {
  async index(req, res) {
    const devs = await Dev.find();
    return res.json(devs);
  },

  async store(req, res) {
    const { github_username, techs, latitude, longitude } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (!dev) {
      const response = await axios.get(`https://api.github.com/users/${github_username}`);

      const { name = login, avatar_url, bio } = response.data;

      const techsArray = parseStringAsArray(techs);

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      };

      dev = await Dev.create({
        github_username,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      })
    }

    return res.json(dev);
  },

  async update(req, res) {
    //nome avatar bio localização tecnologias
    const { id } = req.params
    const { name, longitude, latitude, techs, bio } = req.body

    const techsArray = parseStringAsArray(techs)

    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    };

    const dev = await Dev.findByIdAndUpdate(id, {
      name,
      bio,
      techs: techsArray,
      location
    });

    return res.json(dev);
  },

  async destroy(req, res) {
    const { id } = req.params;

    await Dev.findByIdAndRemove(id, (err, doc) => {
      if (doc) {
        return res.json({ message: `O Usuário ${doc.name} foi removido com sucesso!` })
      }
      return res.json({ message: 'Usuário não encontrado!' })
    })
  }
};