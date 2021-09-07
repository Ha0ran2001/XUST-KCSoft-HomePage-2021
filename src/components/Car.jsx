import React from 'react';

import car from '../assets/car.png';

import '../styles/HomeAndCar.css';

export default function HomeAndCar() {

  return (
    <div className='flex flex-col md:flex-row justify-around items-center h-[100vh]'>
      <div className='flex flex-col space-y-8 items-center'>
        <div className='w-full relative overflow-hidden'>
          <div className='flash-bar'></div>
          <img src={car} alt="" className='w-full h-[280px] md:h-[300px]' />
        </div>
        <button className='button_flow w-80'>
          <a href="http://car.xust-kcsoft.club/">去玩玩小车</a>
        </button>
      </div>
    </div>
  )
}
