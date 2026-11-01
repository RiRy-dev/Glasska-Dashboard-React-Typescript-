import { AppIcon } from '@/core'
import { FormControl, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { useState } from 'react'

export default function RangeSelect() {
  const [selectedValue, setSelectedValue] = useState('All Time')

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedValue(event.target.value)
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120, height: 'fit-content' }} size='small'>
      <Select
        value={selectedValue}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'Age' }}
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
        <MenuItem value='All Time'>All Time</MenuItem>
        <MenuItem value='Last Week'>Last Week</MenuItem>
        <MenuItem value='Last Month'>Last Month</MenuItem>
        <MenuItem value='Last Year'>Last Year</MenuItem>
      </Select>
    </FormControl>
  )
}
