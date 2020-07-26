import React from 'react';
import { AppRegistry, Alert, View, BackHandler, Text, Imageview,KeyboardAvoidingView, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Input } from 'react-native-elements';

class SplashScreen extends  React.Component{

    componentDidMount() {
       
        console.disableYellowBox = true;
        // Start counting when the page is loaded
        this.timeoutHandle = setTimeout(() => {
            // Add your logic for the transition
            this.props.navigation.replace('Initial')
        }, 3000);
    }

    componentWillUnmount() {
        clearTimeout(this.timeoutHandle); // This is just necessary in the case that the screen is closed before the timeout fires, otherwise it would cause a memory leak that would trigger the transition regardless, breaking the user experience.
    }
    render()
    {
        return(


            <View    style={styles.liner} >
          

               <View style={{flexDirection:'column'}}>
                    
                    <Image
                        style={{ height: hp('35%'), width: wp('60%'), marginTop: hp('25%'), marginLeft: wp('20%') }}
                        source={require('../Photo/vaarta1.png')}
                    ></Image>
                     

</View>
               



            </View>
        );
    }
}
const styles = StyleSheet.create({

    liner: {
        flex:1,
        flexDirection:'row',
        height: hp('100%'),
        width: wp('100%'),
         backgroundColor:'#001a33'
    }



});

export default SplashScreen;