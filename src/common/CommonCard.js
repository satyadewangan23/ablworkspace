import {View, Text, Image, TouchableOpacity,SafeAreaView} from 'react-native';
import React from 'react';

const CommonCard = ({

  onClick,
}) => {
  return (
    <View style={{width: '100%', height: 70, justifyContent: 'center'}}>
     

<SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: '10%',
            marginLeft: '4%',
            justifyContent: 'space-between',
            width: '50%',
          }}
          onPress={() => {
            onClick();
          }}
          // OnPress = {()=>props.navigation.navigate("Add")}
          
          >
          <Image
            source={require('../checkbox.png')}
            style={{width: 30, height: 30}}
          />

          <Text style={{fontSize: 18, color: 'black', alignItems: 'center'}}>
            Add Data
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    </View>
  );
};

export default CommonCard;
