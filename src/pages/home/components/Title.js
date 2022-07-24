import 'tailwind.css';

const Title = () => {
  return (
    <div className={` transition-transform duration-700 ease-in-out  `}>
      {/* <h4 className='my-6 w-full text-center  text-[4vw] lg:text-[3vw]'>
        MICHAELA CASTELLARES VOJTOVÁ
      </h4> */}
      <h4
        className='my-6 w-full text-center  text-[8vw] font-bold
       tracking-wide lg:text-[3vw] '
      >
        FRONT-END
        <br />
        REACT DEVELOPER
      </h4>
    </div>
  );
};

export default Title;
