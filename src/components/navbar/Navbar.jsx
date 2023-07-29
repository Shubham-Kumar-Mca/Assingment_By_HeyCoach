import React, { useEffect, useState } from 'react'
import {AiOutlineSearch} from "react-icons/ai"
import "./Navbar.css"

const Navbar = ({filteringProduct}) => {
  const [text, setText] = useState("")

  useEffect(()=>{
    filteringProduct(text)
  },[text])
  return (
    <div className='nav'>
        <div className='container'>
            <input type="text" value={text} onChange={e=>setText(e.target.value)}/>
            <AiOutlineSearch />
        </div>
    </div>
  )
}

export default Navbar