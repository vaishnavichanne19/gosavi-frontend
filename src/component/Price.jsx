import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Price = () => {
  const [PriceTopUser, setPriceTopUser] = useState([]);
  const [PriceUser, setPriceUser] = useState([]);

  //   Price top api
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://admin.gosaviadvanceddentalclinic.com/api/getpricetop"
      );
      setPriceTopUser(response.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://admin.gosaviadvanceddentalclinic.com/api/getprice");
      setPriceUser(response.data);
    };

    fetchData();
  }, []);


  return (
    <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-5">
      {PriceTopUser.map((user) => {
            return (
        <div className="col-md-7 text-center heading-section ">
          <h2 className="mb-3">{user.heading}</h2>
          <p>
          {user.para}
          </p>
        </div>
            )})}
      </div>
      <div className="row">
      {PriceUser.map((user, index) => {
                  return (
        <div className="col-md-3  shadow">
          <div className="pricing-entry pb-5 text-center">
            <div>
              <h3 className="mb-4">{user.title}</h3>
              <p>
                <span className="price">{user.price}</span>{" "}
                <span className="per">/ session</span>
              </p>
            </div>
            <ul className="text-left" dangerouslySetInnerHTML={{ __html: user.description }}>
              {/* <li>Diagnostic Services</li>
              <li>Professional Consultation</li>
              <li>Tooth Implants</li>
              <li>Surgical Extractions</li>
              <li>Teeth Whitening</li> */}
            </ul>
            <p className="button text-center">
              <a
                href="#"
                className="btn btn-primary btn-outline-primary px-4 py-3"
              >
                Order now
              </a>
            </p>
          </div>
        </div>
                  )})}

        {/* <div className="col-md-3   shadow">
          <div className="pricing-entry pb-5 text-center">
            <div>
              <h3 className="mb-4">Standard</h3>
              <p>
                <span className="price">$34.50</span>{" "}
                <span className="per">/ session</span>
              </p>
            </div>
            <ul className="text-left">
              <li>Diagnostic Services</li>
              <li>Professional Consultation</li>
              <li>Tooth Implants</li>
              <li>Surgical Extractions</li>
              <li>Teeth Whitening</li>
            </ul>
            <p className="button text-center">
              <a
                href="#"
                className="btn btn-primary btn-outline-primary px-4 py-3"
              >
                Order now
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-3   shadow">
          <div className="pricing-entry active pb-5 text-center">
            <div>
              <h3 className="mb-4">Premium</h3>
              <p>
                <span className="price">$54.50</span>{" "}
                <span className="per">/ session</span>
              </p>
            </div>
            <ul className="text-left">
              <li>Diagnostic Services</li>
              <li>Professional Consultation</li>
              <li>Tooth Implants</li>
              <li>Surgical Extractions</li>
              <li>Teeth Whitening</li>
            </ul>
            <p className="button text-center">
              <a
                href="#"
                className="btn btn-primary btn-outline-primary px-4 py-3"
              >
                Order now
              </a>
            </p>
          </div>
        </div>
        <div className="col-md-3  shadow">
          <div className="pricing-entry pb-5 text-center">
            <div>
              <h3 className="mb-4">Platinum</h3>
              <p>
                <span className="price">$89.50</span>{" "}
                <span className="per">/ session</span>
              </p>
            </div>
            <ul className="text-left">
              <li>Diagnostic Services</li>
              <li>Professional Consultation</li>
              <li>Tooth Implants</li>
              <li>Surgical Extractions</li>
              <li>Teeth Whitening</li>
            </ul>
            <p className="button text-center">
              <a
                href="#"
                className="btn btn-primary btn-outline-primary px-4 py-3"
              >
                Order now
              </a>
            </p>
          </div>
        </div> */}
      </div>
    </div>
  </section>
  
  )
}

export default Price
