import React from 'react';
import { FaArrowRight } from 'react-icons/fa'


const Header = () => {
    return (
        <div className='flex mx-3 justify-center items-center px-[60px]' style={{ backgroundImage: `url('/header_bg.png')` }}>
            <div>
                <div className='text-black mb-8  font-bold font-[Inter] text-5xl leading-[50px]'>  I’m Hashebur Rahman
                    <span className='text-[#FFB400] text-[Inter]'> Front-end</span> Developer</div>
                <p className='font-[Inter] mb-8 text-base leading-6 capitalize text-[#767676]'>Hi, I am Hashebur a professional MERN ( MongoDB, Express, React and Node Js) Stack developer. I have 2 years of experience on this stack in a Local IT Company. I am available now on Fiverr for showing my expertise by developing your brand website .</p>
                <button className='flex justify-center items-center gap-3 bg-[#FFB400] px-8 py-4 rounded-md text-black font-bold font-sans[Inter] mb-[74px] '> HIRE ME  <FaArrowRight /> </button>
            </div>
            <div>
                <img src={'/header.png'} alt="" />

            </div>
        </div>



    );
};

export default Header;



