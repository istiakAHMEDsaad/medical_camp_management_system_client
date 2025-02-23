import Carousel from '../../components/Swiper/Carousel';
import ShowcaseSection from './ShowcaseSection';

const Home = () => {
  return (
    <>
      <title>Medical Camp | Home</title>
      <meta name='description' content='Welcome to the home page' />
      <div className='container mx-auto pt-4 overflow-hidden'>
        <Carousel />
        <ShowcaseSection />
      </div>
    </>
  );
};

export default Home;
