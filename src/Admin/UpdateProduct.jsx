import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useMyAuth } from '../store/Auth';
import { useParams } from 'react-router-dom';

const UpdateProduct = () => {

    const { authToken } = useMyAuth();

    const params = useParams();

    const [ formData, setFormData ] = useState({
        name: "",
        price: "",
        category: "",
        description: "",
        image: ""
    });

    const getCurrentProduct = async() => {
      try{
        const singleProduct = await fetch(`http://localhost:5500/ecom/product/getOne/${params.id}`,{
          method: "get",
          headers: {
            Authorization: authToken,
          }
        })

        const singleProductIget = await singleProduct.json();
        console.log("Product i got", singleProductIget);
        setFormData(singleProductIget)

      }catch(err){
        console.log("Error from update product",err);
      }
    }

    useEffect(() => {
      getCurrentProduct();
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
        const updateProductData = await fetch(`http://localhost:5500/ecom/product/edit/${params.id}`, {
          method: "put",
          headers: {
            Authorization: authToken,
            'Content-Type':'application/json',
          },
          body: JSON.stringify(formData)
        })
        if(updateProductData.status === 200 || updateProductData.ok){
          alert("Product update done")
        }
      }catch(err){
        console.log("Error form update product catch block", err)
      }
    }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Title>Add Product</Title>
        <Input name='name' type="text" placeholder="Name" value={formData.name} onChange={handleChange}/>
        <Input name='price' type="number" placeholder="Price" value={formData.price} onChange={handleChange}/>
        <Input name='category' type="text" placeholder="Category" value={formData.category} onChange={handleChange}/>
        <TextArea name='description' placeholder="Description" rows="4" value={formData.category} onChange={handleChange}/>
        <Input name='image' type="text" value={formData.image} onChange={handleChange} />
        <img src={formData.image[0]}/>
        {/* <img src={formData.image?.map((image, index) => { return( <img src={image} key={index}/> ) })}/> */}
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  );
};

export default UpdateProduct;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-color: #f7f9fc;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  padding: 30px;
  border-radius: 10px;
  border: 2px solid gray;
  /* box-shadow:2px 2px 2px 10px rgba(0, 0, 0, 0.1); */
  background-color: #ffffff;

  img{
    width: 10rem;
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
  text-align: center;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const TextArea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  resize: none;
`;

const Button = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #45a049;
  }
`;
