import React from "react";
import { useNavigate } from "react-router-dom";

const Modal = ({ onClose }) => {
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
                  class="size-6 text-neon-rose"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
                  />
                </svg>
                <h2 className="pb-2 pl-2 ">Cambios de humor</h2>
              </div>
             <div className="overflow-auto overflow-x-hidden  h-[400px]">
              <form action="">
    
                <div className=" flex justify-between">
                  <label className="pl-2 " htmlFor="">
                    😁 Feliz
                  </label>
                   <input type="radio" className="p-2 rounded-full" />
                </div>
                
                <div className=" flex justify-between">
                  <label className="pl-2 " htmlFor="">
                    🥺 Triste
                  </label>
                   <input type="radio" className="p-2 rounded-full" />
                </div>
                
                <div className=" flex justify-between">
                  <label className="pl-2 " htmlFor="">
                    😡 Enojada
                  </label>
                   <input type="radio" className="p-2 rounded-full" />
                </div>
                
                <div className=" flex justify-between">
                  <label className="pl-2 " htmlFor="">
                    🍔 Hambrienta
                  </label>
                   <input type="radio" className="p-2 rounded-full" />
                </div>
                
                <div className=" flex justify-between">
                  <label className="pl-2 " htmlFor="">
                    🫨 Ansiosa
                  </label>
                   <input type="radio" className="p-2 rounded-full" />
                </div>
                
                <div className=" flex justify-between">
                  <label className="pl-2 " htmlFor="">
                    😎 Segura
                  </label>
                   <input type="radio" className="p-2 rounded-full" />
                </div>
                 <div className=" flex justify-between">
                  <label className="pl-2 " htmlFor="">
                    💪 Energica
                  </label>
                   <input type="radio" className="p-2 rounded-full" />
                </div>
                 <div className=" flex justify-between">
                  <label className="pl-2 " htmlFor="">
                    😌 Relajada
                  </label>
                   <input type="radio" className="p-2 rounded-full" />
                </div>
                <div className=" flex justify-between">
                  <label className="pl-2 " htmlFor="">
                    😴 Cansada
                  </label>
                   <input type="radio" className="p-2 rounded-full" />
                </div>
                
                <div className=" flex justify-between">
                  <label className="pl-2 " htmlFor="">
                    💅 Sexy
                  </label>
                   <input type="radio" className="p-2 rounded-full" />
                </div>
                 <div className=" flex justify-between">
                  <label className="pl-2 " htmlFor="">
                    🤦‍♀️ Culpa
                  </label>
                   <input type="radio" className="p-2 rounded-full" />
                </div>
                <div className=" flex justify-between">
                  <label className="pl-2 " htmlFor="">
                    👽 Rara
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

export default Modal;
