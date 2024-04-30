import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";



const Countries = () => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    //https://b9a10-destination-unknown-server.vercel.app/countries
    fetch("http://localhost:5000/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  console.log(countries);

  return (
    <div className="mt-10">
      <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center">
        <h1 className="text-3xl font-bold">Countries</h1>        
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-7">
      {
          countries.map(country => <CountryCard
            key= {country._id}
            country = {country}
          ></CountryCard>)
        }

      </div>
    </div>
  );
};

export default Countries;
