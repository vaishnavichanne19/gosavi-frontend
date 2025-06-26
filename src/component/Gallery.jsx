import React, { useEffect, useState } from "react";
import Achievement from "./Achievement";
import axios from "axios";

const Gallery = () => {
  const [GalleryDataUser, setGalleryDataUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://admin.gosaviadvanceddentalclinic.com/api/getGalleryData"
      );
      setGalleryDataUser(response.data);
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
                  <span>gallery</span>
                </p>
                <h1
                  className="mb-3"
                  data-scrollax=" properties: { translateY: '70%', opacity: .9}"
                >
                  gallery
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container gallery">
          <div className="row pt-md-2">
            {GalleryDataUser.map((user) => {
              return (
                <div className="col-md-4 p-2 ">
                  <div className="card  text-white zoom">
                    <img
                      src={user.gallerydataimage}
                      alt="GalleryData"
                      className="card-img"
                    />
                    <div
                      className="card-img-overlay "
                      style={{ paddingTop: "20rem" }}
                    >
                      <h5 className="card-title">{user.heading}</h5>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="col-md-4 p-2  ">
        <div className="card  text-white zoom">
          <img src="images/1 (2).png" className="card-img" alt="..." />
          <div className="card-img-overlay " style={{ paddingTop: "20rem" }}>
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div> */}
            {/* <div className="col-md-4 p-2  ">
        <div className="card  text-white zoom">
          <img src="images/1 (3).png" className="card-img" alt="..." />
          <div className="card-img-overlay " style={{ paddingTop: "20rem" }}>
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div> */}
          </div>
          {/* <div className="row pt-md-2">
      <div className="col-md-4 p-2 ">
        <div className="card  text-white zoom">
          <img src="images/1 (1).png" className="card-img" alt="..." />
          <div className="card-img-overlay " style={{ paddingTop: "20rem" }}>
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 p-2  ">
        <div className="card  text-white zoom">
          <img src="images/1 (2).png" className="card-img" alt="..." />
          <div className="card-img-overlay " style={{ paddingTop: "20rem" }}>
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 p-2  ">
        <div className="card  text-white zoom">
          <img src="images/1 (3).png" className="card-img" alt="..." />
          <div className="card-img-overlay " style={{ paddingTop: "20rem" }}>
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
    </div> */}
          {/* <div className="row pt-2">
      <div className="col-md-4 p-2 ">
        <div className="card  text-white zoom">
          <img src="images/1 (1).png" className="card-img" alt="..." />
          <div className="card-img-overlay " style={{ paddingTop: "20rem" }}>
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 p-2 ">
        <div className="card  text-white zoom">
          <img src="images/1 (2).png" className="card-img" alt="..." />
          <div className="card-img-overlay " style={{ paddingTop: "20rem" }}>
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 p-2 ">
        <div className="card  text-white zoom">
          <img src="images/1 (3).png" className="card-img" alt="..." />
          <div className="card-img-overlay " style={{ paddingTop: "20rem" }}>
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
    </div>
    <div className="row pt-2">
      <div className="col-md-4 p-2 ">
        <div className="card  text-white zoom">
          <img src="images/1 (1).png" className="card-img" alt="..." />
          <div className="card-img-overlay " style={{ paddingTop: "20rem" }}>
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 p-2 ">
        <div className="card  text-white zoom">
          <img src="images/1 (2).png" className="card-img" alt="..." />
          <div className="card-img-overlay " style={{ paddingTop: "20rem" }}>
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 p-2 ">
        <div className="card  text-white zoom">
          <img src="images/1 (3).png" className="card-img" alt="..." />
          <div className="card-img-overlay " style={{ paddingTop: "20rem" }}>
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
    </div>
    <div className="row pt-2">
      <div className="col-md-4 p-2 ">
        <div className="card  text-white zoom">
          <img src="images/1 (1).png" className="card-img" alt="..." />
          <div className="card-img-overlay " style={{ paddingTop: "20rem" }}>
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 p-2 ">
        <div className="card  text-white zoom">
          <img src="images/1 (2).png" className="card-img" alt="..." />
          <div className="card-img-overlay " style={{ paddingTop: "20rem" }}>
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 p-2 ">
        <div className="card  text-white zoom">
          <img src="images/1 (3).png" className="card-img" alt="..." />
          <div className="card-img-overlay " style={{ paddingTop: "20rem" }}>
            <h5 className="card-title">Card title</h5>
          </div>
        </div>
      </div>
    </div> */}
        </div>
      </section>
      <Achievement />
    </div>
  );
};

export default Gallery;
