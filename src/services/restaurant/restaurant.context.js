import React, {
  useState,
  useContext,
  useEffect,
  useMemo,
  createContext,
} from "react";

import { restaurantRequest, restaurantTransform } from "./restaurant.service";

export const RestaurantContext = createContext();

export const RestaurantContextProvider = ({ children }) => {
  const [restaurant, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retriveRestaurants = () => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantRequest()
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
    retriveRestaurants();
  }, []);
//   console.log(restaurant);
  return (
    <RestaurantContext.Provider value={{restaurant,isLoading,error}}>
      {children}
    </RestaurantContext.Provider>
  );
};
