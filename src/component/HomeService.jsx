import axios from "axios";
import React, { useEffect, useState } from "react";

const HomeService = () => {
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
    <section className="ftco-section ftco-services">
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
          {ServiceUser.slice(0, 4).map((user, index) => {
            return (
              <div key={index} className="col-md-3 d-flex align-self-stretch">
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
      </div> */}
        </div>
      </div>
    </section>
  );
};

export default HomeService;
