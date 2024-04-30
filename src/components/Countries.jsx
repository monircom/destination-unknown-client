import { useEffect, useState } from "react";



const Countries = () => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://b9a10-destination-unknown-server.vercel.app/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  console.log(countries);

  return (
    <div className="mt-10">
      <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center">
        <h1 className="text-3xl font-bold">Countries {countries.length}</h1>
      </div>
    </div>
  );
};

export default Countries;
