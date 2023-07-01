import React from "react";
import NavbarDesktop from "../../components/NavbarDesktop";
import { useGlobalStore } from "../../global/Store.global";
import { shortestDistance } from "short-distance";

import Stores from "../../mocks/Stores.json";
import FoodCategories from "../../mocks/FoodCategories.json";

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

  const CategoryItem = ({ name, iconUrl, index }) => {
    return (
      <div key={index} className="flex flex-col items-center justify-center cursor-pointer">
        <img src={iconUrl} alt="" className="h-20"/>
        <p className="text-xs text-center">{name}</p>
      </div>
    );
  };

  return (
    <div className="desktopLayout__container">
      <NavbarDesktop />

      <div className="desktopLayout__foodCategories px-8 flex flex-row items-center gap-5 overflow-x-scroll">
        {FoodCategories.map((categoryItem, index) => (
          <CategoryItem
            name={categoryItem.name}
            iconUrl={categoryItem.iconUrl}
            index={index}
          />
        ))}
      </div>

      <div style={{border: ".5px solid #c5c5c5", margin: "30px 2vw"}} className="divider"></div>
    </div>
  );
}
