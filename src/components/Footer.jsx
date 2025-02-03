import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
const Footer = () => {
    const menutItems = [
        {
            id: 1,
            title: 'Home'
        },
        {
            id: 2,
            title: 'Solutions'
        },
        {
            id: 3,
            title: 'Cases'
        },
        {
            id: 4,
            title: 'About Us'
        },
        {
            id: 5,
            title: 'Blog'
        },
        {
            id: 6,
            title: 'Contact Us'
        },
    ]
    return (
        <div className='pt-[320px] flex flex-col justify-center items-center gap-[60px]'>
            <div>
                <img src="./src/assets/Logo.png" alt="Logo" />
            </div>
            <div>
                <ul className='flex gap-[45px]'>
                    {menutItems.map(
                        (menuItem) => {
                            return (
                                <li className='font-[nunito] text-black-color text-[18px] font-bold bottom-line'>
                                    <a href="#">{menuItem.title}</a>
                                </li>
                            )
                        }
                    )}
                </ul>
                
            </div>
            <div>
            <ul className='text-[20px] duration-300 flex justify-center items-center gap-[44px]'>
                    <li className='iconsItem'><FaFacebookF /></li>
                    <li className='iconsItem'><FaTwitter /></li>
                    <li className='iconsItem'><FaYoutube /></li>
                    <li className='iconsItem'><FaLinkedinIn /></li>
                    <li className='iconsItem'><FaPinterestP /></li>

                </ul>
            </div>
            <div className='mb-[44px] font-nunito font-normal text-[12px] leading-[133.45%] tracking-[26%] text-[#A5A5A5]'>
                Copyrights ©2020 Thefirm. All Right Reserved
            </div>

        </div>
        
    )
}

export default Footer