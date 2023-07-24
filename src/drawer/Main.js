// import {View, Text} from 'react-native';
// import React from 'react';
// import BottomNavigator from '../bottom/BottomNavigator';

// const Main = () => {
//   return (
//     <View style={{flex: 1}}>

//     </View>
//   );
// };

// export default Main;

import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';

export default function Main(props) {
  const [data, setData] = useState([]);

  useEffect(() => {
    showData();
  }, []);

  const showData = async () => {
    let response = await fetch('https://dummyjson.com/products');
    let json = await response.json();
    console.log('get api--------->>>', json);
    setData(json.products);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={styles.text}>Customer List</Text>
      <FlatList
        data={data}
        style={{marginBottom: '5%'}}
        renderItem={({item, index}) => {
          return (
            <View style={styles.container}>
              <Text style={styles.title}>{item.title}</Text>

              <View style={styles.rowContainer}>
                <View style={styles.leftView}>
                  <Text>Brand</Text>
                  <Text>Category</Text>
                  <Text>Price</Text>
                  <Text>Discription</Text>
                </View>

                <View style={styles.rightView}>
                  <Text>{item.brand}</Text>
                  <Text>{item.category}</Text>
                  <Text>{item.price}</Text>
                  <Text numberOfLines={1}>{item.description}</Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
  },
  container: {
    width: '90%',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgray',
    alignSelf: 'center',
    marginTop: '5%',
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    marginTop: '5%',
  },
  rowContainer: {
    width: '90%',

    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '3%',
    justifyContent: 'space-between',
    marginBottom: '2%',
  },
  leftView: {
    width: '30%',
    //    backgroundColor:'red'
  },
  rightView: {
    width: '69%',
    // backgroundColor:'green'
  },
  img: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
  imgView: {
    bottom: '3%',
    position: 'absolute',
    alignSelf: 'flex-end',
    right: '3%',
  },
  cardContainer: {
    // height: 'auto',
    width: '95%',
    // backgroundColor: 'black',
    alignSelf: 'center',
    // marginTop: height / 1.3,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 12,
    backgroundColor: 'white',
    // flex: 0.7,
  },
  textInput: {
    width: '85%',
    height: 45,
    borderRadius: 8,
    borderWidth: 0.6,
    borderColor: 'lightgray',
    alignSelf: 'center',
    marginBottom: '3%',
  },
  header: {
    marginLeft: '3%',
    marginBottom: '2%',
  },
  btn: {
    width: '85%',
    height: 45,
    borderRadius: 8,
    borderWidth: 0.6,
    borderColor: 'lightgray',
    alignSelf: 'center',
    marginBottom: '5%',
    backgroundColor: 'red',
    justifyContent: 'center',
    marginTop: '10%',
  },
  btnText: {
    alignSelf: 'center',
    fontSize: 16,
    color: 'white',
  },
});
