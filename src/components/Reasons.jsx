import React from 'react'

const Reasons = ({title}) => {
  return (
    <div className='py-[12px] px-[14px] bg-white-color rounded-[5px] font-bold text-[18px]
                    tracking-[5%] text-[#c4c4c4] btnTail cursor-pointer'>
                    {title? title:"no title"}
    </div>
  )
}

export default Reasons