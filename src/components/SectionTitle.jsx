import React from 'react'
import Container from './Container'

const SectionTitle = ({ firstPart, lastWord }) => {
    return (

            <div className='text-[44px] font-black font-[nunito] tracking-[2%] leading-[133.4%] flex gap-4'>
                <h2>{firstPart}</h2>
                <span className='bottom-line-title'>{lastWord}</span>
            </div>

    )
}

export default SectionTitle