import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../components/Question/Question';

const Quiz = () => {
 const loadData =useLoaderData();
 const questions = loadData.data.questions;
 
 console.log(questions)
    return (
        <div className='p-5 mb-5'>
            {
                questions.map(questionMark=><Question key ={questionMark.id} questionMark={questionMark} ></Question>)
            }
        </div>
    );
};

export default Quiz;