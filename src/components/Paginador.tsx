import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PaginadorProps, Data } from "../types";
import FlechaIzq from "../assets/FlechaIzq";
import FlechaDer from "../assets/FlechaDer";
import CardData from "./CardData";

interface Paginador extends PaginadorProps {
    selectedYear: number | string;
    numElement: number;
    initialPage: number;
}

const Paginador: React.FC<Paginador> = ({ filteredData, selectedYear, numElement, initialPage }) => {
    const navigate = useNavigate();
    const [paginaActual, setPaginaActual] = useState<number>(initialPage);

    useEffect(() => {

        setPaginaActual(initialPage);
    }, [initialPage, selectedYear, numElement]);

    const elementosPorPagina = numElement;

    // Calcular índices de los elementos que se mostrarán en la página actual
    const indiceInicial = (paginaActual - 1) * elementosPorPagina;
    const indiceFinal = paginaActual * elementosPorPagina;
    console.log(Math.ceil(filteredData.length / elementosPorPagina));
    const elementosPaginaActual = filteredData.slice(indiceInicial, indiceFinal);

    // Manejar evento de avanzar página
    const avanzarPagina = () => {
        if (paginaActual < Math.ceil(filteredData.length / elementosPorPagina)) {
            const newPage = paginaActual + 1;
            setPaginaActual(newPage);
            navigate(`${window.location.pathname.split("/page")[0]}/page/${newPage}`);
        }
    };

    // Manejar evento de retroceder página
    const retrocederPagina = () => {
        if (paginaActual > 1) {
            const newPage = paginaActual - 1;
            setPaginaActual(newPage);
            navigate(`${window.location.pathname.split("/page")[0]}/page/${newPage}`);
        }
    };
    return (
        <div className="mx-5 xl:mx-10 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 place-items-center content-center gap-5">
                {elementosPaginaActual.map((element: Data, ix: number) =>
                    <div key={ix} className="border-4 border-zinc-800 hover:border-white transition-all hover:delay-75">
                        <CardData  {...element} />
                    </div>
                )}
            </div>
            <div className="flex justify-between items-center mx-2 my-5">
                <div className="">
                    <p className="font-rubik font-semibold text-2xl text-zinc-600 brightness-50 text-right">
                        {paginaActual}
                    </p>
                </div>
                <div className="flex gap-10">
                    <button
                        onClick={retrocederPagina}
                        disabled={paginaActual === 1}
                        className="bg-zinc-700 w-[40px] h-[40px] rounded-full flex justify-center items-center"
                    >
                        <FlechaIzq />
                    </button>
                    <button
                        onClick={avanzarPagina}
                        disabled={
                            paginaActual === Math.ceil(filteredData.length / elementosPorPagina)
                        }
                        className="bg-zinc-700 w-[40px] h-[40px] rounded-full flex justify-center items-center"
                    >
                        <FlechaDer />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Paginador;
