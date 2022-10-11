import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Topic from '../Topic/Topic';

const Home = () => {
    const loaderData = useLoaderData()
    const topics = loaderData.data
    console.log(topics)
    return (

        <div>
            <div className="bg-local  "  style= {{backgroundImage:`url("https://tse1.mm.bing.net/th?id=OIP.yxPZjg64ooWeC6SST-ckFAHaEo&pid=Api&P=0")`,backgroundSize:"cover",objectFit:"cover"}}>
          <h1 className='text-center font-bold py-10'>Hey , Let's play quiz .</h1> 
          <p className='text-center font-bold pb-10 '>It's the Quiz time</p> 
          </div>
          <div className='grid sm:grid-cols-1 lg:grid-cols-2 bg-slate-400 items-center gap-10 p-16 justify-around' >{
            topics.map(topic=><Topic key = {topic.id} topic={topic}></Topic>)
          }</div>
        </div>
    );
};

export default Home;