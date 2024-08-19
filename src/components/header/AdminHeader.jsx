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
            {adminPages?.map((menu) => {
              return (
                <li key={menu.id} className="nav-menu-item">
                  <Link
                    className="nav-menu-link text-base font-medium text-gray"
                    to={menu.menuLink}
                  >
                    {menu.menuText}
                  </Link>
                </li>
              );
            })}
            <button
              className="switch"
              onClick={() => setDropMenu((prev) => !prev)}
            >
              <Dropdown/>
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

