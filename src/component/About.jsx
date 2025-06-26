import React, { useEffect, useState } from "react";
import Dentacare from "./Dentacare";
import Testimony from "./Testimony";
import Achievement from "./Achievement";
import axios from "axios";

const About = () => {
  const [activeTab, setActiveTab] = useState("whatwedo");
  const [AboutUser, setAboutUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://admin.gosaviadvanceddentalclinic.com/api/getAbout");
      setAboutUser(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <section className="home-slider">
        <div
          className="slider-item bread-item"
          style={{ backgroundImage: 'url("images/banner3.png")' }}
          data-stellar-background-ratio="0.5"
        >
          <div className="overlay" />
          <div className="container" data-scrollax-parent="true">
            <div className="row slider-text align-items-end">
              <div className="col-md-7 col-sm-12 mb-5">
                <p className="breadcrumbs">
                  <span className="mr-2">
                    <a href="/">Home</a>
                  </span>
                  <span>About</span>
                </p>
                <h1 className="mb-3">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section">
        <div className="container">
          {AboutUser.map((user, index) => {
            return (
              <div className="row d-md-flex" key={index}>
                <div
                  className="col-md-6 img about-image order-md-last"
                  // style={{ backgroundImage: "url(images/about.jpg)" }}
                >
                  <img src={user.aboutimage} alt="About" />
                </div>

                <div className="col-md-6 pr-md-5 order-md-first">
                  <div className="row">
                    <div className="col-md-12 nav-link-wrap mb-5">
                      <div
                        className="nav nav-pills"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <button
                          className={`nav-link ${
                            activeTab === "whatwedo" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("whatwedo")}
                        >
                          What we do
                        </button>
                        <button
                          className={`nav-link ${
                            activeTab === "mission" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("mission")}
                        >
                          Our mission
                        </button>
                        <button
                          className={`nav-link ${
                            activeTab === "goal" ? "active" : ""
                          }`}
                          onClick={() => setActiveTab("goal")}
                        >
                          Our goal
                        </button>
                      </div>
                    </div>

                    <div className="col-md-12 d-flex align-items-center">
                      <div className="tab-content w-100">
                        {activeTab === "whatwedo" && (
                          <div className="tab-pane fade show active">
                            <h2 className="mb-4">{user.title1}</h2>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: user.description1,
                              }}
                            ></p>
                          </div>
                        )}
                        {activeTab === "mission" && (
                          <div className="tab-pane fade show active">
                            <h2 className="mb-4">{user.title2}</h2>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: user.description2,
                              }}
                            ></p>
                          </div>
                        )}
                        {activeTab === "goal" && (
                          <div className="tab-pane fade show active">
                            <h2 className="mb-4">{user.title3}</h2>
                            <p
                              dangerouslySetInnerHTML={{
                                __html: user.description3,
                              }}
                            ></p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Dentacare />
      <Testimony />
      <Achievement />
    </div>
  );
};

export default About;
