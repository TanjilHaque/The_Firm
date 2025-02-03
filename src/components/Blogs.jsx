import React from 'react'
import BlogCards from './BlogCards'
import Container from './Container'
import SectionTitle from './SectionTitle'
import Button from './Button'

const Blogs = () => {
    return (
        <div className='bg-[#F2F2F2] py-[82px]'>
            <Container>
                <div className='mb-[64px] flex justify-center items-center'>
                    <div className='z-10 relative'>
                        <SectionTitle firstPart={"Our"} lastWord={"Blog"}></SectionTitle>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-[72px]'>
                    <BlogCards avatar={"./src/assets/Man1.png"} name={"Alex Jones"}
                        date={"28,Aug 2020, 07:48:00"} image={"./src/assets/SliderImage1.jpg"}
                    ></BlogCards>
                    <BlogCards avatar={"./src/assets/Man2.png"} name={"Tom Hanks"}
                        date={"23,Jan 2021, 03:44:00"} image={"./src/assets/SliderImage2.jpg"}
                    ></BlogCards>
                    <BlogCards avatar={"./src/assets/Man3.png"} name={"Dustin Jones"}
                        date={"14,Feb 2023, 09:23:00"} image={"./src/assets/SliderImage4.jpg"}
                    ></BlogCards>
                </div>
                <div className='mt-[34px] text-center'>
                    <Button title={"View More"}></Button>
                </div>
            </Container>
        </div>
    )
}

export default Blogs