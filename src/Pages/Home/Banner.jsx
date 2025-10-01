import React from 'react';
import{ motion, scale } from 'motion/react'
import team from '../../assets/DeveloperTeam.jpg'
import team2 from '../../assets/DeveloperTeam2.jpg'

const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className='flex-1'>
                        <motion.img
                        src={team}
                        animate={{y :[30,50,30]}}
                        transition={{duration:5, repeat: Infinity}}
                        className="max-w-sm border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl border-white shadow-2xl"
                    />
                        <motion.img
                        src={team2}
                        animate={{x :[100,200,100]}}
                        transition={{duration:10, delay:2, repeat: Infinity}}
                        className="max-w-sm border-s-8 border-b-8 rounded-t-4xl rounded-br-4xl border-white shadow-2xl"
                    />
                    </div>
                    <div className='flex-1'>
                        <h1 className="text-5xl font-bold"><motion.span animate={{color: ["#0000FF", "#00FF00"], transition:{duration: 2, repeat: Infinity}}}>Latest</motion.span> Job For You!</h1>
                        <motion.h1 
                        
                            initial={{scale: 0}}
                            animate={{scale: 1, transition:{duration:2}}}

                         className="text-5xl font-bold">Remote Job For You!</motion.h1>
                        <p className="py-6">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;