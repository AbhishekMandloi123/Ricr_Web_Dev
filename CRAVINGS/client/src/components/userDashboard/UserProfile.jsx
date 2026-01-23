// import React, { useState } from "react";
// import { useAuth } from "../../context/AuthContext";
// import EditProfileModal from "./modals/EditProfileModal";
// const UserProfile = () => {
//   const { EditProfileModal,setIsEditProfileModalOpen} = useState(false);
//   const { user } = useAuth();
//   return (
//     <>
//       <div>
//         <div className="flex gap-10">
//           <span>Name: </span>
//           <span>{user.fullName}</span>
//           <span>Email: </span>
//           <span>{user.email}</span>
//           <span>Phone: </span>
//           <span>{user.mobileNumber}</span>

//         <button
//           className="border px-5 py-3 bg-amber-400"
//           onClick={() => setIsEditProfileModalOpen(true)}
//         >
//           Edit Profile
//         </button>
//       </div>
//       </div>
//       {EditProfileModal && (<EditProfileModal onClose={() => setIsEditProfileModalOpen(false)} />)}
//     </>
//   );
// };

// export default UserProfile;
import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import EditProfileModal from "./modals/EditProfileModal";

const UserProfile = () => {
  const [isEditProfileModalOpen, setIsEditProfileModalOpen] = useState(false);
  const { user, setUser } = useAuth(); // 👈 IMPORTANT

  return (
    <>
      <div className="w-full p-6">
        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-8 max-w-5xl">
          {/* Header */}
          <div className="flex justify-between items-center border-b pb-4 mb-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-800">
                User Profile
              </h2>
              <p className="text-sm text-gray-500">
                Manage your personal information
              </p>
            </div>

            <button
              className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-6 py-2 rounded-lg shadow-sm transition"
              onClick={() => setIsEditProfileModalOpen(true)}
            >
              Edit Profile
            </button>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 border rounded-xl p-5">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Full Name
              </p>
              <p className="text-lg font-medium text-gray-800 mt-1">
                {user?.fullName}
              </p>
            </div>

            <div className="bg-gray-50 border rounded-xl p-5">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Email Address
              </p>
              <p className="text-lg font-medium text-gray-800 mt-1">
                {user?.email}
              </p>
            </div>

            <div className="bg-gray-50 border rounded-xl p-5">
              <p className="text-xs text-gray-500 uppercase tracking-wide">
                Mobile Number
              </p>
              <p className="text-lg font-medium text-gray-800 mt-1">
                {user?.mobileNumber}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ MODAL */}
      {isEditProfileModalOpen && (
        <EditProfileModal
          user={user}
          onClose={() => setIsEditProfileModalOpen(false)}
          onUpdate={setUser}
        />
      )}
    </>
  );
};

export default UserProfile;
