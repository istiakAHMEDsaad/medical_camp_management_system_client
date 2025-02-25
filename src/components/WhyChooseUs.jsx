import { FaClock, FaUserMd, FaStethoscope, FaFileAlt } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaClock,
      title: '24/7 Service',
      description:
        'We are available around the clock to assist you with any medical needs.',
      color: 'rgba(34, 197, 94, 1)', // Green
      iconColor: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      icon: FaUserMd,
      title: 'High Quality Doctors',
      description:
        'Our doctors are highly qualified and experienced in their respective fields.',
      color: 'rgba(59, 130, 246, 1)', // Blue
      iconColor: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      icon: FaStethoscope,
      title: 'Best Medical Equipment',
      description:
        'We use the latest and most advanced medical equipment for accurate diagnosis.',
      color: 'rgba(249, 115, 22, 1)', // Orange
      iconColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      icon: FaFileAlt,
      title: 'Fast Delivery Report',
      description:
        'Get your medical reports delivered quickly and efficiently.',
      color: 'rgba(239, 68, 68, 1)', // Red
      iconColor: 'text-red-500',
      bgColor: 'bg-red-50',
    },
  ];

  return (
    <div className='why-choose-us text-center p-8'>
      <h2 className='text-3xl font-bold mb-8'>Why Choose Us</h2>
      <div className='flex flex-wrap justify-around'>
        {features.map((feature, index) => (
          <div
            className={`card border-2 rounded-lg p-6 m-4 w-64 text-center shadow-lg flex flex-col items-center ${feature.bgColor}`}
            key={index}
            style={{ borderColor: feature.color }}
          >
            <feature.icon className={`text-6xl ${feature.iconColor} mb-4`} />
            <h3 className='text-xl font-semibold mb-2'>{feature.title}</h3>
            <p className='text-gray-700'>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
