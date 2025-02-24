import { BsFillHouseAddFill } from 'react-icons/bs';
import MenuItem from './MenuItem';

const AddCampNav = () => {
  return (
    <>
      <MenuItem
        icon={BsFillHouseAddFill}
        label={'Add A Camp'}
        address={'add-camp'}
      />
    </>
  );
};

export default AddCampNav;
