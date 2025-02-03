import React from 'react'
import ContactForm from './ContactForm'

const GetInTouch = () => {
  return (
    <div className='getInTouchContainerParent'>
        <picture>
            <img src="./src/assets/Map.png" alt="Map" />
        </picture>
        <div className="getInTouchContainer absolute">
            <ContactForm></ContactForm>
        </div>
    </div>
  )
}

export default GetInTouch