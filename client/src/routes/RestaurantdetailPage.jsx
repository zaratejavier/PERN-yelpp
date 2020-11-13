import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantFinder from '../apis/RestaurantFinder'
import Reviews from '../Components/Reviews'
import StarRating from '../Components/StarRating'
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
      {selectedRestaurant && (
        <>
          <div className="mt-3">
            <Reviews/>
          </div>
        </>
      )}
    </div>
  )
}

export default RestaurantdetailPage