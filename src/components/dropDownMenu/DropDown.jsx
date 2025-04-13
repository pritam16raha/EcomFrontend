import React, { useState } from "react";
import styled from "styled-components";
import { staticImages } from "../../utils/myImageData";
import { Link } from "react-router-dom";

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ccc;
    transition: border 0.3s ease;

    &:hover {
      border-color: #00b894;
    }
  }
`;

const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 110%;
  right: 0;
  background-color: #fff;
  min-width: 180px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.12);
  border-radius: 12px;
  overflow: hidden;
  z-index: 999;
`;

const DropdownItem = styled(Link)`
  display: block;
  padding: 14px 20px;
  font-size: 14px;
  font-weight: 500;
  color: #2d3436;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f1f2f6;
    color: #00b894;
  }

  &:not(:last-child) {
    border-bottom: 1px solid #f1f1f1;
  }
`;

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown}>
        <img src={staticImages.user} alt="Profile" />
      </DropdownButton>
      <DropdownContent isOpen={isOpen}>
        <DropdownItem to="/admin/alluser">Admin Profile</DropdownItem>
        <DropdownItem to="/account">Profile</DropdownItem>
        <DropdownItem to="/signin">Signin</DropdownItem>
        <DropdownItem to="/signout">Signout</DropdownItem>
        <DropdownItem to="/order">All Orders</DropdownItem>
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default Dropdown;
