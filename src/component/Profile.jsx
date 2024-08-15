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
import Deshboard from './Deshboard';

function Profile() {
  return (
   <>
       <div className="profile">
    <nav className="d-flex">
        <h2>Logout</h2>
        <IoMdLogOut size={25} />
    </nav>

    <div className="profile-circle">
        <div className="circle">
            <img src={profileicon} alt="Profile Icon" />
        </div>
    </div>

    <div className="username">
        <h4>User </h4>
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
    <div class="language mt-4">
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
        <div class="language mt-4">
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
        <div class="language mt-4">
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
        <div class="language mt-4">
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
   </>
  )
}

export default Profile