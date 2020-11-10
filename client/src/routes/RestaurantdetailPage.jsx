import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import { RestaurantsContext } from '../Context/RestaurantsContext'

const RestaurantdetailPage = () => {
  const { id } = useParams();
  const { selectedRestaurant, setSelectRestaurant } = useContext(RestaurantsContext);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectRestaurant(response.data.data.restaurant);
      } catch(err) {
        console.log(err)
      }
    }
    fetchData()
  },[])

  return (
    <div>
    {selectedRestaurant && selectedRestaurant.name}
    </div>
  )
}

export default RestaurantdetailPage