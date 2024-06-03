
import img1 from '@/assets/service1.png'
import img2 from '@/assets/service2.png'
import img3 from '@/assets/service3.png'
import Image from 'next/image'
const Services = () => {
    return (
        <div className='w-[1220px] mx-auto' id='services'>
            <h2 className="text-[48px] text-center leading-[112.5%]">
                Innovative solutions
                <br />
                for operational excellence
            </h2>
            <p className="text-xl text-[#BDC4D1] text-center pt-5">
                Tailored DevOps expertise driving your business momentum.
                <br />
                Personalized solutions for growth and evolution.
            </p>
            <div className="pt-14 flex relative -ml-[6.5%]">
                <div className="services-hero-gradient absolute  right-0 bottom-0"></div>
                <Image src={img1} alt='hero' className='relative' />
                <Image src={img2} alt='hero' className='relative' />
                <Image src={img3} alt='hero' className='relative' />
            </div>
        </div>
    )
}

export default Services