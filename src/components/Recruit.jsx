import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import axios from 'axios';

const majors = [
  { name: '请选择学院', major: ['请选择专业'] },
  { name: '计算机学院', major: ['请选择专业', '信息与计算机科学', '数据科学与大数据技术', '网络工程', '计算机科学与技术', '软件工程'] },
  { name: '通信学院', major: ['请选择专业', '智能科学与技术', '物联网工程', '电子信息工程', '电子科学与技术', '通信工程'] },
  { name: '电控学院', major: ['请选择专业', '微电子科学与工程', '测控技术与仪器', '电气工程及其自动化', '自动化'] },
  { name: '能源学院', major: ['请选择专业', '建筑环境与能源应用工程', '采矿工程'] },
  { name: '艺术学院', major: ['请选择专业', '设计学类'] },
  { name: '安全学院', major: ['请选择专业', '安全工程', '应急技术与管理', '消防工程'] },
  { name: '人文与外国语学院', major: ['请选择专业', '汉语言文学', '法学', '英语'] },
  { name: '机械学院', major: ['请选择专业', '智能制造工程', '机械电子工程', '机械设计制造及其自动化(卓越)', '机械设计制造及其自动化', '车辆工程'] },
  { name: '材料学院', major: ['请选择专业', '新能源材料与器件', '无机非金属材料工程', '材料科学与工程', '高分子材料与工程'] },
  { name: '地环学院', major: ['请选择专业', '地下水科学与工程', '地质工程', '环境工程', '资源勘查工程'] },
  { name: '继续教育学院', major: ['请选择专业', '少数名族预科'] },
  { name: '理学院', major: ['请选择专业', '工程力学', '数学与应用数学'] },
  { name: '化工学院', major: ['请选择专业', '化学工程与工艺', '应用化学', '矿物加工工程', '能源化学工程'] },
  { name: '建工学院', major: ['请选择专业', '土木工程', '城乡规划', '城市地下空间工程', '建筑学', '给排水科学与工程'] },
  { name: '管理学院', major: ['请选择专业', '会计学', '信息管理与信息系统', '工业工程', '工商管理', '工程管理', '物流管理', '电子商务'] },
  { name: '测绘学院', major: ['请选择专业', '地理信息科学', '测绘工程', '自然地理与资源环境', '遥感科学与技术'] },
]

export default function Recruit() {

  const [name, setName] = useState('');
  const [xh, setXh] = useState('');
  const [college, setCollege] = useState('请选择学院');
  const [major, setMajor] = useState('请选择专业');
  const [phone, setPhone] = useState(null);


  const setInfo = async () => {
    if (!name.length) {
      alert('名字不能为空！');
      return;
    } else if (!xh.length) {
      alert('学号不能为空！');
      return;
    } else if (xh.length !== 11) {
      alert('请检查学号格式！');
      return;
    } else if (college === '请选择学院') {
      alert('学院不能为空！');
      return;
    } else if (major === '请选择专业') {
      alert("专业不能为空");
      return;
    } else if (!phone.length) {
      alert('号码不能为空');
      return;
    } else if (!(/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/.test(phone))) {
      alert('请输入正确的手机号格式！');
      return;
    }

    const infoData = { name, xh, college, major, phone };

    let res = await axios({
      url: 'http://39.101.65.80:8081/insertOne',
      method: 'POST',
      data: infoData
    });
    
    if (res.data.message === '插入成功') {
      alert('提交成功，恭喜你！')
    }
  }


  return (
    <div className='h-screen bg-home-page bg-cover bg-bottom bg-no-repeat'>
      <div className='h-screen bg-home md:px-10 flex flex-col items-center justify-center lg:flex-row lg:space-x-32 xl:space-x-60'>
        <div className='text-white text-xl md:text-4xl font-bold my-10 whitespace-nowrap'>
          <h1>嗨 👋 欢迎加入校软件实验室</h1>
        </div>
        <div action="" className='flex flex-col space-y-4 w-3/4 md:w-[400px] rounded-lg bg-white p-5 md:p-10'>
          <div className='flex justify-center items-center space-x-2'>
            <Link to="/"><img src={logo} alt="" className='w-10 h-10' /></Link>
            <span className='text-lg font-bold'>2021招新考核报名</span>
          </div>
          <p className='text-xs text-gray-400'>请填写以下信息</p>
          <form action="" className='flex flex-col space-y-3 md:space-y-5'>
            <input
              type="text"
              onChange={(e) => setName(e.target.value)}
              className='rounded-lg flex-1 appearance-none border
             border-gray-300 w-full py-1 px-4 bg-white text-gray-700 
             placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#030143]
             focus:border-transparent' placeholder='姓名' />
            <input
              type="text"
              onChange={(e) => setXh(e.target.value)}
              className='rounded-lg flex-1 appearance-none border
             border-gray-300 w-full py-1 px-4 bg-white text-gray-700 
             placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#030143]
             focus:border-transparent' placeholder='学号' />
            <div className='w-full flex flex-col space-y-2'>
              <select
                value={college}
                onChange={(e) =>  setCollege(e.target.value)}
                className='border rounded-lg border-gray-300 focus:outline-none text-gray-700 py-1 px-4 bg-white'>
                {majors.map((item, index) => (
                  <option value={item.name} key={item.name}>{item.name}</option>
                ))}
              </select>
              <select
                value={major}
                onChange={(e) => setMajor(e.target.value)}
                className='border rounded-lg border-gray-300 focus:outline-none text-gray-700 py-1 px-4 bg-white '>
                {college.length && majors.filter(item => item.name === college)[0].major.map(item => (
                  <option value={item} key={item}>{item}</option>
                ))}
              </select>
            </div>
            <input
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              className='rounded-lg flex-1 appearance-none border
             border-gray-300 w-full py-1 px-4 bg-white text-gray-700 
             placeholder-gray-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#030143]
             focus:border-transparent' placeholder='电话号码' />
          </form>
          <button className='w-full bg-[#030143] text-white py-3 px-3 rounded-lg' onClick={setInfo}>已确认信息，提交</button>
        </div>
      </div>
    </div>
  )
}
