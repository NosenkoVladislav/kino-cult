import React
  // , { useEffect, useState }
  from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Service from "../../service/service";
import CustomArrow from "./Custom-arrow/Custom-arrow";
import img1 from "./slide-img-1.png";
import img2 from "./slide-img-2.png";
import img3 from "./slide-img-3.png";
import img4 from "./slide-img-4.png";

const Carousel = () => {
  // const [images, setImages] = useState([]);
  // const api = new Service();
  //
  // useEffect(() => {
  //     api.getImages().then((images) => {
  //         setImages(images);
  //     });
  // }, []);


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%",
    focusOnSelect: true,
    arrows: true,
    nextArrow: <CustomArrow direction={"right"} />,
    prevArrow: <CustomArrow direction={"left"} />,
  };


  return (
    <Slider {...settings}>
      {/*{data.map((item) => (*/}
      {/*  <div key={item.id}>*/}
      {/*    <img src={item.url} alt={item.title} />*/}
      {/*  </div>*/}
      {/*))}*/}


      <div>
        <img src={img1} alt=""/>
      </div>
      <div>
        <img src={img2} alt=""/>
      </div>
      <div>
        <img src={img3} alt=""/>
      </div>
      <div>
        <img src={img4} alt=""/>
      </div>
    </Slider>
  );
};

export default Carousel;
