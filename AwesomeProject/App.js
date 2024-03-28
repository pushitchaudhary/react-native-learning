import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [count , setCount ]= useState(0)
  console.log(count)

  return (
    <View style={styles.container}>
      <Text>Hello this is pushit chaudhary s</Text>
      <Button title='Add' onPress={()=>setCount(count+1)} />
      <Text></Text>
      <Button title='Sub' onPress={()=>setCount(count-1)}/>
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

  colorBtn : {
    backgroundColor : "red"
  }


});
