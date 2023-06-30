import { create } from "zustand";

const initialGlobalState = {
  authenticated: false,
  storeDetails: {
    activeStore: {},
    allStores: [],
    userPickupDateTime: new Date(),
    nearestStore: {}
  },
  userLocation: {
    latitude: "",
    longitude: "",
  },
};

export const useGlobalStore = create((set) => ({
  ...initialGlobalState,
  setUserLocation: (latitude, longitude) =>
    set((state) => ({
      ...state,
      userLocation: {
        latitude,
        longitude,
      },
    })),
  setStoreDetails: (activeStore, allStores, nearestStore) =>
    set((state) => ({
      ...state,
      storeDetails: {
        ...state.storeDetails,
        activeStore,
        allStores,
        nearestStore
      },
    })),
  updateActiveStore: (activeStore) =>
    set((state) => ({
      ...state,
      storeDetails: {
        ...state.storeDetails,
        activeStore,
      },
    })),
  // setUserPickupDateTime: (userPickupDateTime) =>
  //   set((state) => ({
  //     ...state,
  //     storeDetails: {
  //       ...state.storeDetails,
  //       userPickupDateTime,
  //     },
  //   })),
}));
