import React from "react";
import NavbarDesktop from "../../components/NavbarDesktop";
import { useGlobalStore } from "../../global/Store.global";
import Stores from "../../mocks/Stores.json";
import { shortestDistance } from "short-distance";

export default function DesktopLayout() {
  const setUserLocation = useGlobalStore((state) => state.setUserLocation);
  const setStoreDetails = useGlobalStore((state) => state.setStoreDetails);

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          setUserLocation(latitude, longitude);

          let storeGeoCoordinates = [];

          Stores.forEach((store, index) => {
            storeGeoCoordinates[index] = store.geoLocationCoords;
          });

          const shortestStore = shortestDistance(
            { latitude, longitude },
            storeGeoCoordinates
          );
          const activeStore = Stores[shortestStore?.index];

          setStoreDetails(activeStore, Stores, shortestStore);
        },
        (error) => {
          console.error(error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div className="desktopLayout__container">
      <NavbarDesktop />
    </div>
  );
}
