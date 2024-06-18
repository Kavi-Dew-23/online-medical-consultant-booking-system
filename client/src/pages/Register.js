import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());
      const res = await axios.post("/api/v1/user/register", values);
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Register Successfully!");
        navigate("/login");
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  return (
    <>
      <div className="form-container">
        <Form
          layout="vertical"
          onFinish={onFinishHandler}
          className="register-form"
        >
          <h3 className="text-center">Register With Us!</h3>
          <h4 className="text-center">Your information is safe with us</h4>
          <div className="spacer"></div>
          <Form.Item label="Enter your Full Name" name="name">
            <Input type="text" required />
          </Form.Item>
          <Form.Item label="Enter your Email" name="email">
            <Input type="email" required />
          </Form.Item>
          <Form.Item label="Enter your Password" name="password">
            <Input type="password" required />
          </Form.Item>
          <Form.Item label="Confirm your Password" name="cpassword">
            <Input type="password" required />
          </Form.Item>
          <div className="center-container">
            <button className="btn btn-primary" type="submit">
              {" "}
              Sign Up{" "}
            </button>
          </div>

          <div className="spacer"></div>
          <div className="text-center">
            <Link to="/login">Already have an account? Sign In</Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;
