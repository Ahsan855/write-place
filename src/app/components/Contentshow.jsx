"use client";
import { useState } from "react";
import { GrMenu } from "react-icons/gr";
import { ImCross } from "react-icons/im";

export const Contentshow = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="mx-auto flex items-center justify-center">
      <GrMenu className="text-2xl" onClick={() => setOpenModal(true)} />
      <div
        className={`fixed flex justify-center items-center z-[100] ${
          openModal ? "visible opacity-1" : "invisible opacity-0"
        } inset-0 backdrop-blur-sm bg-black/20 duration-100`}
      >
        <div
          className={`absolute max-w-md p-4 text-center bg-primary drop-shadow-2xl rounded-lg ${
            openModal
              ? "scale-1 opacity-1 duration-300"
              : "scale-0 opacity-0 duration-150"
          }`}
        >
          <ImCross
            className="text-2xl mx-auto mr-0 cursor-pointer"
            onClick={() => setOpenModal(false)}
          />
          <h1 className="p-2 text-3xl font-semibold">Welcome to NavigateUI!</h1>
          <p className="mb-3">
            Elevate your React projects with beautifully crafted components
            designed for TailwindCSS.
          </p>
        </div>
      </div>
    </div>
  );
};
