import React from 'react'
import { About } from '../home/about/About'
import { Branding } from '../home/header/homes/Branding'
import { Home } from '../home/header/homes/Home'
import { Skill } from '../home/header/homes/Skill'
import { WrapperOne } from '../home/header/homes/WrapperOne'
import { Service } from '../home/services/Service'
import { Wrapper } from '../home/Wrapper'
import { City } from '../home/header/homes/City'
import { Link } from 'react-router-dom'

export const HomePage = () => {
  return (
    <>
      <div id="mySidenav" class="sidenav">
        <Link to='/pages' id = "pages"> Pages </Link>
        <Link to='/blog' id = "blog"> Blog </Link>
        <Link to='/portfolio' id = "portfolio"> Portfolio </Link>
        <Link to='/contact' id = "contact"> Contact </Link>
      </div>
      <Home />
      <Branding />
      <About />
      <Service />
      <Wrapper />
      <Skill />
      <City />
      <WrapperOne />
    </>
  )
}
