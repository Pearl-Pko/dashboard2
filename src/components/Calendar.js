import React from 'react'
import {ReactComponent as CalenderSvg} from "../assests/svg/Group.svg"
import clsx from 'clsx'

export const Calendar = (props) => {
  return (
    <div className={clsx("flex items-center gap-2", props.className)}>
        <CalenderSvg/>
        <p>November 15, 2023</p>
    </div>
  )
}

export default Calendar;
