import React, { useState } from 'react';
import { AppImages } from '../Asset/images/image';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import Carousel from './Slider ';


const images = [
  'https://www.fit-one.de/_Resources/Persistent/e/0/1/d/e01dc4ca6b751154f2dd29ab500318329c2124e5/INGOLSTADT_EDITED-11.jpg',
  'https://www.fit-one.de/_Resources/Persistent/a/2/2/3/a22309a138350314df3f7ef287896d996f782436/INGOLSTADT_EDITED-13.jpg',
  'https://www.fit-one.de/_Resources/Persistent/9/4/d/f/94dfc44ae096d66fa065488f056840deb27a303d/INGOLSTADT_EDITED-17.jpg',
];

const ComingSoon = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChange = (index) => {
    setCurrentIndex(index);
  };

  const backgroundImageStyle = {
    backgroundImage: `url(${images[currentIndex]})`, // Dynamically change background image
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={backgroundImageStyle}
      >
        {/* Semi-transparent Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <div className="flex justify-center flex-grow">
          <Link to={`/rejister`} className="">
            <div className="bg-[#78ce2b] mt-[38%] sm:mt-[17%] text-center hover:bg-[#8aec35] hover:text-white text-[white] text-[18px] border-[1px] border-[#707070] font-semibold px-[15px] py-[12px] rounded-lg">
              Add New Member
            </div>
          </Link>
        </div>
        <div className="flex justify-center items-center h-screen">
          <Carousel images={images} onSlideChange={handleSlideChange} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ComingSoon;