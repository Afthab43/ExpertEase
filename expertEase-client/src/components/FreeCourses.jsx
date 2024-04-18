import list from "../../public/list.json";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import Card from "./Card";

function FreeCourses() {
  let filterData = list.filter(({ category }) => category === "Free");
  //   console.log(filterData);

  var settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-3">
        <div className="flex-col space-y-4">
          <h1 className="text-3xl font-bold font-serif">
            <span className="text-indigo-700 cursor-pointer">Free</span> Offered
            Courses
          </h1>
          <p className="font-serif">
            Accessible Learning for All, Without Cost offers a diverse array of
            high-quality courses at no charge, breaking barriers to education
            and providing opportunities for skill enhancement and personal
            growth.
          </p>
        </div>

        <Slider className="" {...settings}>
          {filterData.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default FreeCourses;
