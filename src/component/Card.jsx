import React from 'react'
import { blogTrainer } from './trainer'
import { useState } from 'react'
const Card = () => {
    const [data, setData] = useState(blogTrainer)
  return (
    <div className="w-full flex flex-wrap">
      {data.map((item) => (
        <div className="w-[32%] h-[40%] flex flex-col p-2 mb-5 bg-slate-300 mx-[5%]">
          <div className="text-[24px] font-bold ">{item.name}</div>
          <img
            src={item.photo_urls}
            alt=""
            srcset=""
            className="w-[50%] h-[300px] mr-3 cursor-pointer"
          />
          <div className="text-[18px] font-semibold text-gray-400">
            {item.experience}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card