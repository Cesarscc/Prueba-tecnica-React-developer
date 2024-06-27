
const Navbar = () => {


    return (
        <nav className="w-full flex flex-col">
            <div className="h-16 bg-gradient-to-b from-cyan-400 from-10% via-blue-500 via-40% to-blue-700 to-90%  flex justify-around items-center">
                <p className="text-white font-bold text-base sm:text-xl lg:text-4xl w-1/3">DEMO Streaming</p>
                <div className="flex gap-3 md:gap-7 w-1/2 md:w-1/3">
                    <p className="text-white w-1/2 sm:w-fit">Log in</p>
                    <button className="w-48 md:w-40 h-8 bg-gray-700 text-white font-medium flex justify-center items-center text-xs md:text-base">Start your free trial</button>
                </div>
            </div>
            <div className="w-full h-16 md:h-12 bg-zinc-700 flex justify-around items-center">
                <h1 className="text-white text-2xl font-medium w-1/3">Popular Titles</h1>
                <div className="w-1/3" />
            </div>
        </nav>
    )
}

export default Navbar