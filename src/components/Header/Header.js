import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        
            <nav className='flex  justify-between  bg-slate-400 px-20 py-6'>
  <div>
    <h1>Happy Quizing</h1>
  </div>
  <div>
    <Link to ="/" className='p-5'>Home</Link>
    <Link to ="/quiz" className='p-5'>Quiz</Link>
    <Link to ="/statistics" className='p-5'>Statistics</Link>
    <Link to ="/about" className='p-5'>About</Link>
  </div>

</nav>
    
    );
};

export default Header;