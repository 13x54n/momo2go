import React from "react";
import NavbarDesktop from "../../components/NavbarDesktop";
import { useGlobalStore } from "../../global/Store.global";
import { shortestDistance } from "short-distance";

import Stores from "../../mocks/Stores.json";
import FoodCategories from "../../mocks/FoodCategories.json";
import ProductCard from "../../components/ProductCard";
import Sort from "../../components/DesktopProductFilters/Sort";
import PriceRange from "../../components/DesktopProductFilters/PriceRange";
import Dietary from "../../components/DesktopProductFilters/Dietary";

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
      <div
        key={index}
        className="flex flex-col items-center justify-center cursor-pointer"
      >
        <img src={iconUrl} alt="" className="h-20 object-contain" />
        <p className="text-xs text-center">{name}</p>
      </div>
    );
  };

  const ProductsContainer = ({ children }) => {
    return (
      <div className="products overflow-y-scroll flex align-start gap-8 flex-wrap mb-8 p-6">
        {...children}
      </div>
    );
  };

  const ProductHeader = ({children}) => {
    return (
      <h1 className="text-2xl font-semibold pl-6">{...children}</h1>
    )
  }

  return (
    <div className="desktopLayout__container px-8">
      <NavbarDesktop />

      <div className="desktopLayout__foodCategories flex flex-row items-center gap-5 overflow-x-scroll w-[100%]">
        {FoodCategories.map((categoryItem, index) => (
          <CategoryItem
            name={categoryItem.name}
            iconUrl={categoryItem.iconUrl}
            index={index}
          />
        ))}
      </div>

      <div
        style={{ border: ".5px solid #c5c5c5", margin: "30px 0 0 0" }}
        className="divider"
      ></div>

      <main className="flex flex-row align-start gap-2">
        <div className="filters w-1/6 pt-6 overflow-y-scroll h-[70vh]">
          <ProductHeader>All Stores</ProductHeader>
          <p className="text-lg font-medium mt-6 mb-2">Sort</p>
          <Sort/>

          <p className="text-lg font-medium mt-6 mb-2">Price Range</p>
          <PriceRange/>

          <p className="text-lg font-medium mt-6 mb-2">Dietary</p>
          <Dietary/>
        </div>
        <div className="productsLists__container flex-1 pt-6 overflow-y-scroll h-[72vh]">
            <ProductHeader>People's Choice</ProductHeader>
            <ProductsContainer>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((val) => (
                <ProductCard key={val}/>
              ))}
            </ProductsContainer>

            <ProductHeader>Healthy Eating</ProductHeader>
            <ProductsContainer>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((val) => (
                <ProductCard key={val}/>
              ))}
            </ProductsContainer>
            
            <ProductHeader>Refreshing Drinks</ProductHeader>
            <ProductsContainer>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((val) => (
                <ProductCard key={val}/>
              ))}
            </ProductsContainer>

            <ProductHeader>For Your Loved Ones</ProductHeader>
            <ProductsContainer>
              {[0, 1, 2, 3, 4, 5, 6, 7].map((val) => (
                <ProductCard key={val}/>
              ))}
            </ProductsContainer>
        </div>
      </main>
    </div>
  );
}
