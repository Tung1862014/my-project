import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles =  StyleSheet.create({
    item: {
        flexDirection: 'row',
        marginBottom: 15,
        paddingVertical: 13,
        paddingHorizontal: 10,
        backgroundColor: color.white,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    square:{
        width: 48,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    even: {
        backgroundColor: color.second,
    },
    odd: {
        backgroundColor: color.third,
    },
    number:{
        fontSize: 16,
        color: 'white'
    },
    content:{
        width: '60%',
        height: '100%',
        alignItems: 'flex-start',
        fontSize: 16,
        marginLeft: 10,
        overflow: 'hidden',
        alignItems: 'center',
        paddingVertical: 5,
    }
})

export default styles;