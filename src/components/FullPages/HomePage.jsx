import React from 'react'
import Loading from '../../pages/Header'
import AboutUs from '../../pages/AboutUs'
import Join from '../../pages/Join'
import SecondService from '../About/SecondService'
import PlumbingComponent from '../About/PlumbingContent'


const HomePage = () => {
  return (
    <>
    <Loading />
    <AboutUs />
    <Join />
    <SecondService />
    <PlumbingComponent />
    </>
  )
}

export default HomePage