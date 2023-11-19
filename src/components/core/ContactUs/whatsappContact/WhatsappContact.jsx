import React, { useState } from 'react'
import ReactWhatsapp from './ReactWhatsapp';
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { IoIosClose } from "react-icons/io";

const WhatsappContact = () => {
    const [active, setactive] = useState(true);
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    
    const whatsappBox=
        <div className="fixed bottom-5 right-5 bg-[#25d366] w-[70%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%] h-[62%] max-h-[35rem] rounded-lg flex flex-col justify-between p-5 pt-3 pb-3 z-10 ">
          <div className='flex justify-between items-center w-full text-white'>
            <h1 className="text-lg text-white font-semibold">Chat With Us</h1>
            <IoIosClose size={30} className='cursor-pointer' onClick={()=>setactive(!active)}/>
          </div>
          <div className='flex items-center gap-x-2'>
            <div className='h-2 w-2 rounded-full bg-white'/>
            <p className='text-white'>We’ll reply as soon as we can</p>
          </div>
          <section className="flex flex-col justify-between gap-y-3 w-full my-1">
            <input
              id="number"
              placeholder="Enter your number"
              value={number}
              onChange={e => setNumber(e.target.value)}
              className='p-3 rounded-lg outline-none flex-wrap text-gray-500'
            />
            <textarea 
                name="message" 
                id='message' 
                rows="9" 
                cols="30" 
                placeholder="Enter your message here"
                value={message}
                onChange={e=>setMessage(e.target.value)}
                className='rounded-lg p-3 text-[16px] h-[33%] leading-[24px] flex-grow outline-none text-gray-500'
            />
            <ReactWhatsapp number={number} message={message}>
              <div className='w-full bg-white rounded-md p-2 mb-3 text-[#25d366] font-bold'>
                Send Message
              </div>
            </ReactWhatsapp>
          </section>
        </div>

  return (
    <>
        {
          active && <Link className='flex justify-center items-center px-5 py-3 gap-2 fixed bg-[#25d366] rounded-lg text-xl bottom-10 right-10 text-white z-10'
          onClick={()=>setactive(!active)}
        >
          <FaWhatsapp/>
          <p>Chat With Us</p>
        </Link>
        }
        {!active && whatsappBox}
    </>
    
  );
}

export default WhatsappContact