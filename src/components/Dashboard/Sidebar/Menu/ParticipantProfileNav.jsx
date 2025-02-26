import MenuItem from './MenuItem';
import { FaUser } from 'react-icons/fa';

const ParticipantProfileNav = () => {
  return (
    <>
      <MenuItem
        icon={FaUser}
        label={'Manage Profile'}
        address={'manage-profile'}
      />
    </>
  );
};

export default ParticipantProfileNav;
