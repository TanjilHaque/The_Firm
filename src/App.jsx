import React from 'react'
import Header from './components/Header'
import Container from './components/Container'
import Banner from './components/Banner'
import SectionTitle from './components/SectionTitle'
import Slick from './components/Slick'
import Frustration from './components/Frustration'
import PerfectSolution from './components/PerfectSolution'
import ChooseUs from './components/ChooseUs'
import Research from './components/Research'
import Blogs from './components/Blogs'
import Testimonial from './components/Testimonial'
import GetInTouch from './components/GetInTouch'
import Footer from './components/Footer'



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
      <PerfectSolution></PerfectSolution>
      <ChooseUs></ChooseUs>
      <Research></Research>
      <Blogs></Blogs>
      <Testimonial></Testimonial>
      <section className='flex flex-col justify-center items-center'>
        <GetInTouch></GetInTouch>
      </section>
      <Footer></Footer>

    </>
  )
}

export default App