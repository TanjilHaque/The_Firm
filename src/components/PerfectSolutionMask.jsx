import React from 'react'

const PerfectSolutionMask = ({ image, title }) => {
    return (
        <div className='
                        flex flex-col justify-center items-center
                        w-[285px] h-[352px] bg-white-color cardBorder 
                        px-[27px] shadow-2xl 

                        '>
            <picture>
                <img src={image ? image : "No image found"} alt={image} />
            </picture>
            <h2 className='mt-[30px] mb-[12px]
                            font-bold font-nunito text-[30px] tracking-[2%]          
                            '>
                {title ? title : "Card Title"}
            </h2>
            <p className='font-lora text-black-color leading-[176%]
                            tracking-[2%]'>
                Loren rasion gravida auem
                is bibenua tase

            </p>

        </div>
    )
}

export default PerfectSolutionMask