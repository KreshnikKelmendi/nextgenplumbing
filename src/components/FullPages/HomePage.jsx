import React from 'react'
import Loading from '../../pages/Header'
import AboutUs from '../../pages/AboutUs'
import Join from '../../pages/Join'
import SecondService from '../About/SecondService'
import Testimonials from '../testimonials/Testimonials'


const HomePage = () => {
  return (
    <>
    <Loading />
    <AboutUs />
    <Join />
    <SecondService />
    <Testimonials />
    </>
  )
}

export default HomePage