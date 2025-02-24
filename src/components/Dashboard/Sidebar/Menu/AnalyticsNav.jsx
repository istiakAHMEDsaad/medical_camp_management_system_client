import { BsGraphUp } from 'react-icons/bs';
import MenuItem from './MenuItem';

const AnalyticsNav = () => {
  return (
    <>
      <MenuItem icon={BsGraphUp} label={'Analytics'} address={'analytics'} />
    </>
  );
};

export default AnalyticsNav;
