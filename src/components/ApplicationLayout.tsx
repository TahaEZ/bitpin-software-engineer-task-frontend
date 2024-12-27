import { ActionIcon, AppShell, useComputedColorScheme, useMantineColorScheme } from '@mantine/core'
import { FC } from 'react'

import { IProps } from '@/model/dataModel'

import { IconMoon, IconSun } from './icon'

const ApplicationLayout: FC<IProps> = ({ children }) => {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme()

  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header className="flex items-center justify-end px-4">
        {computedColorScheme === 'dark' && (
          <ActionIcon onClick={() => setColorScheme('light')} size="lg" variant="default">
            <IconSun size="sm" />
          </ActionIcon>
        )}
        {computedColorScheme === 'light' && (
          <ActionIcon onClick={() => setColorScheme('dark')} size="lg" variant="default">
            <IconMoon size="sm" />
          </ActionIcon>
        )}
      </AppShell.Header>
      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  )
}

export default ApplicationLayout
