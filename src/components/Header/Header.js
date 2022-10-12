import React from 'react';
import { Link } from 'react-router-dom';
import{ QuestionMarkCircleIcon} from '@heroicons/react/24/solid';
const Header = () => {
    return (
        
            <nav className='flex  justify-between  bg-slate-400 px-20 py-6'>
  <div className='flex'>
  <QuestionMarkCircleIcon className='h-8 w-8 text-red-800 '></QuestionMarkCircleIcon>
    <h1 className='font-bold text-lg text-red-800 lg:pl-4 pl-16'>Happy Quiz</h1>
  </div>
  <div className='flex lg:flex-row flex-col ml-2'>
    <Link to ="/" className='lg:p-4 p-2 lg:ml-2 lg:my-[-5px] ml-[-200px] mt-8 mb-1 font-bold'>Home</Link>
    <Link to ="/blogs" className='lg:p-4 p-2 lg:ml-2 lg:my-[-5px] ml-[-200px] my-1 font-bold'>Blogs</Link>
    <Link to ="/statistics" className='lg:p-4 p-2 lg:ml-2 lg:my-[-5px] ml-[-200px] my-1 font-bold'>Statistics</Link>
    <Link to ="/about" className='lg:p-4 p-2 lg:ml-2 lg:my-[-5px] ml-[-200px] my-1 font-bold'>About</Link>
    <Link to ="/quiz" className='p-1'></Link>
  </div>

</nav>
    
    );
};

export default Header;