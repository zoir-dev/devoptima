import Button from '@/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='absolute left-0 right-0 top-0 z-50 h-20 py-4 bg-transparent 2xl:container mx-4 2xl:mx-auto  flex items-center justify-between'>
            <Link href='/'>
                <Image
                    src='https://test-task-pixel-point-dev.vercel.app/_next/static/media/2bfc350dedb4b3e8d71e5e8302815583.svg'
                    alt='logo'
                    width={183}
                    height={75}
                />
            </Link>
            <div className='hidden 2xl:flex gap-12'>
                <a href='#about-us' className='hover:font-medium font-normal duration-300'>About us</a>
                <a href='#services' className='hover:font-medium font-normal duration-300'>Services</a>
                <a href='#why-devoptima' className='hover:font-medium font-normal duration-300'>Why DevOptima</a>
            </div>
            <a href="#getStarted" className='hidden 2xl:block'>
                <Button variant='outlined'>
                    Get started
                </Button>
            </a>
        </header>
    )
}

export default Header