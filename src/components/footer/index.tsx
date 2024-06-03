import Image from "next/image"
import twitter from '@/assets/twitter.png'
import linedin from '@/assets/linkedin.png'
import github from '@/assets/github.png'
import discourse from '@/assets/discourse.png'
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="hidden 2xl:flex mt-40 py-14 bg-[#0A0812]">
            <div className="2xl:container mx-auto">
                <div className="flex items-start justify-between">
                    <Image
                        src='https://test-task-pixel-point-dev.vercel.app/_next/static/media/2bfc350dedb4b3e8d71e5e8302815583.svg'
                        alt='logo'
                        width={183}
                        height={75}
                    />
                    <div className="flex items-start justify-between w-[50%]">
                        {links.map((link, index) => (
                            <div key={index}>
                                <h3 className="text-white text-base font-bold pt-10">{link.title}</h3>
                                <ul className="pt-4 flex flex-col gap-3">
                                    {link.link.map((item: any, index) => (
                                        <li key={index}>
                                            {
                                                item.icon ? <a href={item.href} target="_blank"
                                                    className="text-[#BDC4D1] font-light hover:font-medium duration-300 flex items-center gap-5 hover:text-[#EFF1F6]"
                                                >
                                                    <Image src={item?.icon} alt={item.title} /> {item.title}
                                                </a>
                                                    :
                                                    <Link
                                                        href={item.href}
                                                        className="text-[#BDC4D1] font-light hover:font-medium duration-300 hover:text-[#EFF1F6]"
                                                    >
                                                        {item.title}
                                                    </Link>
                                            }
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <p className="text-sm text-[#BDC4D1] pt-1">Devoptima 2023 © All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer

const links = [
    {
        title: 'Resources',
        link: [
            {
                title: 'Docs',
                href: "/docs"
            },
            {
                title: "Release notes",
                href: "/release-notes"
            },
            {
                title: "Security",
                href: "/security"
            }
        ]
    },
    {
        title: 'Community',
        link: [
            {
                title: 'Twitter',
                href: "https://twitter.com/devoptima",
                icon: twitter
            },
            {
                title: 'Linkedin',
                href: 'https://www.linkedin.com/company/devoptima/',
                icon: linedin
            },
            {
                title: 'Github',
                href: 'https://github.com/devoptima',
                icon: github
            },
            {
                title: 'Discourse',
                href: 'https://community.devoptima.com/',
                icon: discourse
            }
        ]
    },
    {
        title: "Legal",
        link: [
            {
                title: "Privacy policy",
                href: '/privacy-policy'
            },
            {
                title: "Terms of service",
                href: "/terms-of-service"
            }
        ]
    }
]