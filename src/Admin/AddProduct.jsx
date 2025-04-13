// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { useMyAuth } from "../store/Auth";
// import { useParams } from "react-router-dom";
// import SummaryApi, { BackendDomain } from "../commonData/SummaryApi";
// import uploadImage from "../components/helpers/uploadImage";

// const AddProduct = () => {
//   const { authToken } = useMyAuth();

//   const params = useParams();

//   const [category, setCategory] = useState("category1");

//   const [formData, setFormData] = useState({
//     name: "",
//     price: "",
//     category: "normal",
//     description: "",
//     image: [],
//   });

//   const handleOnChange = (e) => {
//     const { name, value } = e.target;

//     setFormData((preve) => {
//       return {
//         ...preve,
//         [name]: value,
//       };
//     });
//   };

//   const handleCategoryChange = (e) => {
//     const value = e.target.value;
//     setCategory(value);
//     setFormData((prev) => ({
//       ...prev,
//       category: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       console.log("Form data i get", formData);

//       const responseProduct = await fetch(SummaryApi.addNewProduct.url, {
//         method: SummaryApi.addNewProduct.method,
//         headers: {
//           Authorization: authToken,
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const responseProductData = await responseProduct.json();
//       console.log("Product That I Have Uploaded", responseProductData);

//       if (responseProduct.status === 200 || responseProduct.ok) {
//         alert("Product Uploaded Successfully");
//       }
//     } catch (err) {
//       console.log("Error from update product", err);
//     }
//   };

//   const handleImageChange = async (e) => {
//     const picture = e.target.files[0];

//     // setUploadProductImage(picture.name);
//     // console.log("Picture is", picture);

//     const imageOfCoundinary = await uploadImage(picture);

//     setFormData((preve) => {
//       return {
//         ...preve,
//         image: [...preve.image, imageOfCoundinary.url],
//       };
//     });

//     console.log("Image i uploaded on CLoudinary", imageOfCoundinary);
//   };

//   const handlePictureDelete = async (index) => {
//     console.log("Image index", index);

//     const newProductImage = [...formData.image];

//     newProductImage.splice(index, 1);

//     setFormData((preve) => {
//       return {
//         ...preve,
//         image: [...newProductImage],
//       };
//     });
//   };

//   const fetchData = async (category) => {
//     let apiUrl = "";

//     switch (category) {
//       case "accessories":
//         apiUrl = `${BackendDomain}/ecom/product/add`;
//         break;
//       case "banner":
//         apiUrl = `${BackendDomain}/ecom/product/add`;
//         break;
//       case "mods":
//         apiUrl = `${BackendDomain}/ecom/product/add`;
//         break;
//       case "newArrival":
//         apiUrl = `${BackendDomain}/ecom/product/add`;
//         break;
//       case "essentials":
//         apiUrl = `${BackendDomain}/ecom/product/add`;
//         break;
//       case "normal":
//         apiUrl = `${BackendDomain}/ecom/product/add`;
//         break;
//       case "city":
//         apiUrl = `${BackendDomain}/ecom/product/add`;
//         break;
//       case "tourer":
//         apiUrl = `${BackendDomain}/ecom/product/add`;
//         break;
//       case "streetFighter":
//         apiUrl = `${BackendDomain}/ecom/product/add`;
//         break;
//     }

//     try {
//       const response = await fetch(apiUrl, {
//         method: "POST",
//         headers: {
//           Authorization: authToken,
//           "Content-Type": "application/json",
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const result = await response.json();
//       console.log("Fetched data:", result);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   useEffect(() => {
//     fetchData(category);
//   }, [category]);

//   return (
//     <Container>
//       <Title>Add New Product</Title>
//       <Form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label>Product Name:</Label>
//           <Input
//             type="text"
//             name="name"
//             placeholder="Short and proper name is required"
//             value={formData.name}
//             onChange={handleOnChange}
//             required
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label>Product Price:</Label>
//           <Input
//             type="number"
//             name="price"
//             placeholder="price in INR"
//             value={formData.price}
//             onChange={handleOnChange}
//             required
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label>Product Category:</Label>
//           <select onChange={handleCategoryChange} value={formData.category}>
//             <option value="normal">Normal</option>
//             <option value="banner">Banner</option>
//             <option value="accessories">accessories</option>
//             <option value="mods">Mods</option>
//             <option value="newArrival">New Arrival</option>
//             <option value="essentials">Essentials</option>
//             <option value="city">City</option>
//             <option value="tourer">Tourer</option>
//             <option value="streetFighter">Street Fighter</option>
//           </select>
//         </FormGroup>

//         <FormGroup>
//           <Label>Product Description:</Label>
//           <Input
//             type="text"
//             name="description"
//             placeholder="Only Provide Important Information"
//             value={formData.description}
//             onChange={handleOnChange}
//             required
//           />
//         </FormGroup>

//         <FormGroup>
//           <Label>Product Image:</Label>
//           <Input type="file" onChange={handleImageChange} required />
//         </FormGroup>

//         <div>
//           {formData?.image[0] ? (
//             formData.image.map((el, index) => {
//               return (
//                 <div key={index}>
//                   <img src={el} className="cloudImage" />
//                   <button onClick={() => handlePictureDelete(index)}>
//                     Delete Picture
//                   </button>
//                 </div>
//               );
//             })
//           ) : (
//             <p>*Please upload a product image</p>
//           )}
//         </div>

//         <SubmitButton type="submit">Add Product</SubmitButton>
//       </Form>
//     </Container>
//   );
// };

// const Container = styled.div`
//   max-width: 600px;
//   margin: 20px auto;
//   padding: 20px;
//   border: 1px solid #ddd;
//   border-radius: 5px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   background-color: #f9f9f9;
// `;

// const Title = styled.h2`
//   text-align: center;
//   margin-bottom: 20px;
//   color: #333;
// `;

// const Form = styled.form`
//   .form-group {
//     margin-bottom: 15px;
//   }

//   .cloudImage {
//     width: 10rem;
//   }
// `;

// const FormGroup = styled.div`
//   margin-bottom: 15px;
// `;

// const Label = styled.label`
//   display: block;
//   margin-bottom: 5px;
//   font-weight: bold;
//   color: #555;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ddd;
//   border-radius: 4px;
//   box-sizing: border-box;

//   &:focus {
//     border-color: #a5d6a7;
//     outline: none;
//   }
// `;

// const SubmitButton = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: #4caf50;
//   border: none;
//   border-radius: 4px;
//   color: white;
//   font-size: 16px;
//   cursor: pointer;
//   transition: background-color 0.3s;

//   &:hover {
//     background-color: #45a049;
//   }
// `;

// export default AddProduct;

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useMyAuth } from "../store/Auth";
import { useParams } from "react-router-dom";
import SummaryApi, { BackendDomain } from "../commonData/SummaryApi";
import uploadImage from "../components/helpers/uploadImage";

const AddProduct = () => {
  const { authToken } = useMyAuth();
  const params = useParams();
  const [category, setCategory] = useState("category1");

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    category: "normal",
    description: "",
    image: [],
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((preve) => ({ ...preve, [name]: value }));
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    setCategory(value);
    setFormData((prev) => ({ ...prev, category: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseProduct = await fetch(SummaryApi.addNewProduct.url, {
        method: SummaryApi.addNewProduct.method,
        headers: {
          Authorization: authToken,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const responseProductData = await responseProduct.json();
      if (responseProduct.status === 200 || responseProduct.ok) {
        alert("Product Uploaded Successfully");
      }
    } catch (err) {
      console.log("Error from update product", err);
    }
  };

  const handleImageChange = async (e) => {
    const picture = e.target.files[0];
    const imageOfCloudinary = await uploadImage(picture);
    setFormData((preve) => ({
      ...preve,
      image: [...preve.image, imageOfCloudinary.url],
    }));
  };

  const handlePictureDelete = async (index) => {
    const newProductImage = [...formData.image];
    newProductImage.splice(index, 1);
    setFormData((preve) => ({ ...preve, image: [...newProductImage] }));
  };

  const fetchData = async (category) => {
    const apiUrl = `${BackendDomain}/ecom/product/add`;
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: authToken,
          "Content-Type": "application/json",
        },
      });
      const result = await response.json();
      console.log("Fetched data:", result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData(category);
  }, [category]);

  return (
    <Wrapper>
      <FormCard>
        <h2 className="form-title">Add New Product</h2>
        <form onSubmit={handleSubmit} className="form-body">
          <FormGroup>
            <label>Product Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              value={formData.name}
              onChange={handleOnChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Product Price</label>
            <input
              type="number"
              name="price"
              placeholder="Enter price in INR"
              value={formData.price}
              onChange={handleOnChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Product Category</label>
            <select onChange={handleCategoryChange} value={formData.category}>
              <option value="normal">Normal</option>
              <option value="banner">Banner</option>
              <option value="accessories">Accessories</option>
              <option value="mods">Mods</option>
              <option value="newArrival">New Arrival</option>
              <option value="essentials">Essentials</option>
              <option value="city">City</option>
              <option value="tourer">Tourer</option>
              <option value="streetFighter">Street Fighter</option>
            </select>
          </FormGroup>
          <FormGroup>
            <label>Product Description</label>
            <textarea
              name="description"
              placeholder="Enter short product description"
              value={formData.description}
              onChange={handleOnChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Product Image</label>
            <input type="file" onChange={handleImageChange} required />
          </FormGroup>
          <ImagePreviewContainer>
            {formData?.image[0] ? (
              formData.image.map((el, index) => (
                <ImageCard key={index}>
                  <img src={el} alt="uploaded" />
                  <button onClick={() => handlePictureDelete(index)}>
                    Remove
                  </button>
                </ImageCard>
              ))
            ) : (
              <span className="info-text">*Upload a product image</span>
            )}
          </ImagePreviewContainer>
          <button type="submit" className="submit-btn">
            Add Product
          </button>
        </form>
      </FormCard>
    </Wrapper>
  );
};

export default AddProduct;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f1f2f6;
`;

const FormCard = styled.div`
  background-color: #fff;
  padding: 32px;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  border-radius: 12px;

  .form-title {
    text-align: center;
    margin-bottom: 24px;
    font-size: 24px;
    color: #2d3436;
  }

  .submit-btn {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    background-color: #00b894;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background-color: #019877;
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 6px;
    font-weight: 600;
    color: #34495e;
  }

  input,
  select,
  textarea {
    padding: 12px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 6px;
    outline: none;
    transition: border 0.3s ease;

    &:focus {
      border-color: #00b894;
    }
  }

  textarea {
    resize: vertical;
    min-height: 80px;
  }
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin: 20px 0;

  .info-text {
    font-size: 14px;
    color: #636e72;
  }
`;

const ImageCard = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  button {
    position: absolute;
    top: 4px;
    right: 4px;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    padding: 4px 8px;
    font-size: 12px;
    border-radius: 4px;
    cursor: pointer;
  }
`;

