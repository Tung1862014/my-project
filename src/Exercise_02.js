import { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Keyboard, Alert} from 'react-native';
import {faTrashCan, faTruckFieldUn } from "@fortawesome/free-solid-svg-icons";
// use the react native version of the package
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import BouncyCheckbox from "react-native-bouncy-checkbox";
// import Checkbox from 'expo-checkbox';
import Task from './components/Task';
import styles from './App.module.js';
import From from './components/Form';
import FromUpdate from './components/FromUpdate/index.js';

function Exercise_02() {
  const [items, setItems] = useState([{id: 1, value: 'lau nha 1'},{id: 2, value: 'lau nha 2'},{id: 3, value: 'lau nha 3'},{id: 4, value: 'lau nha 4'},{id: 5, value: 'lau nha 5'},]);
  const [textValue, setTextValue] = useState('');
  const [itemCheckBox, setItemCheckBox] = useState([]);
  const [checkBox, setCheckBox] = useState(false);
  const [textEdit, setTextEdit] = useState({id: 0, value: 'lau nha'});
  // const [isChecked, setIsChecked] = useState(false);

  // console.log('items',items);
  // console.log('isChecked: ',isChecked);

  const handleTextInputChange = (e) => {
        setTextValue(e);
  }
  ///////////////////////////
  const handlePressPlus = () => {
    if(textValue){
      setItems(prev => [...prev,{id: items.length, value: textValue}]);
      setTextValue('');
      Keyboard.dismiss();
    }
  }
  ///////////////////////////////////
  const handleTakeId = (item, value) => {
    console.log('delete: ', item, value);
    if (value){
      setItemCheckBox(prev => [...prev,item]);
    }else {
      itemCheckBox.splice(item,1);
      setItemCheckBox(itemCheckBox);
    }
  }
  ////////////////////////////////
  const handleDelete = () => {
    itemCheckBox[0] !== undefined && 
    (Alert.alert('Delete Title', 'Bạn chắc chắn muốn xóa', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => {
        let filtered2 = [];
          for(let j = 0; j < itemCheckBox.length; j++){
              if(j === 0){
                filtered2 = items.filter(item => item.id !== itemCheckBox[j]);
              }else{
                filtered2 = filtered2.filter(item => item.id !== itemCheckBox[j]);
              }
          }
        console.log('items4: ',items, itemCheckBox);
        setItems(filtered2);
        setItemCheckBox([]);
        setCheckBox(false);
      }},
    ]))
  }
  /////////////////////////////////
  const handleCheckAll = (value) => {
    console.log('CheckAll: ',value);
    setCheckBox(value);
  }

  const handleTakeEdit = (value) => {
    const textvalue = items.filter(item => item.id === value);
    setTextEdit([{id: value, value: textvalue[0].value}]);
  }

  const handleEdit = () => {
    console.log('textEdit: ', textEdit);
    const itemValue = items;
    for(let i = 0; i < itemValue.length; i++) {
      if(itemValue[i].id === textEdit[0].id){
        itemValue.splice(i,1,textEdit[0]);
        console.log('itemValue: ',itemValue);
        setItems(itemValue);
      }
    }
    Keyboard.dismiss();
  }

  ///////////////////////////////////

  // const handleChangeCheckBox = (value) => {
  //   console.log('handleChangeCheckBox: ',value);
  //   return setIsChecked(value);
  // }
  

  return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.header}>Todo List</Text>
          <ScrollView>
            <View style={styles.iconDelete}>
              <BouncyCheckbox
                  size={25}
                  fillColor="#57FF55"
                  unfillColor="#FFFFF"
                  //  text="Custom Checkbox"
                  iconStyle={{ borderColor: "red" }}
                  innerIconStyle={{ borderWidth: 2 }}
                  onPress={(value) => handleCheckAll(value)}
              />
              {/* <Checkbox
                  style={styles.checkbox}
                  value={isChecked}
                  onValueChange={(e)=>handleChangeCheckBox(e)}
                  onChange={(e) => handleChangeCheckBox(e)a}
                  color={isChecked ? '#4630EB' : undefined}
                /> */}
              <TouchableOpacity onPress={handleDelete}>
                  <FontAwesomeIcon  size={22} icon={faTrashCan}/>
              </TouchableOpacity>
            </View>
            {items.map((item, index) =>(
                <Task 
                key={index} 
                index={index} 
                item={item.value} 
                onDelete={(value) => handleTakeId(item.id, value)} 
                checkBox={checkBox}
                edit={() => handleTakeEdit(item.id)}
                />
              )
            )
          }
          </ScrollView>
        </View>
        <FromUpdate text={textEdit} onChangeText={setTextEdit} Submit={handleEdit}/>
        <From onPress={(item) => handlePressPlus(item)} onChangeTex={(e) => handleTextInputChange(e)} value={textValue}/>
      </View> 
  )
};

export default Exercise_02;

