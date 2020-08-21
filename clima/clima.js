const axios = require('axios');

const getClima = async (lat, lng) => {
  const resp = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1155b52bcb5a029968ffb21fb5c16cac`,
  );

  return resp.data.main.temp;
};

module.exports = {
  getClima,
};
