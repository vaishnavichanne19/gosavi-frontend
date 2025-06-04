import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Quote = () => {
  const [QuoteUser, setQuoteUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://admin.gosaviadvanceddentalclinic.com/api/getQuote");
      setQuoteUser(response.data);
    };

    fetchData();
  }, []);


  // quoteform api 
  const [QuoteForm, setQuoteForm] = useState({
    fullname: "",
    email: "",
    phone: "",
    website: "",
    message: ""
  })

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setQuoteForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://admin.gosaviadvanceddentalclinic.com/api/createQuoteForm",
        QuoteForm
      );

      setQuoteForm({
        fullname: "",
        email: "",
        phone: "",
        website: "",
        message: "",
      });
      
      toast.success("Data added successfully!");
    } catch (error) {
      console.error("Error adding Data:", error);
      toast.error("Failed to add Data!");
    }
  };

  return (
    <div>
      <section className="ftco-quote">
        <div className="container">
          <div className="row">
          {QuoteUser.map((user) => {
            
            return (
            <div className="col-md-6 pr-md-5 aside-stretch py-5 choose">
              <div className="heading-section heading-section-white mb-5 ">
                <h2 className="mb-2">
                {user.heading}
                </h2>
              </div>
              <div>
              <p dangerouslySetInnerHTML={{ __html: user.para }}></p>
                {/* <ul className="un-styled my-5">
                  <li>
                    <span>
                      <i className="fa-solid fa-check" />
                    </span>
                    Consectetur adipisicing elit
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check" />
                    </span>
                    Adipisci repellat accusamus
                  </li>
                  <li>
                    <span>
                      <i className="fa-solid fa-check" />
                    </span>
                    Tempore reprehenderit vitae
                  </li>
                </ul> */}
              </div>
            </div>
            )})}

            <div className="col-md-6 py-5 pl-md-5">
              <div className="heading-section mb-5 ">
                <h2 className="mb-2">Get a Free Quote</h2>
              </div>
              <form onSubmit={submitForm}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="fullname"
                        onChange={inputHandler}
              value={QuoteForm.fullname}
                        className="form-control"
                        placeholder="Full Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        onChange={inputHandler}
                        name="email"
                        value={QuoteForm.email}
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="phone"
                        name="phone"
                        onChange={inputHandler}
                        value={QuoteForm.phone}
                        className="form-control"
                        placeholder="Phone"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="website"
                        onChange={inputHandler}
                        value={QuoteForm.website}
                        className="form-control"
                        placeholder="Website"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        id="message"
                        onChange={inputHandler}
                        value={QuoteForm.message}
                        cols={30}
                        rows={7}
                        className="form-control"
                        placeholder="Message"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                    <input
  type="submit"
  value="Get a Quote"
  className="btn btn-primary py-3 px-5"
/>

                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <ToastContainer/>
        </div>
      </section>
      <div id="map">
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
  );
};

export default Quote;
