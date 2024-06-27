import { Link } from "react-router-dom";
import Placeholder from "../assets/placeholder.png";
import { CardProps } from "../types";


const Card: React.FC<CardProps> = ({ title, description, url }) => {
    return (
        <div>
            <Link style={{
                textDecoration: 'none',
            }}
                to={`/${url}/page/1`}>
                <div className="relative bg-zinc-900 w-48 h-64 flex justify-center items-center">
                    <div className="absolute w-full h-full">
                        <img className="w-full h-full object-cover" src={Placeholder} alt="Placeholder" />
                    </div>
                    <h1 className="text-white text-5xl font-semibold">{title}</h1>
                </div>
                <p>{description}</p>
            </Link>
        </div>
    );
}

export default Card;
