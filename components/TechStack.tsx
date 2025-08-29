import { techstack } from '@/data';
import React from 'react';
import { Button } from './ui/MovingBorders';

const TechStack = () => {
  return (
    <div id='techstack' className="py-20">
      <h1 className="heading">
        A few of my
        <span className="text-purple"> Tech stack </span>
      </h1>
      <div className='flex gap-4 mt-10 flex-wrap'>
        {techstack.map((imageName, index) => (
          <Button
            key={index} // Add a unique key prop
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex flex-row lg:flex-col lg:items-center p-4 py-2 md:p-2 lg:p-2">
              <img src={`./${imageName}`} className="lg:w-10 md:w-5 w-4" alt={imageName} />
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TechStack;