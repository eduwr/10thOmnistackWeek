const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');


module.exports = {
  async index(req, res) {
    //buscar todos os devs em um raio 10km
    //filtrar por technologias
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringAsArray(techs)
 
    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          $maxDistance: 10000,
        },
      },
    })

    return res.json({ devs })

  }
}