import clsx from 'clsx'
import { FC } from 'react'

import { ICON_SIZES } from '@/constants'
import { IIconProps } from '@/model/dataModel'

const BaseIcon: FC<IIconProps> = ({ size = 'md', children, className, style }) => {
  return (
    <span className={clsx('inline-flex items-center justify-center', className, ICON_SIZES[size])} style={style}>
      {children}
    </span>
  )
}

export default BaseIcon
