import axios from "axios";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Achievement = () => {
  const [AchievementTopUser, setAchievementTopUser] = useState([]);
  const [AchievementUser, setAchievementUser] = useState([]);
  const [startCount, setStartCount] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  // achievement top 
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://admin.gosaviadvanceddentalclinic.com/api/getachievementtop");
      setAchievementTopUser(response.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://admin.gosaviadvanceddentalclinic.com/api/getachievement");
      setAchievementUser(response.data);
    };

    fetchData();
  }, []);

  return (
    <section
      className="ftco-section ftco-counter img"
      id="section-counter"
      style={{ backgroundImage: "url(images/bg_1.jpg)" }}
      ref={ref}
    >
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-3 aside-stretch py-5">
          {AchievementTopUser.map((user) => {
            
            return (
            <div className="heading-section heading-section-white pr-md-4">
              <h2 className="mb-3">{user.title}</h2>
              <p dangerouslySetInnerHTML={{ __html: user.para }}></p>
            </div>
            )})}
          </div>

          <div className="col-md-9 py-5 pl-md-5">
            <div className="row">
            {AchievementUser.map((user, index) => {
            
            return (
              <div key={index} className="col-md-4 d-flex justify-content-center counter-wrap">
                <div className="block-18">
                  <div className="text">
                    <strong className="number">{startCount ? <CountUp end={parseInt(user.count)} duration={2} /> : 0}</strong>
                    <span dangerouslySetInnerHTML={{ __html: user.description }}></span>
                  </div>
                </div>
              </div>
            )})}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievement;
