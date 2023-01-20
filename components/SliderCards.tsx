import React from 'react';
import ArrowNext from './ArrowNext';
import EventCard from './EventCard';

const SliderCards = () => {
  return (
    <div className="w-[100%] max-w-[1024px] h-[100%] border-red-50 border-[2px] flex items-center justify-center gap-[25px]">
      <div className="scale-x-[-1] min-w-[50px]">
        <ArrowNext />
      </div>
      <div className=" flex items-center justify-center gap-[20px] w-full border-red-500 border-[2px]">
        <div className="">
          <EventCard />
        </div>
      </div>
      <div className="min-w-[50px]">
        <ArrowNext />
      </div>
    </div>
  );
};

export default SliderCards;
