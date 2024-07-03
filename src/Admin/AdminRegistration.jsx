import React, { useState } from "react";
import { BaseButtonBlack } from "../styles/button";
import { FormElement, Input } from "../styles/form";
import styled from "styled-components";
import { staticImages } from "../utils/myImageData";
import { Container } from "../styles/styles";

const AdminRegistration = () => {
  const handleSubmit = (e) => {};

  const handleOnChange = () => {};

  const [userData, setData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className="m-10">
        <FormElement>
          <label htmlFor="" className="forme-elem-label">
            Name:
          </label>
          <Input
            type="text"
            placeholder="your name with spaces"
            name="name"
            value={userData.name}
            className="form-elem-control"
            onChange={handleOnChange}
            required
          />

          <label htmlFor="" className="forme-elem-label">
            Email:
          </label>
          <Input
            type="email"
            placeholder="enter a valid email"
            name="email"
            value={userData.email}
            onChange={handleOnChange}
            className="form-elem-control"
            required
          />

          <label htmlFor="" className="forme-elem-label">
            User Name:
          </label>
          <Input
            type="text"
            placeholder="*create your unique username"
            name="username"
            value={userData.username}
            onChange={handleOnChange}
            className="form-elem-control"
            required
          />

          <label className="forme-elem-label">Password:</label>
          <Input
            type={showPassword ? "text" : "password"}
            name="password"
            value={userData.password}
            onChange={handleOnChange}
            placeholder="create a strong password"
            className="form-elem-control"
            required
          />

          <label className="forme-elem-label">Confirm Password:</label>
          <Input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleOnChange}
            placeholder="repeat password"
            className="form-elem-control"
            required
          />

          <label className="forme-elem-label">Confirm Password:</label>
          <Input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={userData.confirmPassword}
            onChange={handleOnChange}
            placeholder="repeat password"
            className="form-elem-control"
            required
          />

          <PasswordToggleButton
            type="button"
            className="pwd-value-toggle flex items-center"
            onClick={togglePassword}
          >
            {showPassword ? (
              <>
                <span className="pwd-toggle-text text-sm">Hide</span>
                <img src={staticImages.eyeOn} />
              </>
            ) : (
              <>
                <span className="pwd-toggle-text text-sm">Show</span>
                <img src={staticImages.eyeOff} />
              </>
            )}
          </PasswordToggleButton>
        </FormElement>

        <BaseButtonBlack type="submit" className="form-submit-btn">
          Sign Up
        </BaseButtonBlack>
      </form>
    </Container>
  );
};

export default AdminRegistration;

const PasswordToggleButton = styled.button`
  //position: absolute;
  bottom: 100%;
  right: 0;
  .pwd-toggle-text {
    padding-left: 5px;
  }
`;
