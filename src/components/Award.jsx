import React, { useState, useEffect } from 'react'
import Marquee from "react-fast-marquee";
import axios from 'axios';
import Footer from './Footer';
import '../styles/Award.css';


export default function NewAward() {

  const [cards, setCards] = useState('');

  const getCards = async () => {
    let res = await axios.get('http://39.101.65.80:8080/searchList');
    console.log(res.data.data);
    setCards(res.data.data);
  }
  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className='relative'>
      <h1 className='text-3xl text-center font-bold'>部分<span className='text-yellow-500'>奖项</span>和荣誉</h1>
      <Marquee gradient={false} className='my-[100px] md:my-[150px]'>
        {cards && cards.map((item, index) => (
          <img src={`./${item.picUrl.slice(46)}`} alt="" key={item.title} className='h-[200px] md:h-[300px] mx-[20px]' />
        ))}
      </Marquee>
      <div className='flex flex-col space-y-10 mt-10 mb-[100px]'>
        <h1 className='text-center my-10 text-2xl'>相关比赛简介</h1>
        <div className='mask-box mx-auto'>
          <div className='float-left flex flex-col space-y-2'>
            <p className='break-words text-center mb-4'>国际大学生程序设计竞赛</p>
            <p>(英语:International Collegiate Programming Contest,ICPC)</p>
            <p>是一项旨在展示大学生创新能力团队精神和在压力下编写程序，</p>
            <p>分析和解决问题能力的年度竞赛。经过30多年的发展，国际大</p>
            <p>学生程序设计竞赛已经发展成为最具影响力的大学生计算机竞赛</p>
            <p></p>
          </div>
          <div className='mask acm'></div>
        </div>
        <div className='mask-box mx-auto'>
          <div className='float-left flex flex-col space-y-2'>
            <p className='break-words text-center mb-4'>蓝桥杯全国软件和信息技术专业人才大赛</p>
            <p>蓝桥杯全国软件和信息技术专业人才大赛是由工业和信息化部人</p>
            <p>才交流中心举办的全国性IT学科赛事。2020年，蓝桥杯大赛被列</p>
            <p>入中国高等教育学会发布的“全国普通高校学科竞赛排行榜”，是</p>
            <p>高校教育教学改革和创新人才培养的重要竞赛项目。</p>
          </div>
          <div className='mask lanqiao'></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
