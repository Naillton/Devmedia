import React, { useState } from "react";
import { Keyboard } from "react-native";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
    const [ value, setValue ] = useState('');
    const [ array, setArray ] = useState([]);
    const [ checked, setChecked ] = useState([]);
  
    const List = (value: string) => {
      setArray([...array, value]);
      Keyboard.dismiss();
      setValue('');
    }
  
    const delList = () => {
      setArray([]);
    }

  return (
    <MyContext.Provider value={{ value, setValue, array, List, checked, setChecked, delList }}>
      { children }
    </MyContext.Provider>
  )
}

export default MyProvider;