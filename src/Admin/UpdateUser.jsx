import React, { useEffect, useState } from 'react'
import { useMyAuth } from '../store/Auth';
import SummaryApi, { BackendDomain } from '../common/SummaryApi';
import styled from "styled-components";
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateUser = () => {

  const { authToken } = useMyAuth();

  const params = useParams();

  console.log("Params Single user is: ", params);

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    role: "",
    password: ""
  });

  const getCurrentUser = async () => {
    try{
      const fetchedUser = await fetch(`${BackendDomain}/ecom/getuserinfo/${params.id}`, {
        method: SummaryApi.getAllUser.method,
        headers: {
          Authorization: authToken,
        }
      })

      const responseData = await fetchedUser.json();
      console.log("User I get",responseData);
      setFormData(responseData)

    }catch(err){
      console.log("Error from update user get current user", err);
    }
  }

  useEffect(() => {
    getCurrentUser();
  }, [])



  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setFormData({
      ...formData,
      [name] : value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();

    try{
      const respondedData = await fetch(`${BackendDomain}/ecom/updateuser/${params.id}`, {
        method: "put",
        headers: {
          Authorization: authToken,
          'Content-Type':'application/json',
        },
        body: JSON.stringify(formData)
      })

      if( respondedData.status === 200 || respondedData.ok ){
        alert("Update Complete")
      }
      
    }catch(err){
      console.log("Error From User update page", err)
    }
  }



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
          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
  
          <Button type="submit">Submit</Button>
        </Form>
        {/* {submittedData && (
          // <UserInfo>
          //   <h2>User Info</h2>
          //   <p>Name: {submittedData.name}</p>
          //   <p>Email: {submittedData.email}</p>
          //   <p>Role: {submittedData.role}</p>
          // </UserInfo>
        )} */}
      </Container>
    );
}

export default UpdateUser;

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