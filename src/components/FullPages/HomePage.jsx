import React from 'react'
import Loading from '../../pages/Header'
import AboutUs from '../../pages/AboutUs'
import Join from '../../pages/Join'
import SecondService from '../About/SecondService'
import Testimonials from '../testimonials/Testimonials'
import Partners from '../contact/Partners'


const HomePage = () => {
  return (
    <>
    <Loading />
    <AboutUs />
    <Join />
    <SecondService />
    <Testimonials />
    <Partners />
    </>
  )
}

export default HomePage