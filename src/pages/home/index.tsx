import SmallContent from "@/pages/home/small-content"
import Main from "./main"
import AboutUs from "./about-us"
import Services from "./services"
import Testimonials from "./testimonials"
import GetStarted from "./get-started"

const HomePage = () => {
    return (
        <div>
            <SmallContent />
            <main className="2xl:flex flex-col gap-40 hidden ">
                <Main />
                <AboutUs />
                <Services />
                <Testimonials />
                <GetStarted />
            </main>
        </div>
    )
}

export default HomePage