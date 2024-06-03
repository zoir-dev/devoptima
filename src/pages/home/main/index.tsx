import Button from "@/ui/button"
import Image from "next/image"
import Form from "./form"

const Main = () => {
    return (
        <section className="bg-img">
            <div className="container flex  md:grid-cols-1 justify-between relative items-center pt-[88px]">
                <div className="col-span-1 pt-12">
                    <div className="hero-round-gradient"></div>
                    <h2 className="hero-title relative text-7xl leading-[112.5%] pb-7">
                        Revolutionize <br className="block" />
                        your DevOps journey
                        <br className="block" />
                        with DevOptima
                    </h2>
                    <p className="text-white text-xl leading-normal font-light tracking-tight-8 pt-0 pb-9">
                        Empower groups to boost innovation with efficient development,
                        <br className="block" />automated operations, and stable scaling.
                    </p>
                    <Form />
                </div>
                <div className="col-span-1 relative box-border w-[590px]">
                    <div className="hero-ellipse-gradient z-10"></div>
                    <Image
                        src={'https://test-task-pixel-point-dev.vercel.app/_next/static/media/4962b3bbc08701675a5051fcaf9deb34.svg'}
                        alt="hero"
                        loading="lazy"
                        width={656} height={487}
                        className="z-20 absolute -right-7 top-[-275px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default Main