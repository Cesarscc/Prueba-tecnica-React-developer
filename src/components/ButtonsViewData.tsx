interface PropsButton {
    handleNumElementChange: (number: number) => void;
    numElement: number;
    value: number;
}

const ButtonsViewData: React.FC<PropsButton> = ({ handleNumElementChange, numElement, value }) => {
    return (
        <button
            className={`bg-black w-24 xl:w-32 h-8 text-white font-semibold text-lg rounded-xl transition-all hover:bg-zinc-600 hover:delay-100 border-4 border-zinc-600 hover:border-black flex items-center justify-center ${numElement === value ? 'bg-gray-400' : ''}`}
            onClick={() => handleNumElementChange(value)}
            disabled={numElement == value}
        >
            {value}
        </button>
    )
}

export default ButtonsViewData