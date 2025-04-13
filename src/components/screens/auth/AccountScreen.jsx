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
  { label: "Home", link: "/" },
  { label: "Account", link: "/account" },
];

const AccountScreen = () => {
  const { currentUser, authToken } = useMyAuth();

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
          headers: { Authorization: authToken },
        }
      );
      const responseData = await fetchedUser.json();
      setUserData(responseData);
    } catch (err) {
      console.log("Error from update user get current user", err);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
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

      if (respondedData.ok) {
        alert("Update Complete");
      }
    } catch (err) {
      console.log("Error From User update page", err);
    }
  };

  return (
    <AccountScreenWrapper className="page-py-spacing">
      <Container>
        <BreadCrumb items={breadcrumbItems} />
        <UserDashboardWrapper>
          <UserMenu username={userData.name} />
          <UserContent>
            <form onSubmit={handleSubmit} className="styled-form">
              <Title titleText="My Account" />
              <h4 className="title-sm">Contact Details</h4>
              <div className="form-wrapper">
                {["name", "email", "phone", "password"].map((field) => (
                  <FormElement key={field} className="form-elem">
                    <label
                      htmlFor={field}
                      className="form-label font-semibold text-base"
                    >
                      {field.charAt(0).toUpperCase() + field.slice(1)}
                    </label>
                    <div className="form-input-wrapper flex items-center">
                      <Input
                        type={field === "password" ? "password" : "text"}
                        className="form-elem-control text-outerspace font-semibold"
                        name={field}
                        value={userData[field]}
                        onChange={handleChange}
                      />
                      <button type="button" className="form-control-change-btn">
                        Change
                      </button>
                    </div>
                  </FormElement>
                ))}
              </div>

              <h4 className="title-sm mt-6">My Contact Address</h4>
              <div className="address-list grid">
                {[userData, currentUser].map((user, index) => (
                  <div className="address-item grid" key={index}>
                    <p className="text-outerspace text-lg font-semibold address-title">
                      {user.name}
                    </p>
                    <p className="text-gray text-base font-medium address-description">
                      {user.address}
                    </p>
                    <ul className="address-tags flex flex-wrap">
                      <li>Home</li>
                      <li>Default billing address</li>
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
                ))}
              </div>

              <Button type="submit">Update Details</Button>
            </form>
          </UserContent>
        </UserDashboardWrapper>
      </Container>
    </AccountScreenWrapper>
  );
};

export default AccountScreen;

const AccountScreenWrapper = styled.main`
  .styled-form {
    background: #fff;
    padding: 32px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    border: 1px solid #eee;
  }

  .address-list {
    margin-top: 20px;
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;

    @media (max-width: ${breakpoints.lg}) {
      grid-template-columns: 1fr;
    }
  }

  .address-item {
    border-radius: 12px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    padding: 25px;
    row-gap: 8px;
    background: ${defaultTheme.color_flash_white};
    transition: 0.3s ease;

    &:hover {
      box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
    }
  }

  .address-tags {
    gap: 12px;

    li {
      height: 28px;
      border-radius: 8px;
      padding: 2px 12px;
      background-color: ${defaultTheme.color_whitesmoke};
      font-size: 14px;
    }
  }

  .address-btns {
    margin-top: 12px;
    .btn-separator {
      width: 1px;
      height: 20px;
      background: ${defaultTheme.color_platinum};
      margin: 0 10px;
    }
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  margin-top: 24px;
  width: 100%;
  background: ${defaultTheme.color_sea_green};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: ${defaultTheme.color_outerspace};
  }
`;
