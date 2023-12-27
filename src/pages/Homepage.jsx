// Homepage.js

import React from 'react';
import Snowfall from 'react-snowfall';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();

  return (
    <div className='relative flex flex-col items-center justify-center min-h-screen'>
      <h1 className='text-4xl text-blue-100 mb-2'>
        Welcome to my Humble Abode
        <span
          className='text-black text-4xl hover:animate-bounce cursor-pointer'
          onClick={() => navigate('/landing')}
        >
          &#8594;
        </span>
      </h1>
      <hr className='w-16 border-t border-blue-100 mb-2' />
      <Snowfall />
    </div>
  );
};

export default Homepage;
