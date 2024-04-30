import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import TouristSpotCard from "./TouristSpotCard";


const CountryWiseSpot = () => {

    const { country } = useParams();
    //https://b9a10-destination-unknown-server.vercel.app/country-list/Bangladesh

    const [item, setItem] = useState([]);
    
    useEffect(() => {
        fetch(`https://b9a10-destination-unknown-server.vercel.app/country-list/${country}`)
          .then((res) => res.json())
          .then((data) => {
            setItem(data);
            console.log(data);
          });
      }, []);

    return (
        <div className="mt-10">
        <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center">
          <h1 className="text-3xl font-bold">All Tourist Spots of {country}</h1>
        </div>        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-7">
      

      {
       item?.map((spot) => (
          <TouristSpotCard key={spot._id} spot={spot} />
        ))}
        </div>
      </div>
    );
};

export default CountryWiseSpot;