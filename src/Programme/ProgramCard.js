import React from 'react'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
const ProgramCard = () => {
  return (
      <div className='programcard'>
          <h4>On Campus Program</h4>
          <h2>Course Title</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ratione porro placeat eveniet, recusandae ullam! Ab </p>
          <div className="programcard_details">
              <div className="row">
                  <p><AccessTimeIcon></AccessTimeIcon> 2 month's</p>
                  <p><CalendarMonthIcon></CalendarMonthIcon> Full time</p>
              </div>
              <div className="row">
                  <p><LocationOnIcon></LocationOnIcon> Starts From</p>
                  <p><WorkspacePremiumIcon></WorkspacePremiumIcon>12th pass out</p>
              </div>
          </div>
      </div>
  )
}

export default ProgramCard