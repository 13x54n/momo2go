import axios from "axios";

// need to use haver sine formula for distance calculation
export const calculateNearestStore = (lon, lat, options) => {
  let userLat = lat,
    userLon = lon;
    // console.log(`${userLat},${userLon}`)
  var shortestIndex = 0,
    shortestDistance = 0;
  //   console.log(import.meta.env.VITE_APP_OPENROUTESERVICE_API_KEY);

  for (let o in options) {
    const geoLocation = options[o].geoLocationCoords;

    // axios.get(`https://api.openrouteservice.org/v2/directions/driving-car?api_key=${import.meta.env.VITE_APP_OPENROUTESERVICE_API_KEY}&start=${userLat},${userLon}&end=${geoLocation.latitude},${geoLocation.longitude}`, {
    //     params: {
    //       api_key: import.meta.env.VITE_APP_OPENROUTESERVICE_API_KEY,
    //     },
    //     headers: {
    //         'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8'
    //       }
    //   })
    //   .then(response => {
    //     const distance = response.data;
    //     console.log(distance)
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
};
