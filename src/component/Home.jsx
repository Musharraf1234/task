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
function Home() {
  const [side , setside] = useState(false)

  const handlecliock = () =>{
    setside(!side)
  }
  console.log(side);
  
  return (
    <div class="d-flex main h-100">
{side  &&   <div className="sidenav ">
   <div className='logodiv' onClick={handlecliock}>
    <img src={log} alt="" height={100}/>
    </div>
    <div class="d-flex">

<ul>
  <li><AiOutlineLayout />  Dashboard</li>
  <li><FaRegFolder />Classes</li>
  <li> <RiBook3Line />Resources</li>
  <li><MdOutlineCalendarToday  />Learning Plan</li>
  <li><MdChatBubbleOutline />Chat</li>
  <li><IoSettingsOutline />Settings</li>
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
</div>}
    <div className='main-container'>
    <nav className='Hoemnav'>
      <div className='logodiv' onClick={handlecliock}>
    <img src={log} alt="" height={100}/>
    </div>
    <div className='nav-li '>
      <h1 class="welcome-message">Dashboard</h1>
    <p class="encouragement">20 Sep 2019, Friday </p>
    </div>
    </nav>
    <div className='welcomeperson'>
        <div>
        <h1 class="welcome-message">Welcome Back Anna!</h1>
        <p class="progresstext">You've learned 80% of your goal this week! <br /> keep it up and improve your result!</p>
        </div>
   <img className='personlogo' src={personlog} alt="" />
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
    <div className="profile">
    <nav className="d-flex">
        <h2>Logout</h2>
        <IoMdLogOut />
    </nav>

    <div className="profile-circle">
        <div className="circle">
            <img src={profileicon} alt="Profile Icon" />
        </div>
    </div>

    <div className="username">
        <h4>Arshiya Nagori</h4>
        <p>Student</p>
    </div>

    <div className="language-profile">
        <div className="language">
            <div className="levels">
                <h6>B2</h6>
            </div>
            <div className='text'>
                <h4>English</h4>
                <div className="description">High intermediate</div>
            </div>
            <div className="progresse">
                <div className="progress-bars"></div>
            </div>
        </div>
        <div className="language">
            <div className="levels">
                <h6>C1</h6>
            </div>
            <div className='text'>
                <h4>Spanish</h4>
                <div className="description">High intermediate</div>
            </div>
            <div className="progresse">
                <div className="progress-bars"></div>
            </div>
        </div>
        <div className="reminders">
          
        </div>

    </div>

    <div className="reminder">
    <nav className="d-flex">
        <h2>Reminders</h2>
        <IoIosNotificationsOutline />
    </nav>
    <div class="language mt-5">
            <div className="levels">
               <MdOutlineMail/>
            </div>
            <div className='text'>
                <h4>Spanish</h4>
                <div className="description">High intermediate</div>
            </div>
            <div className="progresse">
                <div className="progress-bars"></div>
            </div>
        </div>
        <div class="language mt-5">
            <div className="levels">
               <MdOutlineMail/>
            </div>
            <div className='text'>
                <h4>Spanish</h4>
                <div className="description">High intermediate</div>
            </div>
            <div className="progresse">
                <div className="progress-bars"></div>
            </div>
        </div>
        <div class="language mt-5">
            <div className="levels">
               <MdOutlineMail/>
            </div>
            <div className='text'>
                <h4>Spanish</h4>
                <div className="description">High intermediate</div>
            </div>
            <div className="progresse">
                <div className="progress-bars"></div>
            </div>
        </div>
        <div class="language mt-5">
            <div className="levels">
               <MdOutlineMail/>
            </div>
            <div className='text'>
                <h4>Spanish</h4>
                <div className="description">High intermediate</div>
            </div>
            <div className="progresse">
                <div className="progress-bars"></div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default Home