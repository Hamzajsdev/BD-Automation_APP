import { StyleSheet } from "react-native";
import theme from "../../common/Theme";
import { boldFont, fontSizes, mediumFont } from './../../assets/fonts/font';


const styles=StyleSheet.create({
    container: {
        flex: 1,
    },
    containerFluid:{
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        top:20
    },
    user:{
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
        position:'absolute',
        top:135
    },
    signin:{
        display:"flex",
        alignItems:"center",
    },
    text_md:{
        color:theme.colors.purple,
        fontSize: fontSizes.x_large,
        fontWeight:boldFont.fontWeight,
    },
    innerfield: {
        flexDirection: "row",
        alignItems: "center",
        gap: 20
      },
      textfield: {
        height: 48,
        borderRadius:15,
        paddingLeft: 20,
        marginTop: 19,
        backgroundColor: theme.colors.gray,
      },
      input: {
        color: 'black'
      },
      forget:{
        display:'flex',
        textAlign:"right",
        color:theme.colors.black,
        fontSize:fontSizes.medium,
        fontWeight:mediumFont.fontWeight,
      },
      btn:{
        height: 48,
        borderRadius:25,
        marginTop: 19,
        backgroundColor: theme.colors.purple,
      },
      btnPrimary:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        paddingTop:8,
      },
      text_lg:{
        color:'white',
        fontSize:fontSizes.large,
        fontWeight:mediumFont.fontWeight
      }


})  
 export default styles