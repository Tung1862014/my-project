import { Button, TextInput, View } from "react-native";
import {faPen} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styles from './style';
import color from "../../contains/color";

const FromUpdate = ({text, onChangeText, Submit}) => {
    console.log('Text: ', text);
    return (
        <View style={styles.from}>
            <TextInput 
                multiline
                numberOfLines={2}
                style={styles.input}
                placeholder="Enter text"
                onChangeText={(e) => onChangeText([{id: text[0].id, value: e}])}
                //onChangeText={onChangeText}
                value={text[0] !== undefined ? text[0].value : ''}
            />
            <View style={styles.button}>
                <Button color={color.third} title={'Cập nhật'} onPress={Submit}/>
            </View>
        </View>
    )
}

export default FromUpdate;