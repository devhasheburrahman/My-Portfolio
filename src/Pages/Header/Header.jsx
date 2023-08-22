import React from 'react';
import { FaArrowRight } from 'react-icons/fa'



const Header = () => {
    return (
        <div className='flex rounded-lg mx-3 shadow-lg  justify-center items-center pl-[30px]' style={{ backgroundImage: `url('/header_bg.png')` }}>
            <div className='w-[500px]'>
                <div className='text-black  mb-8 pt-24 font-bold font-[Inter] text-4xl leading-[60px]'>I’m Hashebur Rahman <br />
                    <span className='text-[#FFB400] text-[Inter]'> Front-end</span> Developer</div>
                <p className='font-[Inter] mb-8 text-base leading-6  text-[#767676]'>Hi, I am Hashebur a professional MERN ( MongoDB, Express, React and Node Js) Stack developer. I have 2 years of experience on this stack in a Local IT Company. I am available now on Fiverr for showing my expertise by developing your brand website .</p>

                <a href="#contact">
                    <button className='flex justify-center items-center gap-3 bg-[#FFB400] px-8 py-4 rounded-md text-black font-bold font-sans[Inter] mb-[74px] '> HIRE ME  <FaArrowRight /> </button></a>

            </div>


            <div className='w-[290px]'>
                {/* <img className='w-full' src={'/banner1.png'} alt="" /> */}
                <img title='Developer Hashebur Rahman' className='h-[400px] w-full ' src={'/banner.png'} alt="" />
            </div>


        </div>



    );
};

export default Header;



