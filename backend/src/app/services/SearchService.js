const Dev = require('../models/Dev')

  const searchDevs = async (latitude, longitude, techs) => {
    //buscar todos os devs em um raio 10km
    //filtrar por technologias

    const devs = await Dev.find({
      techs: {
        $in: techs,
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
    return devs;
  }

  module.exports = searchDevs;