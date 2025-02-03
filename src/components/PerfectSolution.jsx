import React from 'react'
import Container from './Container'
import PerfectSolutionMask from './PerfectSolutionMask'
import SectionTitle from './SectionTitle'
import Button from './Button'

const PerfectSolution = () => {
    return (
        <Container>
            <div className='flex justify-between items-center py-[280px]'>
                <div>
                    <div className='relative'>
                        <div className='childMaskCard-1 absolute'>
                            <PerfectSolutionMask image={"./src/assets/Coaching.png"} title={"Coaching"} />
                        </div>
                        <div className='childMaskCard-2 absolute'>
                            <PerfectSolutionMask image={"./src/assets/HandShake.png"} title={"Digital Partner"} />
                        </div>
                        <div className='childMaskCard-3 absolute'>
                            <PerfectSolutionMask image={"./src/assets/Mic.png"} title={"SEO"} />
                        </div>
                    </div>
                </div>
                <div>
                    <SectionTitle firstPart={`Perfect Solution for`}></SectionTitle>
                    <SectionTitle firstPart={`Your`} lastWord={"Business"}></SectionTitle>
                    <p className='max-w-[464px] 
                    font-lora text-[18px] leading-[176%] tracking-[2%] 
                    mt-[18px] mb-[40px] font-normal text-black-color text-left'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type and scrambled it to make a type specimen book. It has
                        survived not only five centuries,
                    </p>
                    <Button title={"Read More"}></Button>
                </div>
            </div>
        </Container>
    )
}

export default PerfectSolution