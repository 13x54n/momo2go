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
  setUserLocation: (longitude, latitude) =>
    set((state) => ({
      ...state,
      userLocation: {
        longitude,
        latitude,
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
  updateActiveStore: (activeStore) =>
    set((state) => ({
      ...state,
      storeDetails: {
        activeStore,
        allStores: state.storeDetails.allStores,
      },
    })),
}));
