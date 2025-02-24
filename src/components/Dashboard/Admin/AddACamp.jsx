import { useState } from 'react';
import AddCampForm from '../Form/AddCampForm';
import { format } from 'date-fns';

const AddACamp = () => {
  const [startDate, setStartDate] = useState(new Date());
  
  const onSubmit = (data) => {
    data.dateTime = format(startDate, 'Pp');
    console.log(data.location);
  };

  return (
    <>
      <title>Dashboard | Add A Camp</title>
      <meta name='dashboard' content='Welcome to the add a camp' />

      <div>
        <AddCampForm onSubmit={onSubmit} startDate={startDate} setStartDate={setStartDate} />
      </div>
    </>
  );
};

export default AddACamp;
