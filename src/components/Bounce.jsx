import React from 'react'
import { ArrowNarrowDownIcon } from '@heroicons/react/outline';


export default function Bounce() {
  return (
    <>
      <a>
        <div className='w-full h-[10vh] flex justify-center items-center animate-bounce ease-in-out'>
          <div className='flex flex-col items-end font-semibold '>
            <p>更多</p>
            <p>关于校软件实验室</p>
          </div>
          <ArrowNarrowDownIcon className='w-[40px] h-[40px] ' />
        </div>
      </a>
    </>
  )
}
