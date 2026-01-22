import React, { use, useState } from "react";
import toast from "react-hot-toast";
import api from "../config/api";
import { Link , Navigate,useNavigate} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const { setUser, setIsLogin } = useAuth();
  const navigate=useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleClearForm = () => {
    setFormData({
      email: "",
      password: "",
    });
  }

  const validate = () => {
    let error = {};

    if (!formData.email) {
      error.email = "Email is required";
    } else if (
      !/^[\w\.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co.in)$/.test(
        formData.email
      )
    ) {
      error.email = "Use proper email format";
    }

    if (!formData.password) {
      error.password = "Password is required";
    }

    setValidationError(error);
    return Object.keys(error).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!validate()) {
      setIsLoading(false);
      toast.error("Fill the form correctly");
      return;
    }

    try {
      const res = await api.post("/auth/login", formData);
      toast.success(res.data.message);
      setUser(res.data.data);
      setIsLogin(true);
      sessionStorage.setItem("CravingUser", JSON.stringify(res.data.data));
      handleClearForm();
      navigate("/dashboard");
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-indigo-100  px-4 py-6 flex flex-col justify-center items-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        <form onSubmit={handleSubmit} onReset={handleClearForm} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 rounded-lg focus:border-indigo-500 outline-none"
            />
            {validationError.email && (
              <p className="text-xs text-red-500">{validationError.email}</p>
            )}
          </div>

          <div>
            <input
              type="password"
              name="password" 
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border-2 rounded-lg focus:border-indigo-500 outline-none"
            />
            {validationError.password && (
              <p className="text-xs text-red-500">{validationError.password}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-bold hover:bg-indigo-700 transition"
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <button type="reset" className="w-full bg-gray-500 text-white py-3 rounded-lg font-bold hover:bg-gray-600 transition">
            Clear
          </button> 
        </form>
      </div>
      <p className="text-center text-gray-600 mt-8 text-sm">
        Don't have an account?
        <Link
          to={"/register"}
          className="text-decoration-none text-blue hover:text-(--color-accent) "
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
};

export default Login;
