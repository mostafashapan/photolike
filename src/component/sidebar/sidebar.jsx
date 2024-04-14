import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Outlet, Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import { MdOutlineDesktopMac } from "react-icons/md";
import { MdVideogameAsset } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { IoWatchSharp } from "react-icons/io5";
import { GrMemory } from "react-icons/gr";
import { PiTelevisionDuotone } from "react-icons/pi";
import { RiSpeakerFill } from "react-icons/ri";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";

export default function Sidebar() {



  return (

//           < div class="container">
//             <div className="sidebar">
//                                 <div id="Category_Card">
                     
//                     <link  to="/"  id="comp">    </link><span > <MdOutlineDesktopMac /></span><span>computers</span><i> </i> 
//                     <link  to="/" id="app">      </link><span >  <MdOutlineDesktopMac /></span><span>apple computers</span><i> <MdOutlineKeyboardArrowRight /></i> 
//                     <link  to="/" id="lap">      </link><span ><FaLaptopCode /></span><span>laptops</span><i> </i> 
//                     <link  to="/" id="friends">  </link><span ><MdAccountCircle /></span><span>Friends</span><MdOutlineKeyboardArrowRight /> 
//                     <link  to="/" id="compn">    </link> <span ><GrMemory /></span><span>computer components</span><MdOutlineKeyboardArrowRight /> 
//                     <link  to="/" id="acc">      </link> <span ><RiSpeakerFill /></span><span>accessories</span><i> <MdOutlineKeyboardArrowRight /></i> 
//                     <link  to="/" id="cellp">    </link> <span ><IoPhonePortraitOutline /></span><span>cell phones</span><i><MdOutlineKeyboardArrowRight />  </i> 
//                     <link  to="/" id="telve">    </link> <span ><PiTelevisionDuotone /></span><span>tv&videos</span><i> <MdOutlineKeyboardArrowRight /></i> 
//                     <link  to="/"   >           </link>  <span ><MdVideogameAsset /></span><span>Gameconsoles</span><i><MdOutlineKeyboardArrowRight /></i> 
//                     <link  to="/"  id="wat">     </link> <span ><IoWatchSharp /></span><span>watches</span><i> <MdOutlineKeyboardArrowRight /></i>
//                 </div>


               
// </div>
// </div>


<>
<nav>
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/blogs">Blogs</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
  </ul>
</nav>

<Outlet />
    </>
  )
}
