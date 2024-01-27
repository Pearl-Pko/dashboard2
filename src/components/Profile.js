import React from 'react'
import {ReactComponent as ArrowDownSvg} from "../assests/svg/Arrow down.svg"
import UserImage from "../assests/png/User.png"
import { Avatar } from '@mui/material'

export const Profile = () => {
  return (
    <div className='flex items-center gap-2 rounded-full border p-1 border-textSecondary'>
        <Avatar src={UserImage}/>
        <div>
            <p className='font-semibold'>Justin Bergson</p>
            <p className='text-textSecondary'>Justin@gmail.com</p>
        </div>
        <div>
            <ArrowDownSvg/>
        </div>
    </div>
  )
}

export default Profile;
