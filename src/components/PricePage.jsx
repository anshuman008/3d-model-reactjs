import React from "react";

const PricePage = () => {
  return (
    <div className="h-screen  bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold mb-12">CHOOSE MEMBERSHIP</h1>
      <p className="text-xl mb-12">
        Exclusive features included for the duration of membership
      </p>
      <div className="flex space-x-12">
        <div className="bg-white shadow-lg rounded-lg p-10 h-[400px] w-[400px] text-center transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-6">BASIC</h2>
          <h3 className="text-5xl font-bold mb-6">₹10,000</h3>
          <p className="text-gray-600 mb-6">Upfront</p>
          <button className="bg-blue-500 text-white py-3 px-6  text-lg rounded-full transition-colors hover:bg-blue-600">
            CHOOSE
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-10 text-center h-[400px] w-[400px] transform transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-6">STANDARD</h2>
          <h3 className="text-5xl font-bold mb-6">₹20,000</h3>
          <p className="text-gray-600 mb-6">Upfront</p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg transition-colors hover:bg-blue-600">
            CHOOSE
          </button>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-10 text-center transform h-[400px] w-[400px] transition-transform hover:scale-105">
          <h2 className="text-2xl font-semibold mb-6">PREMIUM</h2>
          <h3 className="text-5xl font-bold mb-6">₹30,000</h3>
          <p className="text-gray-600 mb-6">Upfront</p>
          <button className="bg-blue-500 text-white py-3 px-6 rounded-full text-lg transition-colors hover:bg-blue-600">
            CHOOSE
          </button>
        </div>
      </div>
      <p className="text-sm text-gray-600 mt-12">
        30 day returns. All memberships automatically renew as an annual
        membership. All prices exclude local taxes.
      </p>
    </div>
  );
};

export default PricePage;
