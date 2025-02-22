import Carousel from '../../components/Swiper/Carousel';
import ShowcaseSection from './ShowcaseSection';

const Home = () => {
  return (
    <div className='container mx-auto pt-4 overflow-hidden'>
      <Carousel />
      <ShowcaseSection/>
    </div>
  );
};

export default Home;
