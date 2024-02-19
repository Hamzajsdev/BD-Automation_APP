import { View, Text } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-chart-kit';


const Pie = () => {
    const data = [
        {
            name: "Data",
            population: 1,
            color: "#62B2FD",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Data",
            population: 2,
            color: "#9F97F7",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Data",
            population: 3,
            color: "#FFB44F",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Data",
            population: 4,
            color: "#F99BAB",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15
        },
        {
            name: "Data",
            population: 5,
            color: "#9BDFC4",
            legendFontColor: "#7F7F7F",
            legendFontSize: 15,
            
        }
    ];
    return (
        <View>
            <PieChart
                data={data}
                width={390}
                height={220}
                chartConfig={{
                    backgroundColor: '#6EE7B7',
                    backgroundGradientFrom: '#047857',
                    backgroundGradientFrom: '#6EE7B7',
                    color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                }}
                accessor={"population"}
                backgroundColor={"transparent"}
            />
        </View>
    )
}

export default Pie