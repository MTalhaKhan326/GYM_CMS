import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AppImages } from "../Asset/images/image";
import Footer from "./Footer";
import Header from "./Header";
// import data from "./Data";
import Loading from "./basic/Loading";
import { blogTrainer } from "./trainer";
// import WebHeader from "./WebHeader";
// import axios from "axios";
import { useSearchParams } from "react-router-dom";

const TrainerMeal = () => {
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
  let data = blogTrainer.find(({ id }) => id == formFields.search);
  const [dataa, setData] = useState(
    blogTrainer.find((item) => item.name === formFields.search)
  );
  console.log("Data", dataa, formFields.search);

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
                    className="h-full w-[20%] object-cover rounded-xl"
                  />
                </div>

                {/* </a> */}

                <div className="w-full flex flex-row mt-3">
                  <div className="w-[30%] flex flex-col font-bold text-[20px] ml-4">
                    <div> Name :</div>
                   <div>Experience :</div>
                    <div>Phone :</div>
                  </div>
                  <div className="w-[70%] flex flex-col text-[20px]">
                    <div>{dataa.name}</div>

                    <div>{dataa.experience}</div>
                    <div className="flex flex-row">
                      <div>{dataa.phone}</div>{" "}
                      {/* <div
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
                      </div> */}
                    </div>
                    {/* <div>{item.phone}</div> */}
                    <div>{dataa.area}</div>
                  </div>
                </div>
                <div className="flex flex-row justify-between px-8 mt-8">
                  <div className="w-[40%]">
                    <div className="text-[22px] font-bold text-gray-500">
                      MEAL :{" "}
                    </div>
                    <div className="text-[14px] py-4">
                      <span className="text-[16px] font-bold text-gray-500">
                        Day 1:
                      </span>
                      <br /> Breakfast: Scrambled eggs with spinach and cherry
                      tomatoes. Snack: Greek yogurt with a handful of mixed
                      berries. Lunch: Grilled chicken breast with roasted
                      vegetables (broccoli, bell peppers, and carrots). Snack:
                      Sliced cucumber with hummus. Dinner: Baked salmon with
                      steamed asparagus and quinoa. <br />{" "}
                      <span className="text-[16px] font-bold text-gray-500">
                        Day 2:
                      </span>{" "}
                      <br />
                      Breakfast: Oatmeal with sliced bananas and a sprinkle of
                      cinnamon. Snack: Apple slices with almond butter. Lunch:
                      Turkey and avocado wrap using whole-grain tortilla. Snack:
                      Carrot sticks with a small portion of cottage cheese.
                      Dinner: Stir-fried tofu with mixed vegetables and brown
                      rice.
                      <br />{" "}
                      <span className="text-[16px] font-bold text-gray-500">
                        Day 3:
                      </span>
                      <br /> Breakfast: Greek yogurt parfait with granola and
                      mixed berries. Snack: Handful of almonds and a small
                      orange. Lunch: Grilled shrimp salad with mixed greens,
                      cherry tomatoes, and vinaigrette dressing. Snack: Celery
                      sticks with peanut butter. Dinner: Baked chicken breast
                      with roasted sweet potatoes and green beans.
                      <br />{" "}
                      <span className="text-[16px] font-bold text-gray-500">
                        Day 4:
                      </span>
                      <br /> Breakfast: Smoothie with spinach, banana,
                      unsweetened almond milk, and protein powder. Snack: Sliced
                      pear with a handful of walnuts. Lunch: Quinoa and black
                      bean salad with diced tomatoes and cilantro. Snack: Rice
                      cakes with avocado slices. Dinner: Baked cod with steamed
                      broccoli and cauliflower rice.
                      <br />{" "}
                      <span className="text-[16px] font-bold text-gray-500">
                        Day 5:
                      </span>
                      <br /> Breakfast: Whole-grain toast with avocado and
                      poached eggs. Snack: Cottage cheese with pineapple chunks.
                      Lunch: Lentil soup with a side of mixed greens. Snack:
                      Sliced bell peppers with guacamole. Dinner: Grilled turkey
                      burger with lettuce wraps and sweet potato fries.
                      <br />{" "}
                      <span className="text-[16px] font-bold text-gray-500">
                        Day 6:
                      </span>
                      <br /> Breakfast: Chia seed pudding with sliced
                      strawberries. Snack: Handful of mixed nuts. Lunch: Grilled
                      vegetable wrap using a whole-grain tortilla. Snack: Rice
                      cakes with hummus and cherry tomatoes. Dinner: Baked
                      tilapia with quinoa and steamed broccoli.
                      <br />{" "}
                      <span className="text-[16px] font-bold text-gray-500">
                        Day 7:
                      </span>
                      <br /> Breakfast: Smoothie with mixed berries, spinach,
                      Greek yogurt, and flaxseeds. Snack: Apple slices with a
                      small portion of cottage cheese. Lunch: Grilled chicken
                      salad with mixed greens, cucumber, and balsamic
                      vinaigrette. Snack: Carrot sticks with hummus. Dinner:
                      Stir-fried tofu with broccoli, snap peas, and brown rice.
                    </div>
                  </div>
                  <div className="w-[40%]">
                    <div className=" ">
                      <div className="text-[22px] font-bold text-gray-500">
                        EXERCISES :
                      </div>
                      <div className="text-[14px] py-4">
                        Jumping Jacks - 5 minutes <br /> Squats - 10 minutes
                        <br />
                        Push-ups - 7 minutes <br /> Plank - 5 minutes <br />
                        Lunges - 8 minutes <br /> Burpees - 10 minutes <br />
                        Mountain Climbers - 7 minutes <br /> High Knees - 6
                        minutes
                      </div>
                    </div>
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

export default TrainerMeal;
