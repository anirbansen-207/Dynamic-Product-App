import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userSignUp } from '../../api/functions/userSignUp';
import { userSignIn } from '../../api/functions/userSignIn';
import { useDispatch } from "react-redux";
import { login } from "../../redux-toolkit/authSlice";

// ✅ Login Mutation
export const userLogInQuery = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return useMutation({
    mutationFn: userSignIn,
    onSuccess: (data) => {
      if (data?.status === 200) {
        localStorage.setItem("token", data?.token);
        localStorage.setItem("user", data?.data?.first_name);
        localStorage.setItem("profile", data?.data?.profile_pic);

        dispatch(login());
        queryClient.invalidateQueries({ queryKey: ["users"] });
        navigate("/products");
      } else {
        alert("Login failed: Incorrect credentials");
      }
    },
    onError: () => {
      alert("Login error. Please check your credentials.");
    },
  });
};

// ✅ Signup Mutation
export const newSignUpQuery = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: userSignUp,
    onSuccess: (data) => {
      if (data?.status === 200 || data?.status === 201) {
        queryClient.invalidateQueries({ queryKey: ["users"] });
        navigate("/login");
      } else {
        alert("Signup failed.");
      }
    },
    onError: () => {
      alert("Signup error. Please try again.");
    },
  });
};
