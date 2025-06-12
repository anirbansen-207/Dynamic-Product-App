import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { newSignUpQuery } from "../Hooks/React-Query/userQuery";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import '../styles/UserSignUp.css';

const UserSignUp = () => {
  const navigate = useNavigate();

  const signupSchema = yup.object().shape({
    first_name: yup.string().required("First Name is required"),
    last_name: yup.string().required("Last Name is required"),
    email: yup.string().email().required("Email is required"),
    password: yup.string().min(4, 'Password must be at least 4 characters').required("Password is required"),
  });

  const { mutate } = newSignUpQuery();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(signupSchema) });

  const onSubmit = (data) => {
    mutate(data); // data will now have correct keys
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <h2 className="form-title">Sign Up Here</h2>

        <input
          type="text"
          placeholder="Enter your First name"
          className="form-input"
          {...register("first_name")}
        />
        {errors.first_name && <p className="error-message">{errors.first_name.message}</p>}

        <input
          type="text"
          placeholder="Enter your Last name"
          className="form-input"
          {...register("last_name")}
        />
        {errors.last_name && <p className="error-message">{errors.last_name.message}</p>}

        <input
          type="email"
          placeholder="Enter your Email"
          className="form-input"
          {...register("email")}
        />
        {errors.email && <p className="error-message">{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Enter your Password"
          className="form-input"
          {...register("password")}
        />
        {errors.password && <p className="error-message">{errors.password.message}</p>}

        <button type="submit" className="form-button">Sign Up</button>
      </form>
    </div>
  );
};

export default UserSignUp;

