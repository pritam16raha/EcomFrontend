import React, { useState } from 'react';
import styled from 'styled-components';
import { staticImages } from '../../utils/myImageData';
import { Link } from 'react-router-dom';

const DropdownWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const DropdownContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  position: absolute;
  top: 100%; /* Ensures it opens below the parent */
  right: 0; /* Aligns the dropdown at the right edge of the parent */
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
  overflow: hidden;
`;

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;

  &:hover {
    background-color: #f1f1f1;
  }
`;

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownWrapper>
      <DropdownButton onClick={toggleDropdown}><img src={staticImages.user}/></DropdownButton>
      <DropdownContent isOpen={isOpen}>
        <DropdownItem><Link to="/admin/alluser">Admin Profile</Link></DropdownItem>
        <DropdownItem><Link to="/account">Profile</Link></DropdownItem>
        <DropdownItem><Link to="/signin">Signin</Link></DropdownItem>
        <DropdownItem><Link to="/signout">Signout</Link></DropdownItem>
        <DropdownItem><Link to="/order">All Orders</Link></DropdownItem>
      </DropdownContent>
    </DropdownWrapper>
  );
};

export default Dropdown;
