import React from "react";

const Notfound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-500 mb-4">404 - Not Found</h1>
      <p className="text-lg text-gray-600">
        The page you are looking for does not exist.
      </p>
    </div>
  );
};

export default Notfound;
