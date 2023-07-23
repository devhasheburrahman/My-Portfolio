import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const Recommendations = () => {
    return (
        <div id='recommendations'>
            <h2 className='text-center  font-[Inter] text-[32px] font-bold capitalize leading-[123px] '>recommendations</h2>
            <p className='text-center mb-[50px] px-24 text-[#767676]  font-[Inter] text-[15px] font-normal capitalize leading-6'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum</p>


            <div className='flex gap-4'>
                <div className='bg-[#FFFFFF] rounded-lg px-6 pt-6'>
                    <div>
                        <Rating
                            placeholderRating={5}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>} />
                    </div>
                    <p className='font-[Inter] mt-4 mb-4 text-lg leading-[22px] capitalize font-medium'>Great Quality !</p>
                    <p className='font-[Inter] text-[15px] leading-[24px] capitalize font-normal text-[#767676]'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda, culpa magnam quisquam debitis deserunt.</p>
                    <div className='flex justify-between mt-[30px] pb-[25px] items-center'>

                        <img src="/Profile.png" alt="" />
                        <div >
                            <h1 className='font-[Inter] text-lg leading-[22px] capitalize font-medium'>James Gouse </h1>
                            <p className='font-[Inter] text-[15px] leading-[24px] capitalize font-normal text-[#767676]'>Graphics Designer </p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#FFFFFF] rounded-lg px-6 pt-6'>

                    <div>
                        <Rating
                            placeholderRating={5}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>} />
                    </div>

                    <p className='font-[Inter] mt-4 mb-4 text-lg leading-[22px] capitalize font-medium'>Amazing work!</p>
                    <p className='font-[Inter] text-[15px] leading-[24px] capitalize font-normal text-[#767676]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda, culpa magnam quisquam debitis deserunt.!</p>
                    <div className='flex justify-between mt-[30px] pb-[25px]  items-center'>

                        <img src="/Profile (1).png" alt="" />
                        <div>
                            <h1 className='font-[Inter] text-lg leading-[22px] capitalize font-medium'>Tiana Philips </h1>
                            <p className='font-[Inter] text-[15px] leading-[24px] capitalize font-normal text-[#767676]'>Photographer </p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#FFFFFF] rounded-lg px-6 pt-6'>
                    <div>
                        <Rating
                            placeholderRating={5}
                            readonly
                            emptySymbol={<FaRegStar></FaRegStar>}
                            placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                            fullSymbol={<FaStar></FaStar>} />
                    </div>
                    <p className='font-[Inter] mt-4 mb-4 text-lg leading-[22px] capitalize font-medium'>Great Quality !</p>
                    <p className='font-[Inter] text-[15px] leading-[24px] capitalize font-normal text-[#767676]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos assumenda, culpa magnam quisquam debitis deserunt.!</p>
                    <div className='flex justify-between mt-[30px] pb-[25px]  items-center'>

                        <img src="/Profile (2).png" alt="" />
                        <div>
                            <h1 className='font-[Inter] text-lg leading-[22px] capitalize font-medium'>Naimur Hasan</h1>
                            <p className='font-[Inter] text-[15px] leading-[24px] capitalize font-normal text-[#767676]'>Business man</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Recommendations;