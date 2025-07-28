import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (

    <div  id="services" className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Skills and Services</h4>
        <h2 className='text-center text-5xl font-Ovo'>Consulting Areas</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            I'm a final-year IT Engineering student with a strong passion for building 
            modern, efficient, and user-focused digital experiences. I specialize in 
            Flutter development for cross-platform mobile apps and web development using 
            modern tools and frameworks. Whether it's crafting sleek mobile interfaces or 
            developing responsive, high-performance websites, I aim to deliver solutions 
            that are both functional and visually engaging.</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {serviceData.map(({icon, title, description, link}, index)=>(
                <div key={index}
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                hover:bg-pink-50 hover:-translate-y-1 hover:shadow-[4px_4px_0_#000] 
                transition-all ease-in-out duration-300">

                    <Image src={icon} alt='' className='w-10'/>
                    <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                    <p className='text-sm text-gray-600 leading-5'>
                        {description}
                    </p>
                    <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                        Read more <Image alt='' src={assets.right_arrow} className='w-4' />
                    </a>
                </div>
            ))}
        </div>
    </div>

  )
}

export default Services
