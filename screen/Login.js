import React from 'react';
import { AppRegistry, Alert, View, BackHandler, Text, Imageview, KeyboardAvoidingView, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Input } from 'react-native-elements';
import Firebase from '../Firebase/Firebase';



class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state=  {

            email:'',
            password:''

        }

    }

    handleLogin = () => {
        const { email, password } = this.state
        Firebase
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then(() =>
          this.props.navigation.navigate('BottomNavi')  
            )         
          .catch(error => console.log(error))
    }

    render() {


        const { navigate } = this.props.navigation;
        return (

            <View style={{ height: hp('100%'), width: wp('100%'), backgroundColor: '#001a33' }}>
                <TouchableOpacity
                onPress={()=>navigate('Initial')}>

                <ImageBackground
                    style={{ height: hp('3.2%'), width: wp('6%'),marginTop:hp('3%'),marginLeft:wp('4%')}}
                    source={require('../Photo/backbutton.png')} />
                    </TouchableOpacity>

                <ImageBackground
                    style={{ height: hp('15%'), width: wp('30%'), marginTop: hp('9%'), marginLeft: hp('19%') }}
                    source={require('../Photo/chatlogo.png')} />

                

                <View style={{ height: hp('45%'), width: wp('88%'), marginLeft: wp('5%'), marginBottom: hp('12%') }}>
                    <KeyboardAvoidingView>
                        <Text style={{ color: '#70DBDB', marginLeft: hp('2%'), marginTop: hp('10%'), fontSize: 18, fontFamily: 'Rowdies-Bold' }}>UserName</Text>
                        <Input

                            style={{ height: hp('12%'), width: hp('12%') }}
                            placeholder='Email'
                            placeholderTextColor='#70DBDB'
                            value={this.state.email}
                            onChangeText={email=>this.setState({email})}

                        />
                    </KeyboardAvoidingView>
                    <Text style={{ color: '#70DBDB', marginLeft: hp('2%'), marginTop: hp('0'), fontSize: 18, fontFamily: 'Rowdies-Bold' }}>Password</Text>
                    <KeyboardAvoidingView>
                        <Input

                            style={{ height: hp('12%'), width: hp('12%') }}
                            placeholder='Password'
                            placeholderTextColor='#70DBDB'
                            value={this.state.password}
                            onChangeText={password=>this.setState({password})}
                        />
                    </KeyboardAvoidingView>
                    <TouchableOpacity
                       onPress={()=>navigate('Forgot')} >
                        <Text style={{ color: '#70DBDB', marginLeft: hp('2%'), marginTop: hp('0'), fontSize: 11, fontFamily: 'AsapCondensed-Italic', textDecorationLine: 'underline', }}>Forgot    Password ?</Text>
                    </TouchableOpacity>

                    {/* BUTTON */}

                    <TouchableOpacity
                    onPress={this.handleLogin}>
                        <View style={{ height: hp('7%'), width: wp('70%'), borderRadius: hp('8%'), backgroundColor: "#70DBDB", marginLeft: hp('6%'), marginTop: hp('4%') }}>
                            <Text style={{ marginLeft: hp('17%'), marginTop: hp('2%'), fontFamily: 'AsapCondensed-Italic', fontSize: 16, color: '#001a33' }}>Submit</Text>

                        </View>
                    </TouchableOpacity>

                </View>


            </View>

        );
    }
}


export default Login;