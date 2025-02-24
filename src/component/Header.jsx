import { padding, width } from '@mui/system';
import React from 'react'
import { AppImages } from '../Asset/images/image';
// import Main from './Main';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <section className="w-[100%] h-[80px]  p-2 bg-black">
        <div className=" flex flex-row h-[80px] justify-between">
          {/* <div className="w-[150px] bg-white rounded-3xl sm:rounded-3xl"> */}
            <Link to={`/`}>
              <img src={AppImages.gym} className='h-[90%]' alt="" />
            </Link>
          {/* </div> */}
          <div className="flex justify-center items-center ">
            
            <Link to={`/table`}>
              <div className="text-[23px] px-4 font-bold text-[#78ce2b] hover:text-[#8aec35] cursor-pointer">
                MEMBERS
              </div>
            </Link>
            <Link to={`/trainer`}>
              <div className="text-[23px] px-4 font-bold text-[#78ce2b] hover:text-[#8aec35] cursor-pointer">
                TRAINERS
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header