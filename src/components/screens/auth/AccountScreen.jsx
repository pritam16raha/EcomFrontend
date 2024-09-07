import styled from "styled-components";
import { Container } from "../../../styles/styles";
import BreadCrumb from "../../Common/BreadCrumb";
import { UserContent, UserDashboardWrapper } from "../../../styles/user";
import UserMenu from "../../user/UserMenu";

import { FormElement, Input } from "../../../styles/form";

import { Link, useLocation, useParams } from "react-router-dom";
import { breakpoints, defaultTheme } from "../../../styles/themes/default";
import Title from "../../Common/Title";
import { BaseLinkGreen } from "../../../styles/button";
import { useMyAuth } from "../../../store/Auth";
import { useEffect, useState } from "react";
import { BackendDomain } from "../../../commonData/SummaryApi";

const breadcrumbItems = [
  {
    label: "Home",
    link: "/",
  },
  { label: "Account", link: "/account" },
];

const AccountScreen = () => {
  const { currentUser , authToken } = useMyAuth();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
  });

  const getCurrentUser = async () => {
    try {
      const fetchedUser = await fetch(
        `${BackendDomain}/ecom/getuserinfo/${currentUser?._id}`,
        {
          method: "GET",
          headers: {
            Authorization: authToken,
          },
        }
      );

      const responseData = await fetchedUser.json();
      // console.log("User I get", responseData);
      setUserData(responseData);
    } catch (err) {
      console.log("Error from update user get current user", err);
    }
  };
  
  useEffect(() => {
    getCurrentUser();
  }, [currentUser])



  const handleChange = async (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const respondedData = await fetch(
        `${BackendDomain}/ecom/updateuser/${currentUser?._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        }
      );

      if (respondedData.status === 200 || respondedData.ok) {
        alert("Update Complete");
      }
    } catch (err) {
      console.log("Error From User update page", err);
    }

  }


  // console.log("Current user is", userData);

  return (
    <AccountScreenWrapper className="page-py-spacing">
      <Container>
        <BreadCrumb items={breadcrumbItems} />
        <UserDashboardWrapper>
          <UserMenu username={userData.name} />
          <UserContent>
          <form onSubmit={handleSubmit}>
            <Title titleText={"My Account"} />
            <h4 className="title-sm">Contact Details</h4>
            <form>
              <div className="form-wrapper">
                <FormElement className="form-elem">
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Your Name
                  </label>
                  <div className="form-input-wrapper flex items-center">
                    <Input
                      type="text"
                      className="form-elem-control text-outerspace font-semibold"
                      value={userData.name}
                      name="name"
                      onChange={handleChange}
                    />
                    <button type="button" className="form-control-change-btn">
                      Change
                    </button>
                  </div>
                </FormElement>
                <FormElement className="form-elem">
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Email Address
                  </label>
                  <div className="form-input-wrapper flex items-center">
                    <Input
                      type="email"
                      className="form-elem-control text-outerspace font-semibold"
                      value={userData.email}
                      name="email"
                      onChange={handleChange}
                    />
                    <button type="button" className="form-control-change-btn">
                      Change
                    </button>
                  </div>
                </FormElement>
                <FormElement className="form-elem">
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Phone Number
                  </label>
                  <div className="form-input-wrapper flex items-center">
                    <Input
                      type="text"
                      className="form-elem-control text-outerspace font-semibold"
                      value={userData.phone}
                      name="phone"
                      onChange={handleChange}
                    />
                    <button type="button" className="form-control-change-btn">
                      Change
                    </button>
                  </div>
                </FormElement>
                <FormElement className="form-elem">
                  <label
                    htmlFor=""
                    className="form-label font-semibold text-base"
                  >
                    Password
                  </label>
                  <div className="form-input-wrapper flex items-center">
                    <Input
                      type="password"
                      className="form-elem-control text-outerspace font-semibold"
                      value={userData.password}
                      name="password"
                      onChange={handleChange}
                    />
                    <button type="button" className="form-control-change-btn">
                      Change
                    </button>
                  </div>
                </FormElement>
              </div>
            </form>
            <div>
              <h4 className="title-sm">My Contact Addresss</h4>
              <div className="address-list grid">
                <div className="address-item grid">
                  <p className="text-outerspace text-lg font-semibold address-title">
                    {userData.name}
                  </p>
                  <p className="text-gray text-base font-medium address-description">
                    {userData.address}
                  </p>
                  <ul className="address-tags flex flex-wrap">
                    <li className="text-gray text-base font-medium inline-flex items-center justify-center">
                      Home
                    </li>
                    <li className="text-gray text-base font-medium inline-flex items-center justify-center">
                      Default billing address
                    </li>
                  </ul>
                  <div className="address-btns flex">
                    <Link
                      to="/"
                      className="text-base text-outerspace font-semibold"
                    >
                      Remove
                    </Link>
                    <div className="btn-separator"></div>
                    <Link
                      to="/"
                      className="text-base text-outerspace font-semibold"
                    >
                      Edit
                    </Link>
                  </div>
                </div>

                <div className="address-item grid">
                  <p className="text-outerspace text-lg font-semibold address-title">
                    {currentUser.name}
                  </p>
                  <p className="text-gray text-base font-medium address-description">
                    {currentUser.address}
                  </p>
                  <ul className="address-tags flex flex-wrap">
                    <li className="text-gray text-base font-medium inline-flex items-center justify-center">
                      Home
                    </li>
                    <li className="text-gray text-base font-medium inline-flex items-center justify-center">
                      Default billing address
                    </li>
                  </ul>
                  <div className="address-btns flex">
                    <Link
                      to="/"
                      className="text-base text-outerspace font-semibold"
                    >
                      Remove
                    </Link>
                    <div className="btn-separator"></div>
                    <Link
                      to="/"
                      className="text-base text-outerspace font-semibold"
                    >
                      Edit
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <Button type="submit">Update Deatils</Button>
            </form>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </AccountScreenWrapper>
  );
};

export default AccountScreen;

const AccountScreenWrapper = styled.main`
  .address-list {
    margin-top: 20px;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;

    @media (max-width: ${breakpoints.lg}) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .address-item {
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 25px;
    row-gap: 8px;
  }

  .address-tags {
    gap: 12px;

    li {
      height: 28px;
      border-radius: 8px;
      padding: 2px 12px;
      background-color: ${defaultTheme.color_whitesmoke};
    }
  }

  .address-btns {
    margin-top: 12px;
    .btn-separator {
      width: 1px;
      border-radius: 50px;
      background: ${defaultTheme.color_platinum};
      margin: 0 10px;
    }
  }
`;

const Button = styled.button`
  padding: 10px;
  margin: 10px 0;
  width: 100%;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background: #0056b3;
  }
`;
