import React from 'react';
import { AppRegistry, Alert, View, BackHandler, Text, Imageview, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
// import { openDatabase } from 'react-native-sqlite-storage';
import { Input } from 'react-native-elements';
import Firebase from '../Firebase/Firebase';


// var db = openDatabase({ name: 'user.db' });



class Register extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
     
      email: '',
      password: '',
    };

  }

  

  register_user = () => {
    var that = this;
    const { name } = this.state;
    const { email } = this.state;
    const { password } = this.state;
    const { phone } = this.state;
    //alert(user_name, user_contact, user_address);
    if (name) {
      if (email) {

        if (password) {
          if (phone) {
            db.transaction(function (tx) {
              tx.executeSql(
                'INSERT INTO user (name, email, password, phone) VALUES (?,?,?,?)',
                [name, email, password, phone],
                (tx, results) => {
                  console.log('Results', results.rowsAffected);
                  if (results.rowsAffected > 0) {
                    Alert.alert(
                      'Success',
                      'You are Registered Successfully',
                      [
                        {
                          text: 'Ok',
                          onPress: () =>
                            console.log('press')
                        },
                      ],
                      { cancelable: false }
                    );
                  } else {
                    alert('Registration Failed');
                  }
                }
              );
            });



          }
          else {
            alert('plese fill phone nmber')
          }
        }
        else {
          alert('Please fill  password');
        }
      }
      else {
        alert('Plese fill email')
      }
    }
    else {

      alert('Plese fill name')
    }



  };

  handleSignUp = () => {
    const { email, password } = this.state
    Firebase.auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => this.props.navigation.navigate('Login'))
        .catch(error => console.log(error))
}

  render() {


    const { navigate } = this.props.navigation;
    return (
      <View style={{ height: hp('100%'), width: wp('100%'), backgroundColor: '#001a33' }}>

        <TouchableOpacity
          onPress={() => navigate('Initial')}>

          <ImageBackground
            style={{ height: hp('2.3%'), width: wp('4.3%'), marginTop: hp('5%'), marginLeft: wp('5%') }}
            source={require('../Photo/backbutton.png')} />
        </TouchableOpacity>


        <ImageBackground
          style={{ height: hp('15%'), width: wp('30%'), marginTop: hp('9%'), marginLeft: hp('19%') }}
          source={require('../Photo/chatlogo.png')} />

        <Text style={{ color: '#70DBDB', marginLeft: hp(15), marginTop: hp('5'), fontSize: 18, fontFamily: 'Rowdies-Bold' }}>Welcome to Vaarta</Text>

        <View style={{ height: hp('75%'), width: wp('88%'), marginLeft: wp('5%'), marginBottom: hp('12%') }}>
          <Text style={{ color: '#70DBDB', marginLeft: hp(2), marginTop: hp('2'), fontSize: 18, fontFamily: 'Rowdies-Bold' }}>UserName</Text>
          <Input

            style={{ height: hp('12%'), width: hp('12%') }}
            placeholder='Email'
            placeholderTextColor='#70DBDB'
          value={this.state.email}
         onChangeText={email=>this.setState({email})}
            // onChangeText={}

          />
          <Text style={{ color: '#70DBDB', marginLeft: hp('2%'), marginTop: hp('0.5%'), fontSize: 18, fontFamily: 'Rowdies-Bold' }}>Password</Text>
          <Input

            style={{ height: hp('12%'), width: hp('12%') }}
            placeholder='Password'
            placeholderTextColor='#70DBDB'
            value={this.state.password}
           onChangeText={password=>this.setState({password})}

          />
          <TouchableOpacity onPress={this.handleSignUp}>
            <View style={{ height: hp('7%'), width: wp('70%'), borderRadius: hp('8%'), backgroundColor: "#70DBDB", marginLeft: hp('6%'), marginTop: hp('4%') }}>
              <Text style={{ marginLeft: hp('17%'), marginTop: hp('2%'), fontFamily: 'AsapCondensed-Italic', fontSize: 16, color: '#001a33' }}>Submit</Text>

            </View>
          </TouchableOpacity>
        </View>






      </View>
    );
  }
}


export default Register;