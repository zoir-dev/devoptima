import Button from "@/ui/button"

const GetStarted = () => {
    return (
        <div className="text-center relative flex flex-col items-center" id="getStarted">
            <h2 className="get-started-title text-[48px]">Ready to elevate your DevOps strategy?</h2>
            <p className="text-xl text-[#BDC4D1] pt-5 w-[716px]">
                Join the multitude of companies benefiting from optimized DevOps practices. Contact us to discover how DevOptima can help your business.
                <div className="flex gap-5 justify-center pt-10">
                    <Button>
                        Contact us
                    </Button>
                    <Button variant="outlined">
                        Try for free
                    </Button>
                </div>
            </p>
            <div className="hero-round-gradient2 -z-10 !bottom-[-325px] !left-[-571px]"></div>
            <div className="hero-round-gradient2 -z-10 !bottom-[-325px] !right-[-571px]"></div>
        </div>
    )
}

export default GetStarted