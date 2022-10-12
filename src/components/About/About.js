import React from 'react';
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className='flex justify-center my-10 p-10 '><div className='bg-sky-400 w-1/2 text-center p-16'>
        <h1 className='font-bold'>This route is not found</h1>
        <p>Please go to <Link to ="/" className=' text-red-800 font-bold'>Home</Link></p>
    </div></div>
    );
};

export default About;