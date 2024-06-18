import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/features/alertSlice";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //form handler
  const onFinishHandler = async (values) => {
    try {
      dispatch(showLoading());

      const res = await axios.post("/api/v1/user/login", values);
      dispatch(hideLoading());
      if (res.data.success) {
        //localStorage.setItem("token", res.data.token);
        message.success("Login Successfully");
        navigate("/");

        // navigate("/");
      }     
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  return (
    <div className="form-container">
      <Form
        layout="vertical"
        onFinish={onFinishHandler}
        className="register-form"
      >
        <h3 className="text-center">Welcome</h3>
        <h4 className="text-center">Your information is safe with us</h4>
        <div className="spacer"></div>

        <Form.Item label="Enter your Email" name="email">
          <Input type="email" required placehoder="Enter your Email" />
        </Form.Item>
        <Form.Item label="Enter your Password" name="password">
          <Input type="password" required placehoder="Enter your Password" />
        </Form.Item>

        <div className="text-center">
          <Link>Forgot password</Link>

          <div className="spacer"></div>
        </div>

        <div className=" center-container ">
          <button className="btn btn-primary" type="submit">
            {" "}
            Sign In{" "}
          </button>
        </div>

        <div className="spacer"></div>
        <div className="text-center">
          <Link to="/register">Don't have an account? Sign Up</Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
