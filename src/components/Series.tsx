import { useEffect, useState, ChangeEvent } from "react"
import { Data } from "../types";
import Paginador from "./Paginador";
import { useParams, useNavigate } from 'react-router-dom';
import useAppDispatch from '../hooks/useAppDispatch';
import useAppSelector from '../hooks/useAppSelector';
import { setValue } from '../store/elementSlice';
import Filters from "./Filters";
import Loading from "./Loading";
import Error from "./Error";

function compareTitles(a: Data, b: Data) {
    if (a.title < b.title) return -1;
    if (a.title > b.title) return 1;
    return 0;
}

const Series = () => {
    const [dataSeries, SetDataSeries] = useState<Data[]>([]);
    const [isError, setIsError] = useState(false);
    const [years, setYears] = useState<number[]>([]);
    const [selectedYear, setSelectedYear] = useState<number | string>("todos");
    const [filteredData, setFilteredData] = useState<Data[]>([]);
    const { pageNumber } = useParams<{ pageNumber: string }>();
    const numElement = useAppSelector((state) => state.element.value);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const getData = async () => {
            const res = await fetch('/src/data/sample.json');
            if (!res.ok) {
                setIsError(true);
            }
            const data = await res.json();
            const series: Data[] = [];
            const years: number[] = [];
            data.entries.forEach((element: Data) => {
                if (element.programType == 'series' && element.releaseYear >= 2010) {
                    series.push(element);
                    years.push(element.releaseYear);
                }
            });
            const orderedData = series.sort(compareTitles);
            const uniqueYears = Array.from(new Set<number>(years)).sort();
            SetDataSeries(orderedData)
            setYears(uniqueYears);
        }
        getData();
    }, [])

    useEffect(() => {
        if (selectedYear != "todos") {
            const dataFiltrada = dataSeries.filter((element: Data) => element.releaseYear == selectedYear)
            setFilteredData(dataFiltrada);
        } else {
            setFilteredData(dataSeries);
        }
    }, [selectedYear, dataSeries])

    useEffect(() => {
        if (filteredData.length > 0) {
            const pageNum = Number(pageNumber);
            const maxPageNumber = Math.ceil(filteredData.length / numElement);

            if (isNaN(pageNum) || pageNum < 1 || pageNum > maxPageNumber) {
                // Redirigir a la página principal de series si el pageNumber no es válido
                navigate(`/series/page/1`, { replace: true });
            }
        }
    }, [pageNumber, filteredData, numElement, navigate]);

    const handleChangeYear = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(e.target.value)
    }

    const handleNumElementChange = (value: number) => {
        dispatch(setValue(value));
    };


    return (
        !isError ? (
            filteredData.length > 0 ?
                <div className="flex flex-col">
                    <Filters handleChangeYear={handleChangeYear} years={years} handleNumElementChange={handleNumElementChange} numElement={numElement} />
                    <div className="bg-slate-50  mt-5">
                        <Paginador filteredData={filteredData} selectedYear={selectedYear} numElement={numElement} initialPage={Number(pageNumber) || 1} />
                    </div>
                </div> :
                <Loading />
        ) : <Error />
    )
}

export default Series