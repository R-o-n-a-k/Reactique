import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastAlert() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        limit={1}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        draggable
        theme="light"
        transition:Bounce
      />
      <style>
        {`
          @media (max-width: 480px) {
            .Toastify__toast {
              font-size: .7rem;
              height: .5rem;
              width: 85%;
            }
            .Toastify__toast-icon {
              width: 1rem;
              height: 1rem;
            }
          }
        `}
      </style>
    </>
  );
}

export default ToastAlert;
