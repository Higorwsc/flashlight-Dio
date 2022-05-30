import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native'
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake'

const App = ()=> {
const [toggle, settoggle] = useState(false);
const handleChangeToggle = ()=> settoggle(oldToggle => !oldToggle);

useEffect(()=>{
  Torch.switchState(toggle)
},[toggle]);

useEffect(() => {
const subscription = RNShake.addListener(() => {
  settoggle(oldToggle => !oldToggle);
});
return ()=> subscription.remove();
},[]);

  return( 
    <View style={toggle ? style.containerLight : style.container}>
      <TouchableOpacity 
      onPress= {handleChangeToggle}>
      <Image 
      style={toggle ? style.lightingOn : style.lightingOff } source={
        toggle 
        ? require('./assests/icons/eco-light.png')
        : require('./assests/icons/eco-light-off.png')
      } />
      <Image 
      style={style.dioLogo } source={
        toggle 
        ? require('./assests/icons/logo-dio-white.png')
        : require('./assests/icons/logo-dio.png')
      } />
      </TouchableOpacity>
      </View>
  );
  };

export default App 

const style = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent:'center',
  },
  containerLight:{
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent:'center',
  },
  lightingOn: {
    resingMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height:150,
  },
  lightingOff: {
    resingMode: 'contain',
    alignSelf: 'center',
    tintColor:'white',
    width: 150,
    height:150,
  },
  lightingOn: {
    resingMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height:150,
  },
  dioLogo: {
    resingMode: 'contain',
    alignSelf: 'center',
    width: 150,
    height:0,
  }
});