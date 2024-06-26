import React from 'react'
import './Portfolio.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import sidebar from '../../../img/sidebar.png'
import Ecommerce from '../../../img/ecommerce.png'
import HOC from '../../../img/hoc.png'
import Musicapp from '../../../img/musicapp.png'
import 'swiper/css'

const Portfolio = () => {
  return (
    <div className="portfolio">
        <span>Recent Projects</span>
        <span>Portfolio</span>

        <Swiper
        // spaceBetween={10}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
>
            <SwiperSlide>
           <img src={sidebar} alt="" />
           </SwiperSlide>

           <SwiperSlide>
           <img src={HOC} alt="" />
           </SwiperSlide>

           <SwiperSlide>
           <img src={Ecommerce} alt="" />
           </SwiperSlide>

           <SwiperSlide>
           <img src={Musicapp} alt="" />
           </SwiperSlide>

        </Swiper>
    </div>
  )
}

export default Portfolio