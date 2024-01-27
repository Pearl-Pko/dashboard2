import React from 'react'

import clsx from 'clsx';
export const CustomCard = (props) => {
  return (
    <div className={clsx('bg-white p-4 rounded-2xl border shadow-2xl-bottom', props.className)}>{props.children}</div>
  )
}

export default CustomCard;