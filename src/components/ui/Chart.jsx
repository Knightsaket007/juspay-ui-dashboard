import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

export default function BarChart() {
    const chartRef = useRef(null);

    useEffect(() => {
        const chartInstance = echarts.init(chartRef.current);

        const option = {
            xAxis: {
                type: 'category',
                data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    type: 'bar',
                    data: [18, 24, 20, 26, 15, 22],
                    barWidth: 20,
                    showBackground: true,
                    itemStyle: {
                        color: 'rgba(168, 197, 218, 1)',
                    },
                    backgroundStyle: {
                        color: 'rgba(229, 236, 246, 1)',
                        borderRadius: [6, 6, 0, 0]
                    }
                }
            ]
        };


        chartInstance.setOption(option);

        return () => {
            chartInstance.dispose();
        };
    }, []);

    return (
        <div
            ref={chartRef}
            style={{ width: '100%', height: '300px' }}
        />
    );
}
