import React from 'react'
import ReactApexChart from 'react-apexcharts'
import './styles.css'

const SalesBarChart = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: 'Actual',
        data: [
          {
            x: 'Mar',
            y: 40,
            goals: [
              {
                name: 'Expected',
                value: 40,
                strokeHeight: 10,
                strokeColor: '#28C5EE'
              }
            ]
          },
          {
            x: 'Apr',
            y: 20,
            goals: [
              {
                name: 'Expected',
                value: 20,
                strokeHeight: 5,
                strokeColor: '#28C5EE'
              }
            ]
          }
        ]
      }
    ],
    options: {
      chart: {
        width: '100%',
        height: 80,
        type: 'bar',
        toolbar: { show: false }
      },
      yaxis: {
        max: 80
      },
      title: {
        text: 'Last synced 20 minutes ago',
        align: 'left',
        style: {
          fontSize: '14px',
          fontFamily: 'Inter',
          fontWeight: '400',
          color: '#475367'
        }
      },
      plotOptions: {
        bar: {
          columnWidth: '60%'
        }
      },
      grid: {
        borderColor: '#D0D5DD',
        strokeDashArray: 7
      },
      colors: ['#28C5EE90'],
      dataLabels: {
        enabled: false
      }
    }
  })

  return (
    <div>
      <div id='chart'>
        <ReactApexChart options={state.options} series={state.series} type='bar' height={285} />
      </div>
    </div>
  )
}

export default SalesBarChart
