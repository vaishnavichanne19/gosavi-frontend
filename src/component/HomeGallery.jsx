import axios from "axios";
import React, { useEffect, useState } from "react";

const HomeGallery = () => {
  const [GalleryUser, setGalleryUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://admin.gosaviadvanceddentalclinic.com/api/getgallery");
      setGalleryUser(response.data);
    };
    fetchData();
  }, []);

  return (
    <section className="ftco-gallery">
      <div className="container-wrap">
        <div className="row no-gutters">
        {GalleryUser.map((user) => {
              return (
          <div className="col-md-3">
            <a
              href="#"
              className="gallery img d-flex align-items-center"
              style={{ backgroundImage: `url(${user.galleryimage})` }}
            >
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span>
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
              </div>
            </a>
          </div>
              )})}
          {/* <div className="col-md-3">
            <a
              href="#"
              className="allery img d-flex align-items-center"
              style={{ backgroundImage: "url(images/gallery-2.jpg)" }}
            >
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span>
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="#"
              className="allery img d-flex align-items-center"
              style={{ backgroundImage: "url(images/gallery-3.jpg)" }}
            >
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span>
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
              </div>
            </a>
          </div>
          <div className="col-md-3">
            <a
              href="#"
              className="allery img d-flex align-items-center"
              style={{ backgroundImage: "url(images/gallery-4.jpg)" }}
            >
              <div className="icon mb-4 d-flex align-items-center justify-content-center">
                <span>
                  <i className="fa-solid fa-magnifying-glass" />
                </span>
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HomeGallery;
