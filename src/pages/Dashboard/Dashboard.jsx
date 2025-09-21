import React from 'react'
import up from "../../assets/icons/dashoard/up.svg"
import down from "../../assets/icons/dashoard/down.svg"
import BarChart from '../../components/ui/Chart'
const Dashboard = () => {
  return (
    <div className='p-5'>
      <p>eCommerce</p>

      <div className='flex lg:flex-row flex-col gap-5 mt-5 h-fit'>
        <div className='flex gap-5  flex-wrap w-full lg:w-1/2 '>
          <div className="p-5 rounded-lg bg-[var(--blue-prime)] w-[45%] lg:w-[48%]">
            <p className='text-center lg:text-start'>Customer</p>
            <p className='text-2xl font-bold flex lg:flex-row flex-col gap-4 items-center'>3,781<span className='text-[12px] ml-4 flex  gap-2'>+11.01% <img src={up} alt="up" /></span></p>
          </div>

          <div className="p-5 rounded-lg bg-[var(--blue-light)] w-[45%] lg:w-[48%] ">
            <p className='text-center lg:text-start'>Orders</p>
            <p className='text-2xl font-bold flex lg:flex-row flex-col gap-4 items-center'>1,219<span className='text-[12px] ml-4 flex gap-2'>-0.03% <img src={down} alt="up" /></span></p>
          </div>

          <div className="p-5 rounded-lg bg-[var(--blue-light)] w-[45%] lg:w-[48%] ">
            <p className='text-center lg:text-start'>Revenue</p>
            <p className='text-2xl font-bold flex lg:flex-row flex-col gap-4 items-center'>$695<span className='text-[12px] ml-4 flex gap-2'>+15.03%<img src={up} alt="up" /></span></p>
          </div>

          <div className="p-5 rounded-lg bg-[var(--purple-light)] w-[45%] lg:w-[48%]">
            <p className='text-center lg:text-start'>Growth</p>
            <p className='text-2xl font-bold flex lg:flex-row flex-col gap-4 items-center'>30.1%<span className='text-[12px] ml-4 flex gap-2'>+6.08%<img src={up} alt="up" /></span></p>
          </div>
        </div>

        <div className='w-1/2 h-[252px] rounded-lg bg-[var(--blue-light)]'>
          <BarChart />
        </div>
      </div>

    </div>

    
  )
}

export default Dashboard