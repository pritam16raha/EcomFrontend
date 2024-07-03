
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const DropMenu = () => {
  return (
    <DropDown className="dropDownProfile">
      <MenuList>
      <Link
              to="/userinfo"
              className={`icon-link ${
                location.pathname === "/account" ||
                location.pathname === "account/add"
                  ? "active"
                  : ""
              }`}
            >Profile</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/signout">Signout</Link>
      </MenuList>
    </DropDown>
  );
};

export default DropMenu;

const DropDown = styled.div`
    /* display: flex;
    flex-direction: column; */
    position: absolute;
    justify-content: center;
    align-items: center;

`

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const MenuLink = styled.li`
    
`
