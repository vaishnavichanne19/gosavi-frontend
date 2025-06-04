import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import Appointment from "./Appointment";

const Banner = () => {
    const [showModal, setShowModal] = useState(false);
  
    useEffect(() => {
      if (showModal) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
  
      return () => document.body.classList.remove('modal-open');
    }, [showModal]);

  // banner api
  const [BannerUser, setBannerUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://admin.gosaviadvanceddentalclinic.com/api/getbanner");
      setBannerUser(response.data);
    };

    fetchData();
  }, []);

  // emergency api
  const [EmergencyUser, setEmergencyUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://admin.gosaviadvanceddentalclinic.com/api/getbannerCard1"
      );
      setEmergencyUser(response.data);
    };

    fetchData();
  }, []);

  // opening hour api
  const [OpeningHourTopUser, setOpeningHourTopUser] = useState([]);
  const [OpeningHourUser, setOpeningHourUser] = useState([]);

  // opening hour  top api
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://admin.gosaviadvanceddentalclinic.com/api/getbannerTopCard2"
      );
      setOpeningHourTopUser(response.data);
    };

    fetchData();
  }, []);

  // opening hour api
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://admin.gosaviadvanceddentalclinic.com/api/getbannerCard2"
      );
      setOpeningHourUser(response.data);
    };

    fetchData();
  }, []);

  // appointment form api
  const [AppointmentForm, setAppointmentForm] = useState({
    department: "",
    fullname: "",
    email: "",
    date: "",
    time: "",
    phone: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setAppointmentForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://admin.gosaviadvanceddentalclinic.com/api/createHomeAppointmentForm",
        AppointmentForm
      );

      setAppointmentForm({
        department: "",
        fullname: "",
        email: "",
        date: "",
        time: "",
        phone: "",
      });

      toast.success("Data added successfully!");
    } catch (error) {
      console.error("Error adding Data:", error);
      toast.error("Failed to add Data!");
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div>
      <section className="home-slider">
        <Slider {...settings}>
          {BannerUser.map((user, index) => (
            <div key={index}>
              <div
                className="slider-item"
                style={{
                  backgroundImage: `url(${user.bannerimage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "700px",
                }}
              >
                <div className="overlay" />
                <div className="container">
                  <div className="row align-items-center">
                    <div className="col-md-6 col-sm-12 slider-text1">
                      <h1 className="mb-4">{user.heading}</h1>
                      <p
                        className="mb-4"
                        dangerouslySetInnerHTML={{ __html: user.description }}
                      ></p>
                      <p>
                        <Link onClick={() => setShowModal(true)} className="btn btn-primary px-4 py-3">
                          <span>Make an Appointment</span>
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {showModal && <Appointment onClose={() => setShowModal(false)} />}
      </section>

      <section className="ftco-intro">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-md-6">
              <div className="row">
                {EmergencyUser.map((user, index) => {
                  return (
                    <div className="col-md-6 color-1 p-4" key={index}>
                      <h3 className="mb-4">{user.heading}</h3>
                      <p
                        style={{ color: "white" }}
                        dangerouslySetInnerHTML={{ __html: user.description }}
                      ></p>
                      <span className="phone-number">{user.number}</span>
                    </div>
                  );
                })}

                <div className="col-md-6 color-2 p-4">
                  {OpeningHourTopUser.map((user) => {
                    return (
                      <h3 className="mb-4" style={{ color: "black" }}>
                        {user.heading}
                      </h3>
                    );
                  })}
                  {OpeningHourUser.map((user) => {
                    return (
                      <p className="openinghours d-flex">
                        <span>{user.day}</span>
                        <span>{user.time}</span>
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="col-md-6 color-3 p-4">
              <h3 className="mb-2">Make an Appointment</h3>
              <form onSubmit={submitForm} className="appointment-form">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <div className="select-wrap">
                        <div className="icon">
                          <i className="fa-solid fa-angle-down" />
                        </div>
                        <select
                          name="department"
                          onChange={inputHandler}
                          value={AppointmentForm.department}
                          id=""
                          className="form-control"
                        >
                          <option value="Department">Department</option>
                          <option value="Teeth Whitening">
                            Teeth Whitening
                          </option>
                          <option value="Teeth CLeaning">Teeth CLeaning</option>
                          <option value="Quality Brackets">
                            Quality Brackets
                          </option>
                          <option value="Modern Anesthetic">
                            Modern Anesthetic
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <div className="icon">
                        <i className="fa-solid fa-user" />
                      </div>
                      <input
                        type="text"
                        name="fullname"
                        onChange={inputHandler}
                        value={AppointmentForm.fullname}
                        className="form-control"
                        id="fullname"
                        placeholder="Name"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <div className="icon">
                        <i className="fa-solid fa-paper-plane" />
                      </div>
                      <input
                        type="text"
                        name="email"
                        onChange={inputHandler}
                        value={AppointmentForm.email}
                        className="form-control"
                        id="email"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-4">
                    <div className="form-group">
                      <div className="icon">
                        <i className="fa-regular fa-calendar" />
                      </div>
                      <input
                        name="date"
                        onChange={inputHandler}
                        value={AppointmentForm.date}
                        type="date"
                        className="form-control appointment_date"
                        placeholder="Date"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <div className="icon">
                        <i className="fa-regular fa-clock" />
                      </div>
                      <input
                        type="time"
                        name="time"
                        onChange={inputHandler}
                        value={AppointmentForm.time}
                        className="form-control appointment_time"
                        placeholder="Time"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="form-group">
                      <div className="icon">
                        <i className="fa-solid fa-phone" />
                      </div>
                      <input
                        type="phone"
                        name="phone"
                        onChange={inputHandler}
                        value={AppointmentForm.phone}
                        className="form-control"
                        id="phone"
                        placeholder="Phone"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    defaultValue="Make an Appointment"
                    className="btn btn-primary"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </div>
  );
};

export default Banner;
