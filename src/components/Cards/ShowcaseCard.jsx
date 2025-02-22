import { FaCalendarAlt, FaUserMd, FaUsers, FaMapMarkerAlt } from 'react-icons/fa';

const ShowcaseCard = () => {
  return (
    <div className='card md:w-96 bg-white shadow-sm rounded-lg overflow-hidden border border-gray-200'>
      {/* image */}
      <img
        src='https://static.vecteezy.com/system/resources/previews/010/718/024/non_2x/doctor-treating-a-female-patient-vector.jpg'
        alt='Medical Center'
        className='w-full h-48 object-cover'
      />

      <div className='p-4'>
        <h2 className='text-2xl font-bold text-blue-600'>Medical Camp Name</h2>

        <p className='text-green-600 text-lg font-semibold'>Camp Fees: $100</p>

        <div className='flex items-center text-gray-600 mt-2'>
          <FaCalendarAlt className='mr-2' />
          <span>Date & Time: March 10, 2025, 10:00 AM</span>
        </div>

        <div className='flex items-center text-gray-600 mt-2'>
          <FaMapMarkerAlt className='mr-2' />
          <span>Location: Jhenidaha, jessore</span>
        </div>
        
        <div className='flex items-center text-gray-600 mt-2'>
          <FaUserMd className='mr-2' />
          <span>Healthcare Professional: Dr. John Doe</span>
        </div>
        <div className='flex items-center text-gray-600 mt-2'>
          <FaUsers className='mr-2' />
          <span>Participants: 50</span>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;

/* 
can you make me a card? (you can use tailwindcss, daisyui & react icons)
a rounded polished card where contain a medical center image, medical camp name, camp fees, date & time, healthcare professional & participant count
i asked chatgpt she said how will be my web application
```
Primary Colors (Main Theme)
Blue (#007BFF or #4A90E2) – Represents trust, professionalism, and healthcare.
Green (#28A745 or #2ECC71) – Symbolizes health, growth, and wellness.
Secondary Colors (Accent)
White (#FFFFFF) – Clean and simple background.
Light Gray (#F8F9FA or #E5E7EB) – For a subtle contrast.
Teal (#20C997) – A fresh and modern alternative to blue-green.
Red (#DC3545) – Use for alerts and critical notifications.
Typography
Font: Use a modern, clean font like Inter, Poppins, or Roboto.
Headers: Bold and easy to read.
Body Text: Regular and simple.
Visual Elements
Minimal UI with clear navigation.
Soft rounded buttons for a welcoming feel.
Icons for medical features (e.g., calendar for scheduling, heart for health stats).
Dashboard with clear statistics using charts and cards.
```
now please help me
*/
