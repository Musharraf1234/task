import React, { useState } from 'react'
import personlog from '../img/ezgif.com-webp-to-png-converter-removebg-Photoroom.png'
import Courses from './Courses'
import TimeSpentChart from './TimeSpentChar'
import { IoMdLogOut } from "react-icons/io";
import profileicon from '../img/people_16086030.png'
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineMail } from "react-icons/md";
import log from '../img/logo.png'
import { CiFolderOn } from "react-icons/ci";
import { RiBook3Line } from "react-icons/ri";
import { MdOutlineCalendarToday } from "react-icons/md";
import { MdChatBubbleOutline } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegFolder } from "react-icons/fa6";
import { AiOutlineLayout } from "react-icons/ai";
import FOlderimg from '../img/folder.png'
import { Link } from 'react-router-dom';

function Deshboard() {

  
  return (
<>
<div className='main-container'>
    <nav className='Hoemnav'>

    <div className='nav-li '>
      <h1 class="welcome-message">Dashboard</h1>
    <p class="encouragement">15 Aug 2024, Thursday </p>
    </div>
    </nav>
    <div className='welcomeperson'>
        <div className='welcome-msg'>
        <h1 class="welcome-message">Welcome Back User!</h1>
        <p class="progresstext">You've learned 80% of your goal this week! <br /> keep it up and improve your result!</p>
        </div>
        <div className='personlogo-div'>
   <img className='personlogo' src={personlog} alt="" />
   </div>
    </div>
    <section className='reportsection'>
     <Courses/>
    <TimeSpentChart/>
    </section>
    <section className='Coursessec'>
        <div className='Coursessec-heading'>
        <h4>Your Courses</h4>
        <h5>More</h5>
        </div>

            <div class="containere mt-1 d-flex justify-content-between w-100 p-3">
        <div class="custom-box">
            <div class="left-part">
                <div class="level">B2</div>
                <div class="ml-2">
                <div class="text-small">Business English</div>
                <div class="text-large">Grammar</div>
                </div>
            </div>
            <div class="right-part">
                <span>&#8594;</span>
            </div>
        </div>
        <div class="custom-box">
            <div class="left-part">
                <div class="level">B2</div>
                <div class="ml-2">
                <div class="text-small">Business English</div>
                <div class="text-large">Grammar</div>
                </div>
            </div>
            <div class="right-part">
                <span>&#8594;</span>
            </div>
        </div>
        <div class="custom-box">
            <div class="left-part">
                <div class="level">B2</div>
                <div class="ml-2">
                <div class="text-small">Business English</div>
                <div class="text-large">Grammar</div>
                </div>
            </div>
            <div class="right-part">
                <span>&#8594;</span>
            </div>
        </div>
    </div>
    </section>
    </div>
</>
  )
}

export default Deshboard