import locationIcon from 'src/assets/icons/location.svg';

const HourServices = () => {
  return (
    <div className='flex items-center gap-2 font-medium'>
      <img className='w-3' src={locationIcon} alt="icon" />
      <p>Чернівці</p>
    </div>
  );
}

export default HourServices;