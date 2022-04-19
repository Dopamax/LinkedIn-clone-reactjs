import React from 'react'
import LeftDiv from '../LeftDiv/LeftDiv'
import MiddleDiv from '../MiddleDiv/MiddleDiv'
import RightDiv from '../RightDiv/RightDiv'
import "./Body.css"
export default function Body() {
  return (
    <div>
        <div className='body'>
            <LeftDiv />
            <MiddleDiv />
            <RightDiv />
        </div>
      
       
    </div>
  )
}
