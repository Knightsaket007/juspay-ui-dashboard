import React from 'react'
import slide from '../../assets/icons/navbar/slide.svg'
import star from '../../assets/icons/navbar/star.svg'
import search from '../../assets/icons/navbar/search.svg'
import searchShortcut from '../../assets/icons/navbar/searchShortcut.svg'
import sunBlack from '../../assets/icons/navbar/sunBlack.svg'
import bell from '../../assets/icons/navbar/bell.svg'
import undo from '../../assets/icons/navbar/undo.svg'
const Navbar = ({setisopen}) => {
  return (
    <div className='lg:py-5 py-2 flex items-center px-3 lg:px-7 border-b border-[var(--black-10)] justify-between'>
      {/* =-= Left side -=-= */}
      <div className='flex lg:gap-6 items-center gap-2.5'>
        <div className='cursor-pointer w-3 lg:w-fit lg:static' onClick={()=>setisopen(true)}><img src={slide} alt="" /></div>
        <div className='cursor-pointer w-3 lg:w-fit '><img src={star} alt="" /></div>

        <p className='text-[var(--black-40)] text-[10px]'>Dashboards <span className='lg:mx-3 '>/</span> <span className='text-black'>Default</span></p>
      </div>



      {/* =-= Right side -=-= */}
      <div className='flex gap-4 items-center w-50 lg:ml-0 ml-4'>
        <div className="relative lg:w-42 w-35">

          <span className=" inset-y-0 left-0 flex absolute items-center pl-2">
            <img src={search} alt="star" className="w-4 h-4" />
          </span>
          <input
            type="text"
            className="pl-8  py-1 bg-[var(--black-50)] border-none outline-none w-full rounded-lg text-[var(--black-20)] pr-8"
            placeholder="Search"
          />
          <span className="inset-y-0 right-0 flex absolute items-center pr-3">
            <img src={searchShortcut} alt="star" className="w-4 h-4" />
          </span>
        </div>
        <div className='cursor-pointer'><img src={sunBlack} alt="sunBlack" /></div>
        <div className='cursor-pointer'><img src={undo} alt="undo" /></div>
        <div className='cursor-pointer'><img src={bell} alt="bell" /></div>
        <div className='cursor-pointer'><img src={slide} alt="slide" /></div>

      </div>
    </div>
  )
}

export default Navbar