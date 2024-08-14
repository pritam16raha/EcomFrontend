
import React from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { DropDown } from "../../styles/header";

const DropMenu = () => {
  return (
    <DropDown className="dropDownProfile">
      <MenuList>
      <Link
              to="/account"
              className={`icon-link ${
                location.pathname === "/account" ||
                location.pathname === "account/add"
                  ? "active"
                  : ""
              }`}
            >Profile</Link>
        <Link to="/admin/alluser">Admin</Link>
        <Link to="/signin">Signin</Link>
        <Link to="/signout">Signout</Link>
        <Link to="/order">All Orders</Link>
      </MenuList>
    </DropDown>
  );
};

export default DropMenu;

// const DropDown = styled.div`
//     /* display: flex;
//     flex-direction: column; */
//     position: absolute;
//     margin-right: 10rem;
// `

const MenuList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 4px;
`

const MenuLink = styled.li`
    
`
