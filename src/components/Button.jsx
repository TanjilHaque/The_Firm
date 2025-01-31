import React from 'react'

const Button = ({title="Get in touch", bg="bg-yellow-color", text="text-white-color"}) => {
  return (
    <button className={`${bg} ${text} px-[21px] py-[12px] rounded-[5px] text-[18px] font-bold cursor-pointer font-[nunito] duration-300 hover:bg-amber-500`}>{title}</button>
  )
}

export default Button