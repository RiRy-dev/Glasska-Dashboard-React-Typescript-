import React from 'react'
import ReactApexChart from 'react-apexcharts'
import './styles.css'

export const OpportunityPieChart = () => {
  const [state, setState] = React.useState({
    series: [525, 522, 122, 2574],
    options: {
      chart: {
        width: '100%',
        height: 600,
        type: 'pie'
      },
      colors: ['#47AF2A', '#695D48', '#D0C094', '#28C5EE'],
      labels: ['United States', 'Rest of The World', 'Not Specified', 'All Territories'],
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
      legend: {
        show: true,
        position: 'left',
        formatter: function (seriesName, opts) {
          const color = opts.w.config.colors[opts.seriesIndex]
          const label = opts.w.config.labels[opts.seriesIndex]
          const value = opts.w.config.series[opts.seriesIndex]

          return `<div class="label-container"
                        style="--font-color:${color};--background-color:${color + '50'}"
                        data-hover-text=${label}       
                >${label}</div><span class='value'>${value}</span>`
        },
        markers: {
          size: 0
        }
      },
      plotOptions: {
        pie: {
          dataLabels: {
            external: {
              show: false
            }
          }
        }
      },
      responsive: [
        {
          breakpoint: 1024,
          options: {
            title: {
              align: 'center'
            }
          }
        },
        {
          breakpoint: 640,
          options: {
            chart: {
              width: '100%'
            },
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
      <div id='pie'>
        <ReactApexChart options={state.options} series={state.series} type='pie' width={480} />
      </div>
    </div>
  )
}
