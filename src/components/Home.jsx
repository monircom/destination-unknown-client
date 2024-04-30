//import { createUserWithEmailAndPassword } from "firebase/auth";
//import auth from "../firebase/firebase.config"
import SwiperPage from "./SwiperPage";
//import Residentials from "./Residentials";
import GetInTouch from "./GetInTouch";
import Countries from "./Countries";


const Home = () => {    
    
    return (
        <div>           

        <SwiperPage></SwiperPage>

        <Countries></Countries>

        {/* <Residentials></Residentials> */}

        <GetInTouch></GetInTouch>
            
        </div>
    );
};

export default Home;