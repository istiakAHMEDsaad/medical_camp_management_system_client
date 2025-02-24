import { FaClipboardCheck } from 'react-icons/fa';
import MenuItem from './MenuItem';

const RegisteredCampsNav = () => {
  return (
    <>
      <MenuItem
        icon={FaClipboardCheck}
        label={'Registered Camps'}
        address={'registered-camps'}
      />
    </>
  );
};

export default RegisteredCampsNav;
