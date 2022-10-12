import React from 'react';

import { LineChart, Line, XAxis, YAxis,Tooltip } from 'recharts';
const Statistics = () => {
    const  data = [
        {
          name: 'React',
          total: 8,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Javascript',
          total: 9,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Css',
          total: 8,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Git',
          total: 11,
          pv: 3908,
          amt: 2000,
        },
        
      ];
    return (
        <div className='flex  justify-center  my-10 '>
            
        <LineChart
          width={500}
          height={300}
          data={data}>
          <Line type="monotone" dataKey="total" stroke="red" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
        </LineChart>
      
        </div>
    );
};

export default Statistics;