import { Swiper, SwiperSlide } from 'swiper/react';

//Module
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';

// swiper style css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

//images
import imageOne from '../../assets/1.jpg';
import imageTwo from '../../assets/2.jpg';
import imageThree from '../../assets/3.jpg';

const Carousel = () => {
  return (
    <div className='container mx-auto md:px-6 md:py-10 px-1 pt-3'>
      <Swiper
        centeredSlides={true}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <Slide
            image={imageOne}
            text='Efficiently whiteboard standards compliant scenarios.'
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <Slide
            image={imageTwo}
            text='Credibly transition resource maximizing deliverables.'
          />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <Slide
            image={imageThree}
            text='Credibly cultivate superior e-tailers after.'
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
