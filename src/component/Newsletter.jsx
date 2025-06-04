import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Newsletter = () => {
  const [NewsUser, setNewsUser] = useState([]);

  //   News top api
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://admin.gosaviadvanceddentalclinic.com/api/getnews");
      setNewsUser(response.data);
    };

    fetchData();
  }, []);


  return (
    <section className="ftco-section-parallax">
    <div className="parallax-img d-flex align-items-center">
      <div className="container">
        <div className="row d-flex justify-content-center">
        {NewsUser.map((user) => {
            return (
          <div className="col-md-7 text-center heading-section heading-section-white">
            <h2>{user.heading}</h2>
            <p>
            {user.para}
            </p>
            <div className="row d-flex justify-content-center mt-5">
              <div className="col-md-8">
                <form action="#" className="subscribe-form">
                  <div className="form-group d-flex">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter email address"
                    />
                    <input
                      type="submit"
                      defaultValue="Subscribe"
                      className="submit px-3"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
            )})}
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default Newsletter
