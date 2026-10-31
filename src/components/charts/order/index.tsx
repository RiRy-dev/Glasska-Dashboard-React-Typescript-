import React from 'react'
import ReactApexChart from 'react-apexcharts'
import './styles.css'

const OrderBarChart = () => {
  const [state, setState] = React.useState({
    series: [
      {
        name: 'Overdue',
        data: [20, 16, 5, 10, 14, 5, 6, 12, 7, 16, 20, 16, 0, 10, 14, 5, 6, 12, 7, 16, 6, 12, 7, 16, 20]
      },
      {
        name: 'Completed',
        data: [16, 23, 20, 8, 13, 27, 16, 23, 20, 8, 13, 27, 0, 23, 20, 8, 13, 27, 16, 23, 20, 8, 13, 27, 10]
      },
      {
        name: 'Total Task',
        data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14, 0, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14, 18]
      }
    ],
    options: {
      chart: {
        type: 'bar',
        height: 350,
        stacked: true,
        toolbar: {
          show: false
        },
        zoom: {
          enabled: true
        }
      },
      colors: ['#28C5EE', '#47AF2A', '#D0C094'],
      responsive: [
        {
          breakpoint: 1024,
          options: {
            chart: {
              height: 700
            },
            plotOptions: {
              bar: {
                horizontal: true
              }
            }
          }
        }
      ],
      grid: { borderColor: 'transparent' },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius: 10,
          borderRadiusApplication: 'end', // 'around', 'end'
          dataLabels: {
            total: {
              enabled: true,
              style: {
                fontSize: '13px',
                fontWeight: 900
              }
            }
          }
        }
      },
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
          '',
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ]
      },
      yaxis: {
        labels: {
          formatter: function (val) {
            return val
          }
        },
        max: 80
      },
      legend: {
        show: false
      },
      fill: {
        opacity: 1
      }
    }
  })

  return (
    <div>
      <div id='orderbarchart'>
        <ReactApexChart options={state.options} series={state.series} type='bar' height={350} />
      </div>
    </div>
  )
}

export default OrderBarChart
