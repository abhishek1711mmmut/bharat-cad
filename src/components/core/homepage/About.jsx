import React from 'react'
import image1 from "../../../assets/about/image1.webp";
import image2 from "../../../assets/about/image2.webp";
import image3 from "../../../assets/about/image3.webp";

const About = () => {
  return (
    <div className='flex flex-col lg:flex-row justify-center items-center w-[100%] place-items-center gap-6 py-12 pb-0'>
        <div className='flex flex-col justify-center items-center gap-y-6 w-[80%] hover:scale-90 transition-all duration-200'>
            <img src={image1} alt="about_image" className='hidden md:block'/>
            <hr className='border-red-800 w-[80%] hidden md:block'/>
            <div className='text-center flex flex-col justify-center items-center gap-y-6'>
                <h1 className='text-3xl font-semibold'>
                    Our Story
                </h1>
                <hr className='border-red-800 w-[80%] md:hidden'/>
                <p className='text-lg p-6 italic text-gray-500 tracking-wide'>
                    Bharat CAD was established with the aim of providing high-quality CAD designing solutions to clients in India and around the world. We have a team of expert designers in all domains who are dedicated to ensuring client satisfaction.
                </p>
            </div>
        </div>
        <div className='flex flex-col gap-y-6 w-[80%] justify-center items-center hover:scale-90 transition-all duration-200'>
            <img src={image2} alt="about_image" className='hidden md:block'/>
            <hr className='border-red-800 w-[80%] hidden md:block'/>
            <div className='text-center flex flex-col justify-center items-center gap-y-6'>
                <h1 className='text-3xl font-semibold'>
                    Our Vision
                </h1>
                <hr className='border-red-800 w-[80%] md:hidden'/>
                <p className='text-lg p-6 italic text-gray-500 tracking-wide'>
                    Our vision is to become the go-to CAD designing website for clients in India and around the world. We strive to provide customized solutions that cater to the unique needs of each client, ensuring their success and growth.
                </p>
            </div>
        </div>
        <div className='flex flex-col gap-y-6 w-[80%] justify-center items-center hover:scale-90 transition-all duration-200'>
            <img src={image3} alt="about_image" className='hidden md:block'/>
            <hr className='border-red-800 w-[80%] hidden md:block'/>
            <div className='text-center flex flex-col justify-center items-center gap-y-6'>
                <h1 className='text-3xl font-semibold'>
                    Our Technology
                </h1>
                <hr className='border-red-800 w-[80%] md:hidden'/>
                <p className='text-lg p-6 italic text-gray-500 tracking-wide'>
                    We use the latest technology and tools to provide our clients with the best CAD designing solutions. Our team of experts is well-versed in the latest software and technologies used in the industry, ensuring fast and efficient results.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About