import { useGlobalStore } from '../global/Store.global';
import Stores from '../mocks/Stores.json'

export const getAllStores = () => {
    const userLocation = useGlobalStore(state => state.userLocation);

    // @dev must be axios or fetch request here
    const stores = Stores;
    console.log(userLocation)
}