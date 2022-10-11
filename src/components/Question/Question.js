import Option from "../Option/Option";


const Question = ({questionMark}) => {
    const {question,options,correctAnswer} = questionMark ;
    
//     const chooseOption =(correctAnswer)=>{
//  }
// }
    
    return (
        <div className='border-solid border-4 rounded-3xl border-sky-500 p-5'>
        <h1>{question}</h1> 
        <div className='grid grid-cols-2'>{options.map(option=><Option option={option} correctAnswer={correctAnswer}></Option>)}
        </div>   
        </div>
    );
};

export default Question;