import { useContext } from "react";
import Swal from 'sweetalert2'
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const UpdateSpot = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
    const spot = useLoaderData()[0];

    console.log (spot)

    const handleUpdateSpot = event =>{

       
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

        const updatesTouristSpot = {imageURL, spotName, country, location, description, averageCost, seasonality, travelTime, totalVisitorsPerYear,email,userName};
        console.log(updatesTouristSpot);

        fetch(`http://localhost:5000/tourist-spot/${spot?._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatesTouristSpot)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount){
                Swal.fire({
                    title: 'Success!',
                    text: 'Tourist Spot Updated Successfully',
                    icon: 'success',                    
                    showConfirmButton: false,
                    timer: 1500
                  })
                  setTimeout(function () {
                    navigate("/my-list");
                  }, 2500);              
            }
            else{
                Swal.fire({
                    title: 'Oops...!',
                    text: 'Data not changed',
                    icon: 'info',
                    confirmButtonText: 'Ok'
                  })
            }
        })

    }



    return (
        <div>  
      <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center">
        <h1 className="text-3xl font-bold">Update Tourist Spot</h1>        
      </div>       
      <form onSubmit={handleUpdateSpot}>
      

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
                  defaultValue={spot?.imageURL}
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
                  defaultValue={spot?.spotName}
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
                <select name="country" defaultValue={spot?.country} className="select select-primary w-full md:max-w-sm">
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
                  defaultValue={spot?.location}
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
                  defaultValue={spot?.description}
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
                  defaultValue={spot?.averageCost}
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
                  defaultValue={spot?.seasonality}
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
                  defaultValue={spot?.travelTime}
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
                  defaultValue={spot?.totalVisitorsPerYear}
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
          <input type="submit" value="Update Tourist Spot" className="btn btn-block font-bold text-2xl" />
          </div>
        </div>        
      </form>
    </div>
    );
};

export default UpdateSpot;