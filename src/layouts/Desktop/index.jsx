import React from "react";
import NavbarDesktop from "../../components/NavbarDesktop";
import { useGlobalStore } from "../../global/Store.global";

import Stores from "../../mocks/Stores.json";
import { calculateNearestStore } from "../../utils/DistanceMatrix";

export default function DesktopLayout() {
  const setUserLocation = useGlobalStore((state) => state.setUserLocation);
  const setStoreDetails = useGlobalStore((state) => state.setStoreDetails);

  React.useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          
          setUserLocation(longitude, latitude);

          calculateNearestStore(longitude, latitude, Stores)
          setStoreDetails(Stores[0], Stores)
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
