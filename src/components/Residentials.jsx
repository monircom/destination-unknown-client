//import { useEffect, useState } from "react";
import Residential from "./Residential";
import { Fade } from "react-awesome-reveal";

const Residentials = () => {
  //const [residentials, setResidentials] = useState([]);

  // useEffect(() => {
  //   fetch("/residential.json")
  //     .then((res) => res.json())
  //     .then((data) => setResidentials(data));
  // }, []);
  // console.log(residentials);
  return (
    <div>
      <div className="w-full h-[100px] bg-[rgba(19,19,19,0.05)] rounded-xl flex justify-center items-center p-5 mt-10">
        <Fade>
        <h1 className="text-3xl font-bold">Residentials</h1>
        </Fade>
        
      </div>
      {/* <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-7">
        {residentials.map((residential, idx) => (
          <Residential key={idx} residential={residential}></Residential>
        ))}
      </div> */}
    </div>
  );
};

export default Residentials;
