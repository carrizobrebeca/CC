import React from "react";
import { useNavigate } from "react-router-dom";

const Symptoms = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm p-4">
      <div className="flex justify-center items-center">
        <div className="w-[400px] h-max-[400px] bg-slate-200 rounded-xl p-4">
          <div>
            <div className="bg-slate-100 rounded-xl p-2  shadow-md">
              <div className="flex justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6 text-red-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                  />
                </svg>

                <h2 className="pb-2 pl-2 ">Sintomas</h2>
              </div>
              <div className="overflow-auto overflow-x-hidden  h-[400px]">
                <form action="">
                  <div className=" flex justify-between">
                    <label className="pl-2 " htmlFor="">
                     🙎‍♀️ Dolor abdominal
                    </label>
                    <input type="radio" className="p-2 rounded-full" />
                  </div>

                  <div className=" flex justify-between">
                    <label className="pl-2 " htmlFor="">
                      🎈 Hinchazon
                    </label>
                    <input type="radio" className="p-2 rounded-full" />
                  </div>

                  <div className=" flex justify-between">
                    <label className="pl-2 " htmlFor="">
                      🤦‍♀️ Dolor de cabeza
                    </label>
                    <input type="radio" className="p-2 rounded-full" />
                  </div>

                  <div className=" flex justify-between">
                    <label className="pl-2 " htmlFor="">
                      🍓 Acne
                    </label>
                    <input type="radio" className="p-2 rounded-full" />
                  </div>

                  <div className=" flex justify-between">
                    <label className="pl-2 " htmlFor="">
                      🍒 Pechos doloridos
                    </label>
                    <input type="radio" className="p-2 rounded-full" />
                  </div>

                  
                </form>
              </div>
            </div>

            <div className=" p-2 ">
              <div className="flex justify-around items-center">
                <button
                  onClick={onClose}
                  className="bg-red-400 p-2 text-white rounded-xl shadow-md"
                >
                  Cerrar
                </button>

                <button
                  onClick={onClose}
                  className="bg-red-400 p-2 text-white rounded-xl shadow-md"
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symptoms;
