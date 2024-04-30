import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";


const DetailSpot = () => {

    const { user } = useContext(AuthContext);
    const { id } = useParams();   
    const [item, setItem] = useState([]);
    
    useEffect(() => {
        fetch(`https://b9a10-destination-unknown-server.vercel.app/detail-spot/${id}`)
          .then((res) => res.json())
          .then((data) => {

            setItem(data[0]);
            console.log(data[0]);
          });
      }, [user]);

    return (
        <div>
        <div className="card lg:card-side bg-base-100 shadow-xl ">
          <figure className="rounded-xl bg-[rgba(19,19,19,0.05)] p-16">
            <img src={item.imageURL} alt="Spot" className="rounded-xl w-[425px]" />
          </figure>
          <div className="card-body lg:w-1/2">
            <h1 className="font-playfair-display text-5xl mb-4">
              {item.spotName}{" "}
            </h1>
            <h1 className="text-xl">Country: {item.country} </h1>
                     
            <hr className="border-t-2 border-solid mb-6"></hr>
            <h1 className="mb-6">
              <span className="font-bold">Description: </span> {item.description}
            </h1>            
            <hr className="border-t-2 border-solid my-6"></hr>
            <div className="">
              <table className="table">
                <tbody>
                  <tr className="border-none ">
                    <td className="lg:w-[250px]">Location:</td>
                    <td className="font-bold">{item.location}</td>
                  </tr>
                  <tr className="border-none">
                    <td>Average Cost:</td>
                    <td className="font-bold">{item.averageCost}</td>
                  </tr>
  
                  <tr className="border-none">
                    <td>Seasonality:</td>
                    <td className="font-bold">{item.seasonality}</td>
                  </tr>
                  <tr className="border-none">
                    <td>Travel Time:</td>
                    <td className="font-bold">{item.travelTime}</td>
                  </tr>
                  <tr className="border-none">
                    <td>Total Visitors Per Year:</td>
                    <td className="font-bold">{item.totalVisitorsPerYear}</td>
                  </tr>
                </tbody>
              </table>
            </div>              
          </div>
        </div>        
      </div>
    );
};

export default DetailSpot;