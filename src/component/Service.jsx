import React, { useEffect, useState } from "react";
import Achievement from "./Achievement";
import Price from "./Price";
import axios from "axios";

const Service = () => {
  const [ServiceTopUser, setServiceTopUser] = useState([]);
  const [ServiceUser, setServiceUser] = useState([]);

  //   service top api
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://admin.gosaviadvanceddentalclinic.com/api/getservicetop"
      );
      setServiceTopUser(response.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://admin.gosaviadvanceddentalclinic.com/api/getservice");
      setServiceUser(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <section className="home-slider owl-carousel">
        <div
          className="slider-item bread-item"
          style={{ backgroundImage: 'url("images/banner3.jpg")' }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay" />
          <div className="container" data-scrollax-parent="true">
            <div className="row slider-text align-items-end">
              <div className="col-md-7 col-sm-12 mb-5">
                <p
                  className="breadcrumbs"
                  data-scrollax=" properties: { translateY: '70%', opacity: 1.6}"
                >
                  <span className="mr-2">
                    <a href="index.html">Home</a>
                  </span>{" "}
                  <span>Services</span>
                </p>
                <h1
                  className="mb-3"
                  data-scrollax=" properties: { translateY: '70%', opacity: .9}"
                >
                  Our Service Keeps you Smile
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            {ServiceTopUser.map((user) => {
              return (
                <div className="col-md-7 text-center heading-section">
                  <h2 className="mb-2">{user.heading}</h2>
                  <p>{user.para}</p>
                </div>
              );
            })}
          </div>
          <div className="row">
            {ServiceUser.map((user, index) => {
              return (
                <div className="col-md-3 d-flex align-self-stretch">
                  <div className="media block-6 services d-block text-center">
                    <div className="icon d-flex justify-content-center align-items-center">
                      <img src={user.serviceimage} alt="Service" />
                    </div>
                    <div className="media-body p-2 mt-3">
                      <h3 className="heading">{user.title}</h3>
                      <p
                        dangerouslySetInnerHTML={{ __html: user.description }}
                      ></p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="col-md-3 d-flex align-self-stretch">
        <div className="media block-6 services d-block text-center">
          <div className="icon d-flex justify-content-center align-items-center">
          <img src="images/dental-care.png"></img>
          </div>
          <div className="media-body p-2 mt-3">
            <h3 className="heading">Teeth Cleaning</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex align-self-stretch">
        <div className="media block-6 services d-block text-center">
          <div className="icon d-flex justify-content-center align-items-center">
          <img src="images/braces.png"></img>
          </div>
          <div className="media-body p-2 mt-3">
            <h3 className="heading">Quality Brackets</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex align-self-stretch">
        <div className="media block-6 services d-block text-center">
          <div className="icon d-flex justify-content-center align-items-center">
          <img src="images/vaccine.png"></img>
          </div>
          <div className="media-body p-2 mt-3">
            <h3 className="heading">Modern Anesthetic</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex align-self-stretch">
        <div className="media block-6 services d-block text-center">
          <div className="icon d-flex justify-content-center align-items-center">
          <img src="images/dental-cleaning.png"></img>
          </div>
          <div className="media-body p-2 mt-3">
            <h3 className="heading">Dental Calculus</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex align-self-stretch">
        <div className="media block-6 services d-block text-center">
          <div className="icon d-flex justify-content-center align-items-center">
          <img src="images/bacteria.png"></img>
          </div>
          <div className="media-body p-2 mt-3">
            <h3 className="heading">Paradontosis</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex align-self-stretch">
        <div className="media block-6 services d-block text-center">
          <div className="icon d-flex justify-content-center align-items-center">
          <img src="images/dentist.png"></img>
          </div>
          <div className="media-body p-2 mt-3">
            <h3 className="heading">Dental Implants</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-3 d-flex align-self-stretch">
        <div className="media block-6 services d-block text-center">
          <div className="icon d-flex justify-content-center align-items-center">
          <img src="images/tooth-filling.png"></img>
          </div>
          <div className="media-body p-2 mt-3">
            <h3 className="heading">Tooth Braces</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
      </div> */}
          </div>
        </div>
      </section>
      <Achievement />
    </div>
  );
};

export default Service;
