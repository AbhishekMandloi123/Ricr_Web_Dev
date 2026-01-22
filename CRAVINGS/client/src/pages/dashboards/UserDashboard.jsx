import React, { useState } from "react";
import UserSidebar from "../../components/UserDashboard/userSidebar";
import UserOverview from "../../components/userDashboard/UserOverview";
import UserProfile from "../../components/userDashboard/UserProfile";
import UserOrder from "../../components/userDashboard/UserOrder";
import UserTransaction from "../../components/userDashboard/UserTransaction";
import UserHelpdesk from "../../components/userDashboard/UserHelpdesk";
import { GiHamburgerMenu } from "react-icons/gi";

const UserDashboard = () => {
  const [active, setActive] = useState("overview");
  const [collapse, setCollapse] = useState(true);

  return (
    <>
      <div className="w-full h-[90vh] flex">
        {collapse && (
          <div className={`bg-{(--color-background) w-1/7`}>
            <UserSidebar
              active={active}
              setActive={setActive}
              collapse={collapse}
              setCollapse={setCollapse}
            />
          </div>
        )}
        <div
          className={`border border-amber-700 w-8/10 ${collapse ? "w-8/10" : "w-8/10"}`}
        >
          {!collapse && (
            <button
              onClick={() => setCollapse(true)}
              className="p-3 text-xl items-center"
            >
              <GiHamburgerMenu />
            </button>
          )}

          {active === "overview" && <UserOverview />}
          {active === "profile" && <UserProfile />}
          {active === "order" && <UserOrder />}
          {active === "transaction" && <UserTransaction />}
          {active === "helpDesk" && <UserHelpdesk />}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
