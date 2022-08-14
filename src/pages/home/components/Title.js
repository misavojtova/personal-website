import 'tailwind.css';

const Title = () => {
  return (
    <div className='Title flex w-full pl-[88px] text-[#b8b8b8]'>
      <div className={` transition-transform duration-700 ease-in-out  `}>
        <p style={{ fontSize: '3rem' }}>Hi, My Name Is</p>
        <p style={{ fontSize: '6rem' }}>Michaela</p>
        <p style={{ fontSize: '3rem' }}>Front End</p>
        <p style={{ fontSize: '6rem' }}>React Developer</p>
      </div>
    </div>
  );
};

export default Title;
