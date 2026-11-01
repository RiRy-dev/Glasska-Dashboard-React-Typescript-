import React from 'react'
import ReactApexChart from 'react-apexcharts'
import './styles.css'
import { colors } from '@mui/material'

const OrderBarChart = () => {
  const state = {
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
      dataLabels: {
        enabled: false
      },
      tooltip: {
        followCursor: true,
        arrow: false,
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          return (
            '<div class="apexchart-tooltip" >' +
            '<span class="apexchart-tooltip__item" style="--main-color:#D0C094">' +
            series[2][dataPointIndex] +
            ' total task' +
            '</span>' +
            '<span class="apexchart-tooltip__item" style="--main-color:#47AF2A">' +
            series[1][dataPointIndex] +
            ' completed' +
            '</span>' +
            '<span class="apexchart-tooltip__item" style="--main-color:#28C5EE">' +
            series[0][dataPointIndex] +
            ' overdue' +
            '</span>' +
            '<div class="custom-tooltip-arrow"></div>' +
            '</div>'
          )
        }
      },
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
          borderRadius: 8,
          borderRadiusApplication: 'end',
          dataLabels: {
            total: {
              enabled: false,
              style: {
                fontSize: '13px',
                fontWeight: 900
              }
            }
          }
        }
      },
      xaxis: {
        labels: {
          style: {
            colors: '#A1AEBC', // Sets the color for all x-axis labels
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '24px',
            letterSpacing: '0%',
            textAlign: 'center'
          }
        },
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
          formatter: function (val: number) {
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
  }

  return (
    <div>
      <div id='orderbarchart'>
        <ReactApexChart options={state.options} series={state.series} type='bar' height={350} />
      </div>
    </div>
  )
}

export default OrderBarChart
