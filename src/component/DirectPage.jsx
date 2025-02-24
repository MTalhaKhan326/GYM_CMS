import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppImages } from "../Asset/images/image";
import Footer from "./Footer";
import Header from "./Header";
// import data from "./Data";
import Loading from "./basic/Loading";
import { blogData } from "./gym";
// import WebHeader from "./WebHeader";
// import axios from "axios";
import { useSearchParams } from "react-router-dom";

const DirectPage = () => {
  
  const [searchParams, setSearchParams] = useSearchParams();
  const [showLoader, setShowLoader] = useState(false);
  const name = searchParams.get("q");
  const latitude = searchParams.get("lat");
  const longitude = searchParams.get("lng");
  // const { searchdata , latitude , longitude } = useParams();
  console.log(
    "Search",
    // searchdata,
    "latitudee",
    latitude,
    "longitudee",
    longitude
  );
  const [formFields, setFormFields] = useState({ search: name });
  let data = blogData.find(({ id }) => id == formFields.search);
 const [dataa, setData] = useState(
   blogData.find((item) => item.name === formFields.search)
 );
  console.log("Data",dataa, formFields.search)

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log("search", formFields.search);
  };
  //    const fetchData = async () => {
  //      setShowLoader(true);
  //      axios
  //        .get(
  //          `https://rogvftzrsuaealt3f7htqchmfa0zfumz.lambda-url.eu-west-1.on.aws/markers/nearby?lat=${latitude}8&lng=${longitude}&type=${formFields.search}&radius=2&page_no=1`
  //        )
  //        .then((res) => {
  //          const result = res.data;
  //          setData(result.data?.markers);
  //        })
  //        .finally(() => {
  //          setShowLoader(false);
  //        });
  //      if (formFields.search !== searchdata) {
  //        setSearchParams({ q: formFields.search, lat: latitude, lng: longitude });
  //      }
  //    };

  //  useEffect(() => {
  //    fetchData();
  //  }, []);
  // console.log("dataaa", dataa);
  const handleButtonClick = (phone) => {
    console.log("phoneee", phone);
    window.location.href = `tel:${phone}`;
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
            // dataa.map((item, index) => (
            <div key={dataa} className="w-full md:w-5/5 px-1 my-2">
              <div className="rounded-xl border border-gray-300">
                <div className="h-56 md:h-58 rounded-xl mt-4 flex justify-center items-center">
                  <img
                    src={dataa.photo_urls}
                    alt="image"
                    className="h-full w-[50%] object-cover rounded-xl"
                  />
                </div>

                {/* </a> */}
                <div className="p-2 md:p-2 mt-[18px]">
                  <div className="flex flex-row justify-between">
                    {/* <div className="text-lg font-medium mb-1 w-[74%]">
                        {item.name.replace(/name-/gi, "").slice(0, 17)}
                      </div> */}
                    {dataa.distance ? (
                      <div className="text-sm mb-2 bg-blue text-white h-[20px] text-[14px] md:text-[13px] rounded-md px-2">
                        {/* 1 {item.distanceUnit} */}
                        {dataa.distance < 1
                          ? `${dataa.distance * 1000}` + " m"
                          : `${dataa.distance}` + " km"}
                      </div>
                    ) : null}
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <img
                      src={AppImages.mapIcon}
                      alt=""
                      className="mr-1 w-7 h-7"
                    />
                    <div>
                      <a
                        href={`https://www.google.com/maps/?q=${dataa.address}`}
                        target="_blank"
                        className="text-blue-400 ml-2"
                      >
                        <span>{dataa.address.slice(0, 12)}</span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="w-full flex flex-row">
                  <div className="w-[30%] flex flex-col font-bold text-[20px] ml-4">
                    <div> Name :</div>
                    <div>Address :</div>
                    <div>Phone :</div>
                    <div>Area :</div>
                  </div>
                  <div className="w-[70%] flex flex-col text-[20px]">
                    <div>{dataa.name}</div>
                    <div>{dataa.address}</div>
                    <div className="flex flex-row">
                      <div>{dataa.phone}</div>{" "}
                      <div
                        className="ml-4 rounded-full bg-green-500 w-9 h-9 cursor-pointer"
                        onClick={() => handleButtonClick(dataa.phone)}
                      >
                        <img
                          src={AppImages.phone}
                          alt=""
                          srcset=""
                          className="rounded-full w-[60%] ml-[6px] mt-[6px] text-white"
                          style={{ filter: "brightness(5) invert(1)" }}
                        />
                      </div>
                    </div>
                    {/* <div>{item.phone}</div> */}
                    <div>{dataa.area}</div>
                  </div>
                </div>
              </div>
            </div>
            // )
            // )
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DirectPage;
