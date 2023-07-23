import React from 'react';
import { FaCircle, FaCode, FaCommentDots, FaFeatherAlt, FaHome, } from 'react-icons/fa'; 
import profile from '../../../public/cv.png'
import portfolio from '../../../public/portfolio.png'

const RightNavigation = () => {
    return (

        <div className='w-[108px]  flex  justify-center bg-[#FAFAFA]  shadow-lg'>


            <div className=' '>

                <div className='pt-12 '>

                    <div className='bg-[#F0F0F6] h-10 w-10 rounded-full flex justify-center items-center'>
                        <a href="/"><FaCircle className='h-[18px] text-[#767676] w-[18px]' />
                        </a>
                    </div>
                </div>


                <div title='Home' className='mt-[112px]  h-10 w-10 rounded-full flex justify-center items-center'>

                    <a href="/"> <FaHome className='h-[18px] text-[#767676] w-[18px]' /> </a>

                </div>

                <div className='mt-10'>

                    <div title='Our Service' className='bg-[#F0F0F6] h-10 w-10 rounded-full flex justify-center items-center '>
                        <a href="#service"><FaCode className='h-[18px] text-[#767676] w-[18px]' /></a>

                    </div>

                </div>
                <div className='mt-10'>

                    <div title='Price Plans' className='bg-[#F0F0F6] h-10 w-10 rounded-full flex justify-center items-center'>
                        <a href="#PricePlans"><img className='h-[18px] text-[#767676] w-[18px]' src={portfolio} alt="" />
                        </a>

                    </div>

                </div>

                <div className='mt-10'>

                    <div title='Education' className='bg-[#F0F0F6] h-10 w-10 rounded-full flex justify-center items-center'>
                        <a href="#education"> <img className='h-[18px] text-[#767676] w-[18px]' src={profile} alt="" /> </a>

                    </div>

                </div>




                <div className='mt-10 '>

                    <div title='Contact' className='bg-[#F0F0F6] h-10 w-10 rounded-full flex justify-center items-center'>
                        <a href="#contact"> <FaCommentDots className='h-[18px] text-[#767676] w-[18px]' /></a>

                    </div>

                </div>
                <div className='mt-10 pb-[550px]'>

                    <div title='portfolio' className='bg-[#F0F0F6] h-10 w-10 rounded-full flex justify-center items-center'>


                        <a href="#outproject"> <FaFeatherAlt className='h-[18px] text-[#767676] w-[18px]' /> </a>
                    </div>


                </div>


            </div>
        </div>
    );
};

export default RightNavigation;