import { Container, Divider, Stack, styled, Typography, useMediaQuery } from '@mui/material'
import RangeSelect from './RangeSelect'

interface ContainerType {
  type: 'chart' | 'data'
  title: string
  px: number
  py: number
  children: React.ReactNode
}

const ChartContainer = styled(Container)(({ theme }) => {
  const { palette } = theme.vars || theme

  return {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 calc(50% - 20px)',
    backgroundColor: palette.background.paper,
    border: `1px solid ${palette.secondary.dark}`,
    borderRadius: '12px'
  }
})

const DataContainer = styled(Container)(({ theme }) => {
  const { palette } = theme.vars || theme
  const isDesktop = useMediaQuery('(max-width:1024px)')

  return {
    display: 'flex',
    flex: isDesktop ? '1 1 calc(50% - 30px)' : '1 1 100%',
    borderRadius: '12px',
    margin: 0,
    width: '100%',
    backgroundColor: palette.background.paper,
    border: `1px solid ${palette.secondary.dark}`,
    justifyContent: 'space-between'
  }
})

export default function RoundedContainer({ type, title, px = 2, py = 2, children, ...props }: Partial<ContainerType>) {
  return (
    <>
      {type === 'chart' ? (
        <ChartContainer>
          <Stack direction={'row'} sx={{ justifyContent: 'space-between' }}>
            <Typography variant='subtitle1' sx={{ color: 'text.primary', px: 2, py: 2 }}>
              {title}
            </Typography>
            <RangeSelect />
          </Stack>
          <Divider />
          <Stack sx={{ px: 2, py: 2 }}>{children}</Stack>
        </ChartContainer>
      ) : (
        <DataContainer sx={{ px: px, py: py }} {...props}>
          {children}
        </DataContainer>
      )}
    </>
  )
}
