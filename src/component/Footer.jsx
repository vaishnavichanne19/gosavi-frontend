import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [BlogUser, setBlogUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://admin.gosaviadvanceddentalclinic.com/api/getblog");
      setBlogUser(response.data);
    };

    fetchData();
  }, []);

  const [ContactUser, setContactUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://admin.gosaviadvanceddentalclinic.com/api/getContact");
      setContactUser(response.data);
    };

    fetchData();
  }, []);

  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-3">
            <div className="ftco-footer-widget mb-4">
              <img
                className="img_navbar_logo"
                src="images/logo1.png
          "
              />
            </div>
            <ul className="ftco-footer-social list-unstyled float-md-left float-lft ">
              <li>
                <a href="#">
                  <span>
                    <i className="fa-brands fa-twitter" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <i className="fa-brands fa-facebook-f" />
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <i className="fa-brands fa-instagram" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-2">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Quick Links</h2>
              <ul className="list-unstyled">
                <li>
                  <Link to="/about" className="py-2 d-block">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/service" className="py-2 d-block">
                    Service
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="py-2 d-block">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="py-2 d-block">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 pr-md-4">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Recent Blog</h2>
              {BlogUser.slice(0, 2).map((user, index) => {
                  return (
              <div className="block-21 mb-4 d-flex">
                <a
                  className="blog-img mr-4"
                  style={{ backgroundImage: `url(${user.blogimage})` }}
                />
                <div className="text">
                  <h3 className="heading">
                    <a href="#" dangerouslySetInnerHTML={{ __html: user.description }}>
                    </a>
                  </h3>
                  <div className="meta">
                    <div>
                      <a href="#">
                        <i className="fa-solid fa-calendar-days" />{new Date(user.date).toLocaleDateString()}
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <i className="fa-solid fa-user" /> {user.title}
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <i className="fa-solid fa-message" /> 19
                      </a>
                    </div>
                  </div>
                </div>
              </div>
                  )})}
              {/* <div className="block-21 mb-4 d-flex">
                <a
                  className="blog-img mr-4"
                  style={{ backgroundImage: "url(images/image_2.jpg)" }}
                />
                <div className="text">
                  <h3 className="heading">
                    <a href="#">
                      Even the all-powerful Pointing has no control about
                    </a>
                  </h3>
                  <div className="meta">
                    <div>
                      <a href="#">
                        <i className="fa-solid fa-calendar-days" /> Sept 15,
                        2018
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <i className="fa-solid fa-user" /> Admin
                      </a>
                    </div>
                    <div>
                      <a href="#">
                        <i className="fa-solid fa-message" /> 19
                      </a>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-md-3">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Office</h2>

              <div className="block-23 mb-3">
                <ul>
                {ContactUser.map((user) => {
            return (
                  <li className="row">
                    <span className="col-lg-6 col-md-6 col-sm-12 icon">
                    {user.heading}:
                    </span>
                    <span className="col-lg-6 col-md-6 col-sm-12 text">
                      {user.para}
                    </span>
                  </li>
            )})}
                  {/* <li>
                    <a href="#">
                      <span className="icon">
                        {" "}
                        <i className="fa-solid fa-phone" />
                      </span>
                      <span className="text">+02 071 185 854</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon">
                        <i className="fa-solid fa-envelope" />
                      </span>
                      <span className="text">info@gosaviclinic.com</span>
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">
            <p>
            © Gosavi's Advanved Dental Clinic — All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
