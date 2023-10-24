import React from "react";
import { useNavigate } from "react-router-dom";

const Notfound: React.FC = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // novigate to dashboard/articles route
    navigate("/dashboard/articles");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Not Found</h1>
      <p className="text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>
      <button
        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={goBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default Notfound;
