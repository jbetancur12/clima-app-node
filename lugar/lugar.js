const axios = require('axios');

const getLugarLatLong = async (direccion) => {
  const encodeURL = encodeURI(direccion);
  const baseURL = 'https://opencage-geocoder.p.rapidapi.com/geocode/v1/json';

  const headers = {
    'content-type': 'application/octet-stream',
    'x-rapidapi-host': 'opencage-geocoder.p.rapidapi.com',
    'x-rapidapi-key': '1ad480b96dmshd68069a0268331dp18659bjsn96c4ae69bcbc',
    useQueryString: true,
  };

  const params = {
    language: 'en',
    key: '4d5a18554f454759bfefdfd2cdcdd5eb',
    q: encodeURL,
  };

  const resp = await axios({
    method: 'GET',
    baseURL,
    headers,
    params,
  });

  if (resp.data.results.length === 0) {
    throw new Error(`No hay resultados para ${direccion}`);
  }
  const data = resp.data.results[0];
  const { city } = data.components;
  const { lat, lng } = data.geometry;

  return {
    city,
    lat,
    lng,
  };
};

module.exports = {
  getLugarLatLong,
};
