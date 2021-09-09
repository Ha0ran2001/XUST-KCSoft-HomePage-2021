import React from 'react';

import car from '../assets/car.png';

import '../styles/HomeAndCar.css';

export default function HomeAndCar() {


  return (
    <div className='flex justify-around items-center cursor-pointer h-[100vh] relative'>
      <div className='w-full relative overflow-hidden md:w-[60%]'>
        <img src={car} alt="" className='w-full h-[280px] md:h-[300px]' />
        <div
          onClick={() => window.location.href = "http://car.xust-kcsoft.club"}
          className='absolute w-full h-full top-0 flex justify-center items-center text-white bg-gray-400 bg-opacity-50'>
          <p className='border-2 px-5 py-2 rounded-full'>去玩玩小车</p>
        </div>
      </div>
    </div>
  )
}
