import { useEffect, useState } from "react";
import TouristSpotCard from "./TouristSpotCard";


const AllTouristSpots = () => {
    const [spots, setSpots] = useState([]);


    
  const handleSorting = (sortingType) =>{

    if (sortingType === "high") {

      const newData = [...spots];
      newData.sort((s1, s2) => {
        return s2.averageCost - s1.averageCost;
      });

      setSpots(newData);
 
    } else if (sortingType === "low") {

      const newData = [...spots];
      newData.sort((s1, s2) => {
        return s1.averageCost - s2.averageCost;
      });

      setSpots(newData);            
    } 

  }

    useEffect(() => {
        //https://b9a10-destination-unknown-server.vercel.app/countries
        fetch("https://b9a10-destination-unknown-server.vercel.app/tourist-spots")
          .then((res) => res.json())
          .then((data) => setSpots(data));
      }, []);
      console.log(spots);
    return (        
        <div className="mt-10">
        <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center">
          <h1 className="text-3xl font-bold">All Tourist Spots</h1>
        </div>
        <div className="flex justify-center mx-auto mt-10">
        <div className="dropdown dropdown-bottom dropdown-end">
            <div tabIndex={0} role="button" className="btn w-full m-1 bg-[#23BE0A] text-white text-xl font-semibold px-12">Sort By</div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">                
                <li onClick={() => handleSorting("high")}><a>Average Cost(High to Low)</a></li>
                <li onClick={() => handleSorting("low")}><a>Average Cost(Low to High)</a></li>              
            </ul>
            </div>
            </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-7">
      

      {
       spots?.map((spot) => (
          <TouristSpotCard key={spot._id} spot={spot} />
        ))}
        </div>
      </div>
    );
};

export default AllTouristSpots;