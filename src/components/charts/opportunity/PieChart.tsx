import ReactApexChart from 'react-apexcharts'
import { ChartState } from '@/declarations'
import './styles.css'
import { ApexLegendFormatterOpts } from 'apexcharts'

export const OpportunityPieChart = () => {
  const state: ChartState = {
    series: [525, 522, 122, 2574],
    options: {
      chart: {
        width: '100%',
        height: 600,
        type: 'pie'
      },
      colors: ['#47AF2A', '#695D48', '#D0C094', '#28C5EE'],
      labels: ['United States', 'Rest of The World', 'Not Specified', 'All Territories'],
      dataLabels: {
        enabled: false
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
      legend: {
        show: true,
        position: 'left',
        formatter: function (_, opts: ApexLegendFormatterOpts) {
          const colors: string[] = opts.w.config.colors as string[]
          const labels: string[] = opts.w.config.labels as string[]
          const series: number[] = opts.w.config.series as number[]
          const color = colors[opts.seriesIndex]
          const label = labels[opts.seriesIndex]
          const value = series[opts.seriesIndex]

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
  }

  return (
    <div>
      <div id='pie'>
        <ReactApexChart options={state.options} series={state.series} type='pie' width={480} />
      </div>
    </div>
  )
}
