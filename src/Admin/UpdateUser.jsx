import React, { useEffect, useState } from "react";
import { useMyAuth } from "../store/Auth";
import SummaryApi, { BackendDomain } from "../commonData/SummaryApi";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const UpdateUser = () => {
  const { authToken } = useMyAuth();
  const params = useParams();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    role: "",
    password: "",
  });

  const getCurrentUser = async () => {
    try {
      const response = await fetch(
        `${BackendDomain}/ecom/getuserinfo/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authToken,
          },
        }
      );
      const data = await response.json();
      setFormData(data);
    } catch (err) {
      console.log("Error fetching user data", err);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${BackendDomain}/ecom/updateuser/${params.id}`,
        {
          method: "PUT",
          headers: {
            Authorization: authToken,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) alert("Update successful!");
    } catch (err) {
      console.log("Error updating user", err);
    }
  };

  return (
    <PageWrapper>
      <FormCard onSubmit={handleSubmit}>
        <h2>Update User</h2>
        <FieldGroup>
          <label>Name</label>
          <StyledInput
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FieldGroup>

        <FieldGroup>
          <label>Username</label>
          <StyledInput
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </FieldGroup>

        <FieldGroup>
          <label>Email</label>
          <StyledInput
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </FieldGroup>

        <FieldGroup>
          <label>Role</label>
          <StyledInput
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
        </FieldGroup>

        <FieldGroup>
          <label>Password</label>
          <StyledInput
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </FieldGroup>

        <StyledButton type="submit">Update</StyledButton>
      </FormCard>
    </PageWrapper>
  );
};

export default UpdateUser;

// Styled Components
const PageWrapper = styled.div`
  min-height: 100vh;
  background: #f8fafc;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const FormCard = styled.form`
  background: #fff;
  padding: 32px 36px;
  border-radius: 12px;
  box-shadow: 0 8px 28px rgba(0, 0, 0, 0.08);
  width: 100%;
  max-width: 480px;

  h2 {
    font-size: 24px;
    margin-bottom: 24px;
    color: #2f2f2f;
    text-align: center;
  }
`;

const FieldGroup = styled.div`
  margin-bottom: 18px;
  label {
    display: block;
    margin-bottom: 6px;
    font-weight: 600;
    font-size: 14px;
    color: #333;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 12px 14px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 8px;
  transition: border 0.2s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const StyledButton = styled.button`
  margin-top: 10px;
  width: 100%;
  padding: 12px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: #0056b3;
  }
`;
