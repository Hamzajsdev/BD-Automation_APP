import { View, Text, SafeAreaView, StatusBar, useWindowDimensions, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import filter from '../../assets/icon/filter.png'
import brush from '../../assets/icon/brush.png'
import ErrowDown from '../../assets/icon/errowDown.png'
import calender from '../../assets/icon/calendar.png'
import style from './HomeStyle'
import { useNavigation } from '@react-navigation/native'
import { BarChart, LineChart } from 'react-native-chart-kit'
import Pie from '../../components/Pie'
import theme from './../../common/Theme';
import MdatePicker from '../../components/MdatePicker'

const Home = () => {

    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            data: [20, 45, 28, 80, 99, 43],
            color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
            strokeWidth: 2
        }]
    };

    const { width } = useWindowDimensions()
    const Navigation = useNavigation()
    const handlepress = () => {
        Navigation.navigate('JobPosted')
    }

    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor='white' barStyle="dark-content" />
            <ScrollView >
                <View>
                    <View>
                        <View style={{ width: width / 1.1, marginTop: 25 }}>
                            <View style={style.Homecontent}>
                                <View style={style.innercontent}>
                                    <Image source={filter} resizeMode='stretch' style={style.filter} />
                                    <Text style={style.sm_text}>Filter</Text>
                                </View>
                                <TouchableOpacity onPress={handlepress}>
                                    <Image source={brush} resizeMode='stretch' style={style.brush} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{ width: width / 1.1, marginTop: 20 }}>
                            <View style={style.dropdown}>
                                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                                    <Text style={style.dateTxt}>Search VA & Manager</Text>
                                    <Image source={ErrowDown} resizeMode='stretch' />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{ width: width / 1.1, marginTop: 20, }}>
                            <View style={style.date}>
                                <MdatePicker/>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{ width: width / 1.1, marginTop: 20 }}>
                            <View style={style.cardContent}>
                                <View style={[style.card1, { width: width / 2.3 }]}>
                                    <Text style={style.heading}>Total Proposals</Text>
                                    <Text style={style.num}>81</Text>
                                    <Text style={style.border}></Text>
                                    <Text style={style.regular}>This Month</Text>
                                </View>
                                <View style={[style.card2, { width: width / 2.3 }]}>
                                    <Text style={style.heading}>Accepted Proposals</Text>
                                    <Text style={style.num}>41</Text>
                                    <Text style={style.border}></Text>
                                    <Text style={style.regular}>This Month</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{ width: width / 1.1, marginTop: 15 }}>
                            <View style={style.cardContent}>
                                <View style={[style.card3, { width: width / 2.3 }]}>
                                    <Text style={style.heading}>Declined Proposals</Text>
                                    <Text style={style.num}>2</Text>
                                    <Text style={style.border}></Text>
                                    <Text style={style.regular}>This Month</Text>
                                </View>
                                <View style={[style.card4, { width: width / 2.3 }]}>
                                    <Text style={style.heading}>Declined jobs</Text>
                                    <Text style={style.num}>30</Text>
                                    <Text style={style.border}></Text>
                                    <Text style={style.regular}>This Month</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View style={{ width: width / 1.1, marginTop: 15 }}>
                            <View style={style.cardContent}>
                                <View style={[style.card5, { width: width / 2.3 }]}>
                                    <Text style={style.heading}>Interview Jobs</Text>
                                    <Text style={style.num}>0</Text>
                                    <Text style={style.border}></Text>
                                    <Text style={style.regular}>This Month</Text>
                                </View>
                                <View style={[style.card6, { width: width / 2.3 }]}>
                                    <Text style={style.heading}>Hired Jobs</Text>
                                    <Text style={style.num}>0</Text>
                                    <Text style={style.border}></Text>
                                    <Text style={style.regular}>This Month</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <Text style={[style.border]}></Text>
                    </View>
                    <View>
                        <View>
                            <Text style={style.Mainheading}>Proposals by hours </Text>
                        </View>
                    </View>
                    <View style={{ alignItems: "center", marginTop: 20, }}>
                        <View style={{ width: width / 1.1}}>
                            <BarChart
                                data={data}
                                width={320}
                                height={220}
                                yAxisLabel={'$'}
                                chartConfig={{
                                    backgroundColor: '#6EE7B7',
                                    backgroundGradientFrom: '#047857',
                                    backgroundGradientFrom: '#6EE7B7',
                                    decimalPlaces: 2,
                                    color: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                                    labelColor: (opacity = 0) => `rgba(255, 255, 255, ${opacity})`,
                                }}
                                bezier
                                style={{
                                    borderRadius: 16,

                                }}
                            />
                        </View>
                    </View>
                    <View>
                        <View>
                            <Text style={style.profile}>Profile Expenses</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{width:width/1.1, marginBottom:50}}>
                            <Pie />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}


export default Home