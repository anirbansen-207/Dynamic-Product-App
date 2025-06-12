import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { getProducts } from "../../api/functions/getProducts";
import { deleteProducts } from "../../api/functions/deleteProducts";
import { createProducts } from "../../api/functions/createProducts";


// ✅ GET ALL PRODUCTS
export const useGetProductsQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
};

// ✅ DELETE PRODUCT
export const useDeleteProductsQuery = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: deleteProducts,
    onSuccess: (data) => {
      if (data?.status === 200) {
        queryClient.invalidateQueries({ queryKey: ["products"] });
        navigate("/products");
      }
    },
  });
};

// ✅ CREATE PRODUCT
export const useCreateProductsQuery = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  return useMutation({
    mutationFn: createProducts,
    onSuccess: (data) => {
      if (data?.status === 200) {
        queryClient.invalidateQueries({ queryKey: ["products"] });
        navigate("/products");
      }
    },
  });
};


