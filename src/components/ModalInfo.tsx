import { useEffect, useState } from "react";
import { Data } from "../types";

interface Props extends Data {
    closed: boolean;
}


const ModalInfo: React.FC<Props> = ({ title, description, images, releaseYear, closed }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (!closed) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    }, [closed]);


    return (
        <div
            className={`absolute flex flex-col justify-center items-center z-10 h-full w-full bottom-0 bg-white space-y-1 transition-opacity duration-700 ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <img className="w-[155px] h-[240px]" src={images["Poster Art"].url} alt="Poster Art" />
            <p className="text-lg font-bold text-center">{title}</p>
            <p className="text-xs font-medium text-center mx-1">{description}</p>
            <p className="text-balance font-bold text-center">{releaseYear}</p>
        </div>
    );
};

export default ModalInfo;
