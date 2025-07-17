import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function OurStory() {
  return (
    <div>
      <Header />

      <div id='pagename' className="p-16 py-12 md:py-16 text-center bg-white max-w-full bg-[url('https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//white%20pattern.png')] bg-[length:100vw]"> 
        <p className="font-michroma text-4xl leading-12">Our Story</p>
        <p className="mt-4">24 years of mastering wood, now we are crafting beautiful spaces.</p>
      </div>

      <div className="text-white bg-[url('https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//StoryBg.jpg')] bg-[length:100vw] p-10  px-0">
        <div className='flex flex-col-reverse md:flex-row justify-between bg-[#191919] p-6 md:p-16'>
          <div className='flex flex-col w-full md:w-[45%] gap-4 pb-20 md:pb-0'>
            <p className='font-michroma text-4xl leading-10.5'>Rooted in Legacy, <br></br>Reimagined for Today.</p>
            <p className='text-xm'>Picton Home and Design may be newly incorporated, but our story stretches back over two decades. We grew from Namtech Limited, a company with more than 24 years of expertise in woodwork and woodworking machinery, proudly serving clients across Nigeria and Europe.</p>
          </div>
          <img className='w-full md:w-[50%] mb-8 md:mb-0' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//Story1.png" alt="" />
        </div>
      </div>

      <div id='sideByside2' className='flex flex-col-reverse md:flex-row-reverse bg-[#f5efea] w-full justify-between items-center p-6 md:p-16 py-10 md:py-20 gap-8 md:gap-0 pb-20'>
          <div className='flex flex-col w-full md:w-[40%] gap-12'>
            <div className='flex flex-col gap-4'>
              <p className='font-michroma text-4xl leading-12'>Our Craft <br></br> & Capability</p>
              <p>At Picton, we bridge the gap between traditional woodworking and contemporary design. Our state-of-the-art factory houses world-class machinery, enabling us to achieve:</p>
            </div>
            <div className='flex flex-col gap-4 md:gap-2'>

              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//lamp.svg" alt="" />
                <p>Precision & consistency across every project</p>
              </div>
              <div className='flex flex-row items-start gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//seedling.svg" alt="" />
                <p>The scale & versatility needed for residential, commercial, and hospitality spaces.</p>
              </div>
              
            </div>
          </div>

          <img className='w-full md:w-[54%]' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton/Story2.png" alt="" />
      </div>

      <div className='flex flex-col md:items-center text-white text-left md:text-center bg-[#76875B] gap-4 p-20 px-6 md:px-40'>
        <p className='text-xl'>Tools are only part of the story</p>
        <p className='font-michroma text-3xl'> “Our true strength lies in our skilled artisans, who pour their heart and heritage into every piece.”</p>
      </div>

      <div id='sideByside2' className='flex flex-col-reverse md:flex-row bg-white w-full justify-between items-center p-6 md:p-16 py-10 md:py-20 gap-8 md:gap-0 pb-20'>
          <div className='flex flex-col w-full md:w-[40%] gap-12'>
            <div className='flex flex-col gap-4'>
              <p className='font-michroma text-4xl leading-12'>Our Philosophy</p>
              <p>We believe that your environment profoundly impacts your well-being. That's why we are committed to crafting spaces that are not only beautiful but also functional, comfortable, and reflective of your unique identity. We approach every project with a collaborative spirit.</p>
              <p>Our philosophy rest on 3 core pillars.</p>
            </div>
            <div className='flex flex-col gap-4 md:gap-2'>

              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//lamp.svg" alt="" />
                <p>Craftsmanship Excellence</p>
              </div>
              <div className='flex flex-row items-start gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//seedling.svg" alt="" />
                <p>Design Innovation</p>
              </div>
              <div className='flex flex-row items-start gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//seedling.svg" alt="" />
                <p>Sustainability</p>
              </div>
              
            </div>
          </div>

          <img className='w-full md:w-[54%]' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton/Story3.png" alt="" />
      </div>

      <div id='sideByside2' className='flex flex-col-reverse md:flex-row-reverse bg-[#f5efea] w-full justify-between items-center p-6 md:p-16 py-10 md:py-20 gap-8 md:gap-0 pb-20'>
          <div className='flex flex-col w-full md:w-[40%] gap-12'>
            <div className='flex flex-col gap-4'>
              <p className='font-michroma text-4xl leading-12'>Why PICTON?</p>
              <p>We handle it all, from precise site measurements and thoughtful mockups, to custom fabrication and flawless installation. </p>

              <p>Whether you’re looking to bring warmth to your home, sophistication to your office, or personality to a hospitality space, we offer a design-led, quality-driven approach that makes your vision a reality.</p>

              <p>At Picton, your space becomes more than just four walls, it becomes a reflection of you.</p>
            
            </div>

          </div>

          <img className='w-full md:w-[54%]' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton/Story4.png" alt="" />
      </div>


      <Footer />

    </div>
  );
}

export default OurStory;