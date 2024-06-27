interface Image {
    url: string;
    width: number;
    height: number;
}

interface Images {
    'Poster Art': Image;
}

export interface Data {
    title: string;
    description: string;
    programType: string;
    images: Images;
    releaseYear: number;
}

export interface PaginadorProps {
    filteredData: Data[];
}

export interface CardProps {
    title: string;
    description: string;
    url: string;
}