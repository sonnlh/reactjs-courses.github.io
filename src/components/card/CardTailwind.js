import React from 'react';

const CardTailwind = (props) => {
  const amountClasses = `text-lg font-bold text-transparent bg-clip-text ${props.primary ? 'bg-primary-gradient' : 'bg-secondary-gradient'}`;
    return (
        <div className="relative m-3">
        <div className="w-full rounded-lg h-[400px] ">
          <img className="block w-full object-cover rounded-lg" src={props.item.img} alt="" />
        </div>
        <div className="absolute left-2/4 -translate-x-2/4 -translate-y-2/4 bottom-0 bg-white z10 rounded-[20px] p-5  w-[calc(100%-36px)]">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-x-3">
              <img className="w-8 h-8 rounded-full object-cover flex-shrink-0" src={props.item.avatar} alt="" />
              <span className="font-light text-base text-[#333]">{props.item.username}</span>
            </div>
            <div className="flex items-center gap-x-3">
              <img className="w-6 h-6 rounded-3xl"
                src="https://w7.pngwing.com/pngs/933/485/png-transparent-red-heart-illustration-love-hearts-love-hearts-hert-love-heart-cupid-thumbnail.png"
                alt=""
              />
              <span>{props.item.love}</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-medium">{props.item.describtion}</h3>
            <span className={amountClasses}>{props.item.psl} PSL</span>
          </div>
        </div>
      </div>
    );
};

export default CardTailwind;