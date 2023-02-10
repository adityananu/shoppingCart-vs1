import React, { useState } from 'react'
import '../App.css'

const Sidebar = () => {
const[value,setValue]=useState()
  return (
    <div className='sideBar'>
            choose formate: <select className='select' onChange={(e) => setValue(e.target.value)}>
                <option value="a-z"> from A-Z</option>
                <option value="z-a"> from Z-A</option>
            </select>
    </div>
  )
}

export default Sidebar