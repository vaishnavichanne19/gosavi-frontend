import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const [ContactTopUser, setContactTopUser] = useState([]);
  const [ContactUser, setContactUser] = useState([]);
  const [ContactForm, setContactForm] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });


  const inputHandler = (e) => {
    const { name, value } = e.target;
    setContactForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://admin.gosaviadvanceddentalclinic.com/api/createContactForm",
        ContactForm
      );

      setContactForm({
        fullname: "",
        email: "",
        subject: "",
        message: "",
      });

      toast.success("Data added successfully!");
    } catch (error) {
      console.error("Error adding Data:", error);
      toast.error("Failed to add Data!");
    }
  };



  // contact top api
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://admin.gosaviadvanceddentalclinic.com/api/getContacttop"
      );
      setContactTopUser(response.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://admin.gosaviadvanceddentalclinic.com/api/getContact");
      setContactUser(response.data);
    };

    fetchData();
  }, []);


  return (
    <div>
      <section className="home-slider owl-carousel">
        <div
          className="slider-item bread-item"
          style={{ backgroundImage: 'url("images/col-2.jpeg")' }}
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
                  <span>Contact</span>
                </p>
                <h1
                  className="mb-3"
                  data-scrollax=" properties: { translateY: '70%', opacity: .9}"
                >
                  Contact Us
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section contact-section ftco-degree-bg">
        <div className="container">
          <div className="row d-flex mb-5 contact-info">
          {ContactTopUser.map((user) => {
            return (
            <div className="col-md-12 mb-4">
              <h2 className="h4">{user.heading}</h2>
            </div>
            )})}
            <div className="w-100" />
            {ContactUser.map((user) => {
            return (
            <div className="col-md-4">
              <p>
                <span>{user.heading}:</span> 
                {user.para}
              </p>
            </div>
            )})}
            {/* <div className="col-md-3">
              <p>
                <span>Phone:</span>{" "}
                <a href="tel://1234567920">+ 1235 2355 98</a>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span>Email:</span>{" "}
                <a href="mailto:info@yoursite.com">info@yoursite.com</a>
              </p>
            </div>
            <div className="col-md-3">
              <p>
                <span>Website</span> <a href="#">yoursite.com</a>
              </p>
            </div> */}
          </div>

          <div className="row block-9">
            <div className="col-md-6 pr-md-5">
              <form onSubmit={submitForm}>
                <div className="form-group">
                  <input
                    type="text"
                    name="fullname"
                    onChange={inputHandler}
                    value={ContactForm.fullname}
                    className="form-control"
                    placeholder="Your Full Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="email"
                    onChange={inputHandler}
                    value={ContactForm.email}
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    onChange={inputHandler}
                    value={ContactForm.subject}
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    onChange={inputHandler}
                    value={ContactForm.message}
                    cols={30}
                    rows={7}
                    className="form-control"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    defaultValue="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>
            <div className="col-md-6" id="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3170.159317866573!2d-122.08642602527956!3d37.38606440337316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s%09203%20Fake%20St.%20Mountain%20View%2C%20San%20Francisco%2C%20California%2C%20USA!5e0!3m2!1sen!2sin!4v1743252250030!5m2!1sen!2sin"
                width={600}
                height={450}
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
        <ToastContainer/>
      </section>
    </div>
  );
};

export default Contact;
