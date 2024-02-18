import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './projects.css';
import './global.css';
import rawg from './images/rawg.png';
import wezzy from './images/wezzy.png';
import spotify from './images/spotify.png';
import divesea from './images/divesea.png';

const Projects = () => {
  return (
    <div className='projects'>
      <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      >
        <SwiperSlide className='slide'>
          <img src={rawg} alt="" />
          <div className="info-container">
            <h4>Rawg Clone</h4>
            <h5 className='color-2'>#API #VanillaJS #FrontEnd #HTML #CSS #Solo</h5>
            <a href='https://rawg-eight.vercel.app/' target='_blank'>view</a>
          </div>
        </SwiperSlide>

        <SwiperSlide className='slide'>
          <img src={spotify} alt="" />
          <div className="info-container">
            <h4>Spotify Like Audio Player</h4>
            <h5 className='color-2'>#API #VanillaJS #FrontEnd #HTML #CSS #Solo</h5>
            <a href='https://spotifyy-ten.vercel.app/' target='_blank'>view</a>
          </div>
        </SwiperSlide>
        
        <SwiperSlide className='slide'>
          <img src={divesea} alt="" />
          <div className="info-container">
            <h4>Divesea NFT Marketplace</h4>
            <h5 className='color-2'>#VanillaJS #FrontEnd #HTML #CSS #Team</h5>
            <a href='https://dive-sea-eight.vercel.app/' target='_blank'>view</a>
          </div>
        </SwiperSlide>
        
        <SwiperSlide className='slide'>
          <img src={wezzy} alt="" />
          <div className="info-container">
            <h4>Wezzy | Weather App</h4>
            <h5 className='color-2'>#API #VanillaJS #FrontEnd #HTML #CSS #Solo</h5>
            <a href='https://wezzy.vercel.app/' target='_blank'>view</a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Projects
