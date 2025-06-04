import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Dentacare = () => {
  const [DentacareTopUser, setDentacareTopUser] = useState([]);
  const [DentacareImageUser, setDentacareImageUser] = useState([]);
  const [DentacareUser, setDentacareUser] = useState([]);

  //   Dentacare top api
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://admin.gosaviadvanceddentalclinic.com/api/getdentacaretop"
      );
      setDentacareTopUser(response.data);
    };

    fetchData();
  }, []);

  //   Dentacare image api
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://admin.gosaviadvanceddentalclinic.com/api/getdentacareimage"
      );
      setDentacareImageUser(response.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://admin.gosaviadvanceddentalclinic.com/api/getdentacare"
      );
      setDentacareUser(response.data);
    };

    fetchData();
  }, []);


  return (
    <div className="container-wrap mt-5">
    <div className="row d-flex no-gutters">
    {DentacareImageUser.map((user) => {
            return (
      <div
        className="col-md-6 img"
        style={{ backgroundImage: `url(${user.dentacareimage})` }}
      ></div>
            )})}
      <div className="col-md-6 d-flex">
        <div className="about-wrap">
        {DentacareTopUser.map((user) => {
            return (
          <div className="heading-section heading-section-white mb-5">
            <h2 className="mb-2">{user.heading}</h2>
            <p dangerouslySetInnerHTML={{ __html: user.description }}></p>
          </div>
            )})}
          
          {DentacareUser.map((user, index) => {
                  return (
          <div key={index} className="list-services d-flex">
            <div className="icon d-flex justify-content-center align-items-center">
              <span>
              <i className="fa-solid fa-check" />
</span>
            </div>
            <div className="text">
              <h3>{user.title}</h3>
              <p style={{ color: "white" }} dangerouslySetInnerHTML={{ __html: user.para }}>
          
              </p>
            </div>
          </div>
                  )})}

          {/* <div className="list-services d-flex">
            <div className="icon d-flex justify-content-center align-items-center">
                            <span>
              <i className="fa-solid fa-check" />
</span>
            </div>
            <div className="text">
              <h3>High Technology Facilities</h3>
              <p style={{ color: "white" }}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="list-services d-flex">
            <div className="icon d-flex justify-content-center align-items-center">
                            <span>
              <i className="fa-solid fa-check" />
</span>
            </div>
            <div className="text">
              <h3>Comfortable Clinics</h3>
              <p style={{ color: "white" }}>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  </div>
  )
}

export default Dentacare
