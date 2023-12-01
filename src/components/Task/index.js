import { View, Text,TouchableOpacity } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styles from "./style";
import { memo, useState } from "react";

const Task = ({index, item, onDelete, checkBox, edit}) =>{
    const [isCheck, setIsCheck] = useState(checkBox);

    console.log('Checkbox: ', checkBox, isCheck);

    const handelTest = (value) =>{
        console.log('Is: ', value);
        setIsCheck(value);
        return onDelete(value);
    }
    return (
        <View style={styles.item}>
            <View style={[styles.square, index%2 === 0 ? styles.even: styles.odd]}> 
                <Text style={styles.number}>{index > 8 ? index+1  : `0${index+1}`}</Text>
            </View>
            <Text style={styles.content} numberOfLines={1} ellipsizeMode={'tail'}>{item}</Text>
            <TouchableOpacity onPress={edit}>
              <FontAwesomeIcon  size={22} icon={faPen}/>
            </TouchableOpacity>
            <BouncyCheckbox
                size={23}
                fillColor="#53d6f2"
                unfillColor="#FFFFF"
                isChecked={checkBox}
                //disableBuiltInState = {isCheck}
                // text="Custom Checkbox"
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                onPress={(e) => handelTest(e)}
            />
        </View>
    )
}

export default memo(Task);