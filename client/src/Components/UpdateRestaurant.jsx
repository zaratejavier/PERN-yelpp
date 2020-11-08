import react, { useState } from "react"
import { useParams } from "react-router-dom"

const UpdateRestaurant = () => {
  const { id } = useParams();
  const { name, setName } = useState("")
  const { location, setLocation } = useState("")
  const {price_range, setPrice_range} = useState("")

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Location</label>
          <input
            className="form-control"
            type="text"
            id="location"
            value={location}
            onChange={e => setLocation(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="price_range">Price Range</label>
          <input
            className="form-control"
            type="number"
            id="price_range"
            value={price_range}
            onChange={e => setPrice_range(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default UpdateRestaurant