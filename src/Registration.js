import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import book from "./image/reg.png";
import { toast } from "react-toastify";
import "./App.css";
export default function Registration() {
  const initialValues = {
    name: "",
    email: "",
    mobile: "",
    country: "",
    city: "",
    state: "",
    message: "",
  };

  const validationSchema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    mobile: yup.string()
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      "Phone number is not valid"
    )
  });
  const onSubmit = (values) =>register(values);

  const { values, handleChange, handleSubmit, errors, handleBlur, touched } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit,
    });

    function register(values) {
      
            if (!values) {
              toast.error("Error: " + "Data was not register");
            } else {
              toast.success("Success: " +  "register sucessfully");
             
            }
          
      }
  return (
    <>
    
      <div className="container my-3">
        <div className="row">
          <h2 className="topic"> Registration</h2>
        </div>
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center">
            <img src={book} className="img-fluid" alt="..."/>
            </div>
          <div className="col-lg-6 d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
              <div className="col-lg-12 mb-3">
                <label className="form-label">Name*</label>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  className="form-control"
                  placeholder="Enter your name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.name && touched.name}
                />
              </div>
              <p className="text-danger">
                
                {errors.name && touched.name ? errors.name : " "}
              </p>
              <div className="col-lg-12 mb-3">
                <label className="form-label">Email*</label>
                <input
                  type="email"
                  value={values.email}
                  className="form-control"
                  placeholder="Enter your email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.email && touched.email}
                />
              </div>
              <p className="text-danger">
                
                {errors.email && touched.email ? errors.email : " "}
              </p>
              <div className="col-lg-12mb-3">
                <label className="form-label">Mobile</label>
                <input
                  type="tel"
                  name="mobile"
                  value={values.mobile}
                  className="form-control"
                  placeholder="Enter your mobile number"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.mobile && touched.mobile}
                />
              </div>
              <p className="text-danger">
                {" "}
                {errors.mobile && touched.mobile ? errors.mobile : " "}
              </p>
              <div className="col-lg-12 mb-3">
                <label className="form-label">Country</label>
                <input
                  type="text"
                  name="country"
                  value={values.country}
                  className="form-control"
                  placeholder="Enter your country"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.country && touched.country}
                />
              </div>
              <p className="text-danger">
              
                {errors.country && touched.country ? errors.country : " "}
              </p>
              <div className="col-lg-12mb-3">
                <label className="form-label">City</label>
                <input
                  type="text"
                  name="city"
                  value={values.city}
                  className="form-control"
                  placeholder="Enter your city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.city && touched.city}
                />
              </div>
              <p className="text-danger">
                
                {errors.city && touched.city ? errors.city : " "}
              </p>
              <div className="col-lg-12mb-3">
                <label className="form-label">State</label>
                <input
                  type="text"
                  name="state"
                  value={values.state}
                  className="form-control"
                  placeholder="Enter your state"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.state && touched.state}
                />
              </div>
              <p className="text-danger">
                
                {errors.state && touched.state ? errors.state : " "}
              </p>
              <div className="col-lg-12mb-3">
                <label className="form-label">Message</label>
                <textarea
                  type="text"
                  name="message"
                  value={values.message}
                  className="form-control"
                  placeholder="Enter your message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={errors.message && touched.message}
                />
              </div>
              <p className="text-danger">
                
                {errors.message && touched.message ? errors.message : " "}
              </p>

              <button type="submit" className="btncolor">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
