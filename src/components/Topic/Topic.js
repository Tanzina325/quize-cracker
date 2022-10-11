import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic}) => {
    const {id,name,logo} = topic;
    return (
        
            <div className='border-solid border-4 rounded-3xl border-sky-500 p-5'>
          <img  className='w-1/2 p-5 ml-16  lg:ml-32' src={logo} alt="" /> 
          <h1 className='text-center font-bold '>{name}</h1>
          <Link to ={`../quiz/${id}`} ><button>Start Quiz</button></Link> 
        </div>
    
    );
};

export default Topic;