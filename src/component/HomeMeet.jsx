import axios from 'axios';
import React, { useEffect, useState } from 'react'

const HomeMeet = () => {
  const [MeetTopUser, setMeetTopUser] = useState([]);
  const [MeetUser, setMeetUser] = useState([]);

  //   Meet top api
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://admin.gosaviadvanceddentalclinic.com/api/getmeettop"
      );
      setMeetTopUser(response.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://admin.gosaviadvanceddentalclinic.com/api/getmeet");
      setMeetUser(response.data);
    };

    fetchData();
  }, []);


  return (
    <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-5">
      {MeetTopUser.map((user) => {
            return (
        <div className="col-md-7 text-center heading-section ">
          <h3 style={{ color: "#0D0D24" }}>{user.heading}</h3>
          <p dangerouslySetInnerHTML={{__html: user.para}}>
          </p>
        </div>
            )})}
      </div>
      <div className="row">
      {MeetUser.map((user, index) => {
                  return (
        <div key={index} className="col-lg-6 col-md-6 d-flex mb-sm-4 ">
          <div className="staff">
            <div
              className="img mb-4"
              style={{ backgroundImage: `url(${user.meetimage})` }}
            />
            <div className="info text-center">
              <h3>
                <a href="teacher-single.html">{user.title}</a>
              </h3>
              <span className="position">{user.subtitle}</span>
              <div className="text">
              <p
                          dangerouslySetInnerHTML={{ __html: user.description }}
                        ></p>
                <ul className="ftco-social">
                  <li>
                    <a href="#">
                       <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />

                    </a>
                  </li>
                  <li>
                    <a href="#">
                     <i className="fa-brands fa-instagram" />

                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-google-plus-g" />

                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

                  )})}

        {/* <div className="col-lg-3 col-md-6 d-flex mb-sm-4 ">
          <div className="staff">
            <div
              className="img mb-4"
              style={{ backgroundImage: "url(images/person_6.jpg)" }}
            />
            <div className="info text-center">
              <h3>
                <a href="teacher-single.html">Mark Wilson</a>
              </h3>
              <span className="position">Dentist</span>
              <div className="text">
                <p>
                  Far far away, behind the word mountains, far from the countries
                  Vokalia
                </p>
                <ul className="ftco-social">
                  <li>
                    <a href="#">
                       <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />

                    </a>
                  </li>
                  <li>
                    <a href="#">
                     <i className="fa-brands fa-instagram" />

                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-google-plus-g" />

                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex mb-sm-4 ">
          <div className="staff">
            <div
              className="img mb-4"
              style={{ backgroundImage: "url(images/person_7.jpg)" }}
            />
            <div className="info text-center">
              <h3>
                <a href="teacher-single.html">Patrick Jacobson</a>
              </h3>
              <span className="position">Dentist</span>
              <div className="text">
                <p>
                  Far far away, behind the word mountains, far from the countries
                  Vokalia
                </p>
                <ul className="ftco-social">
                  <li>
                    <a href="#">
                       <i className="fa-brands fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />

                    </a>
                  </li>
                  <li>
                    <a href="#">
                     <i className="fa-brands fa-instagram" />

                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-google-plus-g" />

                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 d-flex mb-sm-4 ">
          <div className="staff">
            <div
              className="img mb-4"
              style={{ backgroundImage: "url(images/person_8.jpg)" }}
            />
            <div className="info text-center">
              <h3>
                <a href="teacher-single.html">Ivan Dorchsner</a>
              </h3>
              <span className="position">System Analyst</span>
              <div className="text">
                <p>
                  Far far away, behind the word mountains, far from the countries
                  Vokalia
                </p>
                <ul className="ftco-social">
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-twitter" />
                    
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-facebook-f" />

                    </a>
                  </li>
                  <li>
                    <a href="#">
                     <i className="fa-brands fa-instagram" />

                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-brands fa-google-plus-g" />

                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div class="row  mt-5 justify-conten-center">
        <div class="col-md-8 ">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi vero accusantium sunt sit aliquam ipsum molestias autem perferendis, incidunt cumque necessitatibus cum amet cupiditate, ut accusamus. Animi, quo. Laboriosam, laborum.</p>
        </div>
    </div> */}
    </div>
  </section>
  
  )
}

export default HomeMeet
