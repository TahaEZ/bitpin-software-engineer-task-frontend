import type { CSSProperties } from 'react'

import { IProps } from './IProps'

export type IIconSize = 'xs' | 'sm' | 'md' | 'lg'

export type IIconProps = {
  className?: string
  style?: CSSProperties
  size?: IIconSize
} & IProps
