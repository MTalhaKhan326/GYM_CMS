import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./homePage.css"
import { AppImages } from "../Asset/images/image";
import Header from "./Header";

const HomePage = () => {
  const fields = {
    search: null,
  };
  const [formFields, setFormFields] = useState(fields);

  const [location, setLocation] = useState({
    latitude: null,
    longitude: null,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  return (
    <>
    <Header/>
      <div
        className="home-page"
        style={{
          backgroundImage: `url(${AppImages.backgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <form className="flex flex-col justify-center items-center h-screen">
          <div className=" text-[#fafbfe] md:text-[58px] text-[32px] font-bold">
            FIT LIFE
          </div>

          <div className="flex items-center w-5/5">
            <input
              type="text"
              placeholder="Search Gym..."
              className="px-4 py-2 md:w-[40vw] w-[90vw] border border-gray-300 rounded-l-lg focus:outline-none"
              onChange={(e) => {
                setFormFields(() => ({ search: e.target.value }));
              }}
            />
            <Link
              to={`/search?q=${formFields.search}&lat=${location.latitude}&lng=${location.longitude}`}
            >
              <button className="px-4 py-2 bg-gray-200 text-white rounded-r-lg">
                <img
                  src={AppImages.search}
                  alt=""
                  srcset=""
                  className="w-[27px] h-[27px]"
                />
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default HomePage;
