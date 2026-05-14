import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import flower from "./../../assets/poppy.png";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <header className="App-header">
        <div className="relative inline-block">
          <img src={flower} alt="flower" />

          <div className="absolute inset-0 flex justify-center items-center">
            <div className="p-10 aspect-square rounded-full flex justify-center items-center border-8 border-red-700 bg-white/40 backdrop-blur-sm">
              <div className="text-red-700 text-lg font-bold">Cicle Care</div>
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
  );
};
export default Landing;


// const Landing = () => {
//   return (
//     <div>
//       <header className="App-header">
//         <div className="relative inline-block">

//           <img src={flower} alt="flower" />

//           <div className="absolute inset-0 flex justify-center items-center">
//             <div className="p-20 aspect-square rounded-full flex justify-center items-center border-8 border-rose-700 bg-white/40 backdrop-blur-sm">
//               <div className="text-rose-700 text-lg font-bold">
//                 Cicle Care
//               </div>
//             </div>
//           </div>

//         </div>
//       </header>
//     </div>
//   );
// };
