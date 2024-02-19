
import React from "react";
import { View, ScrollView, useWindowDimensions, Image, Text, SafeAreaView, TextInput } from "react-native";
import { Table, Row } from "react-native-table-component";
import calender from '../../assets/icon/calendar.png'
import filterIcon from '../../assets/icon/filterIcon.png'
import search from '../../assets/icon/search.png'
import styles from "./JonStyle";
import BoxCheck from "../../components/BoxCheck";
import theme from "../../common/Theme";
import MdatePicker from "../../components/MdatePicker";


const JobPosted = () => {
  const { width } = useWindowDimensions()
  const state = {
    tableHead: ["Title", "Category", "Source", "Jobs", "Country", "Rate", "Publish Date", "Actions"],
    widthArr: [140, 100, 100, 100, 100, 100, 120, 100],
  };
  const generateTableData = (rowCount, columnCount) => {
    const data = [];

    for (let i = 1; i <= rowCount; i++) {
      const row = ['Trademark IP ', 'adil-open-jobs', 'Upwork', 'View jobs', 'United State', '$50.00/hr', '2 minutes ago', '👁'];
      for (let j = 1; j <= columnCount; j++) {
        row.push(`R${i} C${j}`);
      }
      data.push(row);
    }
    return data;
  };
  const data = generateTableData(8, 8);

  return (

    <SafeAreaView style={styles.fluidContainer}>
      <View style={styles.headContainer}>
        <View style={{ width: width / 1.1, marginTop: 40, }}>
          <View style={styles.date}>
            <MdatePicker/>
          </View>
        </View>
      </View>
      <View>
        <View style={[styles.headContainer, { marginTop: 20 }]}>
          <View style={{ width: width / 1.1 }}>
            <View style={styles.search}>
              <View style={[styles.filterTags, { width: width / 5, }]}>
                <Image source={filterIcon} resizeMode="stretch" />
                <Text style={styles.filter}>filter</Text>
              </View>
              <View style={[styles.filterTags, { width: width / 2.15, }]}>
                <Image source={search} resizeMode="stretch" />
                <TextInput placeholder="search" placeholderTextColor={theme.colors.darkGray} />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.container]}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{ borderColor: "#F2F2F2" }}>
              <Row
                data={state.tableHead.map((item, index) => {
                  if (index === 0) {
                    return (
                      <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <BoxCheck/>
                        <Text style={styles.headText}>{item}</Text>
                      </View>
                    );
                  }
                  return item;
                })}
                widthArr={state.widthArr}
                style={styles.head}
                textStyle={styles.headText}
              />
            </Table>
              <ScrollView style={styles.dataWrapper}>
            <Table borderStyle={{ borderColor: '#F2F2F2', borderWidth: 1.5 }}>
              {data.map((dataRow, index) => (
                <Row
                  key={index}
                  data={dataRow.map((cell, cellIndex) => {
                    if (cellIndex === 0) {
                      return (
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap:5 }}>
                          <BoxCheck/>
                          <Text style={styles.dateTxt}>{cell}</Text>
                        </View>
                      );
                    }
                    return cell;
                  })}
                  widthArr={state.widthArr}
                  style={[styles.row, index % 2 && { backgroundColor: "#ffffff" }]}
                  textStyle={styles.text}
                />
              ))}
            </Table>
          </ScrollView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>

  );
};




export default JobPosted;
