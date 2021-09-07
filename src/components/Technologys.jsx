import React from 'react'

export default function NewTech() {
  return (
    <div className='mt-[200px] '>
      <h1 className='text-center my-[40px] font-bold text-3xl tracking-widest md:text-4xl'>我们<span className='text-purple-500'>热爱的</span>技术</h1>
      <div className='flex flex-col space-y-4 w-full md:h-full items-center'>
        <div className='flex space-x-2 justify-center items-baseline'>
          <span className='text-blue-800 text-xs md:text-lg'>Three.js</span>
          <span className='text-sm md:text-base'>性能</span>
          <span className='text-blue-300 text-[17px] md:text-xl'>webpack</span>
        </div>
        <div className='flex space-x-1 md:space-x-2 justify-center items-baseline'>
          <span className='text-yellow-700 text-[18px] md:text-2xl'>数据结构</span>
          <span className='text-xs md:text-sm'>代码规范</span>
          <span className='text-purple-500 text-xs'>Redux</span>
          <span className='text-xl md:text-3xl text-blue-500'>TypeScript</span>
          <span className='text-sm md:text-lg'>CSS</span>
          <span className='text-[16px] md:text-xl text-[#33333d]'>koa</span>
        </div>
        <div className='flex space-x-1 md:space-x-2 justify-center items-baseline'>
          <span className='text-[#F29111] text-base md:text-xl'>MySQL</span>
          <span className='text-[#F54D27] text-[14px] md:text-lg'>Git</span>
          <span className='text-2xl md:text-3xl text-[#61DAFB]'>React</span>
          <span className='text-xs md:text-xl'>浏览器</span>
          <span className='tracking-tighter text-sm md:text-lg text-purple-600'>Redux Toolkit</span>
          <span className='text-green-300 text-base md:text-xl'>函数式编程</span>
        </div>
        <div className='flex space-x-1 md:space-x-4 justify-center items-baseline'>
          <span className='text-green-400 text-xs md:text-base'>WebGL</span>
          <span className='text-[#005B9C] text-[14px] md:text-lg'>HTTP/TCP</span>
          <span className='text-red-600 text-base md:text-3xl'>Java</span>
          <span className='text-[#C9921E] text-[20px] md:text-[28px]'>C++</span>
          <span className='text-3xl md:text-5xl text-[#A9BACD]'>C</span>
          <span className='text-[#00ACD7] text-base md:text-xl'>Go</span>
          <span className='text-xl md:text-2xl'>算法</span>
          <span className='text-[#FFDF5A] text-sm md:text-base'>Python</span>
          <span className='text-[#3C823B] text-xs md:text-xl'>Node</span>
        </div>
        <div className='flex space-x-1 md:space-x-2 justify-center items-baseline'>
          <span className='text-[#3FB27F] text-[15px] md:text-[17px]'>Vue</span>
          <span className='text-xs text-[#D6002F]'>Angular</span>
          <span className='text-[#6DB33F] text-[12px] md:text-[18px]'>Spring</span>
          <span className='text-[#6DB33F] md:text-[24px] tracking-tight'>Spring Boot</span>
          <span className='text-[#FCDC00] text-[17px] md:text-3xl'>JavaScript</span>
          <span className='text-[#111111] md:font-bold text-[15px] md:text-base'>Next.js</span>
        </div>
        <div className='flex space-x-2 justify-center items-baseline'>
          <span className='text-[#316CE6] text-xs md:text-[18px]'>K8s</span>
          <span className='text-[#6120E4] md:text-xl'>.NET</span>
          <span className='text-[#0997E5] text-xl md:text-3xl'>Docker</span>
          <span className='text-white text-base md:text-xl'>unity</span>
          <span className='text-[#A51F17]'>Redis</span>
        </div>
        <div className='flex space-x-2 justify-center items-baseline'>
          <span className='text-[#D0CEE2] text-xl md:text-2xl'>websocket</span>
          <span className='text-xs md:text-sm'>面向对象编程</span>
        </div>
      </div>
    </div>
  )
}
