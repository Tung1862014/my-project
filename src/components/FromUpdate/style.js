import { StyleSheet } from "react-native";
import color from "../../contains/color";

const styles = StyleSheet.create({
    from: {
        width: "100%",
        flexDirection: 'row',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
    },
    input: {
        width: '75%',
        backgroundColor: color.white,
        paddingHorizontal: 5,
        borderWidth: 1,
        borderColor: color.third,
        textAlign: 'left',
        borderRadius: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonNode: {
        borderRadius: 20,
        backgroundColor: color.third,
    }
})

export default styles;