import React from 'react';
import { FaAlignRight, FaAngleRight } from 'react-icons/fa';


const Services = () => {
    return (
        <div id='service'>
            <div>
                <h2 className='text-center  font-[Inter] text-[32px] font-bold capitalize leading-[123px] '>my services</h2>
                <p className='text-center px-24 text-[#767676]  font-[Inter] text-[15px] font-normal capitalize leading-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>

            </div>
            {/* service card */}
            <div className='grid grid-cols-3 gap-4 px-[30px] mt-10'>
                <div className="bg-[#FFFFFF] rounded flex flex-col py-[33px] justify-center items-center">
                    <img src={'/coding.svg'} alt="" />
                    <h2 className=' font-[Inter] text-lg leading-[50px] capitalize font-medium text-[#2B2B2B]'>Web Development</h2>
                    <p className='capitalize leading-6 font-[Inter] font-[15px] '>blog, e-commerce</p>
                </div>
                <div className="bg-[#FFFFFF] rounded flex flex-col py-[33px] justify-center items-center">
                    <img src={'/illustration.png'} alt="" />
                    <h2 className=' font-[Inter] text-lg leading-[50px] capitalize font-medium text-[#2B2B2B]'>uI/uX design</h2>
                    <p className='capitalize leading-6 font-[Inter] font-[15px] '>Mobile app, website design</p>
                </div>
                <div className="bg-[#FFFFFF] rounded  flex flex-col py-[33px] justify-center items-center">
                    <img  src={'/Microphone.svg'} alt="" />
                    <h2 className=' font-[Inter] text-lg leading-[50px] capitalize font-medium text-[#2B2B2B]'>sound design</h2>
                    <p className='capitalize leading-6 font-[Inter] font-[15px] '>Voice Over, Beat Making</p>
                </div>
                <div className="bg-[#FFFFFF] rounded flex flex-col py-[33px] justify-center items-center">
                    <img src={'/game-development.svg'} alt="" />
                    <h2 className=' font-[Inter] text-lg leading-[50px] capitalize font-medium text-[#2B2B2B]'>game design</h2>
                    <p className='capitalize leading-6 font-[Inter] font-[15px] '>Character Design, <br /> Props & Objects</p>
                </div>


                <div className="bg-[#FFFFFF] rounded  flex flex-col py-[33px] justify-center items-center">
                    <img src={'/Photographer.png'} alt="" />
                    <h2 className=' font-[Inter] text-lg leading-[50px] capitalize font-medium text-[#2B2B2B]'>photography</h2>
                    <p className='capitalize leading-6 font-[Inter] font-[15px] '>portrait, product photography</p>
                </div>

                <div className="bg-[#FFFFFF] rounded flex flex-col py-[33px] justify-center items-center">

                    <h2 className=' font-[Inter] text-lg leading-[50px] capitalize font-medium text-[#2B2B2B]'>advertising</h2>
                    <p className='capitalize leading-6 px-6 text-center font-[Inter] font-[15px] '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. </p>
                    <button className='flex justify-center items-center gap-3 text-[#FFB400] font-[Inter] mt-4'>ORDER NOW <FaAngleRight /> </button>
                </div>
            </div>
        </div>
    );
};

export default Services;