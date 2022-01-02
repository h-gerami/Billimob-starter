import {API_PATH} from './Global';

function checkResponse(response: any) {
  try {
    return response.json();
  } catch (err) {
    return console.log(err, 'catcherr');
  }
}

class Services {
  GetWeather(cityName: string) {
    // var myHeaders = new Headers();
    // myHeaders.append('Content-Type', 'application/json');
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };
    return fetch(API_PATH + cityName, requestOptions)
      .then(response => checkResponse(response))
      .catch(err => {
        console.log(err, 'network?');
      });
  }
}
const services = new Services();
export default services;
