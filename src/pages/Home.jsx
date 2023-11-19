import React, { useEffect, useState } from 'react'
import HighlightText from '../components/core/homepage/HighlightText'
import { Link } from 'react-router-dom'
import { FiUpload } from "react-icons/fi";
import ClientSlider from '../components/slider/ClientSlider';
import About from '../components/core/homepage/About';
import Footer from '../components/core/homepage/Footer';
import { IoIosClose } from "react-icons/io";
import Navbar from '../components/common/Navbar';

import image1 from '../assets/technology/image1.avif'
import image2 from '../assets/technology/image2.png'
import image3 from '../assets/technology/image3.jpg'

const Home = () => {

  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const handleDisclaimer = () => {
    setShowDisclaimer(false);
    sessionStorage.setItem('session', true);
};

  useEffect(()=>{
  if(!sessionStorage.getItem('session')){
    setTimeout(function(){
      setShowDisclaimer(true);
    },3000)
  }
},[])

  // disclaimer box on 1st website loading
  const disclaimer=
      <div className='fixed left-[50%] translate-x-[-50%] top-[45vh] translate-y-[-50%] z-[1000]'>
        <div className=' border-4 rounded-xl p-1 sm:p-4 border-black bg-gray-200 w-[300px] sm:w-[500px] h-[270px] text-center'>
          <IoIosClose size={30} className='absolute top-2 right-2 cursor-pointer' onClick={()=>handleDisclaimer()}/>
          <h1 className='text-3xl font-bold text-center'>Disclaimer</h1>
          <p className='text-xl text-center mt-2 font-semibold'>Your data is safe with us.</p>
          <p className='italic'>We do not store or share your CAD details in any form. We respect your privacy and keep your ideas and diagrams secret.</p>
          <p className='italic font-semibold'>We delete all your design data after handover of work</p>
          <button className='border-2 border-gray-800 px-4 sm:py-2 mt-1 sm:mt-5 bg-white rounded-md flex-grow'>Read Privacy Policy</button>
        </div>
      </div>

  return (
    <div className=''>
      {
        // show disclaimer box when showDisclaimer is true, otherwise hide it
        showDisclaimer && disclaimer
      }

      {/* blur the background when disclaimer box open */}
      <div className={`${showDisclaimer?"blur-sm":""}`}>

        {/* Navigation bar */}
        <Navbar/>

        {/* section 1 */}
        <div className='section1'>
          <div className='mx-auto flex flex-col w-11/12 max-w-screen-xl h-[60vh] items-center justify-between pb-8 z-50'>
            <div className='heading text-center text-3xl sm:text-5xl break-normal tracking-wide leading-tight font-bold mx-auto mt-10 w-[70%]'>
              <HighlightText text={'Freelance Cad Designers in India'}/>
            </div>

            <div className='text-center text-xl text-opacity-90 font-semibold sm:-mt-20 w-[90%] text-white italic '>
              Join us at the forefront of design innovation, where imagination meets precision, shaping the future today
            </div>

            <div className='flex flex-col sm:flex-row justify-center items-center gap-x-10'>
              <Link to='#'>
                <button className='border border-orange-700 bg-orange-600 px-[16px] py-[10px] text-white rounded-md my-8 sm:my-12 hover:opacity-90'>
                  Get a Quote
                </button>
              </Link>
              <div className='flex flex-col mt-4'>
                <Link to='#'>
                    <button className='border-2 border-orange-600 px-[16px] py-[10px] text-orange-600 rounded-md hover:opacity-80 flex items-center gap-2'>
                      <p className='font-semibold'>Upload an image</p>
                      <FiUpload/>
                    </button>
                </Link>
                <p className='text-xs opacity-70'>max. file size-20mb (jpeg, png, pdf)</p>
              </div>
            </div>
          </div>
        </div>

        {/* section 2 */}
        <div className='bg-yellow-50 section2'>
          <div className='w-11/12 max-w-screen-xl mx-auto py-12 flex flex-col gap-y-10 h-[500px]'>
            <div className='text-center text-3xl sm:text-5xl tracking-wide font-bold text-amber-800 opacity-90 italic heading'>
                Our Technology
            </div>
            <div className='grid xl:grid-cols-3 place-items-center pb-8 w-full h-full'>
              <div className="flip-box w-[90%] h-[330px]">
                <div className="flip-box-inner">
                  <div className="flip-box-front flex flex-col justify-center items-center gap-y-3">
                    <h1 className='bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-3xl font-bold text-transparent lg:w-[70%] text-center heading'>
                      3D MECHANICAL DESIGN
                    </h1>
                    <div className='h-[250px]'>
                      <img src={image1} alt="" className='h-full w-full max-w-sm object-fill rounded-[50%]'/>
                    </div>
                  </div>
                  <div className="flip-box-back p-1 border-t-2 border-orange-300 rounded-2xl shadow-orange-500 shadow-lg overflow-auto flex justify-center items-center">
                    <p className='text-base font-medium text-richblack-300 italic lg:w-[95%] pt-1'>
                      We take pride in providing affordable and reliable CAD designing software that empowers engineers, designers, and enthusiasts to bring their visions to life.Our cutting-edge technology ensures fast delivery, enabling you to streamline your design process without compromising on quality.Join us on a journey of efficiency and creativity, where affordability meets reliability, and ideas take shape with unprecedented speed. Your design aspirations are just a click away!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flip-box w-[90%] h-[330px]">
                <div className="flip-box-inner">
                  <div className="flip-box-front flex flex-col justify-center items-center">
                    <h1 className='bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-3xl font-bold text-transparent lg:w-[70%] text-center heading'>
                      3D SCULPTING
                    </h1>
                    <div className='h-[250px]'>
                      <img src={image2} alt="" className='h-full w-full max-w-sm object-fill'/>
                    </div>
                  </div>
                  <div className="flip-box-back p-1 border-t-2 border-orange-300 rounded-2xl shadow-orange-500 shadow-lg overflow-auto flex justify-center items-center">
                    <p className='text-base font-medium text-richblack-300 italic lg:w-[95%] pt-1'>
                      Unleash your creativity with our affordable and reliable CAD designing software, tailored for sculptors, artists, and designers seeking a seamless design experience. Our commitment to fast delivery ensures that your imaginative concepts come to life promptly and efficiently.Experience the fusion of affordability and reliability as you embark on a journey of sculpting innovation. Your visions are not just designs—they're masterpieces in the making, and we're here to bring them to reality with unmatched speed and precision. Start sculpting your dreams today!
                    </p>
                  </div>
                </div>
              </div>
              <div className="flip-box w-[90%] h-[330px]">
                <div className="flip-box-inner">
                  <div className="flip-box-front flex flex-col justify-center items-center">
                    <h1 className='bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-3xl font-bold text-transparent lg:w-[70%] text-center heading'>
                      3D JEWELLERY CAD CAM
                    </h1>
                    <div className='h-[250px]'>
                      <img src={image3} alt="" className='h-full w-full max-w-md object-fill rounded-[50%]'/>
                    </div>
                  </div>
                  <div className="flip-box-back p-1 border-t-2 border-orange-300 rounded-2xl shadow-orange-500 shadow-lg overflow-auto flex justify-center items-center">
                    <p className='text-base font-medium text-richblack-300 italic lg:w-[95%] pt-1'>
                      Dive into the world of exquisite craftsmanship with our affordable and reliable CAD designing software tailored for jewelry designers and artisans. Experience the seamless fusion of artistry and technology as you bring your unique jewelry concepts to life. Whether you're designing intricate pieces or timeless classics, our user-friendly interface and advanced features provide the perfect platform for your jewelry design endeavors. Explore the intersection of affordability and reliability with us, and let your jewelry designs shine with unparalleled brilliance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* section 3 */}
        <div className='w-11/12 max-w-screen-xl mx-auto flex flex-col py-12'>
          <div className='bg-gradient-to-b from-[#E21143] to-[#FFB03A] text-transparent bg-clip-text font-bold text-center text-3xl sm:text-5xl tracking-wide italic heading'>
            Our Clients
          </div>
          <div className='py-8'>
            <ClientSlider/>
          </div>
        </div>

        {/* section 4 */}
        <div className='bg-yellow-50'>
          <div className='w-11/12 max-w-screen-xl mx-auto py-12 flex flex-col items-center'>
            <div className='text-center text-3xl sm:text-5xl tracking-wide font-bold text-amber-800 opacity-90 italic heading'>
              About Us
            </div>
            <About/>
          </div>
        </div>

        {/*Footer part  */}
        <Footer/>

      </div>
      

    </div>
  )
}

export default Home