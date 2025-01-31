import { useState } from "react";

const images = [
    "https://blog.nottinghamnerds.com/content/images/2021/04/firefox-logo-horizontal-lockup-1.png",
    "https://cdn.freebiesupply.com/images/large/2x/google-logo-transparent.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHiuWy9kdhctT4Yv-S8Qd05SbVnltU98oONw&s",
    "https://freelogopng.com/images/all_img/1656737178fiverr-logo-png.png",
    "https://cdn.freebiesupply.com/logos/large/2x/upwork-logo-png-transparent.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrcqPxv14lZajcsc15iaykgYS9b4_d296-YA&s",
    "https://e7.pngegg.com/pngimages/328/113/png-clipart-freelancer-freelance-marketplace-logo-job-graphic-designer-design-web-design-text.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgS0IxquKvMSPtIH1lRTPotJWkOBLT_KQ5g&s",
    "https://freelogopng.com/images/all_img/1681142315open-ai-logo.png"
];

const Slick = () => {
    const [index, setIndex] = useState(0);
    const positions = [0, -33.333, -66.667,0, -33.333, -66.667,0, -33.333, -66.667];

    const nextSlide = () => {
        setIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <div className="relative flex justify-center items-center">
            <button
                onClick={prevSlide}
                className="absolute -left-12 top-3 z-10 bg-[#f6f6f6] text-black-color w-[50px] h-[50px] rounded-[50%] cursor-pointer hover:bg-yellow-color"
            >
                &#10094;
            </button>
            <div className="relative mx-auto flex justify-between items-center pb-[107px] overflow-hidden">

                <div
                    className="flex transition-transform duration-300 "
                    style={{ transform: `translateX(${positions[index]}%)` }}
                >
                    {[...images, ...images].map((src, i) => (
                        <img
                            key={i}
                            src={src}
                            alt={`Slide ${i + 1}`}
                            className="max-w-[168px] h-[76px] object-contain mx-11 px-6 duration-300 grayscale hover:grayscale-0 bg-[#f6f6f6] hover:bg-[#fbfbfb] hover:shadow-xl rounded-[20px]"
                        />
                    ))}
                </div>

            </div>
            <button
                onClick={nextSlide}
                className="absolute -right-12 top-3 z-15 bg-[#f6f6f6] text-black-color w-[50px] h-[50px] rounded-[50%] cursor-pointer duration-300 hover:bg-yellow-color"
            >
                &#10095;
            </button>
        </div>
    );
};

export default Slick;