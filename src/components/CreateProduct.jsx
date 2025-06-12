import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useCreateProductsQuery } from "../Hooks/React-Query/productQuery";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import '../styles/CreateProduct.css';

const CreateProduct = () => {
  const navigate = useNavigate();
  const { mutate } = useCreateProductsQuery();

  const createProductSchema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required"),

  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createProductSchema),
  });

  const [image, setImage] = useState(null);

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data?.title || "");
    formData.append("description", data?.description || "");

    formData.append("image", image);
    mutate(formData);
    navigate("/products");
  };

  return (
    <div className="create-product-container">
      <form onSubmit={handleSubmit(onSubmit)} className="create-product-form">
        <h2 className="form-title">Create Product</h2>

        <input
          type="text"
          placeholder="Enter Product Title"
          className="form-input"
          {...register("title")}
        />
        {errors.title && (
          <span className="error-message">{errors.title.message}</span>
        )}

        <textarea
          placeholder="Enter Product Description"
          className="form-input"
          {...register("description")}
        ></textarea>
        {errors.description && (
          <span className="error-message">{errors.description.message}</span>
        )}



        <input
          type="file"
          className="form-input"
          onChange={(e) => setImage(e.target.files[0])}
        />

        <button type="submit" className="form-button">
          CREATE
        </button>
      </form>
    </div>
  );
};

export default CreateProduct;
