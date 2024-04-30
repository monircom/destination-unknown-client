
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

const CountryCard = ({ country }) => {
    return (
        <div>
          <NavLink to={`/country-wise-card/${country.country_name}`}>        
    <div className="card w-full  h-full bg-base-100 shadow-xl border-2">
          <figure className="rounded-xl bg-gray-300 m-5">
            <img src={country.image} alt="Country" className="w-[100%] h-full rounded-xl" />
          </figure>
          
          <div className="card-body text-left">
            <h2 className="card-title font-playfair-display text-2xl">{country.country_name}</h2>
            <p className="">Description: {country.description}</p> 
           
            {/* <hr className="my-6 border-t-2 border-dashed"></hr>     
            <div className="">
              <div>
              <Link to={`/country-wise-card/${country.country_name}`} state={country.country_name}>  <button className="btn btn-primary w-full">View {country.country_name}</button>  </Link>         
              </div>           
          </div> */}
          </div>          
        </div>
        </NavLink>        
      </div>
    );
};
CountryCard.propTypes = {
    country: PropTypes.object,
};
export default CountryCard;