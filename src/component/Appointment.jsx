import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Appointment = ({ onClose }) => {
  const [AppointmentForm, setAppointmentForm] = useState({
    fullname: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setAppointmentForm((prev) => ({ ...prev, [name]: value }));
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://admin.gosaviadvanceddentalclinic.com/api/createAppointmentForm",
        AppointmentForm
      );

      setAppointmentForm({
        fullname: "",
        email: "",
        date: "",
        time: "",
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
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Make an Appointment</h5>
              <button type="button" className="close" onClick={onClose}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={submitForm}>
                <div className="form-group">
                  <input
                    type="text"
                    name="fullname"
                    onChange={inputHandler}
                    value={AppointmentForm.fullname}
                    className="form-control"
                    placeholder="Full Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    onChange={inputHandler}
                    value={AppointmentForm.email}
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="date"
                      name="date"
                    onChange={inputHandler}
                    value={AppointmentForm.date}
                      className="form-control"
                      placeholder="Date"
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="time"
                      name="time"
                    onChange={inputHandler}
                    value={AppointmentForm.time}
                      className="form-control"
                      placeholder="Time"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    name="message"
                    onChange={inputHandler}
                    value={AppointmentForm.message}
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    className="btn btn-primary"
                    value="Make an Appointment"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show" onClick={onClose}></div>
    </div>
  );
};

export default Appointment;
