import React from 'react';

const Skill = () => {
    return (
        <div>
            <h1 className='text-center font-[Inter] mt-10 text-[32px] font-bold capitalize leading-[123px]'>My Skills</h1>
            <div className='grid grid-cols-3 pt-5 gap-5'>
                <div className='shadow-2xl p-4 flex flex-col items-center'>
                    <img className='h-60' src="/html.png" alt="" />
                    <p className=' font-semibold text-center'>HTML5</p>
                </div>
                <div  className='shadow-2xl p-4 flex flex-col items-center'>
                    <img className='h-60' src="/css.png" alt="" />
                    <p className= 'font-semibold text-center'>CSS3</p>
                </div>
                <div  className='shadow-2xl p-4 flex flex-col items-center'>
                    <img className='h-60' src="/bootstrap.png" alt="" />
                    <p className=' font-semibold text-center'>Bootstrap</p>
                </div>
                <div  className='shadow-2xl p-4 flex flex-col items-center'>
                    <img className='h-60' src="/tailwind.png" alt="" />
                    <p className='font-semibold text-center'>Tailwind CSS</p>
                </div>
                <div  className='shadow-2xl p-4 flex flex-col items-center'>
                    <img className='h-60' src="/js.png" alt="" />
                    <p className=' font-semibold text-center'>JavaScript</p>
                </div>
                <div  className='shadow-2xl p-4 flex flex-col items-center'>
                    <img className='h-60' src="/react.png" alt="" />
                    <p className= 'font-semibold text-center'>React</p>
                </div>
                <div className='shadow-2xl p-4 flex flex-col items-center'>
                    <img className='h-60' src="/node.png" alt="" />
                    <p className= 'font-semibold text-center'>Node JS</p>
                </div>
                <div  className='shadow-2xl p-4 flex flex-col items-center'>
                    <img className='h-60' src="/express.png" alt="" />
                    <p className=' font-semibold text-center'>Express js</p>
                </div>
                <div  className='shadow-2xl p-4 flex flex-col items-center'>
                    <img className='h-60' src="/firebase.png" alt="" />
                    <p className=' font-semibold text-center'>Firebase</p>
                </div>
                <div  className='shadow-2xl p-4 flex flex-col items-center'>
                    <img className='h-60' src="/mongodb.png" alt="" />
                    <p className='font-semibold text-center'>MongoDB</p>
                </div>
            </div>

        </div>
    );
};

export default Skill;