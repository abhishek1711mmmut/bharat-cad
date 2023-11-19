import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import image1 from "../../assets/clients/image1.webp";
import image2 from "../../assets/clients/image2.webp";
import image3 from "../../assets/clients/image3.webp";
import image4 from "../../assets/clients/image4.webp";
import image5 from "../../assets/clients/image5.webp";
import image6 from "../../assets/clients/image6.webp";

const images=[
    {url:image1},
    {url:image2},
    {url:image3},
    {url:image4},
    {url:image5},
    {url:image6}
];

const ClientSlider = () => {
  return (
    <div>
        <Swiper
        slidesPerView={4}
        spaceBetween={25}
        loop={true}
        freeMode={true}
        autoplay={{
            delay:1500,
            disableOnInteraction:false
        }}
        modules={[FreeMode, Autoplay]}
        >
        {
            images.map((image, index)=>(
                <SwiperSlide key={index}>
                    <img src={image.url} alt="client_image" className='hover:scale-125 transition-all duration-200'/>
                </SwiperSlide>
            ))
        }
        </Swiper>
    </div>
  )
}

export default ClientSlider