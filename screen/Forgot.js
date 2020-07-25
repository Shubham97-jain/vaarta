import React from 'react';
import { AppRegistry, Alert, View, BackHandler, Text, Imageview, KeyboardAvoidingView, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Input } from 'react-native-elements';

class Forgot extends React.Component {
    render() {
        const {navigate}=this.props.navigation;
        return (

            <View style={{ height: hp(100), width: wp(100), backgroundColor: '#001a33' }}>

                <ImageBackground
                    style={{ height: hp('15'), width: wp('30'), marginTop: hp('9'), marginLeft: hp('19') }}
                    source={require('../Photo/chatlogo.png')} />


                <View style={{ height: hp(45), width: wp(88), marginLeft: wp(5), marginBottom: hp(12) }}>

                    <Text style={{ color: '#70DBDB', marginLeft: hp(2), marginTop: hp('10'), fontSize: 18, fontFamily: 'Rowdies-Bold' }}>UserName</Text>
                    <Input

                        style={{ height: hp(12), width: hp(12) }}
                        placeholder='Email'
                        placeholderTextColor='#70DBDB'

                    />

                    <TouchableOpacity
                    onPress={()=>navigate('Login')}
                    >
                        <View style={{ height: hp(7), width: wp(70), borderRadius: hp('8'), backgroundColor: "#70DBDB", marginLeft: hp(6), marginTop: hp(4) }}>
                            <Text style={{ marginLeft: hp(17), marginTop: hp(2), fontFamily: 'AsapCondensed-Italic', fontSize: 16, color: '#001a33' }}>Submit</Text>

                        </View>
                    </TouchableOpacity>



                </View>




            </View>



        );

    }

}


export default Forgot;
