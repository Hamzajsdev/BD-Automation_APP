import React, { useState } from 'react';
import { View, Text, useWindowDimensions, StyleSheet, Image } from 'react-native';
import DatePicker from 'react-native-modern-datepicker';
import theme from '../common/Theme';
import calendar from '../assets/icon/calendar.png'
import { boldFont, fontSizes, regularFont } from '../assets/fonts/font';

const MdatePicker = () => {
    const {width}=useWindowDimensions()
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [showCalendar, setShowCalendar] = useState(false);
    const [selectedDateType, setSelectedDateType] = useState('');
  
    const handleShowStartDatePicker = () => {
      setSelectedDateType('start');
      setShowCalendar(true);
    };
  
    const handleShowEndDatePicker = () => {
      setSelectedDateType('end');
      setShowCalendar(true);
    };
  
    const handleDateChange = (date) => {
      if (selectedDateType === 'start') {
        setStartDate(date);
        if (endDate && new Date(date) > new Date(endDate)) {
          setEndDate('');
        }
      } else if (selectedDateType === 'end') {
        if (startDate && new Date(startDate) > new Date(date)) {
          Alert.alert('End date cannot be before start date');
          return;
        }
        setEndDate(date);
      }
      setShowCalendar(false);
    };
  return (
    <View style={{ flex: 1, }}>
    <View style={styles.container}>
      <View style={{ width: width / 1.1}}>
        <View style={styles.header}>
          <View style={styles.bottomLine}>
            <Image source={calendar} style={{width:15, height:20}} />
            <Text onPress={handleShowStartDatePicker} style={styles.Dates}>Start Date: {startDate}</Text>
          </View>
          <View>
            <Text style={styles.innerTxt}>To</Text>
          </View>
          <View style={styles.bottomLine}>
          <Image source={calendar} style={{width:15, height:20}} />
            <Text onPress={handleShowEndDatePicker} style={styles.Dates}>End Date: {endDate}</Text>
          </View>
        </View>
      </View>
    </View>
    {showCalendar && (
      <DatePicker
        options={{
          backgroundColor: '#090C08',
          textHeaderColor: '#FFA25B',
          textDefaultColor: '#F6E7C1',
          selectedTextColor: '#fff',
          mainColor: '#F4722B',
          textSecondaryColor: '#D6C7A1',
          borderColor: 'rgba(122, 146, 165, 0.1)',
        }}
        current={selectedDateType === 'start' ? startDate : endDate}
        selected={selectedDateType === 'start' ? startDate : endDate}
        mode="calendar"
        minuteInterval={30}
        style={{ borderRadius: 10 }}
        onSelectedChange={handleDateChange}
      />
    )}
  </View>
  )
}

export default MdatePicker




const styles=StyleSheet.create({
  container:{
    display: 'flex', 
    justifyContent: "center", 
    alignItems: "center"
  },

  header:{
    flexDirection: "row", 
    justifyContent: "space-between"
  },
  bottomLine:{
    flexDirection:"row", 
    gap:3,
    borderBottomColor:theme.colors.darkGray,
    borderBottomWidth:1.5,
    alignItems:"center"
  },
  Dates:{
    color:theme.colors.black,
    fontSize:fontSizes.x_small,
    fontWeight:regularFont.fontWeight,
  
  },
  innerTxt:{
    color:theme.colors.black,
    fontSize:fontSizes.x_medium,
    fontWeight:boldFont.fontWeight
  }
})