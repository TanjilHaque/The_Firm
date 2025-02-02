import React from 'react'
import Header from './components/Header'
import Container from './components/Container'
import Banner from './components/Banner'
import SectionTitle from './components/SectionTitle'
import Slick from './components/Slick'
import Frustration from './components/Frustration'



const App = () => {
  return (
    <>

      <Header></Header>
      <Banner></Banner>
      <section className='pt-[100px] pb-[50px] flex justify-center items-center'>
        <div className="wrapper">
          <SectionTitle firstPart="Our" lastWord="Partner"></SectionTitle>
        </div>
      </section>
      <Container>
        <Slick></Slick>
      </Container>

      <Frustration></Frustration>

    </>
  )
}

export default App