import React, { useRef } from 'react'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'


import shelly from '../assets/avatar/shelly.jpg';
import wangziheng18 from '../assets/avatar/18wangziheng.jpg';
import chengyu from '../assets/avatar/chengyu.jpg';
import ganhaoran from '../assets/avatar/ganhaoran.jpg';
import hexudong from '../assets/avatar/hexudong.jpg';
import huangyali from '../assets/avatar/huangyali.jpg';
import jiangmingchang from '../assets/avatar/jiangmingchang.jpg';
import linmeichen from '../assets/avatar/linmeichen.jpg';
import lizhenxue from '../assets/avatar/lizhenxue.jpg';
import panglifan from '../assets/avatar/panglifan.jpg';
import shenzhejun from '../assets/avatar/shenzhejun.jpg';
import wangmeixin from '../assets/avatar/wangmeixin.jpg';
import wangyumo from '../assets/avatar/wangyumo.jpg';
import wangziheng from '../assets/avatar/wangziheng.jpg';
import wuhaoran from '../assets/avatar/wuhaoran.jpg';
import wuxinting from '../assets/avatar/wuxinting.jpg';
import xuchenyi from '../assets/avatar/xuchenyi.jpg';
import yinhang from '../assets/avatar/yinhang.jpg';
import yishun from '../assets/avatar/yishun.jpg';
import yuanxiao from '../assets/avatar/yuanxiao.jpg';
import yuchenkang from '../assets/avatar/yuchenkang.jpg';
import zhoujie from '../assets/avatar/zhoujie.jpg';
import zhouyiheng from '../assets/avatar/zhouyiheng.jpg';


const bgUrl = (name, wrap = false) =>
  `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`

export default function Members() {
  const parallax = useRef();

  return (
    <div className='min-h-screen'>
      <h1 className='text-3xl text-center my-10 font-bold tracking-widest'>实验室<span className='text-blue-700'>成员</span></h1>
      <Parallax ref={parallax} pages={3} horizontal={true}>
        <ParallaxLayer offset={0} speed={0} factor={3} style={{ backgroundImage: bgUrl('stars', true), backgroundSize: 'cover' }} />

        <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
          <img src={chengyu} className='w-[10%] ml-[70%] mt-[50%] md:mt-[20%]' />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.5 }}>
          <img src={ganhaoran} className='block w-[10%] ml-[55%]' />
          <img src={hexudong} className='block w-[19%] ml-[15%] mt-[10%]' />
        </ParallaxLayer>

        <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.5 }}>
          <img src={huangyali} className='block w-[12%] ml-[70%]' />
          <img src={jiangmingchang} className='block w-[15%] ml-[40%]' />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.7 }}>
          <img src={linmeichen} className='block w-[16%] ml-[10%]' />
          <img src={lizhenxue} className='block w-[14%] ml-[75%] mt-[10%]' />
        </ParallaxLayer>

        <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
          <img src={panglifan} className='block w-[18%] ml-[60%]' />
          <img src={shenzhejun} className='block w-[13%] ml-[30%] mt-[10%]' />
          <img src={wangmeixin} className='block w-[15%] ml-[80%] mt-[30%] md:mt-[-30%]' />
        </ParallaxLayer>

        <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
          <img src={wangyumo} className='block w-[20%] ml-[5%] opacity-60 ' />
          <img src={wangziheng} className='block w-[20%] ml-[15%] mt-[10%]' />
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={wuhaoran} className='block w-[20%] opacity-80' />
        </ParallaxLayer>

        <ParallaxLayer offset={1.3} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={zhouyiheng} className='block w-[17%] md:w-[13%] ml-[50%] mt-[40%] opacity-70' />
          <img src={wuxinting} className='block w-[12%] ml-[10%] mt-[20%]' />
          <img src={zhoujie} className='w-[20%] md:w-[16%] block ml-[5%] mt-[30%] opacity-50' />
        </ParallaxLayer>


        <ParallaxLayer offset={-0.7} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={wangziheng18} className='w-[20%]' />
        </ParallaxLayer>
        <ParallaxLayer offset={0.3} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
          <img src={yuchenkang} className='w-[20%]' />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={0.1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={shelly} className='w-[25%]' />
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={0.1}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={xuchenyi} className='w-[20%] md:w-[16%]' />
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={-0}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={yinhang} className='w-[20%] md:w-[16%] mt-[60%] md:mt-[0]' />
        </ParallaxLayer>
      </Parallax>

    </div>
  )
}
