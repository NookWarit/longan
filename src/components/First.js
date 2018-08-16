import React, { Component } from 'react';
import { View,
    Text,
    StyleSheet,
    Platform ,
    Image,
    Button
  } from 'react-native';

  const logo = require("./logo_longan.png");

  
 
export default class First extends Component{
    static navigationOptions = {
         header: null
      };
  render () {
      return (
          <View style={styles.container}>
             <Image
              
              style={{width: 300, height: 300 , margin:5 ,padding: 5 ,resizeMode:"contain"}}
                  source={logo}
              />
              <Text style={{fontSize:21, textAlign:'center' }} > ระบบช่วยเหลือเกษตรกรสำหรับผู้ผลิตลำไย </Text>
              <Button
                title="Skip"
                onPress={() =>
                    this.props.navigation.navigate('Login')
                  }
                color="#841584"
                />

          </View>
      );
  }
}
const styles = StyleSheet.create({
  container: {
      backgroundColor: "#66CDAA",
      flex: 1,
      flexDirection: 'column',
      padding: Platform.OS === "ios" ? 50 : 0,
     
  },
});