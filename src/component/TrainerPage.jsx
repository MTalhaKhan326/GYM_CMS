import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppImages } from "../Asset/images/image";
import Footer from "./Footer";
import Header from "./Header";
// import data from "./Data";
import Loading from "./basic/Loading";
import ReactModal from "react-modal";
import { blogTrainer } from "./trainer";
// import WebHeader from "./WebHeader";
// import axios from "axios";
import { useSearchParams } from "react-router-dom";

const TrainerPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showLoader, setShowLoader] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState("");
  const searchdata = searchParams.get("q");

  // const { searchdata , latitude , longitude } = useParams();
  console.log("Search", searchdata);
  const [formFields, setFormFields] = useState({ search: searchdata });
  const [dataa, setData] = useState(
    blogTrainer
  );
  const [isOpen1, setIsOpen1] = useState(false);
const openModal1 = useCallback(() => setIsOpen1(true), []);
const closeModal1 = useCallback(() => setIsOpen1(false), []);
  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("search", formFields.search);
    setData(blogTrainer.filter((word) => word.area === formFields.search));
  };

  console.log("dataaa", dataa);
  const handleButtonClick = (name) => {
    setSelectedTrainer(name);
    openModal1();
  };


  return (
    <>
      {/* <div className="block md:hidden"> */}
        <Header />
        {/* <form onSubmit={onSubmit}>
          <div className="flex mt-2 md:mt-2 items-center w-[100%]">
            <input
              type="text"
              placeholder="Search..."
              value={formFields.search}
              className="px-4 py-2 w-full border border-gray-300 rounded-l-lg focus:outline-none"
              onChange={(e) => {
                setFormFields(() => ({ search: e.target.value }));
              }}
            />
            <button
              className="px-4 py-2 bg-gray-200 text-white rounded-r-lg justify-center items-center"
              // onClick={() => fetchData()}
            >
              <img
                src={AppImages.search}
                alt=""
                srcset=""
                className="w-[27px] h-[27px]"
              />
            </button>
          </div>
        </form> */}
      {/* </div> */}
      {/* <div className="hidden md:block mx-[3%]">
        <form onSubmit={onSubmit} className="my-4">
          <div className="flex flex-row">
            <Link to={`/`}>
              <div className="w-[20%] sm:w-[200px] bg-white rounded-3xl sm:rounded-3xl">
                <img src={AppImages.gym} alt="" />
              </div>
            </Link> */}
            {/* <div className="flex mt-2 md:mt-2 items-center w-[40%]">
              <input
                type="text"
                placeholder="Search..."
                value={formFields.search}
                className="px-4 py-2 w-full border border-gray-300 rounded-l-lg focus:outline-none"
                onChange={(e) => {
                  setFormFields(() => ({ search: e.target.value }));
                }}
              />
              <button
                className="px-4 py-2 bg-gray-200 text-white rounded-r-lg justify-center items-center"
                // onClick={() => fetchData()}
              >
                <img
                  src={AppImages.search}
                  alt=""
                  srcset=""
                  className="w-[27px] h-[27px]"
                />
              </button>
            </div> */}
          {/* </div>
        </form>
      </div> */}
      {/* </div> */}
      {showLoader && <Loading />}
      <div className="container mx-auto px-auto flex flex-col w-full justify-center mb-[40px] md:mx-[3%]">
        <div className="flex flex-wrap">
          {dataa === "" ? (
            <Loading />
          ) : (
            dataa.map((item, index) => (
              <div key={index} className="w-full md:w-1/1 px-1 my-2 h-[230px]">
                <div className="flex flex-row w-full border-[1px] justify-between border-gray-300 rounded-lg">
                  <div className="w-[20%] p-2">
                    <img className="h-[200px]" src={item.photo_urls} alt="" />
                  </div>
                  <div className="w-[70%] p-2">
                    <div>
                      <div className="flex flex-row justify-between">
                        <div className="text-[22px] font-bold text-gray-600">
                          {item.name}
                        </div>
                        <div className="text-[16px] font-semibold text-gray-400">
                          Experience : {item.experience}
                        </div>
                      </div>
                      <div className="text-[14px] text-gray-600">
                        {item.note}
                      </div>
                      <div className="text-[22px] font-bold text-gray-600">
                        Packages :
                      </div>
                      <div className="flex flex-row justify-between">
                        <div className="text-[18px] font-semibold text-gray-500">
                          1 Month = <span>{item.mon}</span> , 6 Month ={" "}
                          <span>{item.sixmon}</span> , 1 Year ={" "}
                          <span>{item.twelmon}</span>
                        </div>
                        <div>
                          <button
                            className="bg-slate-400 px-2 text-[15px] hover:bg-white hover:border-[1px] hover:border-slate-400 hover:text-slate-400 rounded-xl py-1 text-white"
                            onClick={() => handleButtonClick(item.name)}
                          >
                            Book Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
      <ReactModal
        isOpen={isOpen1}
        onRequestClose={closeModal1}
        style={{
          content: {
            borderRadius: "10px",
            height: "180px",
            marginTop: "180px",
            // width: "50%",
            display: "flex",
            justifyContent: "center",
            // Set the desired height here
          },
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust the opacity and color as needed
          },
        }}
      >
        <div className="flex flex-col">
          <div className="text-[#2b2b2b] flex justify-center text-center text-[20px] mt-2 font-bold">
            Confirmation !
          </div>
          <div className="text-[#2b2b2b] text-[14px] ml-2 mt-4 font-semibold">
            Are you sure you want to Book this trainer ?
          </div>
          <div className="flex flex-row justify-between">
            {/* <div className="flex items-center justify-center">OK</div> */}
            {/* <div> */}
            <Link to={`/meal?q=${selectedTrainer}`}>
              <div
                type="submit"
                className="bg-[#f4f4f4] w-[130px] text-center hover:bg-[#707070]  hover:text-white mt-3 text-[#363636] text-[13px] border-[1px] border-[#707070] font-semibold py-[5px]  rounded-lg"
                onClick={closeModal1}
              >
                Done
              </div>
            </Link>
            {/* </div> */}
            {/* <div className="flex items-center justify-center">Cancel</div> */}
            <button
              type="submit"
              className="bg-[#f4f4f4] hover:bg-[#707070] hover:text-white mt-3 w-[47%] text-[#363636] text-[13px] border-[1px] border-[#707070] font-semibold py-[5px]  rounded-lg"
              onClick={closeModal1}
            >
              Cancel
            </button>
          </div>
        </div>
        <div></div>

        {/* </div> */}
        {/* <input type="button" value="Close modal" onClick={closeModal} /> */}
      </ReactModal>
    </>
  );
};

export default TrainerPage;

