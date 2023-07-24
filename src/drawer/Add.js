import { SafeAreaView, StyleSheet, Text, View ,TextInput,TouchableOpacity} from 'react-native'
import React, {useEffect, useState} from 'react'

export default function Add(props) {
    const [title, setTitle] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [des, setDes] = useState('');

    const addData = async () => {
        let response = await fetch('https://dummyjson.com/products/add', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            title: title,
            brand: brand,
            category: category,
            price: price,
            description: des,
          }),
        });
        let json = await response.json();
       
        props.navigation.navigate("Main")
        console.log('data---------->>',json);
      };
  return (
    <SafeAreaView>
         <View >
          <Text style={styles.title}>ADD DATA</Text>

          <Text style={styles.header}>Title:</Text>
          <TextInput
            value={title}
            placeholder="Title"
            style={styles.textInput}
            onChangeText={text => setTitle(text)}
          />

          <Text style={styles.header}>Brand:</Text>
          <TextInput
            value={brand}
            placeholder="Brand"
            style={styles.textInput}
            onChangeText={text => setBrand(text)}
          />

          <Text style={styles.header}>Category:</Text>
          <TextInput
            value={category}
            placeholder="Category"
            style={styles.textInput}
            onChangeText={text => setCategory(text)}
          />

          <Text style={styles.header}>Price:</Text>
          <TextInput
            value={price}
            placeholder="Title"
            style={styles.textInput}
            onChangeText={text => setPrice(text)}
          />

          <Text style={styles.header}>Description:</Text>
          <TextInput
            value={des}
            placeholder="Description"
            style={styles.textInput}
            onChangeText={text => setDes(text)}
          />

          <TouchableOpacity style={styles.btn} onPress={()=> addData()}>
            <Text style={styles.btnText}>Add</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
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
        marginTop: '10%',
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
        marginLeft: '5%',
        marginBottom: '2%',
        color:'black'
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
})