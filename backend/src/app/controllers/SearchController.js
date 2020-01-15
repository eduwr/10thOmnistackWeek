const parseStringAsArray = require('../utils/parseStringAsArray');
const searchDevs = require('../services/SearchService');

module.exports = {
  async index(req, res) {
    const { latitude, longitude, techs } = req.query;

    const techsArray = parseStringAsArray(techs)
 
    const devs = await searchDevs( latitude, longitude, techsArray )

    return res.json(devs)
  }
}
