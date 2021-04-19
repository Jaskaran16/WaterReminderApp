import React,{Component} from 'react'
import {TouchableOpacity,StyleSheet,View,Text, TextInput} from 'react-native'

export default class SignUpScreen extends Component{
  render(){
    return(
      <View>
      <Text style = {styles.title}>Sign Up</Text>
      <TextInput
      style = {styles.formTextInput}
      placeholder = {"Email Address"}/>
      <TextInput
      style = {styles.formTextInput}
      placeholder = {"Password"}/>
      <TextInput
      style = {styles.formTextInput}
      placeholder = {"Confirm Password"}/>
      <TouchableOpacity
      style = {styles.buttons}
      onPress = {()=>{this.props.navigation.navigate('HomeScreen')}}
      >
      <Text>Register</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:50,
    marginLeft:70,
    borderWidth: 2,
    borderRadius: 15,
    margin: 10,
    width: 200,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },
   formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },
    title :{
    fontSize:40,
    marginLeft:100,
    fontWeight:'300',
    // fontFamily:'AvenirNext-Heavy',
    color : '#ff9800'
  },
});