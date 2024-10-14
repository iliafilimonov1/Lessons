import React from "react";

const Forbidden = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <h1 className="text-3xl font-bold">Access Denied</h1>
      <p className="mt-4 text-lg">
        You do not have permission to view this page.
      </p>
    </div>
  );
};

Forbidden.displayName = "Forbidden";

export default Forbidden;