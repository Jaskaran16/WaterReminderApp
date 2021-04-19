import React,{Component} from 'react'
import {TouchableOpacity,StyleSheet,View,Text,TextInput} from 'react-native'
import SignUpScreen from './SignUpScreen'
import firebase from '../config'
import db from '../config'
export default class LoginScreen extends Component{
  
  userSignUp = (emailId, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return alert("password doesn't match\nCheck your password.");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(emailId, password)
        .then(() => {
          db.collection("users").add({
            first_name: this.state.firstName,
            last_name: this.state.lastName,
            contact: this.state.contact,
            email_id: this.state.emailId,
            address: this.state.address,
            IsBookRequestActive: false
          });
          return alert("User Added Successfully", "", [
            {
              text: "OK",
              onPress: () => this.setState({ isModalVisible: false })
            }
          ]);
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          return alert(errorMessage);
        });
    }
  };

  userLogin = (emailId, password) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(emailId, password)
      .then(() => {
        this.props.navigation.navigate("DonateBooks");
      })
      .catch(error => {
        var errorCode = error.code;
        var errorMessage = error.message;
        return alert(errorMessage);
      });
  };
  render(){
    return(
      <View>
      <Text style= {styles.title}>Water Reminder App</Text>
      <TextInput
      style = {styles.formTextInput} 
      placeholder = {"Email Address"}
      />
      <TextInput
      style = {styles.formTextInput}
      placeholder = {"Password"}
      />
      <TouchableOpacity
      style={styles.buttons}
      >
      <Text>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style = {styles.buttons}
      onPress = {()=>{this.props.navigation.navigate('SignUpScreen')}}
      >
      <Text>Sign Up</Text>
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
    fontSize:30,
    marginLeft:40,
    fontWeight:'300',
    // fontFamily:'AvenirNext-Heavy',
    color : "blue"
  },
});