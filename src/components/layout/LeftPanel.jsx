import React from 'react'
import user from '../../assets/imgs/user.svg'
const LeftPanel = () => {
  return (
    <div className='left-pannel w-[14.7%] bg-cyan-500  px-[16px] pt-[20px] pt-[20px] h-[100%]'>
      <div className='flex gap-[10px] '>
      <img src={user} alt="" width={24} height={24}/>
      <p className='text-[var(--black-40)]'>ByeWind</p>
      </div>
    </div>
  )
}

export default LeftPanel