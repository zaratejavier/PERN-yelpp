import React, { useState, createContext } from "react";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = (props) => {
  const [restaurants, setRestaurants] = useState([])
  const [selectedRestaurant, setSelectRestaurant] = useState(null)

  const addRestaurants = (restaurant) => {
    setRestaurants([...restaurants, restaurant])
  }

  return (
    <RestaurantsContext.Provider value={{
      restaurants,
      setRestaurants,
      addRestaurants,
      selectedRestaurant,
      setSelectRestaurant,
    }}>
      {props.children}
    </RestaurantsContext.Provider>
  )
}