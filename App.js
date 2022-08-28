import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function App() {
  const [num1, setNum1] = useState(null);
  const [num2, setNum2] = useState(null);
  const [result, setResult] = useState(null);


  const numAddition = () => {
    let intNum1 = parseInt(num1);
    let intNum2 = parseInt(num2);

    setResult(0);
    setResult(intNum1 + intNum2);
  }

  const numSubstract = () => {
    let intNum1 = parseInt(num1);
    let intNum2 = parseInt(num2);

    setResult(0);
    setResult(intNum1 - intNum2);
  }


  return (
    <View style={styles.container}>

      <Text>Result: {result}</Text>
  
      <TextInput
        style={{width:200, borderColor: 'gray', borderWidth:1}}
        onChangeText={num1 => setNum1(num1)}
        value={num1}
        keyboardType="numeric"
      />
      
      <TextInput
        style={{width:200, borderColor: 'gray', borderWidth:1}}
        onChangeText={num2 => setNum2(num2)}
        value={num2}
        keyboardType="numeric"
      />

      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Button onPress={numAddition}title="  +  " />
        <Button onPress={numSubstract}title="  -  " />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
