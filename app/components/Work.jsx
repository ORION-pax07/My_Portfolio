import { assets, workData } from '@/assets/assets';
import React from 'react';
import Image from 'next/image'; // Also important if you're using <Image />



const Work = () => {
  return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
        <h2 className='text-center text-5xl font-Ovo'>My Latest Work</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            Welcome to my developer Portfolio! Explore a collection of projects showcasing 
            my expertise.</p>
        
        
        
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto my-10'>
            {workData.map((project, index)=>(
                <a 
            key={index} 
            href={project.githubLink} // Use the githubLink from your data
            target="_blank"          // Opens the link in a new tab
            rel="noopener noreferrer" // Security best practice for target="_blank"
            className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg 
            relative group block' // Added 'block' to make the link fill the space
            style={{backgroundImage: `url(${project.bgImage})`}}
        >
                    

                    <div className='bg-white w-10/10 rounded-md absolute bottom-5
                    left-1/2 -translate-x-1/2 py3 px-5 flex items-center justify-between
                    duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>   

                    <div className='w-11 h-10  border border-black rounded-full 
                flex items-center justify-center 
                shadow-[2px_2px_#000] 
                group-hover:bg-lime-300 transition-all duration-300'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                    </div>
                    
                </a>
            ))}
        </div>

            <a href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] 
            border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-pink-50 hover:-translate-y-[3px] 
            hover:shadow-[3px_3px_0_#000] transition-all duration-500 ease-in-out'>
                Show More <Image src={assets.right_arrow_bold} alt='Right arrow' 
                className='w-4'/>
            </a>

    </div>
  )
}

export default Work
