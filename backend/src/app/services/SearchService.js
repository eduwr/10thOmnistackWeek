const Dev = require('../models/Dev')

const searchDevs = async (latitude, longitude, techs) => {
  //buscar todos os devs em um raio 10km
  //filtrar por technologias
  const techsLowerCase = techs.map(tech => tech.toLowerCase())

  const devs = await Dev.find({
    techs: {
      $in: techsLowerCase,
    },
    location: {
      $near: {
        $geometry: {
          type: 'Point',
          coordinates: [longitude, latitude]
        },
        $maxDistance: 10000000,
      },
    },
  })
  return devs;
}

module.exports = searchDevs;