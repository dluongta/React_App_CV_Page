import React from 'react'
import { About } from '../home/about/About'
import { Branding } from '../home/header/homes/Branding'
import { Home } from '../home/header/homes/Home'
import { Skill } from '../home/header/homes/Skill'
import { WrapperOne } from '../home/header/homes/WrapperOne'
import { Service } from '../home/services/Service'
import { Wrapper } from '../home/Wrapper'

export const HomePage = () => {
  return (
    <>
    <Home/>
    <Branding/>
    <About/>
    <Service/>
    <Wrapper/>
    <Skill/>
    <WrapperOne/>
    </>
  )
}
