import { StyleSheet } from "react-native";
import { boldFont, mediumFont } from "../../assets/fonts/font";
import { fontSizes } from './../../assets/fonts/font';
import theme from "../../common/Theme";

const style=StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        // backgroundColor:'#FFF'
    },
    Homecontent:{
        flexDirection: "row", 
        justifyContent: "space-between", 
    },
    innercontent:{
        flexDirection:"row", 
        alignItems:"center",
        gap:10, 
    },
    sm_text:{
        color: theme.colors.black,
        fontSize:fontSizes.large,
        fontWeight:mediumFont.fontWeight,
    },
    filter:{
        height:25,
    },
    brush:{
        height:35,
    },
    dropdown: {
        borderColor:theme.colors.gray,
        borderWidth:2,
        borderRadius: 10,
        height: 48,
        paddingLeft:20,
        paddingRight:20,
        justifyContent:"center"
    },
    md_text:{
        color:theme.colors.darkBlack,
        fontSize:fontSizes.medium,
        fontWeight:boldFont.fontWeight
    },
    date:{
        flexDirection: "row", 
        justifyContent: "space-between"
    },
    dateTxt:{
        color:'black',
    },
    dateContent:{
        flexDirection:'row', 
        gap:15, 
        borderBottomColor: theme.colors.darkGray, 
        borderBottomWidth:1
    },
    card1:{
        backgroundColor:theme.colors.purple,
        height:115,
        borderRadius:6,
        paddingLeft:10,
        paddingRight:15,
        paddingTop:15,
        paddingBottom:15,
    },
    heading:{
        textAlign:'center',
        color:'white',
        fontWeight:boldFont.fontWeight,
        fontSize:fontSizes.medium,
    },
    num:{
        textAlign:'right',
        color:'white',
        fontWeight:boldFont.fontWeight,
        fontSize:fontSizes.medium,
        marginTop:10
    },
    border:{
        borderColor:'white',
        borderWidth:.7,
        marginTop:7
    },
    regular:{
        color: 'white',
        fontSize:fontSizes.small,
        fontWeight:mediumFont.fontWeight,
        marginTop:5
    },
    card2:{
        backgroundColor:'#605F67',
        height:115,
        borderRadius:6,
        paddingLeft:10,
        paddingRight:15,
        paddingTop:15,
        paddingBottom:15,
    },
    card3:{
        backgroundColor:'#C2930A',
        height:115,
        borderRadius:6,
        paddingLeft:10,
        paddingRight:15,
        paddingTop:15,
        paddingBottom:15,
    },
    card4:{
        backgroundColor:'#1DDFBC',
        height:115,
        borderRadius:6,
        paddingLeft:10,
        paddingRight:15,
        paddingTop:15,
        paddingBottom:15,
    },
    card5:{
        backgroundColor:'#337C48',
        height:115,
        borderRadius:6,
        paddingLeft:10,
        paddingRight:15,
        paddingTop:15,
        paddingBottom:15,
    },
    card6:{
        backgroundColor:'#DFD717',
        height:115,
        borderRadius:6,
        paddingLeft:10,
        paddingRight:15,
        paddingTop:15,
        paddingBottom:15,
    },
    cardContent:{
        flexDirection: "row", 
        justifyContent: "space-between", 
        gap:15
    },
    border:{
        marginTop:20,
        height:1,
        borderWidth:.8,
        borderColor: theme.colors.gray
    },
    Mainheading:{
        fontSize:fontSizes.large,
        fontWeight:mediumFont.fontWeight,
        color:theme.colors.black,
        textAlign:'center',
        marginTop:15
    },
    profile:{
        fontSize:fontSizes.large,
        fontWeight:mediumFont.fontWeight,
        color:theme.colors.black,
        textAlign:'center',
        marginTop:25
    }
})

export default style