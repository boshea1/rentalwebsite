import React from 'react';

const Hero = ({ title, subtitle, image, ctaText, ctaUrl }) => {
  return (
    <div className="font-poppins text-center bg-gray-200 w-4/5 vh-50 m-auto rounded-md">
      {/* className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-200" */}
      <img src={image} alt={title}  className='rounded-t-md'/>
      <div className="border-transparent border-4 shadow-md mt-4">
        <h1 className="text-3xl">{title}</h1>
        <p className="text-lg">{subtitle}</p>
        <a href={ctaUrl} className="text-base">{ctaText}</a>
      </div>
    </div>
  );
};

export default Hero;
