import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import CommonCard from '../common/CommonCard';

const CustomDrawer = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{backgroundColor: 'white', flex: 1}}>
     
        <View
          style={{
            width: '100%',
            marginTop: 20,
            height: 70,
            borderTopWidth: 0.2,
            borderBottomWidth: 0.2,
            borderBottomColor: '#C7C7C7',
            borderTopColor: '#C7C7C7',
          }}>
          <CommonCard
            icon={require('../checkbox.png')}
           
            onClick={() => {
              navigation.closeDrawer();
              navigation.navigate('Add');
            }}
          />
        </View>
        </View>
       
    </SafeAreaView>
  );
};

export default CustomDrawer;
