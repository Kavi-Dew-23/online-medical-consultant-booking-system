import React from "react";
import "../styles/RegisterStyles.css";
import { Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";

const Channel = () => {
  const onFinishHandler = async (values) => {
    try {
      const res = await axios.post("/api/v1/user/welcome/channel", values);

      if (res.data.success) {
        //localStorage.setItem("token", res.data.token);
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


      <div className ="form-box">




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

        <Form.Item  name="email">
          <Input type="email" required placeholder="Doctors name"/>
        </Form.Item>

        <Form.Item  name="email">
          <Input type="text" required placeholder="Specification"/>
        </Form.Item>

        <div className="spacer"></div>

        <div className=" center-container ">
          <Link to="/login">
            <button className="btn btn-primary" type="submit">
              {" "}
              Channel{" "}
            </button>
          </Link>
        </div>

        <div className="spacer"></div>
      </Form>
      </div>
    </div>
  );
};

export default Channel;
