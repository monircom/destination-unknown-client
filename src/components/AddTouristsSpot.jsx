const AddTouristsSpot = () => {
  return (
    <div>
      <h1>Add Tourists Spot</h1>
      {/*  Image
      tourists_spot_name
c. country_Name
d. location
e. short description
f. average_cost
g. seasonality - like summer, winter
h. travel_time => like- 7 days
i. totaVisitorsPerYear => like- 10000 */}
      <form>
        <div className="md:max-w-[80%] mx-auto">
          <div className="flex">
            <div className="form-control w-full mx-6">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Image URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          {/* row */}

          <div className="flex flex-col md:flex-row ">
            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text">Tourists spot name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Tourists spot name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text">Country Name</span>
              </label>
              <label className="input-group">
                <select className="select select-primary w-full md:max-w-sm">
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
                <span className="label-text">Location</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Tourists spot name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text">short description</span>
              </label>
              <label className="input-group">
              <input
                  type="text"
                  placeholder="Tourists spot name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

           {/* row */}
           <div className="flex flex-col md:flex-row ">
            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text">average_cost</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Tourists spot name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text">seasonality</span>
              </label>
              <label className="input-group">
              <input
                  type="text"
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
                <span className="label-text">travel_time</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="7 days"
                  className="input input-bordered w-full"
                />
              </label>
            </div>

            <div className="form-control md:w-1/2 mx-6">
              <label className="label">
                <span className="label-text">totaVisitorsPerYear</span>
              </label>
              <label className="input-group">
              <input
                  type="text"
                  placeholder="10000"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTouristsSpot;
