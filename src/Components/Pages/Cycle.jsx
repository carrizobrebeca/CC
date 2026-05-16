import React from "react";
import { useNavigate } from "react-router-dom";
import bgflower from "./../../assets/bgpoppy.png";

const Cycle = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm p-4">
      <div className="flex justify-center items-center">
        <div className="w-[400px] h-max-[400px] bg-slate-200 rounded-xl p-4">
          <div className="w-full h-[40px] relative">
                    <img src='https://png.pngtree.com/png-clipart/20231016/original/pngtree-sakura-cherry-blossom-flower-png-image_13325006.png' alt="flower" className="h-40 w-full object-cover rounded-t-xl"/>

            {/* <img
              src={bgflower}
              alt=""
              className=" h-40 w-full object-cover rounded-t-xl "
            /> */}

            <div className="absolute inset-0 h-40 w-full flex justify-center items-center">
              <div className=" flex justify-center items-center bg-white/40 backdrop-blur-sm w-full pt-2 pb-2">
                <h2 className="text-neon-rose text-lg font-bold ">
                  🩸 Ciclo menstrual
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-[120px]">
            <div className="">
              <div className="overflow-auto overflow-x-hidden  h-[400px]">
                <div className="w-full bg-neon-rose p2">
                  <h2 className="text-white pl-2">Modificar ciclo menstrual</h2>
                </div>
                <form action="">
                  <div className=" flex justify-between pt-2">
                    <label className="pl-2 " htmlFor="">
                      Fecha de inicio del período
                    </label>
                    
                  </div>

                  <div className=" flex justify-between pt-2 border-top-4 border-bottom-0 border-left-0 border-t border-neon-rose rigth-0 w-full ">
                    <label className="pl-2 " htmlFor="">
                      Fecha de fin del período
                    </label>
                    
                  </div>
                  <div className="flex justify-around pt-4">
                    
                    <button onClick={onClose} className="p-2 bg-neon-rose rounded-xl text-white">Cerrar</button>
                    <button onClick={onClose} className="p-2 bg-neon-rose rounded-xl text-white">Guardar</button>

                  </div>
                </form>
              </div>
            </div>

            
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cycle;
