import styled from "styled-components";
import {
  CheckboxGroup,
  FormGridWrapper,
  FormTitle,
} from "../../../styles/formGrid";
import { Container } from "../../../styles/styles";
import { staticImages } from "../../../utils/myImageData";
import AuthOptions from "../../auth/AuthOptions";
import { FormElement, Input } from "../../../styles/form";
// import PasswordOptions from "../../auth/PasswordOptions";
import { Link, useNavigate } from "react-router-dom";
import { BaseButtonBlack } from "../../../styles/button";
import { defaultTheme } from "../../../styles/themes/default";
import { useEffect, useState } from "react";
import SummaryApi from "../../../commonData/SummaryApi";
import { toast } from "react-toastify";
import { useMyAuth } from "../../../store/Auth";

const SignUpScreen = () => {
  const [userData, setData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  // console.log("user data is: ", userData)

  const [showPassword, setShowPassword] = useState(false);

  const storeTokenInLocal = useMyAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (userData.password === userData.confirmPassword) {
      console.log("summary api pritam", SummaryApi.signUP.url);

      const { name, email, username, password } = userData;

      const respondedData = await fetch(SummaryApi.signUP.url, {
        method: SummaryApi.signUP.method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, username, password }),
      });

      const formData = await respondedData.json();

      if (respondedData.status === 200 || respondedData.ok) {
        storeTokenInLocal(formData.access_Token);

        toast.success(formData.message);
        navigate("/signin");
      }

      if (
        formData.error ||
        formData.status === 500 ||
        formData.status === 409
      ) {
        toast.error(formData.message);
      }

      toast(formData.message);

      console.log("user data you filled: ", formData);
    } else {
      console.log("confirm password is not same");
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // useEffect(() => {
  //   axios.get('http://localhost:5500/ecom/register').then((response) => {
  //     setData(response.data)
  //   }).catch((error) => {
  //     console.log(error)
  //   })
  // },[])

  return (
    <SignUpScreenWrapper>
      <FormGridWrapper>
        <Container>
          <div className="form-grid-content">
            <div className="form-grid-left">
              <img
                className="object-fit-cover"
                src={staticImages.form_img4}
                alt="signUpImage"
              />
            </div>

            <div className="form-grid-right">
              <FormTitle>
                <h3>Sing Up</h3>
                <p>Sing Up for free to explore our products</p>
              </FormTitle>

              <AuthOptions />

              <div className="form-separator flex items-center justify-center">
                <span className="separator-line"></span>
                <span className="separator-text inline-flex items-center justify-center text-black">
                  OR
                </span>
                <span className="separator-line"></span>
              </div>

              <form onSubmit={handleSubmit}>
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

                {/* <PasswordOptions fieldName="password" name="name" placeholder="password" onChange={handleOnChange}/>
                  <span className="form-elem-error">
                    *create your password. (min 6 charecter)
                  </span>

                  <PasswordOptions fieldName="password" name="password" placeholder="confirm password" onChange={handleOnChange}/>
                  <span className="form-elem-error">
                    *confirm password. (min 6 charecter)
                  </span> */}

                <CheckboxGroup>
                  <li className="flex items-center">
                    <input type="checkbox" />
                    <span className="text-sm">
                      Agree to our&nbsp;
                      <Link to="/" className="text-underline">
                        Terms of use&nbsp;
                      </Link>
                      <span className="text-space">and&nbsp;</span>
                      <Link to="/" className="text-underline">
                        Privacy Policy
                      </Link>
                    </span>
                  </li>
                </CheckboxGroup>

                <BaseButtonBlack type="submit" className="form-submit-btn">
                  Sign Up
                </BaseButtonBlack>
              </form>

              <p className="flex flex-wrap account-rel-text">
                Already have an account?
                <Link to="/signin" className="font-medium">
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </Container>
      </FormGridWrapper>
    </SignUpScreenWrapper>
  );
};

export default SignUpScreen;

const SignUpScreenWrapper = styled.section`
  form {
    margin-top: 40px;
  }

  span {
    z-index: 1;
  }

  .form-separator {
    margin: 32px 0;
    column-gap: 18px;
  }

  .separator-line {
    width: 100%;
    height: 1px;
    background-color: ${defaultTheme.color_platinum};
  }

  .separator-text {
    text-decoration: none;
    font-weight: bold;
  }
`;

const PasswordToggleButton = styled.button`
  //position: absolute;
  bottom: 100%;
  right: 0;
  .pwd-toggle-text {
    padding-left: 5px;
  }
`;
