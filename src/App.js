import { useState, useRef } from 'react';
import { View, Text, TextInput, Button, Pressable, Image } from 'react-native';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
// use the react native version of the package
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styles from './App.module';


function App() {
  const [valueText, setValueText] = useState('');
  const [check, setCheck] = useState(false);

  const item = useRef();

  const handleChange = (e) => {
    setValueText(e);
    console.log('tttt: ',valueText);
  }

  const handleClick = () => {
    alert(`aaaa: ${valueText}`);
  }
   return (
    <View style={styles.container}>
      <View ref={item} style={styles.containerTop}>
        <View>
          <Image
              style={styles.imageLogo}
              source={require('../assets/adaptive-icon.png')}
            />
        </View> 
        <View style={styles.top}>
          <TextInput 
            style={styles.textInput1} 
            placeholder="Text....."
            onChangeText={(e)=> handleChange(e)}
            value={valueText}
          />
          <Pressable style={styles.pressableButtun} onPress={handleClick}>
            <FontAwesomeIcon style={styles.iconSearch} icon={faMagnifyingGlass} />
          </Pressable>
        </View>
      </View>
      <View style={styles.containerCenter}>
        <Text style={styles.center}>Tung 1</Text>
      </View>
      <View style={styles.containerBottom}>
        <View style={styles.buttom}>
            <TextInput 
                style={styles.textInput2} 
                placeholder="Text....."
                onChangeText={(e)=> handleChange(e)}
                value={valueText}
            />
        </View>
      </View>
    </View>
   )
};

export default App;