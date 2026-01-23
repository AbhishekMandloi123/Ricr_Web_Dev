import React from "react";
import Transparent from "../assets/Transparent.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
const Header = () => {
  const { user, isLogin } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-(--color-primary) px-4 py-2 flex justify-between items-center">
        <Link to={"/"}>
          <img
            src={Transparent}
            alt=""
            className="h-12 w-10 object-cover animate-bounce"
          />
        </Link>

        <div className="flex gap-4">
          <Link
            to={"/"}
            className="text-decoration-none text-white hover:text-(--color-accent)"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-decoration-none text-white hover:text-(--color-accent)"
          >
            About
          </Link>
          <Link
            to={"/contact"}
            className="text-decoration-none text-white hover:text-(--color-accent)"
          >
            Contact
          </Link>
        </div>

        <div className="flex gap-3">
          {isLogin ? (
            <div className="text-white-500" onClick={()=>navigate("/dashboard")}>{user.fullName}</div>
          ) : (
            <>
              <div>
                <button
                  onClick={() => navigate("/login")}
                  className="bg-(--color-secondary) py-2 px-4 rounded-2xl font-bold hover:bg-(--color-accent)"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="bg-(--color-secondary) py-2 px-4 rounded-2xl font-bold hover:bg-(--color-accent)"
                >
                  Register
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
