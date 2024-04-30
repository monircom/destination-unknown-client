import { useEffect, useState } from "react";
import TouristSpotCard from "./TouristSpotCard";

const TouristsSpots = () => {
  const [spots, setSpots] = useState([]);

    useEffect(() => {
        //https://b9a10-destination-unknown-server.vercel.app/countries
        fetch("http://localhost:5000/tourist-spots")
          .then((res) => res.json())
          .then((data) => setSpots(data));
      }, []);
      console.log(spots);

      // {allProducts?.length > 8
      //   ? allProducts
      //       ?.slice(0, 8)
      //       .map((item) => <ProductCard key={item._id} item={item} />)
      //   : allProducts?.map((item) => (
      //       <ProductCard key={item._id} item={item} />
      //     ))}

    //const  spotsAll =  spots.slice(0,6);
    return (        
        <div className="mt-10">
        <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center">
          <h1 className="text-3xl font-bold">All Tourist Spots</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-7">
      

    {spots?.length > 6
    ? spots
        ?.slice(0, 6)
        .map((spot) => <TouristSpotCard key={spot._id} spot={spot} />)
    : spots?.map((spot) => (
        <TouristSpotCard key={spot._id} spot={spot} />
      ))}
      </div>
      </div>
    );
};

export default TouristsSpots;
