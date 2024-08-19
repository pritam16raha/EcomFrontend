import React from 'react';
import styled from 'styled-components';

const PopupWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;

const PopupButton = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Popup = ({ message, onClose }) => {
  return (
    <PopupWrapper>
      <PopupContent>
        <h2>Login as an Admin to make any changes</h2>
        <h3>User: pritamisadmin@gmail.com</h3>
        <h3>Password: 123456</h3>
        <PopupButton onClick={onClose}>Close</PopupButton>
      </PopupContent>
    </PopupWrapper>
  );
};

export default Popup;
