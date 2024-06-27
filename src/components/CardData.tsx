import { useState, useRef, useEffect } from "react";
import { Data } from "../types";
import ModalInfo from "./ModalInfo";

const CardData: React.FC<Data> = ({ title, images, description, programType, releaseYear }) => {
    const [viewModal, setViewModal] = useState(false);
    const element = { title, images, description, programType, releaseYear };
    const modalRef = useRef<HTMLDivElement>(null);
    const [closed, setClosed] = useState(false);
    const handleClickOutside = (event: MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setClosed(true);
            setTimeout(() => {
                setViewModal(false);
            }, 700);
        }
    };

    useEffect(() => {
        if (viewModal) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [viewModal]);


    return (
        <div ref={modalRef} className="relative">
            <div className="w-[260px] flex flex-col space-y-2 shadow-lg hover:opacity-70 transition-all hover:delay-75">
                <img src={images["Poster Art"].url} alt="Poster Art" height={350} width={260} />
                <p onClick={() => {
                    setViewModal(true);
                    setClosed(false);
                }} className="text-black font-bold truncate ml-2 cursor-pointer">
                    {title}
                </p>
            </div>
            {viewModal && <ModalInfo {...element} closed={closed} />}
        </div>
    );
};

export default CardData;
