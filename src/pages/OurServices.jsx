import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';



function OurServices() {
  return (
    <div className='flex flex-col bg-[#191919]'>
      <Header />
      <div id='pagename' className="p-16 py-12 md:py-16 text-center bg-white max-w-full bg-[url('https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//white%20pattern.png')] bg-[length:100vw]"> 
        <p className="font-michroma text-4xl leading-12">Our Services</p>
        <p className="mt-4">Interior design | Custom wood work | Measurement & consultation | 3D visualisations | Installation | Electrical wirings and fittings | Restoration & Refurbishment.</p>
      </div>

      <div id='sideByside' className='flex flex-col-reverse md:flex-row bg-[#f5efea] w-full justify-between items-center p-6 md:p-16 py-10 md:py-20 gap-8 md:gap-0 pb-20'>
                <div className='flex flex-col md:w-[40%] gap-8 md:gap-12'>
                    <div className='flex flex-col gap-4 md:gap-2 md:gap-4'>
                        <p className='font-michroma text-3xl md:text-4xl leading-12'>Interior Design</p>
                        <p>We offer a full spectrum of interior design services, from comprehensive design and expert consultancy to seamless turnkey installations  all tailored to transform your vision into the home of your dreams.</p>
                    </div>
                    <div className='flex flex-col gap-4 md:gap-2'>
                        <div className='flex flex-col md:flex-row w-full md:w-[80%] gap-4 md:gap-12'>
                            <div className='flex flex-row w-full md:w-[50%] gap-1'>
                                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//lamp.svg" alt="" />
                                <p>Consultation</p>
                            </div>
                            <div className='flex flex-row w-full md:w-[50%] gap-1'>
                                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//seedling.svg" alt="" />
                                <p>Space planning</p>
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row w-full md:w-[80%] gap-4 md:gap-12'>
                            <div className='flex flex-row w-full md:w-[50%] gap-1'>
                                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//lamp.svg" alt="" />
                                <p>Lighting design</p>
                            </div>
                            <div className='flex flex-row w-full md:w-[50%] gap-1'>
                                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//seedling.svg" alt="" />
                                <p>Styling</p>
                            </div>
                        </div>
                        <div className='flex flex-row gap-1'>
                            <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//air-conditioner.svg" alt="" />
                            <p>Material and finish selection</p>
                        </div>

                    </div>
                </div>
                <img className='md:w-[54%]' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton/OS1.png" alt="" />
            </div>

      <div id='sideByside' className='flex flex-col-reverse md:flex-row bg-white w-full justify-between items-center p-6 md:p-16 py-10 md:py-20 gap-8 md:gap-0 pb-20'>
          <div className='flex flex-col w-full md:w-[40%] gap-12'>
            <div className='flex flex-col gap-4'>
              <p className='font-michroma text-4xl leading-12'>Custom <br></br> Woodwork & Joinery</p>
              <p>We specialize in intricate wood work and furniture creation.</p>
            </div>
            <div className='flex flex-col gap-4 md:gap-2'>

              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//lamp.svg" alt="" />
                <p>Custom cabinetry</p>
              </div>
              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//seedling.svg" alt="" />
                <p>Paneling</p>
              </div>
              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//ruler-combined.svg" alt="" />
                <p>Shelving</p>
              </div>
              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//cube.svg" alt="" />
                <p>Custom cabinetry</p>
              </div>

            </div>
          </div>

          <img className='w-full md:w-[54%]' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton/OS2.png" alt="" />
      </div>
      
      <div id='sideByside' className='flex flex-col-reverse md:flex-row bg-[#f5efea] w-full justify-between items-center p-6 md:p-16 py-10 md:py-20 gap-8 md:gap-0 pb-20'>
          <div className='flex flex-col w-full md:w-[40%] gap-12'>
            <div className='flex flex-col gap-4'>
              <p className='font-michroma text-4xl leading-12'>Detailed Measurement & Consultation</p>
              <p>We begin by taking detailed measurements of your space and offering expert design consultation to understand your needs.</p>
            </div>
            <div className='flex flex-col gap-4 md:gap-2'>

              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//lamp.svg" alt="" />
                <p>Detailed measurement</p>
              </div>
              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//seedling.svg" alt="" />
                <p>Onsite assessment</p>
              </div>
              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//ruler-combined.svg" alt="" />
                <p>Design Consultation</p>
              </div>
            </div>
          </div>

          <img className='w-full md:w-[54%]' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton/OS3.png" alt="" />
      </div>

      <div id='sideByside' className='flex flex-col-reverse md:flex-row text-white w-full justify-between items-center p-6 md:p-16 py-10 md:py-16 gap-8 md:gap-0 pb-20 '>
          <div className='flex flex-col w-full md:w-[40%] gap-12'>
            <div className='flex flex-col gap-4'>
              <p className='font-michroma text-4xl leading-12'>3D Mockups <br></br>& Visualizations</p>
              <p>To ensure complete satisfaction, we create detailed mockups and prototypes, allowing you to visualise the finally product and make any necessary adjustments before production.</p>
            </div>
            <div className='flex flex-col gap-4 md:gap-2'>

              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//lamp.svg" alt="" />
                <p>3D Imagery</p>
              </div>
              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//seedling.svg" alt="" />
                <p>Reviews & Iterations</p>
              </div>
            </div>
          </div>

          <img className='w-full md:w-[54%]' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton/OS4.png" alt="" />
      </div>

      <div id='sideByside' className='flex flex-col-reverse md:flex-row bg-[#f5efea] w-full justify-between items-center p-6 md:p-16 py-10 md:py-20 gap-8 md:gap-0 pb-20'>
          <div className='flex flex-col w-full md:w-[40%] gap-12'>
            <div className='flex flex-col gap-4'>
              <p className='font-michroma text-4xl leading-12'>Professional Installation Services</p>
              <p>Our experienced installation team ensures the seamless and efficient setup of all furniture and decor elements, guaranteeing a perfect finish and your complete satisfaction.</p>
            </div>
            <div className='flex flex-col gap-4 md:gap-2'>

              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//lamp.svg" alt="" />
                <p>Furniture installationt</p>
              </div>
              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//ruler-combined.svg" alt="" />
                <p>Decor Setup & Finish</p>
              </div>
            </div>
          </div>

          <img className='w-full md:w-[54%]' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton/OS5.png" alt="" />
      </div>

      <div id='sideByside' className='flex flex-col-reverse md:flex-row text-white bg-[#0d0c0c] w-full justify-between items-center p-6 md:p-16 py-10 md:py-20 gap-8 md:gap-0 pb-20'>
          <div className='flex flex-col w-full md:w-[40%] gap-12'>
            <div className='flex flex-col gap-4'>
              <p className='font-michroma text-4xl leading-12'>Furniture Restoration & Refurbishment</p>
              <p>We offer expert services to restore and refurbish your existing wooden furniture, breathing new life into cherished pieces and ensuring their longevity.</p>
            </div>
            <div className='flex flex-col gap-4 md:gap-2'>

              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//seedling.svg" alt="" />
                <p>Furniture restoration</p>
              </div>
              <div className='flex flex-row gap-1'>
                <img src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton//ruler-combined.svg" alt="" />
                <p>Furniture Refurbishment</p>
              </div>
            </div>
          </div>

          <img className='w-full md:w-[54%]' src="https://qdioerqypevvqctowrbv.supabase.co/storage/v1/object/public/picton/OS6.png" alt="" />
      </div>

      
      <Footer/>
      
    </div>
  );
}

export default OurServices;