import React from 'react'
import SectionTitle from './SectionTitle'
import Container from './Container'



const Frustration = () => {
    const painPoints = [
        {
            id: 1,
            problem: "Loren rasion gravida auem is bibenua tase"
        },
        {
            id: 2,
            problem: "Lorem Ipsum is simply dummy text of the."
        },
        {
            id: 3,
            problem: "Printing and typesetting industry. Lorem Ipsum"
        },
        {
            id: 4,
            problem: "When an unknown printer took a galley of type and scrambled it"
        }
    ]
    return (
        <Container>
            <div className='flex gap-[114px]'>
                <div>
                    <SectionTitle firstPart={"Frustration of"} lastWord={"Clients"}></SectionTitle>
                    <p className='max-w-[583px] font-lora text-[18px] leading-[176%] tracking-[2%] mt-[22px] mb-[26px] font-normal text-black-color text-left'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s,
                    </p>
                    <ul className='pl-[29px] flex flex-col gap-[10px] font-lora text-black-color leading-[176%] tracking-[2%]'>
                        {painPoints.map(
                            (point) => {
                                return (
                                    <div className='flex items-center gap-[10px]'>
                                        <img className='inline-block' src="./src/assets/Question.png" alt="Question" />
                                        <li key={point.id}>{point.problem}</li>
                                    </div>

                                )
                            }
                        )}
                    </ul>
                </div>
                <div className='relative'>
                        <picture>
                            <img src="./src/assets/FrustrationChart.png" alt="FrustrationChart" />
                            <img className='maskClass' src="./src/assets/FrustrationMask.png" alt="FrustrationMask" />
                        </picture>
                </div>
            </div>
        </Container>

    )
}

export default Frustration