import React, { useState } from "react";
import "../style/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: undefined,
    });

    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setErrors({
        ...errors,
        email: "Invalid email format",
      });
    }

    if (name === "message" && !value) {
      setErrors({
        ...errors,
        message: "Message is required.",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.message) {
      newErrors.message = "Message is required.";
    }

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="contact-container">
        <div className="news">
          <h3>Newsletter</h3>
          <p>Get news about articles and updates in your inbox.</p>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="NAME"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="error small-error">{errors.email}</p>
              )}
            </div>
            <div className="form-group">
              <input
                type="text"
                id="message"
                name="message"
                rows="4"
                required
                placeholder="MESSAGE"
                value={formData.message}
                onChange={handleChange}
              ></input>
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <button type="submit" className="send-button">
              Send
            </button>
          </form>
        </div>
        <div className="getInTouch">
          <span>Get</span>
          <br />
          <span>in Touch</span>
        </div>
      </div>
      <div className="footer">
        <p>Copyright 2022 All Right Reserved By SG</p>
      </div>
    </>
  );
};

export default Contact;
