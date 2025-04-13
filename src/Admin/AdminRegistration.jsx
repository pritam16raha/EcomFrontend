import React, { useState } from "react";
import styled from "styled-components";
import { staticImages } from "../utils/myImageData";
import { Container } from "../styles/styles";

const AdminRegistration = () => {
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

  const handleOnChange = (e) => {
    setData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle submit
  };

  return (
    <Container>
      <FormWrapper onSubmit={handleSubmit}>
        <FormTitle>Register New User</FormTitle>

        <StyledLabel>Name</StyledLabel>
        <StyledInput
          type="text"
          name="name"
          placeholder="Your full name"
          value={userData.name}
          onChange={handleOnChange}
          required
        />

        <StyledLabel>Email</StyledLabel>
        <StyledInput
          type="email"
          name="email"
          placeholder="example@mail.com"
          value={userData.email}
          onChange={handleOnChange}
          required
        />

        <StyledLabel>Username</StyledLabel>
        <StyledInput
          type="text"
          name="username"
          placeholder="Unique username"
          value={userData.username}
          onChange={handleOnChange}
          required
        />

        <StyledLabel>Password</StyledLabel>
        <StyledInput
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Create a password"
          value={userData.password}
          onChange={handleOnChange}
          required
        />

        <StyledLabel>Confirm Password</StyledLabel>
        <StyledInput
          type={showPassword ? "text" : "password"}
          name="confirmPassword"
          placeholder="Repeat password"
          value={userData.confirmPassword}
          onChange={handleOnChange}
          required
        />

        <ToggleButton type="button" onClick={togglePassword}>
          {showPassword ? (
            <>
              <span>Hide</span>
              <img src={staticImages.eyeOn} alt="Hide" />
            </>
          ) : (
            <>
              <span>Show</span>
              <img src={staticImages.eyeOff} alt="Show" />
            </>
          )}
        </ToggleButton>

        <SubmitButton type="submit">Sign Up</SubmitButton>
      </FormWrapper>
    </Container>
  );
};

export default AdminRegistration;

const FormWrapper = styled.form`
  max-width: 500px;
  margin: 40px auto;
  padding: 40px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 16px;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #2d3436;
`;

const StyledInput = styled.input`
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  &:focus {
    border-color: #00b894;
    box-shadow: 0 0 0 2px rgba(0, 184, 148, 0.2);
  }
`;

const ToggleButton = styled.button`
  align-self: flex-end;
  background: transparent;
  border: none;
  color: #00b894;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  font-size: 14px;
  img {
    height: 18px;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 0;
  background-color: #2d3436;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #1c1f21;
  }
`;
