import { create } from "zustand";

const initialGlobalState = {
  authenticated: false,
  storeDetails: {
    activeStore: {},
    allStores: [],
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
  setStoreDetails: (activeStore, allStores) =>
    set((state) => ({
      ...state,
      storeDetails: {
        activeStore,
        allStores,
      },
    })),
}));
