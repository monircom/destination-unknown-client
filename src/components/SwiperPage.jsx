
import { Fade } from "react-awesome-reveal";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../App.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SwiperPage = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/1.jpg)] "> 
          <Fade>  
            <h1 className="text-5xl ">Beautiful home with modern amenities.</h1>
            </Fade>     
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/2.jpg)] ">     
        <Fade>    
            <h1 className="text-5xl ">Cozy townhouse in a family-friendly neighborhood.</h1>
          </Fade>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/3.jpg)] ">   
             
        <Fade>   
            <h1 className="text-5xl ">Modern apartment with stunning city views.</h1>
            </Fade>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/4.jpg)] ">        
        <Fade>
            <h1 className="text-5xl ">Comfortable student housing near campus.</h1>
            </Fade>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/5.jpg)] ">  
        <Fade>
            <h1 className="text-5xl ">Retirement community with various amenities.</h1>
            </Fade>  
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/6.jpg)] ">      
        <Fade>
            <h1 className="text-5xl ">Charming vacation rental by the beach.</h1>
            </Fade>  
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperPage;
