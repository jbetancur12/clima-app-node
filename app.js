const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const { getLugarLatLong } = require('./lugar/lugar');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    description: 'Dirección de la ciudad para obtener el clima',
    demand: true,
  },
}).argv;

const getInfo = async (direccion) => {
  try {
    const coordinates = await lugar.getLugarLatLong(direccion);
    const weather = await clima.getClima(coordinates.lat, coordinates.lng);
    console.log('El clima en', direccion, 'es: ', weather - 273.15, '°C');
  } catch (error) {
    console.log('No se pudo determinar el clima de', direccion);
  }
};

getInfo(argv.direccion).then(console.log).catch(console.log);
