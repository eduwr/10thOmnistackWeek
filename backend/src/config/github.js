const axios = require('axios');

const github = axios.create({
  baseURL: 'https://api.github.com/users',
});

module.exports = github;