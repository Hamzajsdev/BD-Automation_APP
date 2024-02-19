import { StyleSheet } from "react-native"
import theme from "../../common/Theme";
import { boldFont, fontSizes, mediumFont } from "../../assets/fonts/font";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        elevation: 5,
        marginTop: 20,
        marginLeft: 20,
    },
    head: {
        height: 40,
        backgroundColor: "#F5F5F5",
    },
    headText: {
        color: theme.colors.purple,
        fontWeight: boldFont.fontWeight,
        marginLeft: 6,
        fontSize: fontSizes.x_medium
    },
    text: {
        marginLeft: 6,
        color:'black'

    },
    dateTxt:{
        color:'black',
    },
    dataWrapper: {
        marginTop: -1
    },
    row: {
        height: 50,
    },
    date: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    dateContent: {
        flexDirection: 'row',
        gap: 15,
        borderBottomColor: theme.colors.darkGray,
        borderBottomWidth: 1
    },
    md_text: {
        color: theme.colors.black,
        fontSize: fontSizes.medium,
        fontWeight: boldFont.fontWeight
    },
    headContainer: {
        alignItems: "center"
    },
    fluidContainer: {
        // backgroundColor: '#fff',
        flex: 1,
    },
    filter: {
        fontSize: fontSizes.x_medium,
        fontWeight: mediumFont.fontWeight,
        color:theme.colors.darkGray
    },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    filterTags: {
        height: 40,
        paddingLeft: 8,
        alignItems: "center",
        gap: 6,
        borderRadius: 10,
        flexDirection: "row",
        borderWidth: 1,
        borderColor: theme.colors.gray
    }
});

export default styles