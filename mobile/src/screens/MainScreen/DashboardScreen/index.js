import React from "react";
import styles from './styles';
import { View, Text, Dimensions, ScrollView } from "react-native";
import { AppBar } from "../../../components";
import { LineChart } from 'react-native-chart-kit';

export default function DashboardScreen({navigation}){
    
    const screenWidth = Dimensions.get("window").width;

    const data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            data: [
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100,
              Math.random() * 100
            ]
          }
        ]
    }

    const chartConfig = {
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        style: {
            borderRadius: 16
        },
        propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726'
        }
    }

    return (
        <View>
            <AppBar 
                screenTitle="Dashboard"
                onBackPress={() => navigation.goBack()}
            />
            <Text style={{padding: 6, fontWeight: "bold", marginTop: 6}}>Overview</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <LineChart
                    data={data}
                    width={screenWidth * 1.5}
                    height={220}
                    chartConfig={chartConfig}
                    contentInset={{ top: 30, bottom: 30 }} // add padding to prevent label overlap
                    segments={3} // adjust number of segments to reduce label clutter
                    bezier
                    style={{
                        marginVertical: 1,
                        borderRadius: 0
                    }}
                />
            </ScrollView>
        </View>
    )
}