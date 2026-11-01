import { AppIcon } from '@/core'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useState } from 'react'

const Items = ['All Time', 'Last Week', 'Last Month', 'Last Year']

export default function RangeSelect() {
  const [selectedValue, setSelectedValue] = useState('All Time')

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value)
  }

  const items = Items.map(value => <MenuItem value={value}>{value}</MenuItem>)

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
      <Select
        value={selectedValue}
        onChange={handleChange}
        IconComponent={() => <AppIcon name='down' />}
        sx={{ display: 'flex', alignItems: 'center' }}
        slotProps={{
          input: {
            sx: {
              pt: 1.5, // 16px
              pb: 0.5 // 8px
            }
          }
        }}
      >
        {items}
      </Select>
    </FormControl>
  )
}
