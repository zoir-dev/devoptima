import testimonial1 from '@/assets/testimonial1.png'
import testimonial2 from '@/assets/testimonial2.png'
import user1 from '@/assets/user1.png'
import user2 from '@/assets/user2.png'
import Image from 'next/image'

const Testimonials = () => {
    return (
        <div className="testimonials  h-[850px] flex items-center justify-center -mt-40" id='why-devoptima'>
            <div className='flex items-center gap-16'>
                <div className='w-[522px]'>
                    <Image src={testimonial1} alt='testimonial1' className='-ml-12' />
                    <p className='text-[#BDC4D1] text-2xl'>Thanks to DevOptima, our team can focus more on
                        <span className='text-[#EFF1F6]'> innovation </span>
                        and less on operational challenges. Their
                        <span className='text-[white]'> cloud management solutions </span> are top-notch.
                    </p>
                    <div className='flex items-center gap-3 pt-8'>
                        <Image src={user1} alt='user1' />
                        <div>
                            <h4 className='text-lg'>John Smith</h4>
                            <p className='text-[15px] text-[#BDC4D1]'>IT Director at Reflex</p>
                        </div>
                    </div>
                </div>
                <div className='w-[522px]'>
                    <Image src={testimonial2} alt='testimonial1' className='-ml-12' />
                    <p className='text-[#BDC4D1] text-2xl'>
                        DevOptima has been a game-changer for us. With their support, we&apos;ve shifted our focus
                        <span className='text-white'> from operational hurdles to pushing boundaries in innovation.
                        </span>
                    </p>
                    <div className='flex items-center gap-3 pt-8'>
                        <Image src={user2} alt='user1' />
                        <div>
                            <h4 className='text-lg'>John Smith</h4>
                            <p className='text-[15px] text-[#BDC4D1]'>IT Director at Reflex</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials