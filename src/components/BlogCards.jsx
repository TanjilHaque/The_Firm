import React from 'react'
import Button from './Button'

const BlogCards = ({ image, avatar, name, date }) => {
    return (
        <div className='blogCardContainer px-[10px] bg-white-color pt-[10px] pb-[30px] shadow-2xl'>
            <div>
                <img className='rounded-[15px] drop-shadow-xl object-cover' src={image} alt="Image" />
            </div>
            <h2 className='font-bold font-nunito text-[24px] text-start mt-[30px] ml-[11px]'>
                Lorem ipsum is
            </h2>
            <p className='ml-[11px] font-lora font-normal text-[17px] text-black-color leading-[176%] tracking-[2%] pt-[10px] pb-[30px]'>
                Lorem Ipsum is simply  text of
                the printing and type setting industry.
                make a type specimen.
            </p>
            <div className='w-[319px] h-[1px] bg-[#fdfdfd]'>

            </div>
            <div className='flex justify-between items-center ml-[11px]'>
                <div className='flex items-center gap-[7px]'>
                    <img className='rounded-full object-cover size-[30px]' src={avatar} alt="" />
                    <h4>{name}</h4>
                </div>
                <div className='font-nunito text-[10px] font-normal text-[#B0B0B0]'>
                    {date}
                </div>
            </div>
            <div className='text-center mt-[25px] mb-[30px]'>
                <Button title={"Read More"} bg={"bg-black-color"}></Button>
            </div>
        </div>
    )
}

export default BlogCards