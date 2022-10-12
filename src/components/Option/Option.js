import React from 'react';
import {ToastContainer,toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Option = ({option,correctAnswer}) => {
    const chooseOption =(correctAnswer)=>{
        if(option === correctAnswer)
        {toast('Hey,it is a right answer')}
        // else{toast(' Hey,it is a wrong answer')}
    }
    return (
        <div>
         <label onClick={()=>chooseOption(correctAnswer)}> <input  type="radio" name='question'   />{option}</label> <ToastContainer></ToastContainer>  
        </div>
    );
};

export default Option;