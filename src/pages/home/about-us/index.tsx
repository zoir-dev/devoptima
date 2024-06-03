
import Image from 'next/image'
import hero from '@/assets/about.png'
import img1 from '@/assets/transformation.svg'
import img2 from '@/assets/operations.svg'
import img3 from '@/assets/implementation.svg'
import img4 from '@/assets/mastery.svg'
const AboutUs = () => {
    return (
        <div className='flex items-center gap-20 relative' id='about-us'>
            <Image src={hero} alt='hero' className='-ml-[18%]' />
            <div className='about-hero-gradient absolute top-10 left-[30%]'></div>
            <div className='w-[630px]'>
                <h2 className='text-[48px]'>What is DevOptima?</h2>
                <p className='text-xl text-[#BDC4D1]'>
                    At DevOptima, we are a team of passionate DevOps experts committed to transforming the way businesses approach software development and operations.
                </p>
                <div className='grid grid-cols-2 pt-14 gap-y-10 gap-x-20'>
                    {data.map((d, index) => (
                        <div key={d.title}>
                            <div className='w-12 h-12 relative flex items-center justify-center'>
                                <Image src={d.img} alt={d.title} width={50} height={50} className={`${index === 3 && 'scale-[1.6]'} ${index === 2 && 'scale-[1.9]'}`} />
                                <div className="small-about-gradient"></div>
                            </div>
                            <h3 className='text-xl font-medium pt-3 pb-2'>{d.title}</h3>
                            <p className='text-[#BDC4D1]'>{d.body}</p>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default AboutUs


const data = [
    {
        img: img1,
        title: "DevOps transformation",
        body: 'Reshaping businesses with DevOps expertise.'
    },
    {
        img: img2,
        title: "Efficient operations",
        body: 'Streamline processes for productivity gains.'
    },
    {
        img: img3,
        title: "CI/CD implementation",
        body: 'Seamless software delivery pipeline.'
    },
    {
        img: img4,
        title: "Automation mastery",
        body: 'Unlock full automation potential.'
    },
]