import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import flower from "./../../assets/poppy.png";

const Login = () => {
     const navigate = useNavigate();
   
  return (
    <div>
      <header className="App-header">
        <div className="relative inline-block">
          <img src={flower} alt="flower" />

          <div className="absolute inset-0 flex justify-center items-center m-20">
            <div className="p-10 border-8 border-red-700 bg-white/40 backdrop-blur-sm rounded-lg ">
              <div className="text-red-700 text-lg font-bold  text-sm">
                <label htmlFor="" className="pb-2">Usuario</label>
                <input  type="text" />
                <label htmlFor="" className="pb-2 pt-2">Contraseña</label><input type="text" />
                <div className="flex justify-center items-center pb-2 pt-2">
 <button onClick={() => navigate("/home")} className=" p-2 border-2 border-red-700 rounded-full ">Ingresar</button>
                </div>
                <div className="flex justify-center items-center pt-2 text-xs">
 <p>No tenes cuenta ?</p>
                </div>
               <div className="flex justify-center items-center ">
 <button onClick={() => navigate("/register")} className=" p-2 border-2 border-red-700 rounded-full ">Registrate</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="text-red-200 fixed bottom-0 pb-4 text-sm "
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2025 REBECA CARRIZO BOURLOT
        </a>
      </header>
    </div>
  )
}

export default Login