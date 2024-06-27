import { ChangeEvent, useEffect, useState } from "react";
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

const Movies = () => {
    const [dataMovies, SetDataMovies] = useState<Data[]>([]);
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
            const res = await fetch('/data/sample.json');
            if (!res.ok) {
                setIsError(true);
                return;
            }
            const data = await res.json();
            const movies: Data[] = [];
            const years: number[] = [];
            data.entries.forEach((element: Data) => {
                if (element.programType == 'movie' && element.releaseYear >= 2010) {
                    movies.push(element);
                    years.push(element.releaseYear);
                }
            });
            const orderedData = movies.sort(compareTitles);
            const uniqueYears = Array.from(new Set<number>(years)).sort();
            SetDataMovies(orderedData);
            setYears(uniqueYears);
        };
        getData();
    }, []);

    useEffect(() => {
        if (selectedYear !== "todos") {
            const filtered = dataMovies.filter((element: Data) => element.releaseYear == selectedYear);
            setFilteredData(filtered);
        } else {
            setFilteredData(dataMovies);
        }
    }, [selectedYear, dataMovies]);


    useEffect(() => {
        if (filteredData.length > 0) {
            const pageNum = Number(pageNumber);
            const maxPageNumber = Math.ceil(filteredData.length / numElement);

            if (isNaN(pageNum) || pageNum < 1 || pageNum > maxPageNumber) {
                // Redirigir a la página principal de películas si el pageNumber no es válido
                navigate(`/movies/page/1`, { replace: true });
            }
        }
    }, [pageNumber, filteredData, numElement, navigate]);

    const handleChangeYear = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(e.target.value);
    };

    const handleNumElementChange = (value: number) => {
        dispatch(setValue(value));
    };



    return (
        !isError ? (
            filteredData.length > 0 ?
                <div className="flex flex-col">
                    <Filters handleChangeYear={handleChangeYear} years={years} handleNumElementChange={handleNumElementChange} numElement={numElement} />
                    <div className="bg-slate-50 mt-5">
                        <Paginador
                            filteredData={filteredData}
                            selectedYear={selectedYear}
                            numElement={numElement}
                            initialPage={Number(pageNumber) || 1} />
                    </div>
                </div> :
                <Loading />
        ) :
            <Error />

    );
};

export default Movies;
