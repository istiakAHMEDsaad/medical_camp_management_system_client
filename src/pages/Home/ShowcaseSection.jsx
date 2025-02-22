import ShowcaseCard from '../../components/Cards/ShowcaseCard';

const ShowcaseSection = () => {
  return (
    <div className='container mx-auto my-10'>
      <p className='font-semibold lg:text-4xl md:text-3xl text-2xl text-center
        animate__animated animate__flash animate__slower animate__infinite
      '>
        Our most popular <span className='text-blue-600'>Medical Camps</span>
      </p>
      <div className='mt-4'>
      <ShowcaseCard />
      </div>
    </div>
  );
};

export default ShowcaseSection;
