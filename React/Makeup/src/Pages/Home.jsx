import React from "react";

const Home = () => {
  return (
    <div className="font-sans">

      
      <section className="flex flex-col md:flex-row items-center justify-between px-10 py-14 bg-pink-50">
        
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold text-pink-600 mb-4">
            Glow With Confidence ✨
          </h1>
          <p className="text-gray-600 mb-6">
            Discover premium makeup products designed to enhance your natural beauty.
          </p>
          <button className="bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition">
            Shop Makeup
          </button>
        </div>

        <div className="mt-8 md:mt-0">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
            alt="Makeup"
            className="w-64 h-64 object-cover rounded-full shadow-lg"
          />
        </div>

      </section>

      {/* Makeup Categories */}
      <section className="px-10 py-16 text-center">
        <h2 className="text-3xl font-semibold text-pink-700 mb-10">
          Makeup Essentials 💄
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white rounded-2xl shadow-md p-5">
            <img
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796"
              alt="Lipstick"
              className="w-full h-36 object-cover rounded-xl"
            />
            <h3 className="text-lg font-semibold text-pink-600 mt-4">
              Lipsticks
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Matte, glossy & bold shades.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5">
            <img
              src="https://images.unsplash.com/photo-1583001931096-959e9a1a6223"
              alt="Eye Makeup"
              className="w-full h-36 object-cover rounded-xl"
            />
            <h3 className="text-lg font-semibold text-pink-600 mt-4">
              Eye Makeup
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Palettes, liners & mascara.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-5">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348"
              alt="Foundation"
              className="w-full h-36 object-cover rounded-xl"
            />
            <h3 className="text-lg font-semibold text-pink-600 mt-4">
              Foundation
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Smooth & flawless finish.
            </p>
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
