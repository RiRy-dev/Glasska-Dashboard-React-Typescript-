import React from 'react'
import ReactApexChart from 'react-apexcharts'
import './styles.css'

export const OpportunityDonutChart = () => {
  const [state, setState] = React.useState({
    series: [150, 2574],
    options: {
      chart: {
        type: 'donut',
        width: 420
      },
      labels: ['Welcome', 'Not Specified'],
      colors: ['#47AF2A', '#D0C094'],
      plotOptions: {
        pie: {
          spacing: 3,
          donut: {
            size: '75%',
            labels: {
              show: true,
              total: {
                show: true,
                label: 'Total Orders'
              }
            }
          }
        }
      },
      stroke: {
        width: 0
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        position: 'left',
        formatter: function (seriesName, opts) {
          const color = opts.w.config.colors[opts.seriesIndex]
          const label = opts.w.config.labels[opts.seriesIndex]
          const value = opts.w.config.series[opts.seriesIndex]

          return `<div class="label-container"
                        style="--font-color:${color};margin-top:30px;--background-color:${color + '50'}"
                        data-hover-text=${label}       
                >${label}</div><span class='value'>${value}</span>`
        },
        markers: {
          size: 0
        }
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
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 320
            },
            legend: {
              position: 'top'
            }
          }
        },
        {
          breakpoint: 1400,
          options: {
            title: {
              align: 'center'
            },
            legend: {
              position: 'bottom'
            }
          }
        },
        {
          breakpoint: 1320,
          options: {
            chart: { width: 400 },
            title: {
              align: 'center'
            },
            legend: {
              position: 'bottom'
            }
          }
        }
      ]
    }
  })

  return (
    <div>
      <div id='chart'>
        <ReactApexChart options={state.options} series={state.series} type='donut' width={420} />
      </div>
    </div>
  )
}
