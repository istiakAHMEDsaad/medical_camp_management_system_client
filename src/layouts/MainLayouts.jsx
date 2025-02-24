import { Outlet } from 'react-router-dom';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer/Footer';

const MainLayouts = () => {
  return (
    <>
      
      <div className='font-inter'>
        <Navbar />
        {/* 72+224 */}
        <div className='min-h-[calc(100vh-296px)]'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MainLayouts;
