import { useContext } from 'react';
import Swal from 'sweetalert2'
import { AuthContext } from '../Providers/AuthProvider';
import { useNavigate } from 'react-router-dom';
const AddTouristsSpot = () => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    //console.log(user);

    //displayName

    const handleAddSpot = event =>{

       
        event.preventDefault();
        const form = event.target;

        const imageURL = form.imageURL.value;
        const spotName = form.spotName.value;
        const country = form.country.value;
        const location = form.location.value;
        const description = form.description.value;
        const averageCost = form.averageCost.value;
        const seasonality = form.seasonality.value;
        const travelTime = form.travelTime.value;
        const totalVisitorsPerYear = form.totalVisitorsPerYear.value;
        const email = user?.email;
        const userName = user?.displayName;

        const newTouristSpot = {imageURL, spotName, country, location, description, averageCost, seasonality, travelTime, totalVisitorsPerYear,email,userName};
        console.log(newTouristSpot);

        fetch('https://b9a10-destination-unknown-server.vercel.app/tourist-spot',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTouristSpot)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist Spot Added Successfully',
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  setTimeout(function () {
                    navigate("/my-list");
                  }, 2500);
            }
        })

    }
  return (
    <div> 
      <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center">
        <h1 className="text-3xl font-bold">Add Tourist Spot</h1>        
      </div>   
      <form onSubmit={handleAddSpot}>
        <div className="md:max-w-[80%] mx-auto">
          <div className="flex">
            <div className="form-control w-full mx-6">
              <label className="label">
                <span className="label-text text-2xl">Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="imageURL"
                  placeholder="Image URL"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* row */}

          <div className="flex flex-col md:flex-row ">
            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">Tourists spot name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="spotName"
                  required
                  placeholder="Tourists spot name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">Country Name</span>
              </label>
              <label className="input-group">
                <select name="country" className="select select-primary w-full md:max-w-sm">
                  <option disabled selected>
                    Select Country
                  </option>
                  <option>Bangladesh</option>
                  <option>Thailand</option>
                  <option>Indonesia</option>
                  <option>Malaysia</option>
                  <option>Vietnam</option>
                  <option>Cambodia</option>
                </select>
              </label>
            </div>
          </div>


            {/* row */}
          <div className="flex flex-col md:flex-row ">
            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">Location</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">Short Description</span>
              </label>
              <label className="input-group">
              <input
                  type="text"
                  name="description"
                  placeholder="short description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

           {/* row */}
           <div className="flex flex-col md:flex-row ">
            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">Average Cost</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="averageCost"
                  placeholder="500"
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">seasonality</span>
              </label>
              <label className="input-group">
              <input
                  type="text"
                  name="seasonality"
                  placeholder="summer, winter ..."
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* row */}
          <div className="flex flex-col md:flex-row ">
            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">Travel Time</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="travelTime"
                  placeholder="7 days"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">Total Visitors Per Year</span>
              </label>
              <label className="input-group">
              <input
                  type="text"
                  name="totalVisitorsPerYear"
                  placeholder="10000"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

            {/* row */}
          <div className="flex flex-col md:flex-row ">
            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">User Email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="email"
                  defaultValue={user?.email}  
                  readOnly           
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text text-2xl">User Name</span>
              </label>
              <label className="input-group">
              <input
                  type="text"
                  name="userName"
                  readOnly
                  defaultValue={user?.displayName}                  
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="mx-6 mt-5 mb-10">
          <input type="submit" value="Add Tourist Spot" className="btn btn-block font-bold text-2xl" />
          </div>
        </div>        
      </form>
    </div>
  );
};

export default AddTouristsSpot;
