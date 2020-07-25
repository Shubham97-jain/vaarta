import React from 'react';
import { AppRegistry, Alert, View, BackHandler, Text, Imageview, KeyboardAvoidingView, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { SliderBox } from "react-native-image-slider-box";

class Initial extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: [
                    require('../Photo/slider3.png'),require('../Photo/slider4.png') // Network image         require('./assets/images/girl.jpg'),          // Local image       
            ]
        };


    }
    render() {

        const {navigate}=this.props.navigation;
        return (
            <View style={{ height: hp(100), width: wp(100), backgroundColor: '#001a33' }}>

                <ImageBackground
                    style={{ height: hp('15'), width: wp('30'), marginTop: hp('9'), marginLeft: hp('19') }}
                    source={require('../Photo/chatlogo.png')} />

                    <View style={{height:hp(30),width:wp(90),marginTop: hp('5')}}>

                    <SliderBox
                    style={{ height: hp('24'), width: wp('39'), marginLeft: wp('28') }}
                    images={this.state.images}
                    autoplay
                    // onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
                    dotColor="#70DBDB"
                    inactiveDotColor="#FFFFFF"
                    paginationBoxVerticalPadding={20}
                 
                    circleLoop
                />
                    </View>



                <TouchableOpacity
                onPress={()=>navigate('Login')}>

                    <View style={{ height: hp(6), width: wp(70), borderRadius: hp('1'), backgroundColor: "#70DBDB", marginLeft: hp(9), marginTop: hp('8') }}>

                        <Text style={{ marginLeft: hp(17), marginTop: hp(1.5), fontFamily: 'AsapCondensed-Italic', fontSize: 16, color: '#001a33' }}>LOGIN</Text>
                    </View>



                </TouchableOpacity>
                <TouchableOpacity
                onPress={()=>navigate('Register')}>

                    <View style={{ height: hp(6), width: wp(70), borderRadius: hp('1'), backgroundColor: "#001a33", marginLeft: hp(9), marginTop: hp(5), borderColor: '#70DBDB', borderWidth: 1 }}>
                        <Text style={{ marginLeft: hp(13), marginTop: hp(1.5), fontFamily: 'AsapCondensed-Italic', fontSize: 16, color: '#70DBDB' }}>REGISTRATION</Text>

                    </View>



                </TouchableOpacity>








            </View>
        );

    }
}


export default Initial;
