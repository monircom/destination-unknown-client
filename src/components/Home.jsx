//import { createUserWithEmailAndPassword } from "firebase/auth";
//import auth from "../firebase/firebase.config"
import SwiperPage from "./SwiperPage";
//import Residentials from "./Residentials";
import GetInTouch from "./GetInTouch";
import Countries from "./Countries";
import About from "./About";
import TouristsSpots from "./TouristsSpots";


const Home = () => {    
    
    return (
        <div>           

        <SwiperPage></SwiperPage>

        <Countries></Countries>

        <TouristsSpots></TouristsSpots>

        {/* <Residentials></Residentials> */}

        <GetInTouch></GetInTouch>

        <About></About>
            
        </div>
    );
};

export default Home;