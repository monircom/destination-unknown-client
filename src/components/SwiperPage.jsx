
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
            <h1 className="text-5xl px-8">Where the wilderness whispers and the tides tell tales: Welcome to Sundarbans.</h1>
            </Fade>     
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/2.jpg)] ">     
        <Fade>    
            <h1 className="text-5xl px-8">Discover paradise in every shade: Phuket, where adventure meets serenity.</h1>
          </Fade>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/3.jpg)] ">   
             
        <Fade>   
            <h1 className="text-5xl px-8">Penang: Where culture, cuisine, and charm intertwine.</h1>
            </Fade>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/4.jpg)] ">        
        <Fade>
            <h1 className="text-5xl px-8">Ha Long Bay: Where dreams sail on a sea of tranquility.</h1>
            </Fade>

          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/5.jpg)] ">  
        <Fade>
            <h1 className="text-5xl px-8">Bali: Unveil the magic of an island where every moment is a masterpiece.</h1>
            </Fade>  
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide bg-[linear-gradient(180deg,rgba(0,0,0,0.4),rgba(0,0,0,0.5)),url(./assets/6.jpg)] ">      
        <Fade>
            <h1 className="text-5xl px-8">Phnom Penh: A tapestry of tradition and modernity woven along the Mekong.</h1>
            </Fade>  
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperPage;
