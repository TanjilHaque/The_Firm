import React from 'react'
import SectionTitle from './SectionTitle'
import Reasons from './Reasons'
import Container from './Container'
import Button from './Button'

const ChooseUs = () => {
    return (

        <div className='bg-[#F2F2F2] py-[96px]'>
            <Container>
                <div className='pb-[97px] flex flex-col justify-center items-center'>
                    <div className='z-10'>
                        <SectionTitle firstPart={"Reason to Choose"} lastWord={"Us"}></SectionTitle>
                    </div>
                    <p className='font-lora text-[18px] leading-[176%] tracking-[2%]
                            max-w-[864px] text-center mt-[28px] mb-[50px]'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not
                        only five centuries,
                    </p>
                    <ul className='flex justify-center items-center gap-[76px] z-10'>
                        <Reasons title={"Market Research"}></Reasons>
                        <Reasons title={"Branding"}></Reasons>
                        <Reasons title={"Reporting"}></Reasons>
                        <Reasons title={"Data Analysis"}></Reasons>
                    </ul>
                </div>
                <div className='branding py-[65px] px-[45px] bg-white-color rounded-[30px] flex items-center gap-[60px]'>
                    <picture>
                        <img src="./src/assets/Brand.png" alt="Brand" />
                    </picture>
                    <div>
                        <div className='flex items-center'>
                            <img src="./src/assets/BrandingMic.png" alt="BrandMic" />
                            <div className='z-20'>
                                <SectionTitle lastWord={"Branding"}></SectionTitle>
                            </div>
                        </div>
                        <p className='
                        max-w-[505px] 
                        font-lora text-[18px] leading-[176%] tracking-[2%] 
                        mt-[17px] mb-[42px] ml-[83px] font-normal text-black-color text-left
                                      '>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry standard dummy text
                            ever since the 1500s, when an unknown printer took a galley of
                            type
                        </p>
                        <div className='ml-[83px]'>
                            <Button bg={"bg-black-color"} title={"Read More"}></Button>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ChooseUs