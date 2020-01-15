module.exports = (longitude, latitude) => {
  const location = {
    type: 'Point',
    coordinates: [longitude, latitude]
  };
  return location
} 