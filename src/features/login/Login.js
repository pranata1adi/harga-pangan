import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Login extends Component {
    constructor() {
        super()
        this.state = {
           nama:'',
        }
    } 
    
render() {
    return (
      <View style={styles.container}>
        <View>
          <Image style={styles.backgroundImage} source={require('../../img/login.png')}/>
       </View>
        <View style={[styles.inputContainer, styles.backgroundImage]}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/password/androidL/40/3498db'}}/>
          <TextInput style={[styles.inputs, styles.loginText]}
              placeholder="Email"
              keyboardType="email-address"
              placeholderTextColor="white"
              underlineColorAndroid='transparent'/>
        </View>
        
        <View style={[styles.inputContainer, styles.backgroundImage]}>
          <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://png.icons8.com/envelope/androidL/40/3498db'}}/>
          <TextInput style={[styles.inputs, styles.loginText]}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry={true}
              underlineColorAndroid='transparent'/>
        </View>
     
        <TouchableOpacity style={styles.restoreButtonContainer}>
            <Text>Forgot?</Text>
        </TouchableOpacity>

        <TouchableOpacity
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.props.navigation.navigate('Home')}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  }, 
  backgroundImage: {
    backgroundColor: '#B0E0E6',
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:15,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  icon:{
    width:30,
    height:30,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: '#3498db',
  },
  fabookButton: {
    backgroundColor: "#3b5998",
  },
  googleButton: {
    backgroundColor: "#ff0000",
  },
  loginText: {
    color: 'white',
  },
  restoreButtonContainer:{
    width:250,
    marginBottom:15,
    alignItems: 'flex-end'
  },
  socialButtonContent:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center', 
  },
  socialIcon:{
    color: "#FFFFFF",
    marginRight:5
  }
});