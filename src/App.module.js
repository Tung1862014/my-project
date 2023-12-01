import { StyleSheet } from "react-native";
import color from "./contains/color";

// export default StyleSheet.create({
//     container: {
//         width: '100%',
//         height: '100%',
//     },
//     containerTop:{
//         flex:1,
//     },
//     containerCenter:{
//         flex:1,
        
//         width: '100%',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     containerBottom: {
//         flex:1,
        
//         width: '100%',
//         height: '100%',
//         display: 'flex',
//         justifyContent: 'center'
//     },
//     imageLogo:{
//         position: 'relative',
//         width: 40,
//         height: 40,
//         marginVertical: 20,
//         backgroundColor: 'black',
//     },
//     top: { 
//         marginHorizontal: 20,
//         color: '#9C5634',
//         backgroundColor: '#FFFFFF',
//         padding: 15,
//         borderRadius: 40,
//         borderWidth: 0.3,
//         position: 'relative',
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         position: 'absolute,',
//     },
//     textInput1:{
//         fontSize: 17,
//         paddingLeft: 5,
//         width:'85%',
//         shadowColor: 'black',
//     },
//     pressableButtun: {
//         position: 'relative',
//         width: 40,
//         height: 25,
//         borderLeftWidth: 0.5,
//         justifyContent: 'center',

//     },
//     iconSearch:{
//         color: 'white',
//         marginTop: 4,
//         marginLeft:15,
//         borderWidth: 0,
//     },
//     buttom: {
//         marginHorizontal: 20,
//         color: '#9C5634',
//         backgroundColor: '#60B6C2',
//         padding: 15,
//         borderRadius: 40,
//         borderWidth: 0.5,
//         position: 'relative',
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         display: 'flex',
//     },
//     textInput2:{
//         fontSize: 17,
//         paddingLeft: 5,
//         width:'85%',
//         shadowColor: 'black',
//         textAlign: 'right',
//     },
//     center:{
//         color: 'yellow',
//         textAlign: 'center',
//         paddingVertical: 65,
//         fontSize: 15,
//         width: 150,
//         height: 150,
//         borderRadius: 100,
//         backgroundColor: '#3DFF5D',
//     },
// })

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: color.background,
    },
    body:{
        flex: 1,
        paddingTop: 50,
        paddingHorizontal:18,
    },
    header: {
        fontSize:24,
        color: color.tittle,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    iconDelete: {
        width:'100%',
        flexDirection:'row',
        justifyContent: 'flex-end',
        marginBottom: 15,
    },
})