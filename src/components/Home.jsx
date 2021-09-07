import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import qqqun from '../assets/qqqun.jpg';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const showQRcode = () => {
    setIsOpen(true);
  }
  const closeQRcode = () => {
    setIsOpen(false);
  }

  return (
    <div className='bg-cover bg-bottom bg-no-repeat w-full h-full'>
      <div className='h-[90vh] w-full flex justify-center items-center'>
        <div className='h-[250px] w-full  flex flex-col justify-center items-center'>
          <p className='text-2xl text-white text-center font-medium md:text-4xl lg:text-6xl tracking-wider md:tracking-[0.05em]'>
            西安科技大学软件创新实验室</p>
          <div className='my-[30px] text-center'>
            <p>我们的征途是星辰大海</p>
            <p></p>
          </div>
          <button
            onClick={showQRcode}
            className='px-10 py-3 rounded-full mt-4 text-white font-semibold text-xl shadow-md active:scale-90 transition-transform ease-out'>
            加入我们</button>
        </div>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeQRcode}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-[80vw] md:w-[60vw]  p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-semibold leading-6 text-gray-900"
                >
                  校软件实验室21级招新QQ群
                </Dialog.Title>
                <div className="mt-2 flex flex-col space-y-2 items-center text-center text-gray-400">
                  <p>无论你来自哪里，是什么专业</p>
                  <p>只要你热爱学习，热爱计算机软件编程、热爱创新，我们就欢迎你的加入！</p>
                  <p>扫描以下二维码加入招新群了解更多。</p>
                  <img src={qqqun} alt="" className='w-[200px]' />
                  <p>招新群号:650561515</p>
                </div>

                <div className="mt-4 text-center">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeQRcode}
                  >
                    我知道了，这就去！
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
