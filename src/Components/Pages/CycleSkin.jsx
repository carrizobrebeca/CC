import React from "react";
import { useNavigate } from "react-router-dom";
import bgflower from "./../../assets/bgpoppy.png";

const CycleSkin = ({ onClose }) => {
  const navigate = useNavigate();
  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm p-4">
      <div className="flex justify-center items-center">
        <div className="w-[700px] h-max-[400px] bg-slate-200 rounded-xl p-4">
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
                 El ciclo y tu piel
                </h2>
              </div>
            </div>
          </div>

          <div className="mt-[120px]">
            <div className="">
              <div className="overflow-auto overflow-x-hidden  h-[400px]">
                <div className="w-full bg-neon-rose p2 flex justify-around">
                  <h2 className="text-white pl-2">Fase</h2>
                  <h2 className="text-white pl-2">Estado</h2>

                  <h2 className="text-white pl-2">Efecto</h2>
                  <h2 className="text-white pl-2">Activo</h2>


                  <h2 className="text-white pl-2">Cuidado</h2>

                </div>
                <form action="">
                  <div className=" flex justify-between pt-2">
                    <label className="pl-2 " htmlFor="">
                      Menstrual (Día 1-5)
                    </label>
                    <h2>Enrojecimiento, sensibilidad, resequedad</h2>
                    <h2>Barrera de la piel débil</h2>
                    <h2>Ácido Hialurónico</h2>
                    <h2>hidratacion</h2>
                  </div>

                  <div className=" flex justify-between pt-2 border-top-4 border-bottom-0 border-left-0 border-t border-neon-rose rigth-0 w-full ">
                    <label className="pl-2 " htmlFor="">
                       Folicular (Día 6-11)
                    </label>
                    <h2>Equilibrio y luminosidad</h2>
                    <h2>Producción Hialurónico y Colageno </h2>
                    <h2>Vitamina C y Ácido Glicólico</h2>
                    <h2>Mantener el brillo</h2>
                    
                  </div>
                     <div className=" flex justify-between pt-2 border-top-4 border-bottom-0 border-left-0 border-t border-neon-rose rigth-0 w-full ">
                    <label className="pl-2 " htmlFor="">
                      Ovulación (Día 12-14)
                    </label>
                    <h2>Poros dilatados</h2>
                    <h2>Produccion de grasa, acné y puntos negros</h2>
                    <h2>Niacinamida y Ácido Salicilico </h2>
                    <h2>Prevención de acné</h2>
                  </div>
                     <div className=" flex justify-between pt-2 border-top-4 border-bottom-0 border-left-0 border-t border-neon-rose rigth-0 w-full ">
                    <label className="pl-2 " htmlFor="">
                       Lútea (Día 15-28)
                    </label>
                    <h2>Grasa e imperfecciones</h2>
                    <h2>Irritación y espinillas (rojo/blanco)</h2>

                    <h2>Ácido Salicilico </h2>
                    <h2>Limpieza profunda, tomar agua</h2>

                  </div>
                  <div className="flex justify-around pt-4">
                    
                    <button onClick={onClose} className="p-2 bg-neon-rose rounded-xl text-white">Cerrar</button>
                   

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

export default CycleSkin;
