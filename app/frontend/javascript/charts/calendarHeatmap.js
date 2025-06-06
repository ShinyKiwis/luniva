import DateHelper from "ghelpers/dateHelper";
import * as echarts from 'echarts/core';
import { HeatmapChart } from 'echarts/charts';

import {
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  CalendarComponent
} from 'echarts/components';

import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  HeatmapChart,
  TooltipComponent,
  GridComponent,
  VisualMapComponent,
  CalendarComponent,
  CanvasRenderer
])

export function render(container, data) {
  const calendarHeatmap = echarts.init(container);
  calendarHeatmap.setOption({
    tooltip: {},
    visualMap: {
      show: false,
      inRange: {
        color: ['#e0f3f8', '#abd9e9', '#74add1', '#4575b4', '#313695']  // light to dark blues
      }
    },
    calendar: {
      top: 0,
      left: 'center',
      cellSize: 25,
      range: DateHelper.currentMonthRange,
      splitLine: {
        lineStyle: {
          width: 0.5
        }
      },
      itemStyle: {
        borderWidth: 0.5,
        borderColor: '#ccc'
      },
      dayLabel: {
        nameMap: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yearLabel: { show: false },
      monthLabel: { show: false }
    },
    series: {
      type: 'heatmap',
      coordinateSystem: 'calendar',
      data: data
    }
  })

  return calendarHeatmap;
}

