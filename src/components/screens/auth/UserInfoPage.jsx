import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMyAuth } from "../../../store/Auth";

const UserInfoPage = () => {
  
  const { currentUser } = useMyAuth();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    role: "",
  });


  const [submittedData, setSubmittedData] = useState(null);

  const [currentUserData, setCurrentUserData] = useState(true);


  useEffect(() => {

    if ( currentUser) {
      setFormData({
        name: currentUser.name,
        username: currentUser.username,
        email: currentUser.email,
        role: currentUser.role,
      });
      setCurrentUserData(false);
    }

  },[currentUser])
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };



  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />

        <Input
          type="text"
          name="username"
          placeholder="Role"
          value={formData.username}
          onChange={handleChange}
        />

        <Input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          type="text"
          name="role"
          placeholder="Role"
          value={formData.role}
          onChange={handleChange}
        />

        <Button type="submit">Submit</Button>
      </Form>
      {submittedData && (
        <UserInfo>
          <h2>User Info</h2>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Role: {submittedData.role}</p>
        </UserInfo>
      )}
    </Container>
  );
};

export default UserInfoPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 10px;
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

const UserInfo = styled.div`
  margin-top: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
