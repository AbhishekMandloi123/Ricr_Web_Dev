import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    <>
      <h1 id="head">
        <i class="bi bi-bandaid-fill"></i>Hello World
      </h1>
      <div>
        <h1>My Website</h1>
        <div>
          <Link to={"/Home"} className="text-decoration-none text-light">Home</Link>
          <Link to={"/About"} className="text-decoration-none text-light">About</Link>
          <Link to={"/Contacts"} className="text-decoration-none text-light">Contacts</Link>
          <Link to={"/Product"} className="text-decoration-none text-light">Product</Link>
        </div>
      </div>
    </>
  );
};
export default Header;
