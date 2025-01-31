import React from 'react'
import logo from '../assets/Logo.png'
import Button from './Button'
import Container from './Container'

const Header = () => {

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
    <Container>
      <div className='mt-[24px] flex justify-between items-center'>
        <picture>
          <img src={logo} alt={logo} />
        </picture>
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
        <Button title={"Get in touch"}></Button>
      </div>
    </Container>

  )
}

export default Header