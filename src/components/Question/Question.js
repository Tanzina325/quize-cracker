import Option from "../Option/Option";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faEye } from '@fortawesome/free-solid-svg-icons';
  import {ToastContainer,toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Question = ({questionMark}) => {
    const {question,options,correctAnswer} = questionMark ;
    
    const chooseOption =(correctAnswer)=>{
        toast(correctAnswer) ;                    }

    
    return (
        <div className='border-solid border-4 rounded-3xl border-sky-500 p-5 m-5'>
        <div className="flex justify-around">
            <h1 className="font-bold">{question.slice(3,-4)}</h1>
            <p><FontAwesomeIcon icon={faEye} onClick={()=>chooseOption(correctAnswer)} ></FontAwesomeIcon><ToastContainer></ToastContainer></p>
        </div> 
        <div className='grid sm:grid-cols-1 lg:grid-cols-2'>{options.map(option=><Option option={option} correctAnswer={correctAnswer}></Option>)}
        </div>   
        </div>
    );
};

export default Question;