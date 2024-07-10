import React from 'react'
import Loading from '../../pages/Header'
import AboutUs from '../../pages/AboutUs'
import Join from '../../pages/Join'
import SecondService from '../About/SecondService'

const HomePage = () => {
  return (
    <>
    <Loading />
    <AboutUs />
    <Join />
    <SecondService />
    </>
  )
}

export default HomePage