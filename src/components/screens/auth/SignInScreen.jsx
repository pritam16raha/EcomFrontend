// import React from 'react'
import styled from "styled-components";
import { FormGridWrapper, FormTitle } from "../../../styles/formGrid";
import { Container } from "../../../styles/styles";
import { staticImages } from "../../../utils/myImageData";
import AuthOptions from "../../auth/AuthOptions";
import { FormElement, Input } from "../../../styles/form";
import PasswordOptions from "../../auth/PasswordOptions";
import { Link, useNavigate } from "react-router-dom";
import { BaseButtonBlack } from "../../../styles/button";
import { defaultTheme } from "../../../styles/themes/default";
import { useState } from "react";
import SummaryApi from "../../../commonData/SummaryApi";
import { toast } from "react-toastify";
import { useMyAuth } from "../../../store/Auth";

const SignInScreen = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setLoginData((previous) => {
      return {
        ...previous,
        [name]: value,
      };
    });
  };

  const { storeTokenInLocal } = useMyAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = loginData;

    const respondedData = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const loginDataApi = await respondedData.json();

    if (respondedData.ok) {
      // setLoginData({ email: "" , password: "" });
      alert("Login Successful");
      toast.success(loginDataApi.message);

      storeTokenInLocal(loginDataApi.access_Token);

      //localStorage.setItem("access token is: ", loginDataApi.access_Token);

      console.log("data i have filled : ", loginData);
      navigate("/userinfo");
    }

    if (
      respondedData.error ||
      respondedData.status === 500 ||
      respondedData.status === 409 ||
      respondedData.status === 504 ||
      respondedData.status === 505
    ) {
      toast.error(loginDataApi.message);
    }

    toast(loginDataApi.message);
    console.log("Response Received from backend: ", loginDataApi);
  };

  return (
    <SignInScreenWrapper>
      <FormGridWrapper>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img src={staticImages.form_img1} className="object-fit-cover" />
            </div>

            <div className="form-grid-right">
              <FormTitle>
                <h3>Sign In</h3>
              </FormTitle>

              <AuthOptions />

              <div className="form-separator flex items-center justify-center">
                <span className="separator-line"></span>
                <span className="separator-text inline-flex items-center justify-center text-white">
                  OR
                </span>
                <span className="separator-line"></span>
              </div>

              <form onSubmit={handleSubmit}>
                <FormElement>
                  <label htmlFor="" className="form-elem-label">
                    Your email address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={loginData.email}
                    placeholder="registered mail"
                    onChange={handleOnChange}
                    className="form-elem-control"
                  />

                  <label htmlFor="" className="form-elem-label">
                    Your login password
                  </label>
                  <Input
                    type="password"
                    name="password"
                    value={loginData.password}
                    placeholder="password"
                    onChange={handleOnChange}
                    className="form-elem-control"
                  />
                </FormElement>

                {/* <PasswordOptions fieldName = "Password" name= "password"/>
                                    <Link to="/reset" className='form-elem-text text-end font-medium'>
                                        Forget your password?
                                    </Link> */}

                <BaseButtonBlack type="submit" className="form-submit-btn">
                  Sign In
                </BaseButtonBlack>
              </form>

              <p className="flex flex-wrap account-rel-text">
                Dont have an account?
                <Link to="/signup" className="font-medium">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </SignInScreenWrapper>
  );
};

export default SignInScreen;

const SignInScreenWrapper = styled.section`
  margin: 32px 0;
  column-gap: 18px;

  .separator-text {
    border-radius: 50%;
    min-width: 36px;
    height: 36px;
    background-color: ${defaultTheme.color_purple};
    position: relative;
  }

  .separator-line {
    width: 100%;
    height: 1px;
    background-color: ${defaultTheme.color_platinum};
  }

  .form-elem-text {
    margin-top: -16px;
    display: block;
  }
`;
