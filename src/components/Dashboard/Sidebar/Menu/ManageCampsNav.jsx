import { FaGear } from 'react-icons/fa6';
import MenuItem from './MenuItem';

const ManageCampsNav = () => {
  return (
    <>
      <MenuItem icon={FaGear} label={'Manage Camp'} address={'manage-camps'} />
    </>
  );
};

export default ManageCampsNav;
