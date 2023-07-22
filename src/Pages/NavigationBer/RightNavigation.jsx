import React from 'react';
import { FaCircle, FaCode, FaCommentDots, FaFeatherAlt, FaHome, } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import profile from '../../../public/cv.png'
import portfolio from '../../../public/portfolio.png'

const RightNavigation = () => {
    return (
        <div className='w-[108px]  flex  justify-center bg-[#FAFAFA]  shadow-lg'>


            <div className=' '>

                <div className='pt-12 '>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FFB400] bg-black" : ""
                        }
                    >
                        <div className='bg-[#F0F0F6] h-10 w-10 rounded-full flex justify-center items-center'>
                            <FaCircle className='h-[18px] text-[#767676] w-[18px]' />


                        </div>
                    </NavLink>

                </div>
                <NavLink
                    to="/header"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? " text-[#FFB400] bg-black" : "bg-[#FFB400] "
                    }
                >
                    <div title='Home' className='mt-[212px]  h-10 w-10 rounded-full flex justify-center items-center'>
                        <FaHome className='h-[18px] text-[#767676] w-[18px]' />

                    </div>

                </NavLink>

                <div className='mt-10'>
                    <NavLink
                        to="/service"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[#FFB400] p-5 bg-black" : ""
                        }
                    >
                        <div className='bg-[#F0F0F6] h-10 w-10 rounded-full flex justify-center items-center '>
                            <FaCode className='h-[18px] text-[#767676] w-[18px]' />
                        </div>
                    </NavLink>
                </div>
                <div className='mt-10'>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        <div title='portfolio' className='bg-[#F0F0F6] h-10 w-10 rounded-full flex justify-center items-center'>

                            <img className='h-[18px] text-[#767676] w-[18px]' src={portfolio} alt="" />

                        </div>
                    </NavLink>
                </div>

                <div className='mt-10'>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        <div title='Home' className='bg-[#F0F0F6] h-10 w-10 rounded-full flex justify-center items-center'>

                            <img className='h-[18px] text-[#767676] w-[18px]' src={profile} alt="" />
                        </div>
                    </NavLink>
                </div>




                <div className='mt-10 '>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        <div title='Home' className='bg-[#F0F0F6] h-10 w-10 rounded-full flex justify-center items-center'>
                            <FaCommentDots className='h-[18px] text-[#767676] w-[18px]' />
                        </div>
                    </NavLink>
                </div>
                <div className='mt-10 pb-[550px]'>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
                        }
                    >
                        <div title='Home' className='bg-[#F0F0F6] h-10 w-10 rounded-full flex justify-center items-center'>
                            <FaFeatherAlt className='h-[18px] text-[#767676] w-[18px]' />
                        </div>
                    </NavLink>
                </div>


            </div>
        </div>
    );
};

export default RightNavigation;