import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

const Testimony = () => {
  const [TestimonyTopUser, setTestimonyTopUser] = useState([]);
  const [TestimonyUser, setTestimonyUser] = useState([]);

  //   Testimony top api
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://admin.gosaviadvanceddentalclinic.com/api/gettestimonytop"
      );
      setTestimonyTopUser(response.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://admin.gosaviadvanceddentalclinic.com/api/gettestimony");
      setTestimonyUser(response.data);
    };

    fetchData();
  }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };


  return (
    <section className="ftco-section testimony-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
        {TestimonyTopUser.map((user) => {
            return (
          <div className="col-md-7 text-center heading-section">
            <h3 className="" style={{ color: "black" }}>{user.heading}</h3>
            <span className="subheading">{user.para}</span>
          </div>
            )})}
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Slider {...settings}>
              {TestimonyUser.map((testimonial, index) => (
                <div key={index} className="item">
                  <div className="testimony-wrap p-4 pb-5">
                    <div
                      className="user-img mb-5"
                      style={{ backgroundImage: `url(${testimonial.testimonyimage})` }}
                    >
                      <span className="quote d-flex align-items-center justify-content-center">
                      <i className="fa-solid fa-quote-left" />
                      </span>
                    </div>
                    <div className="text text-center">
                      <p className="mb-5" dangerouslySetInnerHTML={{ __html: testimonial.description }}></p>
                      <p className="name">{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimony;

