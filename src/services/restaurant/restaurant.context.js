import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
  createContext,
} from "react";
import { LocationContext } from "../location/location.context";

import { restaurantRequest, restaurantTransform } from "./restaurant.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurant, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const {location} =useContext(LocationContext);

  const retriveRestaurants = (loc) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantRequest(loc)
        .then(restaurantTransform)
        .then((results) => {
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        }); 
    }, 1000);
  };

  useEffect(() => {
    if(location){
      const locationString = `${location.lat},${location.lng}`
      retriveRestaurants(locationString);

    }
  }, [location]);
//   console.log(restaurant);
  return (
    <RestaurantContext.Provider value={{restaurant,isLoading,error}}>
      {children}
    </RestaurantContext.Provider>
  );
};
