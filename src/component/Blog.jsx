import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Blog = () => {
  const [BlogTopUser, setBlogTopUser] = useState([]);
  const [BlogUser, setBlogUser] = useState([]);

  //   Blog top api
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://admin.gosaviadvanceddentalclinic.com/api/getblogtop");
      setBlogTopUser(response.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://admin.gosaviadvanceddentalclinic.com/api/getblog");
      setBlogUser(response.data);
    };

    fetchData();
  }, []);


  return (
    <section className="ftco-section">
    <div className="container">
      <div className="row justify-content-center mb-5 pb-3">
      {BlogTopUser.map((user) => {
            return (
        <div className="col-md-7 text-center heading-section">
          <h2 className="mb-2">{user.heading}</h2>
          <p>
          {user.para}
          </p>
        </div>
            )})}
      </div>
      
      <div className="row">
      {BlogUser.map((user, index) => {
                  return (
        <div className="col-md-4">
          <div className="blog-entry">
            <a
              href="blog-single.html"
              className="block-20"
              style={{ backgroundImage: `url(${user.blogimage})` }}
            ></a>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <a href="#">{new Date(user.date).toLocaleDateString()}</a>
                </div>
                <div>
                  <a href="#">{user.title}</a>
                </div>
                <div>
                  <a href="#" className="meta-chat">
                    <i className="fa-solid fa-message" /> 3
                  </a>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <a href="#" dangerouslySetInnerHTML={{ __html: user.description }}>
                  
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
                  )})}
        {/* <div className="col-md-4">
          <div className="blog-entry" data-aos-delay={100}>
            <a
              href="blog-single.html"
              className="block-20"
              style={{ backgroundImage: 'url("images/image_2.jpg")' }}
            ></a>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <a href="#">Sep. 20, 2018</a>
                </div>
                <div>
                  <a href="#">Admin</a>
                </div>
                <div>
                  <a href="#" className="meta-chat">
                    <i className="fa-solid fa-message" /> 3
                  </a>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the blind
                    texts
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="blog-entry" data-aos-delay={200}>
            <a
              href="blog-single.html"
              className="block-20"
              style={{ backgroundImage: 'url("images/image_3.jpg")' }}
            ></a>
            <div className="text d-flex py-4">
              <div className="meta mb-3">
                <div>
                  <a href="#">Sep. 20, 2018</a>
                </div>
                <div>
                  <a href="#">Admin</a>
                </div>
                <div>
                  <a href="#" className="meta-chat">
                    <i className="fa-solid fa-message" /> 3
                  </a>
                </div>
              </div>
              <div className="desc pl-3">
                <h3 className="heading">
                  <a href="#">
                    Even the all-powerful Pointing has no control about the blind
                    texts
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  </section>
  
  )
}

export default Blog
