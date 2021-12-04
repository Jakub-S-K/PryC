import { StatusBar } from 'expo-status-bar';
import React from 'react';
;
import { StyleSheet, ScrollView, Text, View, Image, useWindowDimensions, TextInput, TouchableOpacity } from 'react-native';

const Main_page = () => {
    return (
      <View style={styles.container}>
      <View style={styles.header}>

      </View>
      <View style={styles.searchAndScan}>
        <View style={{
          width:260,
          height:55,
          backgroundColor:'#ff6',
          justifyContent:'center',
          alignItems:'flex-end',
          borderRadius:30,
          marginTop:2.5,
          marginLeft:5,
        }}>
      <TextInput style={{width:200,
      height:45,
      backgroundColor:'#f99',
      marginRight:8,
      borderRadius:30,}}/>
      </View>
      <TouchableOpacity
        //onPress={}
        style={{
          marginTop:5,
          marginLeft:15,
          height:50,
          width:50,
          backgroundColor:"#f01",
          borderRadius:10,
        }}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      </View>
      <View style={styles.verticalScrollableMenu}>
        <ScrollView horizontal>
          <TouchableOpacity style={styles.scrollableButtonElem}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrollableButtonElem}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrollableButtonElem}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrollableButtonElem}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrollableButtonElem}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrollableButtonElem}>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.adBanner}>

      </View>
      <View 
        style={styles.verticalScrollableMenu}
      >
        <ScrollView horizontal>
          <TouchableOpacity style={styles.scrollableButtonElem}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrollableButtonElem}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrollableButtonElem}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrollableButtonElem}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrollableButtonElem}>
          </TouchableOpacity>
          <TouchableOpacity style={styles.scrollableButtonElem}>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <View style={styles.footer}>

      </View>
      {/*<Image 
      source={{
        uri:'http://192.168.243.204:8000/images/IMG_20211203_135633.jpg',
      }}
      style={{width:100,height:100}}
    />*/}
      <StatusBar style="auto" />
    </View> 
    );
}

//const { height, width } = useWindowDimensions();
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    backgroundColor: '#f6f',
    height:50,
    width:360,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius:20,
  },
  searchAndScan:{
    backgroundColor:'#6f6',
    width:340,
    height:60,
    marginTop:25,
    flexDirection: 'row',
    borderRadius:15,
  },
  scrollableButtonElem:{
    width:80,
    height:80,
    borderRadius:30,
    marginTop:10,
    marginLeft:10,
    backgroundColor:'#0FF',
  },
  verticalScrollableMenu:{
    marginTop:25,
    height:100,
    width:340,
    backgroundColor:'#55F',
  },
  adBanner:{
    marginTop:25,
    height:120,
    width:340,
    backgroundColor:'#55F',
    borderRadius:30,
  },
  footer:{
    backgroundColor: '#f6f',
    marginTop:25,
    height:85,
    width:360,
    borderTopLeftRadius: 20,
    borderTopRightRadius:20,
  }
});

export default Main_page;