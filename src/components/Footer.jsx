import React from 'react';

const Footer = () => {
    return (
        <div id='Footer' className='flex flex-col md:flex-row justify-between text-white py-28 md:py-28 p-6 md:p-16 gap-8 md:gap-0'>
            <img className='w-40 md:w-50' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//Logo.svg" alt="" />

            <div className='flex flex-col md:w-[34%] gap-6 md:gap-4 mt-6 md:mt-0'>
                <p className='font-michroma text-2xl md:text-xl'>Contact Us</p>
            <div className='flex flex-col gap-6 md:gap-2'>
              <div className='flex flex-col md:flex-row gap-6 md:gap-2'>
                <div className='flex flex-row gap-2'>
                  <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//Footer%20phone.svg" alt="" />
                  <p className='font-[Open_Sans]'>08033071258</p>
                </div>
                <div className='flex flex-row gap-2'>
                  <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//Footer%20phone.svg" alt="" />
                  <p className='font-[Open_Sans]'>08187677129</p>
                </div>
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