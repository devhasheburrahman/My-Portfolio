import React from 'react';
import { FaCheck, } from 'react-icons/fa';
import { FiX } from "react-icons/fi";

const PricePlans = () => {
    return (
        <div id='PricePlans'>
            <div>
                <h2 className='text-center  font-[Inter] text-[32px] font-bold capitalize leading-[123px] '>Price Plans</h2>
                <p className='text-center mb-[50px] px-24 text-[#767676]  font-[Inter] text-[15px] font-normal capitalize leading-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>
            </div>
            {/* card section */}

            <div className='flex justify-center shadow-sm  gap-5 px-2'>
                <div className=' px-[33px]  rounded-lg shadow text-center bg-[#FFFFFF]'>
                    <h2 className='font-[Inter] pt-[54px] text-2xl font-bold text-black
                 leading-[50px]'>Silver</h2>
                    <p className='text-[Inter] text-[32px] text-black font-bold leading-[50px] '>$0.00 <span className='text-[Inter] leading-6  text-[#767676] text-[15px]'>/Hour</span></p>
                    <p className='leading-7 capitalize font-[Inter] text-[#767676] text-[15px]'>For most businesses that want to
                        optimize web queries</p>
                    {/* silver card */}
                    <div className='space-y-5 '>
                        <div className='flex mt-10 gap-5 items-center'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='font-[Inter] text-[15px] capitalize leading-5'>UI Design</p>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <p className=' text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='font-[Inter] text-[15px] capitalize leading-5 '>web development</p>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <p className='text-[#767676]   text-2xl'><FiX /> </p>

                            <p className='font-[Inter] text-[15px] capitalize leading-5'>logo design</p>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <p className='text-[#767676]   text-2xl'><FiX /> </p>
                            <p className='font-[Inter] text-[15px] capitalize leading-5'>seo optimization</p>
                        </div>

                        <div className='flex gap-5 whitespace-nowrap'>
                            <p className='text-[#767676]   text-2xl'><FiX /> </p>
                            <p className='font-[Inter] text-[15px] capitalize leading-5'>wordPress integration</p>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <p className='text-[#767676]   text-2xl'><FiX /> </p>
                            <p className='font-[Inter] text-[15px] capitalize leading-5'>5 Websites</p>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <p className='text-[#767676]   text-2xl'><FiX /> </p>
                            <p className='font-[Inter] text-[15px] capitalize leading-5'>unlimited user</p>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <p className='text-[#767676]   text-2xl'><FiX /> </p>
                            <p className='font-[Inter] text-[15px] capitalize leading-5'>20 gB bandwith</p>
                        </div>
                    </div>

                    <button className='font-bold mt-10 mb-5 font-[Inter] text-sm text-[#2B2B2B] rounded-[30px] shadow-2xl px-10 py-[10px]'>ORDER NOW</button>
                </div> 
            {/* gold */}
            <div className='text-center px-[33px] shadow-lg rounded-lg  bg-[#FFFFFF]'>

                    <div className='w-full flex justify-center items-center rounded-md  text-black leading-6 capitalize h-[30px] font-bold font-[Inter] text-[15px] bg-[#FFB400]'>Most Popular</div>
                    <div>
                        <h2 className='font-[Inter] text-2xl mt-[25px] font-bold text-black leading-[50px]'>Gold</h2>
                        <p className='text-[Inter] text-black text-[32px] font-bold leading-[50px] '>$50.00 <span className='text-[Inter] leading-6  text-[#767676] text-[15px]'>/Hour</span></p>
                        <p className='leading-7 capitalize font-[Inter] text-[#767676] text-[15px]'>For most businesses that want to
                            optimize web queries</p>

                        <div className='space-y-5'>
                            <div className='flex mt-10  gap-5 items-center'>
                                <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                                <p className='font-[Inter] text-[15px] capitalize leading-5'>UI Design</p>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <p className=' text-[#FFB400] h-6'> <FaCheck /> </p>
                                <p className='font-[Inter] text-[15px] capitalize leading-5 '>web development</p>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                                <p className='font-[Inter] text-[15px] capitalize leading-5'>logo design</p>
                            </div>

                            <div className='flex gap-5 items-center'>
                                <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                                <p className='font-[Inter] text-[15px] capitalize leading-5'>seo optimization</p>
                            </div>

                            <div className='flex gap-5 whitespace-nowrap'>
                                <p className='text-[#767676]   text-2xl'><FiX /> </p>
                                <p className='font-[Inter] text-[15px] capitalize leading-5'>wordPress integration</p>
                            </div>

                            <div className='flex gap-5 items-center'>
                                <p className='text-[#767676]   text-2xl'><FiX /> </p>
                                <p className='font-[Inter] text-[15px] capitalize leading-5'>5 Websites</p>
                            </div>

                            <div className='flex gap-5 items-center'>
                                <p className='text-[#767676]   text-2xl'><FiX /> </p>
                                <p className='font-[Inter] text-[15px] capitalize leading-5'>unlimited user</p>
                            </div>

                            <div className='flex gap-5 items-center'>
                                <p className='text-[#767676]   text-2xl'><FiX /> </p>
                                <p className='font-[Inter] text-[15px] capitalize leading-5'>20 gB bandwith</p>
                            </div>
                        </div>

                        <button className='font-bold mt-10 font-[Inter] text-sm text-[#2B2B2B] rounded-[30px] bg-[#FFB400] shadow-2xl  px-10 py-[10px]'>ORDER NOW</button>
                    </div>
                </div>
                {/* diamond */}
                <div className='px-[33px] text-center shadow-lg rounded-lg pt-[56px] bg-[#FFFFFF]'>
                    <h2 className='font-[Inter] text-2xl font-bold text-black
                 leading-[50px]'>Dimond</h2>
                    <p className='text-[Inter] text-black text-[32px] font-bold leading-[50px] '>$80.00 <span className='text-[Inter] leading-6   text-[#767676] text-[15px]'>/Hour</span></p>
                    <p className='leading-7 capitalize font-[Inter] text-[#767676] text-[15px]'>For most businesses that want to
                        optimize web queries</p>
                    <div className='space-y-5'>
                        <div className='flex gap-5 mt-10  items-center'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='font-[Inter] text-[15px] capitalize leading-5'>UI Design</p>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <p className=' text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='font-[Inter] text-[15px] capitalize leading-5 '>web development</p>
                        </div>
                        <div className='flex gap-5 items-center'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='font-[Inter] text-[15px] capitalize leading-5'>logo design</p>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='font-[Inter] text-[15px] capitalize leading-5'>seo optimization</p>
                        </div>

                        <div className='flex gap-5 items-center whitespace-nowrap'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='font-[Inter] text-[15px] capitalize leading-5'>wordPress integration</p>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='font-[Inter] text-[15px] capitalize leading-5'>5 Websites</p>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='font-[Inter] text-[15px] capitalize leading-5'>unlimited user</p>
                        </div>

                        <div className='flex gap-5 items-center'>
                            <p className='text-[#FFB400] h-6'> <FaCheck /> </p>
                            <p className='font-[Inter] text-[15px] capitalize leading-5'>20 gB bandwith</p>
                        </div>

                    </div>
                    <button className='font-bold mt-10 font-[Inter] text-sm text-[#2B2B2B] rounded-[30px] shadow-sm px-10 py-[10px]'>ORDER NOW</button>
                </div>
            </div>
        </div>
    );
};

export default PricePlans;