import React, { useState, useEffect } from 'react'
import Marquee from "react-fast-marquee";
import axios from 'axios';
import Footer from './Footer';


export default function NewAward() {

  const [cards, setCards] = useState('');

  const getCards = async () => {
    let res = await axios.get('http://39.101.65.80:8080/searchList');
    console.log(res.data);
    setCards(res.data);
  }
  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className='relative h-[80vh] md:h-[100vh]'>
      <h1 className='text-3xl text-center font-bold'>部分<span className='text-yellow-500'>奖项</span>和荣誉</h1>
      <Marquee gradient={false} className='my-[100px] md:my-[150px]'>
        {cards && cards.map((item, index) => (
          <img src={`./${item.picUrl.slice(46)}`} alt="" key={item.title} className='h-[200px] md:h-[300px] mx-[20px]' />
        ))}
      </Marquee>
      <Footer />
    </div>
  )
}
