import React, { useContext } from 'react'
import Navbar from './Navbar'
import AdminContext from '../AdminContext'
import Card from './Card'

function Home() {
    const {jobs} = useContext(AdminContext)
  return (
    <div>
        <Navbar/>
        <Card/>

       
    </div>
  )
}

export default Home