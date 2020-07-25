import React from 'react';
import { AppRegistry, Alert, View, BackHandler, Text, Imageview, SafeAreaView, Image, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { openDatabase}  from 'react-native-sqlite-storage';

var  db=openDatabase({ name: 'user.db'});

class  Delete extends  React.Component{

    constructor(props){
        super(props);
        this.state={
            id:'',
        };

        deleteUser = () => {
            var that = this;
            const { id } = this.state;
            db.transaction(tx => {
              tx.executeSql(
                'DELETE FROM  user where id=?',
                [id],
                (tx, results) => {
                  console.log('Results', results.rowsAffected);
                  if (results.rowsAffected > 0) {
                    Alert.alert(
                      'Success',
                      'User deleted successfully',
                      [
                        {
                          text: 'Ok',
                          onPress: () => that.props.navigation.navigate('Login '),
                        },
                      ],
                      { cancelable: false }
                    );
                  } else {
                    alert('Please insert a valid User Id');
                  }
                }
              );
            });
          };


    }

    render()
    {
        return(
            <View style={{flex:1, height:hp(100),width:wp(100)}}>

< Text style={{ height: hp(7), width: wp(80), marginTop: hp(12), fontSize: 25, marginLeft: wp(33) }}>Enter id :</Text>
               
                <TextInput
                style={{   marginLeft: wp(40) }}
                placeholder=" id:"
                onChangeText={id => this.setState({ id})}
                />

               <TouchableOpacity
                   onPress={this.deleteUser}>
                <Text  style={{ fontSize:23, marginLeft: wp(40), marginTop:hp(4) }}>Delete</Text>
                </TouchableOpacity>
                    
               

            </View>
        );
    }



}


export default  Delete;


