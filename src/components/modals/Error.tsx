import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

interface ErrorProps {
  message: string;
}

const Error: React.FC<ErrorProps> = ({ message }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate("/", { replace: true });
    }, 5000); 

    return () => {
      clearTimeout(timeoutId);
    };
  }, [navigate]);

  return (
    <>
      <div className="h-screen">
        <div role="alert" className="alert alert-error rounded-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>{message}</span>
        </div>

        <div role="alert" className="alert rounded-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info h-6 w-6 shrink-0">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>After 5 seconds you will be directed to the home page!!! </span>
          <div>
            <Link to="/" className="btn btn-md btn-info">
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
