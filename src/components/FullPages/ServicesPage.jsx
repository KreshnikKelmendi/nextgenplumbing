import React from 'react'
import ServicesFeature from '../services/ServicesFeature'
import Join from '../../pages/Join'
import HeatingServices from '../services/HeatingServices'
import ServiceFeature2 from '../services/ServiceFeature2'
import Locations from '../services/Locations'

const ServicesPage = () => {
  return (
    <>
    <Join />
    <ServicesFeature />
    <HeatingServices />
    <ServiceFeature2 />
    <Locations />
    </>
  )
}

export default ServicesPage