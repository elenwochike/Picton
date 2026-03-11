import React from 'react';

const Footer = () => {
    return (
        <div id='Footer' className='flex flex-col lg:flex-row justify-between text-white py-28 md:py-28 p-8 md:p-16 gap-8 lg:gap-0'>
            <img className='w-40 md:w-50' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//Logo.svg" alt="" />

            <div className='flex flex-col lg:w-[40%] gap-6 md:gap-8 mt-6 md:mt-0'>
                <p className='font-michroma text-2xl md:text-xl'>Contact Us</p>
            <div className='flex flex-col gap-6 md:gap-2'>
              <div className='flex flex-col md:flex-row gap-6 md:gap-2'>
                <a href="tel:08033071258" className='flex flex-row gap-2 items-center cursor-pointer hover:opacity-80 transition lg:pointer-events-none'>
                  <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//Footer%20phone.svg" alt="" />
                  <p className='font-[Open_Sans]'>07064844645</p>
                </a>

                <a href="tel:08033071258" className='flex flex-row gap-2 items-center cursor-pointer hover:opacity-80 transition lg:pointer-events-none'>
                  <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//Footer%20phone.svg" alt="" />
                  <p className='font-[Open_Sans]'>08033071258</p>
                </a>

                <a href="tel:08187677129" className='flex flex-row gap-2 items-center cursor-pointer hover:opacity-80 transition lg:pointer-events-none'>
                  <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//Footer%20phone.svg" alt="" />
                  <p className='font-[Open_Sans]'>08187677129</p>
                </a>

              </div>

              <div className='flex flex-col md:flex-row gap-6 md:gap-2'>

                <a href="https://wa.me/2347064844645" target="_blank" rel="noopener noreferrer"
                  className="flex flex-row gap-1 items-center cursor-pointer hover:opacity-80 transition">
                  <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton/whatsapp.svg" alt="WhatsApp"/>
                  <p className="font-[Open_Sans]">07064844645</p>
                </a>

                <a href="https://www.instagram.com/picton.ltd" target="_blank" rel="noopener noreferrer"
                    className="flex flex-row gap-1 items-center cursor-pointer hover:opacity-80 transition">
                    <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton/instagram.svg" alt="WhatsApp"/>
                    <p className="font-[Open_Sans]">@picton.ltd</p>
                </a>

              </div>     
 
              <div className='flex flex-row gap-2 items-start'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//Footer%20envelope.svg" alt="" />
                <p>info@pictonhomes.ng </p>
              </div>

              <div className='flex flex-row gap-2 items-start'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//Footer%20door-open.svg" alt="" />
                <p>Picton home and design. B13 - F3, Jasper close Brains and hammers city Life camp Abuja, FCT.</p>
              </div>
            </div>
          </div>
        </div>    );
    };
    
    export default Footer;