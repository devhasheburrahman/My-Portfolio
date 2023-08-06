import React from 'react';
import { FaFacebook, FaGithub, FaLinkedin, FaLocationArrow, FaMapMarkerAlt, FaPhoneAlt, FaRegEnvelope, FaSearchLocation, FaWhatsapp } from 'react-icons/fa';


const Contact = () => {
    return (
        <div id='contact'>
            <h2 className='text-center  font-[Inter] text-[32px] font-bold capitalize leading-[123px] '> Contact Me</h2>


            <div className=" flex gap-5 items-center">

                <div>
                    <form  >
                        <div className="card-body">
                            <h1 className="text-3xl font-bold">Write me a message</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered outline-none " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Your Email" className="input input-bordered outline-none" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text"> Your Message</span>
                                </label>
                                <input type="text" name='message' placeholder=" Write message . . . . " className="input input-bordered h-24" />
                            </div>

                            <div className="form-control mt-6">
                                <input className="btn text-white border-none  bg-[#FFB400]" type="submit" value="Send Message" />
                            </div>
                        </div>
                    </form>
                </div>

                {/* other card */}
                <div>
                    <p className='  font-[Inter] text-2xl font-bold capitalize leading-[24px] mb-10 '>Contact Info :</p>

                    <div className="flex mt-5 gap-2 items-center">

                        <p className=' text-xl'><FaRegEnvelope /> </p>
                        <p className=' text-xl'>: md.hashebur.rahman2023@gmail.com</p>

                    </div>
                    <div className=" flex mt-5 gap-2 items-center">

                        <p className=' text-xl'><FaPhoneAlt /></p>
                        <p className=' text-xl'> :  01777441366</p>

                    </div>
                    <div className=" flex mt-5 gap-2 items-center">

                        <p className=' text-xl'><FaMapMarkerAlt /></p>
                        <p className=' text-xl'>Kurigram,Bangladesh</p>

                    </div>

                    <h2 className='  mt-10 mb-10 font-[Inter] text-2xl font-bold capitalize leading-[24px] '>Social Networks :</h2>
                    <p className='flex gap-5 mt-5'>
                        <a className='text-3xl' href=""><FaFacebook /> </a>
                        <a className='text-3xl' href=""> <FaWhatsapp /></a>
                        <a className='text-3xl' href=""><FaLinkedin /> </a>
                        <a className='text-3xl' href=""><FaGithub /> </a>
                    </p>
                </div>
            </div>

        </div>

    );
};

export default Contact;