import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";
import flower from "./../../assets/poppy.png";
import Symptoms from "./Symptoms";
import Cycle from "./Cycle";

import { DateRangePicker } from "react-date-range";
import style from "./dates.module.css";
import { es } from "date-fns/locale";
import { format, addDays } from "date-fns";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import CycleSkin from "./CycleSkin";

const SkinCare = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("home");
  const [activeModal, setActiveModal] = useState(false);
  const [activeSymptoms, setActiveSymptoms] = useState(false);
  const [activeCycle, setActiveCycle] = useState(false);
  const seccionRef = useRef(null);

  const irASeccion = () => {
    seccionRef.current.scrollIntoView({
      behavior: "smooth", // hace el scroll suave
      block: "start", // alinea al inicio de la sección
    });
  };

  const [selectedMonth, setSelectedMonth] = useState("");

  const optionsArray = [
    { value: "A-Z", label: "A-Z" },
    { value: "Z-A", label: "Z-A" },
    { value: "Mayor Precio", label: "Mayor Precio" },
    { value: "Menor Precio", label: "Menor Precio" },
  ];

  // const [selectionRange, setSelectionRange] = useState({
  //   startDate: new Date(),
  //   endDate: new Date(),
  //   key: "selection",
  // });

  // const handleSelect = (ranges) => {
  //   setSelectionRange(ranges.selection);

  //   console.log("Inicio:", ranges.selection.startDate);
  //   console.log("Fin:", ranges.selection.endDate);
  // };
  const [ranges, setRanges] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 4),
      key: "selection",
    },
    {
      startDate: addDays(new Date(), 14),
      endDate: addDays(new Date(), 18),
      key: "second",
    },
  ]);

  const handleSelect = (item) => {
    const start = item.selection.startDate;

    setRanges([
      {
        startDate: start,
        endDate: addDays(start, 4),
        key: "selection",
      },
      {
        startDate: addDays(start, 14),
        endDate: addDays(start, 18),
        key: "second",
      },
    ]);
  };
  return (
    <div>
      <header>
        <div className="w-full flex justify-between">
          <div className="">
            <div className="flex justify-start items-center">
              <div className="rounded-full border-2 border-neon-rose flex justify-start aspect-square w-[60px] m-2">
                <img
                  src="https://png.pngtree.com/png-clipart/20231016/original/pngtree-sakura-cherry-blossom-flower-png-image_13325006.png"
                  alt="flower"
                  className="aspect-square h-[50px] pt-2 pl-2"
                />
              </div>
              <div>
                <h2>Bienvenida!</h2>
                <h2 className="text-neon-rose font-bold">UserName</h2>
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
              className="size-6 text-neon-rose"
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
        <div className="bg-neon-rose w-full flex justify-around text-white font-bold">
        <button
          className="p-2 "
          onClick={() => setActiveModal(true)}
        >
          Productos
        </button>
          <button
          className="p-2 "
          onClick={() => setActiveModal(true)}
        >
          Rutinas
        </button>
        <button
          className="p-2 "
          onClick={() => setActiveSymptoms(true)}
        >
          Necesidad
        </button>
        <button
          className="p-2 "
          onClick={() => setActiveCycle(true)}
        >
          Ciclo
        </button>


        {activeModal && <Modal onClose={() => setActiveModal(false)} />}
        {activeSymptoms && (<Symptoms onClose={() => setActiveSymptoms(false)} />)}
        {activeCycle && <CycleSkin onClose={() => setActiveCycle(false)} />}
       </div>
          {/* <div className="bg-neon-rose w-full flex justify-around text-white font-bold">
            <h2>Acné</h2>
            <h2>Hidratación</h2>
            <h2>Exfoliación</h2>
            <h2>Manchas</h2>
            <h2>Irritación</h2>
            <h2>Textura</h2>
            <h2>Mascarillas</h2>
            <h2>Accesorios</h2>
          </div> */}
          <div className="bg-roselight w-full flex justify-around text-rosedark font-bold">
            <h2>Acné</h2>
            <h2>Hidratación</h2>
            <h2>Exfoliación</h2>
            <h2>Manchas</h2>
            <h2>Irritación</h2>
            <h2>Textura</h2>
            <h2>Mascarillas</h2>
            <h2>Accesorios</h2>
          </div>
           <div className="bg-cremelight w-full flex justify-around text-cremedark font-bold">
            <h2>Desmaquillante</h2>
            <h2>Limpiador</h2>
            <h2>Exfoliante</h2>
            
            <h2>Tónico</h2>
            <h2>Esencia</h2>
            <h2>Serum</h2>
             <h2>Mascarilla</h2>
            <h2>Contorno</h2>
            <h2>Crema</h2>
            <h2>Protector</h2>
           
            
            <h2>Peeling</h2>

          </div>
      </main>
      
    </div>
  );
};

export default SkinCare;
