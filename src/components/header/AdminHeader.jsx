import React, { useState } from "react";
import { HeaderMainWrapper } from "../../styles/header";
import { Container } from "../../styles/styles";
import styled from "styled-components";
import { adminPages } from "../../data/data";
import { Link } from "react-router-dom";

import { staticImages } from "../../utils/myImageData";
import Dropdown from "../dropDownMenu/DropDown";

const AdminHeader = () => {
  const [openDropMenu, setDropMenu] = useState(false);

  return (
    <HeaderMainWrapper className="header flex items-center">
      <Container className="container flex justify-between">
        <div className="title">
          <h1>Admin Page</h1>
        </div>

        <NavigationMenuWrapper>
          <ul className="nav-menu-list flex items-center">
            {adminPages?.map((menu) => (
              <li key={menu.id} className="nav-item">
                <StyledLink to={menu.menuLink}>{menu.menuText}</StyledLink>
              </li>
            ))}
            <button
              className="switch"
              onClick={() => setDropMenu((prev) => !prev)}
            >
              <Dropdown />
            </button>
          </ul>
        </NavigationMenuWrapper>
      </Container>
    </HeaderMainWrapper>
  );
};

export default AdminHeader;

const NavigationMenuWrapper = styled.nav`
  .nav-menu-list {
    margin-left: 20px;
  }

  .nav-menu-item {
    margin: 5px;
    border-radius: 5px;

    &:hover {
      transition-duration: 0.5s;
      transform: scale(1.2);
      font-weight: 700;
    }
  }
`;

const Dropmenu = styled.div`
  
`

const StyledHeader = styled(HeaderMainWrapper)`
  background-color: white;
  border-bottom: 1px solid #e5e5e5;
  padding: 12px 0;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.05);
`;

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BrandSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .logo {
    width: 40px;
    height: 40px;
  }

  .title {
    font-size: 20px;
    font-weight: 700;
    color: #2d3436;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;

  .nav-item {
    list-style: none;
  }
`;

const StyledLink = styled(Link)`
  font-size: 15px;
  font-weight: 500;
  color: #2d3436;
  padding: 6px 12px;
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: #f1f2f6;
    color: #00b894;
  }

  &.active {
    color: #00b894;
    font-weight: 600;
  }
`;

const ProfileWrapper = styled.div`
  position: relative;

  .avatar-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .avatar {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ccc;
    transition: border-color 0.3s ease;

    &:hover {
      border-color: #00b894;
    }
  }
`;


