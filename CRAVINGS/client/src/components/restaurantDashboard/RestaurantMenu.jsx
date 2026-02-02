import React, { useState } from "react";
import AddItemsModal from "./modals/AddItemsModal";
const RestaurantMenu = () => {
  const [isAddItems, setIsAddItems] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-6 p-4">
        
        {/* Menu Items Section */}
        <div className="flex-1 bg-(--color-primary)/10 rounded-xl shadow-md p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-4">🍽️ Menu Items</h2>
          <p className="text-gray-600">
            Manage your restaurant menu items here.
          </p>
        </div>

        {/* Action Section */}
        <div className="bg-(--color-primary)/10 rounded-xl shadow-md p-6 md:p-8 flex items-end">
          <button
            onClick={() => setIsAddItems(true)}
            className="flex items-center gap-2 px-5 py-2 rounded-lg bg-(--color-secondary) text-white font-medium hover:scale-105 transition"
          >
            ➕ Add Item
          </button>
        </div>

      </div>

      {/* Modal */}
      {isAddItems && (
        <AddItemsModal onClose={() => setIsAddItems(false)} />
      )}
    </>
  );
};

export default RestaurantMenu;

