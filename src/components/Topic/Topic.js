import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id,name,logo} = topic;
    return (
        
            <div className='border-solid border-4 rounded-3xl border-sky-500 p-5'>
          <img  className='w-1/2 p-5 ml-16  lg:ml-32' src={logo} alt="" /> 
          <h1 className='text-center py-4 font-bold '>{name}</h1>
          <Link to ={`../quiz/${id}`} ><button className='bg-red-400 rounded-xl px-5 py-2 ml-52 mb-5'>Start Quiz</button></Link> 
        </div>
    
    );
};

export default Topic;