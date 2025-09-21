import React from 'react'
import user from '../../assets/imgs/user.svg'
import Accordion from '../ui/Accordion'
import { Dashboards, Pages } from '../../data/data'
import slide from '../../assets/icons/navbar/slide.svg'

const LeftPanel = ({ isopen , setisopen}) => {
  return (
    <div className={` bg-[white] z-20 left-pannel w-[50%] absolute lg:w-[19.8%] lg:static border-r border-[var(--black-10)] px-[16px] pt-[20px] h-[100%] ${isopen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className='cursor-pointer absolute right-[8px] top-2 lg:hidden' onClick={()=>setisopen(false)}><img src={slide} alt="" /></div>

      <div className='flex gap-[10px] items-center'>
        <div className='w-[24px] h-[24px] '>
          <img src={user} alt="" className='w-full h-full' />
        </div>
        <p className='h-fit'>ByeWind</p>
      </div>

      <div className='mt-[20px] pl-1.5 '>
        <div className='flex gap-7'>
          <p className='text-[var(--black-20)]'>Favorites</p>
          <p className='text-[var(--black-20)]'>Recently</p>
        </div>

        <ul className='mt-3 flex flex-col gap-2'>
          <li className='flex items-center'>
            <span className='w-1.5 h-1.5 bg-[var(--black-20)] rounded-full mr-2 '></span>
            Overview
          </li>

          <li className='flex items-center'>
            <span className='w-1.5 h-1.5 bg-[var(--black-20)] rounded-full mr-2 '></span>
            Projects
          </li>
        </ul>
      </div>

      <div className='mt-[20px] pl-1.5 '>
        <div className='flex gap-7'>
          <p className='text-[var(--black-20)]'>Dashboards</p>
        </div>
        <Accordion data={Dashboards} defActive={0} />
      </div>

      <div className='mt-[20px] pl-1.5 '>
        <div className='flex gap-7'>
          <p className='text-[var(--black-20)]'>Pages</p>
        </div>
        <Accordion data={Pages} />
      </div>


    </div>
  )
}

export default LeftPanel