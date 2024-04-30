
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const TouristSpotCard = ({spot}) => {
    return (
        <div>        
        <div className="card w-full  h-full bg-base-100 shadow-xl border-2">
              <figure className="rounded-xl bg-gray-300 m-5">
                <img src={spot.imageURL} alt="Spot" className="w-[100%] h-full rounded-xl" />
              </figure>
              
              <div className="card-body text-left">
                <h2 className="card-title font-playfair-display text-2xl">{spot.spotName}</h2>
                <p className="">Name: {spot.spotName}</p> 
                <p className="">Cost: {spot.averageCost} $</p> 
                <p className="">Visitors Per Year: {spot.totalVisitorsPerYear}</p> 
                <p className="">Travel Time: {spot.travelTime}</p> 
                <p className="">Seasonality: {spot.seasonality}</p> 
               
                <hr className="my-6 border-t-2 border-dashed"></hr>     
                <div className="">
                  <div>
                  <Link to={`/detail-spot/${spot._id}`} state={spot.spotName}>  <button className="btn btn-primary w-full">View Details</button>  </Link>         
                  </div>           
              </div>
              </div>          
            </div>        
          </div>
    );

};
TouristSpotCard.propTypes = {
    spot: PropTypes.object,
};
export default TouristSpotCard;

// imageURL: 'https://i.ibb.co/NFDJMzM/1.jpg',
// spotName: 'Sundarban',
// country: 'Bangladesh',
// location: 'Southern Bangladesh',
// description: 'A land of vibrant culture, lush landscapes, and resilient spirits nestled in the heart of South Asia',
// averageCost: '500$',
// seasonality: 'Winter , Fall',
// travelTime: '7 days',
// totalVisitorsPerYear: '100000'
