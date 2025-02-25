import React from 'react'
import { AppImages } from '../Asset/images/image';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Carousel from './Slider ';

const images = [
    'https://www.fit-one.de/_Resources/Persistent/e/0/1/d/e01dc4ca6b751154f2dd29ab500318329c2124e5/INGOLSTADT_EDITED-11.jpg?text=Slide+1',
    'https://www.fit-one.de/_Resources/Persistent/a/2/2/3/a22309a138350314df3f7ef287896d996f782436/INGOLSTADT_EDITED-13.jpg?text=Slide+2',
    'https://www.fit-one.de/_Resources/Persistent/9/4/d/f/94dfc44ae096d66fa065488f056840deb27a303d/INGOLSTADT_EDITED-17.jpg?text=Slide+3',
  ];
const ComingSoon = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${'https://www.fit-one.de/_Resources/Persistent/d/8/7/b/d87bb082ceb25302b39c1f80e4f0aa59b561250f/INGOLSTADT_STREIFEN1.jpg'})`
    // backgroundImage: `url(${AppImages.bg})`,

  };

  return (
    <div className="bg-cover bg-center min-h-screen flex flex-col " style={backgroundImageStyle}>
      <div className='bg-black bg-opacity-70'>
      <Header/>
      <div className="flex justify-center flex-grow">
       <Link to={`/rejister`} className='pt-[38%] sm:pt-[17%]'>
               <div className="bg-[#78ce2b]  text-center  hover:bg-[#8aec35]  hover:text-white text-[white] text-[18px] border-[1px] border-[#707070] font-semibold px-[15px] py-[12px]  rounded-lg">
                 Add New Member
               </div>{" "}
             </Link>
      </div>
      <div className="flex justify-center items-center h-screen ">
      <Carousel images={images} />
    </div>
      
      <Footer/>
       </div>
    </div>
  );
}

export default ComingSoon