import React, { useRef } from 'react';
import SectionTitle from './SectionTitle';
import Button from './Button';

const Research = () => {
    const imgRef = useRef(null); // Reference to the image element

    function getRandomNumber() {
        let val = Math.floor(Math.random() * 5) + 1;
        return `./src/assets/SliderImage${val}.jpg`;
    }

    function updateImage() {
        if (imgRef.current) {
            imgRef.current.src = getRandomNumber();
        }
    }

    return (
        <section className='py-[100px] px-[150px]'>
            <div className='flex flex-col justify-center items-center'>
                <SectionTitle firstPart={"Our Research & Case"} lastWord={"Studies"} />
                <p className='max-w-[864px] font-lora text-[18px] leading-[176%] tracking-[2%] mt-[28px] mb-[48px] ml-[83px] font-normal text-black-color text-center'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not
                    only five centuries.
                </p>
            </div>

            <div className='flex justify-center items-center gap-[96px]'>
                <div>
                    <h2 className='font-bold font-nunito text-[30px] text-black-color'>
                        Lorem Ipsum is simply
                    </h2>
                    <p className='max-w-[547px] font-lora text-[18px] leading-[176%] tracking-[2%] mt-[13px] mb-[21px] font-normal text-black-color text-left'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of
                        type Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took.
                    </p>
                    <Button title={"Read More"} />
                </div>

                <div className='relative'>
                    <button onClick={updateImage} className='absolute w-[46px] h-[38px] bg-yellow-color customSliderbtn'>{">"}</button>
                    <picture className='p-[12px] shadow-2xl rounded-[30px] w-[497px] h-[441px] bg-white-color inline-block'>
                        <img ref={imgRef} className='w-[471px] h-[417px] rounded-[25px] object-cover' src={"./src/assets/SliderImage1.jpg"} alt="Random" />
                    </picture>
                </div>
            </div>
        </section>
    );
};

export default Research;
