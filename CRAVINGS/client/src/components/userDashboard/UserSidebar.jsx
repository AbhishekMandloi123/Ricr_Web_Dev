import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrOverview } from "react-icons/gr";
import { CgProfile } from "react-icons/cg";
import { CiShoppingCart } from "react-icons/ci";
import { TbTransactionBitcoin } from "react-icons/tb";
import { SiHelpdesk } from "react-icons/si";

const UserSidebar = ({ active, setActive, collapse, setCollapse }) => {
  const handleCollapse = () => {
    setCollapse(false);
    // Logic to handle collapse can be added here
  }
  return (
    <>
      <div className="p-3">
        <div className="text-xl font-bold flex gap-3 items-center"><GiHamburgerMenu /> User Dashboard</div>
        <hr />
        <div className="grid gap-3 p-4">
          <button
             className={`flex gap-3 items-center hover:bg-amber-500 rounded-2xl p-3 ${
              active === "overview" ? "bg-(--color-secondary) text-white" : ""
            }`}
            onClick={() => setActive("overview")}
          >
            <GrOverview /> Overview
          </button>
          <button
             className={`flex gap-3 items-center hover:bg-amber-500 rounded-2xl p-3 ${
              active === "profile" ? "bg-(--color-secondary) text-white" : ""
            }`}
            onClick={() => setActive("profile")}
          >
            <CgProfile /> Profile
          </button>
          <button
            className={`flex gap-3 items-center hover:bg-amber-500 rounded-2xl p-3 ${
              active === "order" ? "bg-(--color-secondary) text-white" : ""
            }`}
            onClick={() => setActive("order")}
          >
            <CiShoppingCart /> Order
          </button>
          <button
            className={`flex gap-3 items-center hover:bg-amber-500 rounded-2xl p-3 ${
              active === "transaction" ? "bg-(--color-secondary) text-white" : ""
            }`}
            onClick={() => setActive("transaction")}
          >
            <TbTransactionBitcoin /> Transaction
          </button>
          <button
            className={`flex gap-3 items-center hover:bg-amber-500 rounded-2xl p-3 ${
              active === "helpdesk" ? "bg-(--color-secondary) text-white" : ""
            }`}
            onClick={() => setActive("helpdesk")}
          >
            <SiHelpdesk /> HelpDesk
          </button>
        </div>
      </div>
    </>
  );
};

export default UserSidebar;
