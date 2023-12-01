import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
    addTask: {
        backgroundColor: color.white,
        width: '100%',
        position: 'relative',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        alignItems: 'center',
        paddingVertical: 10,
    },
    textInput:{
        height: 44,
        width: '80%',
        borderWidth: 2,
        borderRadius: 10,
        borderColor: color.primary,
        backgroundColor: 'white',
        paddingHorizontal: 10,
    },
    pressPlus:{
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconPlus:{
        color: color.second,
    }
})

export default styles;