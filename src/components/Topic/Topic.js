import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id,name,logo} = topic;
    return (
        
            <div className='border-solid border-4 rounded-3xl border-sky-500 p-5'>
        
          <div className='mx-auto'><img src={logo} alt="" /></div>
          <h1 className='text-center py-4 font-bold mx-auto '>{name}</h1>
          <div className='text-center'><Link to ={`../quiz/${id}`}  ><button className='bg-red-400 rounded-xl px-5 py-2 '>Start Quiz</button></Link> </div>
        </div>
    
    );
};

export default Topic;