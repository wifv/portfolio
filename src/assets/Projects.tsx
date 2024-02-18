import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Projects = () => {
  return (
    <div>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >
        <SwiperSlide className='slide'>
          <img src="src/assets/rawg.png" alt="" />
        </SwiperSlide>

        <SwiperSlide className='slide'>
          <img src="src/assets/spotify.png" alt="" />
        </SwiperSlide>
        
        <SwiperSlide className='slide'>
          <img src="src/assets/divesea.png" alt="" />
        </SwiperSlide>
        
        <SwiperSlide className='slide'>
          <img src="src/assets/wezzy.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Projects
