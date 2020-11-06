import react from "react"
import { useParams } from "react-router-dom"

const UpdateRestaurant = () => {
  const test = useParams();
  console.log(test)

  return (
    <div>
      <form action="">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" className="form-control" type="text"></input>
        </div>

        <div className="form-group">
          <label htmlFor="name">Location</label>
          <input id="name" className="form-control" type="text"></input>
        </div>
      </form>
    </div>
  )
}

export default UpdateRestaurant