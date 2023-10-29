import React, { useState } from "react";
import Joi from "joi";
import "./CheckoutCom.css";

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    address: Joi.string().required(),
    message: Joi.string().allow(""),
    phone: Joi.string().pattern(new RegExp('^[0-9]{10}$')).required(),
  });

export default function CheckoutCom() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});

  const validateData = () => {
    const result = schema.validate(formData, { abortEarly: false });
    if (!result.error) return null;

    const newErrors = {};
    result.error.details.forEach((err) => {
      newErrors[err.path[0]] = err.message;
    });

    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = validateData();
    if (newErrors) {
      setErrors(newErrors);
      return;
    }

    console.log("ok ", formData);

    setErrors({});
  };

  return (
    <>
      <div className="xx container h-100 d-flex justify-content-center align-items-center mt-5">
        <div>
          <h1 className="p-2">تسجيل الاوردر</h1>

          <form className="" onSubmit={handleSubmit}>
            <input
              className="d-block inp mt-5"
              type="text"
              id="name"
              name="name"
              placeholder="الاسم بالكامل"
              onChange={handleChange}
            />
            {errors.name && <p className="error text-danger">{errors.name}</p>}
            <input
              className="d-block inp my-3"
              type="email"
              id="email"
              name="email"
              placeholder="الايميل"
              onChange={handleChange}
            />
            {errors.email && <p className="error text-danger">{errors.email}</p>}
            <input
              className="d-block inp"
              type="text"
              id="address"
              name="address"
              placeholder="العنوان"
              onChange={handleChange}
            />
            {errors.address && <p className="error text-danger">{errors.address}</p>}
            <textarea
              className="d-block my-3 textInput"
              rows="5"
              name="message"
              form="message"
              value={formData.message}
              onChange={handleChange}
            />
            <input
              className="d-block inp"
              type="tel"
              id="phone"
              name="phone"
              placeholder="رقم الهاتف"
              onChange={handleChange}
            />
            {errors.phone && <p className="error text-danger">{errors.phone}</p>}

            <button className="d-block mt-3 btnSend" type="submit">
              SEND
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
