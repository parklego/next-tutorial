"use client";
import React from "react";

const ErrorPage = ({ statusCode }) => {
  return (
    <div>
      <p>Error {statusCode}</p>
    </div>
  );
};

export default ErrorPage;
