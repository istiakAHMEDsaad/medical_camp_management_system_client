import Carousel from '../../components/Swiper/Carousel';
import WhyChooseUs from '../../components/WhyChooseUs';
import ShowcaseSection from './ShowcaseSection';

const Home = () => {
  return (
    <>
      <title>Medical Camp | Home</title>
      <meta name='description' content='Welcome to the home page' />
      <div className='container mx-auto pt-4 overflow-hidden'>
        <Carousel />
        <ShowcaseSection />
        <WhyChooseUs />
      </div>
    </>
  );
};

export default Home;
