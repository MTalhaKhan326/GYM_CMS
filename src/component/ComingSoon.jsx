import React from 'react'
import { AppImages } from '../Asset/images/image';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const ComingSoon = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${'https://www.fit-one.de/_Resources/Persistent/d/8/7/b/d87bb082ceb25302b39c1f80e4f0aa59b561250f/INGOLSTADT_STREIFEN1.jpg'})`
    // backgroundImage: `url(${AppImages.bg})`,

  };

  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col" style={backgroundImageStyle}>
      <Header/>
      <div className="flex justify-center flex-grow">
       <Link to={`/rejister`} className='pt-[38%] sm:pt-[17%]'>
               <div className="bg-[#78ce2b]  text-center  hover:bg-[#8aec35]  hover:text-white text-[white] text-[18px] border-[1px] border-[#707070] font-semibold px-[15px] py-[12px]  rounded-lg">
                 Add New Member
               </div>{" "}
             </Link>
      </div>
      <Footer/>
      
    </div>
  );
}

export default ComingSoon