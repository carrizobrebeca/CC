import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import flower from "./../../assets/poppy.png";
const Home = () => {
  return (
    <div>
      <header>
        <div className="w-full flex justify-between">
          <div className="">
            <div className="flex justify-start items-center">
              <div className="rounded-full border-2 border-red-700 flex justify-start aspect-square w-[60px] m-2">
                <img src={flower} alt="flower" className="rounded-full p-2" />
              </div>
              <div>
                <h2>Bienvenida!</h2>
                <h2 className="text-red-700 font-bold">UserName</h2>
              </div>
            </div>
          </div>
          <div className="p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 text-red-700"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
              />
            </svg>
          </div>
        </div>
      </header>
      <main className="w-full">
        <div className="ml-6 mr-6 mt-2 mb-2">
          <div className="border-2 border-red-200 rounded-xl shadow-lg shadow-red-500/50  ">
            <div className="p-2 grid grid-cols-7 gap-4 items-center bg-red-200 text-withe rounded-tl-lg rounded-tr-lg">
              <h2 className="flex justify-center">Lun</h2>
              <h2 className="flex justify-center">Mar</h2>
              <h2 className="flex justify-center">Mié</h2>
              <h2 className="flex justify-center">Jue</h2>
              <h2 className="flex justify-center">Vie</h2>
              <h2 className="flex justify-center">Sab</h2>
              <h2 className="flex justify-center">Dom</h2>
            </div>
            <div className="p-2 grid grid-cols-7 gap-4 items-center">
              <h2 className="flex justify-center">28</h2>
              <h2 className="flex justify-center">29</h2>
              <h2 className="flex justify-center border-2 border-red-700 rounded-full ">
                30
              </h2>
              <h2 className="flex justify-center">31</h2>
              <h2 className="flex justify-center bg-red-700 rounded-full text-white">01</h2>
              <h2 className="flex justify-center rounded-full bg-red-300">02</h2>
              <h2 className="flex justify-center rounded-full bg-red-300">03</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
