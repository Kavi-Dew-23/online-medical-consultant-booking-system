import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import channel from "./Channel"

const Welcome = () => {
  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/user/welcome", values);

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error("Something Went Wrong");
    }
  };

  return (
    <div className="form-container">

      <div className="form-box">


      <Form
        layout="vertical"
        onFinish={onFinishHandler}
        className="Welcome-form"
      >
        {/* <div className="right-container">
          <button className="btn btn-primary" type="submit">
            Manage Bookings{" "}
          </button>
        </div> */}

        <h3 className="text-center">Channel Your Doctor</h3>

        <div className="spacer"></div>

        <Form.Item name="email"  className="formItem">
          <Input type="email" required placeholder="Doctors Name" />
        </Form.Item>
        <Form.Item  name="password" className="formItem">
          <Input type="password" required placeholder="Password"/>
        </Form.Item>
        <Form.Item name="email" className="formItem">
          <Input type="email" required placeholder="Any specification" />
        </Form.Item>
        <Form.Item  name="email" className="formItem">
          <Input type="email" required placeholder="Any Date" />
        </Form.Item>

        {/* <div className="spacer"></div> */}

        <div className=" center-container ">
          <Link to="/channel">
            <button className="btn btn-primary" type="submit">
              {" "}
              Search{" "}
            </button>
          </Link>
        </div>

        {/* <div className="spacer"></div> */}
      </Form>


      </div>
    </div>
  );
};

export default Welcome;
