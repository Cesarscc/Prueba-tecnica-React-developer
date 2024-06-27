import Card from "./Card"

const Index = () => {
    return (
        <main className="h-full">
            <div className="ml-20 mt-10 mb-[105px] flex flex-col justify-center items-center sm:justify-normal sm:flex-row gap-5">
                <Card url={"series"} title={"SERIES"} description={"Popular Series"} />
                <Card url={"movies"} title={"MOVIES"} description={"Popular Movies"} />
            </div>
        </main >
    )
}

export default Index