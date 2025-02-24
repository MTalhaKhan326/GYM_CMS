import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const Table = () => {
  const formData = useSelector((state) => state.form.formData);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-grow">
      <Link to={`/rejister`} className='pt-[38%] sm:pt-[17%] '>
                    <div className="bg-[#78ce2b]  text-center  hover:bg-[#8aec35] m-2 hover:text-white text-[white] text-[18px] border-[1px] border-[#707070] w-[12%] font-semibold px-[15px] py-[12px]  rounded-lg">
                      Add New Member
                    </div>{" "}
                  </Link>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <table className="w-full max-w-screen-md bg-white">
          <thead>
            <tr className="bg-gray-500 text-white">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Phone</th>
              <th className="px-4 py-2">GYM</th>
              <th className="px-4 py-2">Gender</th>
              <th className="px-4 py-2">City</th>
            </tr>
          </thead>
          <tbody>
            {formData.map((data) => (
              <tr key={data.id} className="border-b">
                <td className="px-4 py-2">{data.name}</td>
                <td className="px-4 py-2">{data.email}</td>
                <td className="px-4 py-2">{data.phone}</td>
                <td className="px-4 py-2">{data.gymname}</td>
                <td className="px-4 py-2">{data.gender}</td>
                <td className="px-4 py-2">{data.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default Table;
