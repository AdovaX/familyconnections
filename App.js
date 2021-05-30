import React from 'react';
import { StyleSheet, Text, View,Button,TouchableOpacity } from 'react-native';
 
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello ,{"\n"} 
      Welcome to Family Contacts</Text>
      <TouchableOpacity style={styles.loginBtn} >
        <Text style={styles.btnText}>Continue
         </Text>
        
      </TouchableOpacity>
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
  heading:{
  color:'black',
  fontSize:24,
  fontWeight:'bold',
  },
  loginBtn:{
  width: 190,
  marginTop: 20,
  backgroundColor: "blue",
  padding: 14,
  borderRadius: 50,
  textAlign:'center'
  },
  btnText: {
  color: "white",
  fontSize: 20,
  justifyContent: "center",
  textAlign: "center",
  },
  loginBtnIcon:{
    color:'white', 
    top:20
  }
});
