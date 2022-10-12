import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id,name,logo,total} = topic;
    return (
        
            <div className='border-solid border-4 rounded-3xl border-sky-500 p-5'>
        
          <div className='mx-auto'><img src={logo} alt="" /></div>
          <div className='flex justify-evenly my-8'>
          <h1 className=' font-bold  '>{name}</h1>
          <h1>total question:{total}</h1>
          </div>
          <div className='text-center'><Link to ={`../quiz/${id}`}  ><button className='bg-red-400 rounded-xl px-5 py-2 '>Start Quiz</button></Link> </div>
        </div>
    
    );
};

export default Topic;