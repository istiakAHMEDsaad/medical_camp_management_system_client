import { useState } from 'react';
import AddCampForm from '../Form/AddCampForm';
import { format } from 'date-fns';
import { imageUpload } from '../../../api/utils';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';

const AddACamp = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useAuth();
  
  const [startDate, setStartDate] = useState(new Date());
  const [checkUpImg, setCheckUpImg] = useState('no photo uploded');
  const [loading, setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true);
    
    data.dateTime = format(startDate, 'P');
    const campName = data.campName;
    const image = data.image[0];
    const campFees = parseFloat(data.campFees);
    const campDate = data.dateTime;
    const location = data.location;
    const professional_name = data.healthcareProfessionalName;
    const participant_count = parseInt(data.participantCount);
    const description = data.description;
    //upload image
    const imageUrl = await imageUpload(image);

    //create camp data object
    const campData = {
      campName,
      image: imageUrl,
      campFees,
      campDate,
      location,
      professional_name,
      participant_count,
      description,
      author_name: user?.displayName,
      author_email: user?.email,
      author_img: user?.photoURL
    };


    /*
    author_name Anwar Hossain
    author_email anawar_hossain@doodle.com
    author_img https://i.ibb.co/Y4yTqLFQ/user1.webp
    let imageFile = data.image[0];
    let parseFees = parseFloat(data.campFees);
    data.image = imageFile;
    data.campFees = parseFees; */

    try {
      //post
      await axiosSecure.post(`/camps`, campData)
      toast.success('Data added successfully');
    } catch (error) {
      toast.error(error?.message);
    } finally{
      setLoading(false)
    }
  };

  return (
    <>
      <title>Dashboard | Add A Camp</title>
      <meta name='dashboard' content='Welcome to the add a camp' />

      <div>
        <AddCampForm
          onSubmit={onSubmit}
          startDate={startDate}
          setStartDate={setStartDate}
          checkUpImg={checkUpImg}
          setCheckUpImg={setCheckUpImg}
          loading={loading}
        />
      </div>
    </>
  );
};

export default AddACamp;
