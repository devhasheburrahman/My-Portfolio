import React from 'react';
import user from '../../assets/images/user-1.png'
import { FaDownload, FaFacebookF, FaInstagram, FaLinkedin, FaRegClone, FaTwitter, FaYoutube } from 'react-icons/fa';

const LeftNavigation = () => {
    return (
        <section className='px-10 w-[305px] bg-[#FFFFFF] '>
            <div>

                <div className="card pt-[40px]  ">
                    <figure >
                        <img src={user} alt="" title='Hashebur Rahman' className="rounded-full h-[150px]  w-[150px]" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-lg text-[#2B2B2B] font-[Inter]">Hashebur Rahman</h2>
                        <p className='text-[15px]  font-[Inter] capitalize text-[#767676] leading-6 mb-4'> Font-end Developer</p>
                        <div className='flex gap-[15px]'>
                            <p className=' text-[#2B2B2B] p-[5px] bg-yellow-300 rounded-[50%]'><a className=' h-[24px] w-[24px]' href=""><FaFacebookF /> </a> </p>
                            <p className=' text-[#2B2B2B] p-[5px] bg-yellow-300 rounded-[50%]'><a className=' h-[24px] w-[24px]' href=""><FaInstagram /> </a> </p>
                            <p className=' text-[#2B2B2B] p-[5px] bg-yellow-300 rounded-[50%]'><a className=' h-[24px] w-[24px]' href=""><FaTwitter /> </a> </p>
                            <p className=' text-[#2B2B2B] p-[5px] bg-yellow-300 rounded-[50%]'><a className=' h-[24px] w-[24px]' href=""><FaLinkedin /> </a> </p>
                            <p className=' text-[#2B2B2B] p-[5px] bg-yellow-300 rounded-[50%]'><a className=' h-[24px] w-[24px]' href=""><FaYoutube /> </a> </p>

                        </div>
                    </div>
                </div>

                {/* horizontal line */}
                <div className='h-[1.5px] w-[220px] bg-[#F0F0F6]  mb-10 mx-auto'></div>
            </div>
            {/* about section  */}

            <div>
                <div className='flex mt-[10px]  justify-between  '>
                    <p className='py-2 px-2 text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6 bg-[#FFB400]'>Age:</p>
                    <p className=' text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6'>24</p>
                </div>
            </div>
            <div>
                <div className='flex mt-[10px]  justify-between  '>
                    <p className='py-2 px-2 text-[15px]   font-[Inter] capitalize text-[#2B2B2B] leading-6 bg-[#FFB400]'>Residence:</p>
                    <p className=' text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6'>BD</p>
                </div>
            </div>
            <div>
                <div className='flex mt-[10px] justify-between '>
                    <p className='py-2 px-2 text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6 bg-[#FFB400]'>Freelance:</p>
                    <p className='  text-[15px]  font-[Inter] capitalize  leading-6 text-[#7EB942]'>Available</p>
                </div>
            </div>
            <div>
                <div className='flex mt-[10px] justify-between'>
                    <p className='py-2 px-2 text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6 bg-[#FFB400]'>Address:</p>
                    <p className=' text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6'>kurigram,BD</p>
                </div>
            </div>

            {/* language section */}
            <div className='h-[1.5px] w-[220px] bg-[#F0F0F6] mt-10  mx-auto'></div>

            <div>
                <h1 className='text-xl text-[#2B2B2B]  capitalize leading-[123px] font-medium font-[Inter] '>Languages</h1>

                <div>
                    <div className='flex mt-[10px] justify-between '>
                        <p className=' text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6' >Bangla </p>
                        <p className=' text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6'> 100 %</p>
                    </div>
                    <progress className="progress  progress-warning w-56" value="100" max="100"></progress>
                </div>
                <div>
                    <div className='flex mt-[10px] justify-between '>
                        <p className=' text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6 ' > English </p>
                        <p className=' text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6'> 80 %</p>
                    </div>
                    <progress className="progress  progress-warning w-56" value="80" max="100"></progress>
                </div>
                <div>
                    <div className='flex mt-[10px] justify-between'>
                        <p className=' text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6 ' > Spanish </p>
                        <p>  60 %</p>
                    </div>
                    <progress className="progress  progress-warning w-56" value="60" max="100"></progress>
                </div>


            </div>

            <div className='h-[1.5px] w-[220px] bg-[#F0F0F6] mt-10  mx-auto'></div>
            {/*skill */}

            <div>
                <h1 className='text-xl text-[#2B2B2B]  capitalize leading-[123px] font-medium font-[Inter]'>Skill</h1>
                <div>
                    <div className='flex mt-[10px] justify-between '>
                        <p className='text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6 ' > HTML </p>
                        <p className='text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6'>90 %</p>
                    </div>
                    <progress className="progress  progress-warning w-56" value="90" max="100"></progress>
                </div>
                <div>
                    <div className='flex mt-[10px] justify-between  '>
                        <p className='text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6  ' > CSS </p>
                        <p className='text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6'>85 %</p>
                    </div>
                    <progress className="progress  progress-warning w-56" value="85" max="100"></progress>
                </div>
                <div>
                    <div className='flex mt-[10px] justify-between '>
                        <p className='text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6  ' >JS</p>
                        <p className='text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6'>80 %</p>
                    </div>
                    <progress className="progress  progress-warning w-56" value="80" max="100"></progress>
                </div>
                <div  >
                    <div className='flex mt-[10px] justify-between '>
                        <p className='text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6  ' > React</p>
                        <p className='text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6'> 75 %</p>
                    </div>
                    <progress className="progress  progress-warning w-56" value="75" max="100"></progress>
                </div>
                <div >
                    <div className='flex mt-[10px] justify-between '>
                        <p className='text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6  ' > Express </p>
                        <p className='text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6'>70 %</p>
                    </div>
                    <progress className="progress  progress-warning w-56" value="70" max="100"></progress>
                </div>
            </div>

            <div className='h-[1.5px] w-[220px] bg-[#F0F0F6] mt-10   mx-auto'></div>
            {/* Extra Skills section  */}
            <div>
                <h1 className='text-xl text-[#2B2B2B]  capitalize leading-[123px] font-medium font-[Inter]'>Extra Skill</h1>
                <div className='flex mt-[10px] gap-5   '>
                    <p className='h-[15px] text-[#FFB400]'><FaRegClone /></p>
                    <p className='text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6'>Bootstrap, Materialize</p>

                </div>
                <div className='flex mt-[10px] gap-5   '>
                    <p className='h-[15px] text-[#FFB400]'><FaRegClone /></p>
                    <p className='text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6' >Stylus, Sass, Less</p>

                </div>
                <div className='flex mt-[10px] gap-5   '>
                    <p className='h-[15px] text-[#FFB400]'><FaRegClone /></p>
                    <p className='text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6'>Gulp, Webpack, Grunt</p>

                </div>
                <div className='flex mt-[10px] gap-5   '>
                    <p className='h-[15px] text-[#FFB400]'><FaRegClone /></p>
                    <p className='text-[15px]  font-[Inter] capitalize text-[#2B2B2B] leading-6'>GIT Knowledge</p>

                </div>

            </div>


            <div className='mt-10 pb-10'>
                <button className='px-10 py-2 font-[Inter] text-sm flex  uppercase font-semibold text-[#2B2B2B] items-center leading-6 bg-[#FFB400]'>Download Cv<FaDownload className='ml-5' /> </button>
            </div>

        </section>
    );
};

export default LeftNavigation;