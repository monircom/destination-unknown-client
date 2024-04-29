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
        <div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Image URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Image URL"
                className="input input-bordered"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Tourists spot name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Tourists spot name"
                className="input input-bordered"
              />
            </label>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Country Name</span>
            </label>
            <label className="input-group">
              <select className="select select-primary w-full max-w-xs">
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
      </form>
    </div>
  );
};

export default AddTouristsSpot;
