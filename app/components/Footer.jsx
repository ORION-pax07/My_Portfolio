import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={assets.logo} alt='' className='w-36 mx-auto
        mb-2'/>

                <div className='w-max flex items-center gap-2 mx-auto'>
                    <Image src={assets.mail_icon} alt='' className='w-6' />
                    raneprathamesh22@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t
        border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© Prathamesh Rane. All rights reserved</p>

                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li>
                        <a className="flex items-center gap-2 hover:text-blue-500 transition" target="_blank" href="https://github.com/ORION-pax07">
                            <FaGithub className="text-xl" />
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a className="flex items-center gap-2 hover:text-blue-500 transition" target="_blank" href="https://www.linkedin.com/in/prathamesh-rane-bba4622b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                            <FaLinkedin className="text-xl" />
                            LinkedIn
                        </a>
                    </li>
                    {/* <li>
                        <a className="flex items-center gap-2 hover:text-blue-500 transition" target="_blank" href="https://twitter.com/ORIONpax07">
                            <FaTwitter className="text-xl" />
                            Twitter
                        </a>
                    </li> */}
                </ul>

            </div>
        </div>
    )
}

export default Footer
