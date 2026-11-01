import { useState } from 'react'
import { AppIcon, ColorModeToggle } from '@/core'
import { Box, IconButton, Stack } from '@mui/material'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import CloseIcon from '@mui/icons-material/Close'
import Sidebar from '../sidebar'

export default function Header() {
  const [visible, setVisible] = useState(false)

  return (
    <Stack>
      <Stack
        direction='row'
        sx={{
          justifyContent: 'space-between',
          position: 'sticky',
          backgroundColor: 'background.paper',
          borderBottom: '1px solid',
          borderColor: 'divider',
          paddingInline: '20px'
        }}
      >
        <AppIcon name='logoSmall' width='100%' height='100%' />

        <Stack direction={'row'} sx={{ alignItems: 'center' }}>
          <ColorModeToggle />
          <IconButton
            onClick={() => {
              setVisible(prev => !prev)
            }}
          >
            {visible ? <CloseIcon /> : <MenuOpenIcon />}
          </IconButton>
        </Stack>
      </Stack>
      {visible && (
        <Box sx={{ position: 'absolute', top: '69px', left: 0, width: '100%' }}>
          <Sidebar />
        </Box>
      )}
    </Stack>
  )
}
