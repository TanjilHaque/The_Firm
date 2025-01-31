import React from 'react'
import Container from './Container'
import Button from './Button'


const Banner = () => {
    return (
        <>
            <Container>
                <div className='bg-[url(./src/assets/BannerBG.png)] bg-no-repeat bg-top flex'>
                    <div className='pt-[176px] pl-[11px] pb-[152px] z-10'>
                        <h1 className='text-[48px] font-black font-[nunito] tracking-[2%] leading-[133.4%] drop-shadow-lg'>
                            Get Bussiness <br />
                            Solutions with <span className='text-[52px] font-black font-[nunito] tracking-[2%] leading-[133.4%] drop-shadow-lg'>TheFirm</span>
                        </h1>
                        <p className='pt-[28px] pb-[44px] max-w-[437px] font-[lora] text-[18px] tracking-[2%] leading-[176%] text-black-color font-normal'>
                            Lorem Ipsum is simply dummy text of the printing
                            and typesetting industry. Lorem Ipsum has been
                            the industry's standard dummy.
                        </p>
                        <Button></Button>
                    </div>
                    <div>
                        <picture>
                            <img className='-z-1 absolute top-16 left-2/3 transform -translate-x-1/2' src="./src/assets/BannerHero.png" alt="Hero Banner" />


                        </picture>
                    </div>


                </div>
            </Container>

        </>
    )
}

export default Banner