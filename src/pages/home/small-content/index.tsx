
const SmallContent = () => {
    return (
        <div className="container flex justify-center items-center py-32 min-h-screen 2xl:hidden">
            <div className="flex flex-col max-w-[700px] text-center gap-y-4">
                <h1 className="text-[40px] text-center font-bold">Hey! 👋</h1>
                <p className="text-[24px] font-light">This task is designed for a screen width of <span className="font-medium text-secondary-blue">1536px or greater</span>.
                    <br />Please focus your evaluation and testing on this resolution. The assessment of mobile or smaller screen designs is not required at this stage, and we encourage you to concentrate on the larger screen format.
                </p>
                <p className="text-[24px] font-medium">Thank you and good luck! 🍀</p>
            </div>
        </div>
    )
}

export default SmallContent