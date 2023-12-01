import { TextInput, View, TouchableOpacity, KeyboardAvoidingView, Platform,  } from "react-native";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styles from "./style";

const From = ({ onPress, onChangeTex, value}) => {
   
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}  keyboardVerticalOffset={60}>
            <View style={styles.addTask}>
                <TextInput style={styles.textInput} placeholder= 'Enter text........' onChangeText={onChangeTex} value={value}/>
                <View style={styles.pressPlus}>
                    <TouchableOpacity onPress={onPress}>
                        <FontAwesomeIcon size={50} style={styles.iconPlus} icon={faCirclePlus}/>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default From;