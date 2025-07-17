import React from 'react';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Home() {

const scrollRef = useRef(null);

const scrollRight = (ref) => {
  ref.current?.scrollBy({ left: 300, behavior: 'smooth' });
};
const scrollLeft = (ref) => {
  ref.current?.scrollBy({ left: -300, behavior: 'smooth' });
};

  const [openFaq, setOpenFaq] = useState(null);

  const handleFaqToggle = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    
      <div className='flex flex-col w-full'>
        <Header/>

        <div id='Hero' className="flex flex-col-reverse md:flex-row justify-between text-white p-6 md:px-16 bg-[url('https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//Hero1pattern.svg')] ">
          <div className='flex flex-col w-full md:w-[40%] justify-center gap-4 mb-10 md:mb-18'>
            <p className='font-michroma text-4xl md:text-[4vw] leading-15'>More than<br></br>Furniture </p>
            <p>We craft spaces that tell stories</p>
            <Link to="/OurServices" className='bg-[#EE7058] hover:bg-white text-center p-4 md:p-2 md:w-60 rounded-lg px-auto mt-2'>Learn More</Link> 
          </div>

          <img className='md:w-[55%] md:-mt-16' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//Hero1img.png" alt=""/>

        </div>

        <div id='sideByside1' className='flex flex-col-reverse md:flex-row bg-[#f5efea] w-full justify-between items-center p-6 md:p-16 pb-20 py-10 md:py-20  gap-8 md:gap-0'>
          <div className='flex flex-col md:w-[40%] gap-10'>
            <div className='flex flex-col gap-4'>
              <p>We create everything that;</p>
              <p className='font-michroma text-4xl'>Brings Life to your Space</p>
            </div>
            <div className='flex flex-col gap-2'>

              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//lamp.svg" alt="" />
                <p>Interior Design</p>
              </div>
              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//seedling.svg" alt="" />
                <p>Custom wood work & Joinery</p>
              </div>
              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//ruler-combined.svg" alt="" />
                <p>Detailed measurements and consultation</p>
              </div>
              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//cube.svg" alt="" />
                <p>3D Mockups and visualisations</p>
              </div>
              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//air-conditioner.svg" alt="" />
                <p>Professional installation services</p>
              </div>
              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//chair.svg" alt="" />
                <p>Furniture restoration & refurbishment</p>
              </div>

            </div>
          </div>

          <img className='md:w-[54%]' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//Bringsimg.png" alt="" />

        </div>

        <div className='flex flex-col bg-white w-full justify-center items-center p-4 md:p-8 py-20 px-4 md:px-16 gap-10 md:gap-20'>
          <div className='flex flex-col justify-center items-center  gap-2'>
            <p>All Picton pieces are crafted with</p>
            <p className='font-michroma text-4xl text-center md:text-left'>Love and pecision</p>
          </div>

          <div className='flex flex-row w-full justify-between items-center gap-6'>
            <button onClick={() => scrollLeft(scrollRef)}  className='hidden md:flex border-amber-500 border-2 p-3 rounded-4xl cursor-pointer'>
              <img className="transform -scale-x-100" src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//arrow-right.svg" alt="Previous" /> 
            </button>   
        
            <div ref={scrollRef} className='flex flex-row flex-nowrap w-full pl-16 md:w-[72%] overflow-x-auto gap-4 md:gap-8 scroll-smooth [scrollbar-width:none]'>
              <div className='flex md:hidden flex-col w-[78%] md:w-[30%] flex-shrink-0 items-center gap-2'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//L&PChair1.png" alt="Accent Chairs" />
                <p>Accent Chairs</p>
              </div>
              
              <div className='flex flex-col w-[78%] md:w-[30%] flex-shrink-0 items-center gap-2'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//L&PBed.png" alt="Bedroom Furniture" />
                <p>Bedroom Furniture</p>
              </div>

              <div className='hidden md:flex flex-col w-[68%] md:w-[30%] flex-shrink-0 items-center gap-2'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//L&PChair1.png" alt="Accent Chairs" />
                <p>Accent Chairs</p>
              </div>

              <div className='flex flex-col w-[78%] md:w-[30%] flex-shrink-0 items-center gap-2'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//L&PTable.png" alt="Dining Furniture" />
                <p>Lounge Furniture</p>
              </div>

              <div className='flex flex-col w-[78%] md:w-[30%] flex-shrink-0 items-center gap-2'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//L&PTable.png" alt="Lounge Furniture" />
                <p>Lounge Furniture</p>
              </div>
              
            </div>
            <button onClick={() => scrollRight(scrollRef)}  className='hidden md:flex border-amber-500 border-2 p-3 rounded-4xl cursor-pointer'>
              <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//arrow-right.svg" alt="Next" /> 
            </button>
          </div>
        </div>


        <div className='flex flex-col-reverse md:flex-row bg-[#f5efea] w-full justify-between items-center p-4 md:p-16 py-10 md:py-28 gap-4 md:gap-0'>
          <div className='flex flex-col md:w-[40%] gap-4 md:gap-8'>
            <div className='flex flex-col gap-4'>
              <p>Impecable</p>
              <p className='font-michroma text-4xl md:text-4xl'>Craftsmanship</p>
            </div>

            <div className='flex flex-col-reverse gap-6 mb-16 md:mb-0'>
                <img className='w-16 md:w-20' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//CraftCompass.svg" alt="" />
                <p>All Picton pieces are crafted by the best, Our true strength lies in our skilled artisans, who pour their heart and heritage into every piece.</p>
              </div>
          </div>

          <img className='md:w-[54%]' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//Homecraftsmanship.png" alt="" />
        </div>

        <div className='flex flex-col md:flex-row w-full h-auto md:h-134'>
          <div className="w-full md:w-[25%] h-48 md:h-auto bg-[url('https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//H&D1.png')] bg-cover bg-center "></div>
          <div className='flex flex-col justify-between w-full md:w-[50%]'>
            <div className='flex flex-col p-6 md:p-18 py-20 md:py-18 gap-4 md:gap-10'>
              <div className='flex flex-col gap-4'>
                <p className='text-white'>Raising the standards in</p>
                <p className='font-michroma text-4xl text-white'>Home Decor<br></br>& Design</p>
              </div>
              <Link to="/OurServices" className='text-white'>Explore Our Services</Link>
            </div>
            <img className="h-48 md:h-auto" src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//H&D2.png" alt="" />
          </div>
          <div className="hidden md:flex w-full md:w-[25%] h-48 md:h-auto bg-[url('https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//H&D3.png')] bg-cover bg-center "></div>
        </div>


        <div className='flex flex-col items-center p-8 md:p-16 py-28 md:py-20 text-white gap-24 md:gap-28'>
          <div className='flex flex-col justify-center items-center  gap-2'>
            <p>Creativity and personalised service,</p>
            <p className='font-michroma text-4xl text-center md:text-left'>Unquestionable commitment to;</p>
          </div>

          <div className='flex flex-col md:flex-row w-full justify-between items-center gap-24 md:gap-2'>
            <div className='flex flex-col w-full md:w-[25%] items-center gap-4'>
              <img className='w-18' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//Greenpalette.svg" alt="" />
              <p className='text-xl'>Design Innovation</p>
            </div>

            <div className='flex flex-col w-[25%] items-center gap-4'>
              <img className='w-18' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//GreenCompass.svg" alt="" />
              <p className='text-xl'>Craftsmanship Excellence</p>
            </div>
              
            <div className='flex flex-col w-[25%] items-center gap-4'>
              <img className='w-18' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//GreenSeedling.svg" alt="" />
              <p className='text-xl'>Sustainability</p>
            </div>

          </div>

        </div>

        <div className='flex flex-col md:flex-row bg-[#f5efea] w-full justify-between items-center p-6 md:p-16 py-20 md:py-20 gap-12 md:gap-0'>
          <div className='flex flex-col w-full md:w-[40%] gap-4 md:gap-8'>
            <div className='flex flex-col gap-2 md:gap-4'>
              <p>FAQ's</p>
              <p className='font-michroma text-3xl md:text-4xl'>Frequently<br></br>asked Questions</p>
            </div>
            <div className='flex flex-col-reverse gap-4 md:gap-6'>
                <img className='w-16 md:w-20' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//comment-lines.svg" alt="" />
              </div>
          </div>

          <div className='flex flex-col bg-white md:w-[54%] p-4 md:p-12 py-8 md:py-12 rounded-xl gap-6'>
            <div onClick={() => handleFaqToggle(1)}  className={`flex flex-row justify-between items-center border-b-1 border-amber-100 pb-1  cursor-pointer hover:border-amber-500 ${openFaq === 1 ? 'border-none' : ''}`}>
              <div className='flex flex-row gap-2'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//comment-dots.svg" alt="" />
                <p className='w-full mt-3 lg:mt-0'>Where are you located? Can I visit your workshop?</p>
              </div>
              <img className={`transition-transform duration-200 ${openFaq === 1 ? 'transform -scale-y-100' : ''}`} src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//chevron-down.svg" alt={openFaq === 1 ? "Collapse" : "Expand"} />
            </div>
            {openFaq === 1 &&
              <div className='px-10 border-b-1 border-amber-500 pb-6'>
                <p className='w-full'>We are located at B13 - F3, Jasper close Brains and hammers city Life camp Abuja, FCT. You are welcome to visit, but we recommend scheduling an appointment first to ensure someone is available to assist you.</p>
              </div>}

            <div onClick={() => handleFaqToggle(2)} className={`flex flex-row justify-between items-center border-b-1 border-amber-100 pb-1  cursor-pointer hover:border-amber-500 ${openFaq === 2 ? 'border-none' : ''}`}>
              <div className='flex flex-row gap-2'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//comment-dots.svg" alt="" />
                <p className='w-full'>Do you ship across Nigeria?</p>
              </div>
              <img className={`transition-transform duration-200 ${openFaq === 2 ? 'transform -scale-y-100' : ''}`} src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//chevron-down.svg" alt={openFaq === 2 ? "Collapse" : "Expand"} />
            </div>
            {openFaq === 2 &&
              <div className='px-10 border-b-1 border-amber-500 pb-6'>
                <p className='w-full'>Yes, we ship to all states in Nigeria. Shipping costs and delivery times vary depending on your location and the size of the order.</p>
              </div>}

            <div onClick={() => handleFaqToggle(3)} className={`flex flex-row justify-between items-center border-b-1 border-amber-100 pb-1  cursor-pointer hover:border-amber-500 ${openFaq === 3 ? 'border-none' : ''}`}>
              <div className='flex flex-row gap-2'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//comment-dots.svg" alt="" />
                <p className='w-full mt-3 lg:mt-0'>Do you handle bulk or hospitality projects?</p>
              </div>
              <img className={`transition-transform duration-200 ${openFaq === 3 ? 'transform -scale-y-100' : ''}`} src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//chevron-down.svg" alt={openFaq === 3 ? "Collapse" : "Expand"} />
            </div>
            {openFaq === 3 &&
              <div className='px-10 border-b-1 border-amber-500 pb-6'>
                <p className='w-full'>Absolutely. We have the capacity and experience to handle large-scale projects for hotels, restaurants, and corporate clients. Contact us to discuss your project requirements.</p>
              </div>}
            
            <div onClick={() => handleFaqToggle(4)} className={`flex flex-row justify-between items-center border-b-1 border-amber-100 pb-1  cursor-pointer hover:border-amber-500 ${openFaq === 4 ? 'border-none' : ''}`}>
              <div className='flex flex-row gap-2'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//comment-dots.svg" alt="" />
                <p className='w-full mt-3 lg:mt-0'>Can I customise a piece for my space?</p>
              </div>
              <img className={`transition-transform duration-200 ${openFaq === 4 ? 'transform -scale-y-100' : ''}`} src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//chevron-down.svg" alt={openFaq === 4 ? "Collapse" : "Expand"} />
            </div>
            {openFaq === 4 &&
              <div className='px-10 border-b-1 border-amber-500 pb-6'>
                <p className='w-full'>Yes, customization is at the heart of what we do. We work closely with you to design and create bespoke furniture that perfectly fits your space and style.</p>
              </div>}
            
            <div onClick={() => handleFaqToggle(5)} className={`flex flex-row justify-between items-center border-b-1 border-amber-100 pb-1  cursor-pointer hover:border-amber-500 ${openFaq === 5 ? 'border-none' : ''}`}>
              <div className='flex flex-row gap-2'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//comment-dots.svg" alt="" />
                <p className='w-full mt-3 lg:mt-0'>Do you use only Nigerian wood?</p>
              </div>
              <img className={`transition-transform duration-200 ${openFaq === 5 ? 'transform -scale-y-100' : ''}`} src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//chevron-down.svg" alt={openFaq === 5 ? "Collapse" : "Expand"} />
            </div>
            {openFaq === 5 &&
              <div className='px-10 border-b-1 border-amber-500 pb-6'>
                <p className='w-full'>We prioritize high-quality, sustainably sourced local woods. However, we can also source specific imported woods upon request to meet your design needs.</p>
              </div>}

          </div>

        </div>

        <Footer />

        {/* Scroll to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-4 right-4 bg-amber-500 hover:bg-amber-700 text-white rounded-full p-2"
        >
          <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//chevron-up.svg" alt="Scroll to top" className="w-6 h-6" />
        </button>
      </div>
  );
}

export default Home;