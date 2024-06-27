import { ChangeEvent } from "react";
import ButtonsViewData from "./ButtonsViewData";
import ReturnMobile from "./ReturnMobile";
import ReturnDesktop from "./ReturnDesktop";

interface PropsFilters {
    handleChangeYear: (e: ChangeEvent<HTMLSelectElement>) => void;
    handleNumElementChange: (number: number) => void;
    years: number[];
    numElement: number;
}

const Filters: React.FC<PropsFilters> = ({ handleChangeYear, years, handleNumElementChange, numElement }) => {

    return (
        <div className="flex justify-around items-center mt-5">
            <div className="flex flex-col ml-2">
                <label className="w-40 ml-1 text-sm font-bold mb-1">Filtrar por año</label>
                <select className="w-40 border border-black rounded-lg" onChange={handleChangeYear}>
                    <option value={"todos"}>Todos los años</option>
                    {years.map((year: number, ix: number) =>
                        <option key={ix} value={year}>{year}</option>
                    )}
                </select>
                <ReturnMobile />
            </div>
            <ReturnDesktop />
            <div className="flex flex-col items-center">
                <label className="font-bold text-black text-center text-sm md:text-lg">CANTIDAD DE ELEMENTOS A MOSTRAR: {numElement}</label>
                <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 justify-between items-center w-full xl:w-[450px]">
                    <ButtonsViewData handleNumElementChange={handleNumElementChange} numElement={numElement} value={5} />
                    <ButtonsViewData handleNumElementChange={handleNumElementChange} numElement={numElement} value={10} />
                    <ButtonsViewData handleNumElementChange={handleNumElementChange} numElement={numElement} value={20} />
                </div>
            </div>
        </div>
    )
}

export default Filters