import React from 'react'
import record from '../assets/record.png';

export default function Footer() {
  return (
    <div className='w-full absolute bottom-0 left-0 text-white flex flex-col justify-around items-center cursor-default py-2'>
      <p className=''>正在从2021级新生和2020级老生中招募新成员</p>
      <p>欢迎加入2021级招新QQ群：650561515</p>
      <p>地址：西安科技大学煤炭科技中心#306室✌️</p>
      <div>
        <img src={record} alt="备案" className='inline' />
        <a href="https://beian.miit.gov.cn/">陕ICP备 19005593号-3</a>
      </div>
    </div>
  )
}
