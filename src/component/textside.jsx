import React from 'react'

function textside() {
  return (
  <>
     <div className="sidenav ">
   <div className='logodiv' onClick={handleclick}>
    <img src={log} alt="" height={100}/>
    </div>
    <div class="d-flex">

<ul>
  <li><AiOutlineLayout size={30} />  Dashboard</li>
  <li><FaRegFolder size={30} />Classes</li>
  <li> <RiBook3Line size={30} />Resources</li>
  <li><MdOutlineCalendarToday size={30} />Learning Plan</li>
  <li><MdChatBubbleOutline size={30} />Chat</li>
  <li><IoSettingsOutline size={30} />Settings</li>
</ul>
</div>
<div class="container">
    <div class="icon">
      <img src={FOlderimg} alt="Folder icon" />
    </div>
    <div class="text">
      Upgrade to PRO for <br /> more resources.
    </div>
    <Link to="/classes">    <button class="upgrade-button">Upgrade</button> </Link>
  </div>
</div>
  </>
  )
}

export default textside