import React, { useState } from 'react'
import { RiBook3Line } from "react-icons/ri";
import { MdOutlineCalendarToday } from "react-icons/md";
import { MdChatBubbleOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegFolder } from "react-icons/fa6";
import { AiOutlineLayout } from "react-icons/ai";
import FOlderimg from '../img/folder.png'
import { Link } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
function Sildenav({handleclick}) {
  return (
  <>
   <div className="sidenav ">
   <div className='logodiv' onClick={handleclick}>
   <IoMdClose size={35} />
    </div>
    <div class="d-flex">

<ul>

<Link className='LinkRouter' to="/">  <li><AiOutlineLayout size={30} />  Dashboard</li> </Link>
<Link className='LinkRouter' to="/classes"> <li><FaRegFolder size={30} />Classes</li> </Link>
<Link className='LinkRouter' to="/resources"> <li> <RiBook3Line size={30} />Resources</li> </Link>
<Link className='LinkRouter' to="/Learningplan"><li><MdOutlineCalendarToday size={30} />Learning Plan</li></Link>  
<Link className='LinkRouter'to="/Chat"><li><MdChatBubbleOutline size={30} />Chat</li> </Link> 
<Link className='LinkRouter' to="/setting"> <li><IoSettingsOutline size={30} />Settings</li> </Link>
</ul>
</div>
<div class="container">
    <div class="icon">
      <img src={FOlderimg} alt="Folder icon" />
    </div>
    <div class="text">
      Upgrade to PRO for <br /> more resources.
    </div>
    <button class="upgrade-button">Upgrade</button>
  </div>
</div>
  </>
  )
}

export default Sildenav