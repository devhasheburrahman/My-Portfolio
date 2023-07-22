import React from 'react';
import { FaBaby, FaCircle,  FaCode,  FaCommentDots,  FaFeatherAlt, FaHome,  FaUser } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';


const RightNavigation = () => {
    return (
        <div className='w-[108px]  flex  justify-center bg-[#FAFAFA]  shadow-lg'>


            <div className=' '>

                <div className='pt-12 '>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-[red] bg-black" : ""
                        }
                    >
                        <div className='bg-[#F0F0F6] h-10 w-10 rounded-full flex justify-center items-center'>
                            <FaCircle className='h-[18px] text-[#767676] w-[18px]' />
                            {/* FaCircleHalfStroke */}
                            
                        </div>
                    </NavLink>

                </div>
                <NavLink
                    to="/lightNavigation"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-red-500 bg-red-300" : ""
                    }
                >
                    <div title='Home' className='bg-[#F0F0F6] mt-[212px]  h-10 w-10 rounded-full flex justify-center items-center'>
                        <FaHome className='h-[18px] text-[#767676] w-[18px]' />

                    </div>

                </NavLink>

                <div className='mt-10'>
                    <NavLink
                        to="/"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "active" : ""
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
                        <div title='Home' className='bg-[#F0F0F6] h-10 w-10 rounded-full flex justify-center items-center'>
                            <FaBaby className='h-[18px] text-[#767676] w-[18px]' />
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
                            <FaUser className='h-[18px] text-[#767676] w-[18px]' />
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
                            <FaUser className='h-[18px] text-[#767676] w-[18px]' />
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
                        <div className='bg-[#F0F0F6] h-10 w-10 rounded-full flex justify-center items-center'>
                            <FaFeatherAlt className='h-[18px] text-[#767676] w-[18px]' />
                        </div>
                    </NavLink>
                </div>
                <div className='mt-10 pb-10'>
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


            </div>
        </div>
    );
};

export default RightNavigation;