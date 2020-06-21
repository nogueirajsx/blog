/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,
  Dimensions
} from 'react-native';

import TouchableScale from 'react-native-touchable-scale'
import { SharedElement } from 'react-navigation-shared-element'
import Icon from 'react-native-vector-icons/FontAwesome';

import {data, profile, popular} from '../data'

const MainScreen = ({navigation}) => {

  const {width, height} = Dimensions.get('window')

  return (
  <View style={{flex: 1}}>
    <View style={styles.header}>
      <View>
        <Text style={styles.headerDate}>{profile.date}</Text>
        <Text style={styles.headerTitle}>Blog</Text>
      </View>
      <View>
        <Image source={{uri: profile.profilePic}} style={styles.headerImage} />
        <View style={styles.headerImageNotification}></View>
      </View>
    </View>
    <View>
      <FlatList 
        horizontal
        showHorizontalScrollIndicator={false}
        style={{paddingHorizontal: 30}}
        data={data}
        keyExtractor={item => item.id}
        renderItem = {({item})=>{
          return (
            <View>
              <View>
                <TouchableScale
                  activeScale={0.9}
                  tension={50}
                  friction={7}
                  useNativeDriver
                  onPress={()=> navigation.navigate('DetailScreen', {data: item})}
                >
                <SharedElement id={`item.${item.id}.photo`}>
                  <Image
                    resizemode='cover'
                    source={{uri: item.image}}
                    style={{width: width - 90, height: height - 420, borderRadius: 14, marginRight: 30}}
                  />
                </SharedElement>
                
                <SharedElement id={`item.${item.id}.text`}
                  style={{width: width - 90, position: 'absolute', bottom: 90, left: 10, paddingHorizontal: 10}}
                >
                 <Text style={styles.blogTitle}>{item.title}</Text>
                </SharedElement>
                <View
                  style={{flexDirection: 'row', alignItems: 'center', position: 'absolute', bottom: 20, left: 20}}
                >
                <SharedElement id={`item.${item.id}.profilePic`}>
                  <Image source={{uri: item.profilePic}} style={styles.blogProfilePic}/>
                </SharedElement>
                <View>
                  <SharedElement id={`item.${item.id}.username`}>
                    <Text style={styles.blogUsername}>{item.username}</Text>
                  </SharedElement>
                  <SharedElement id={`item.${item.id}.readtime`}>
                    <Text style={styles.readtime}>{item.readtime}</Text>
                  </SharedElement>
                </View>
                </View>
                </TouchableScale>
              </View>
            </View>
          )
        }}
      />
    </View>
    <View
      style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 30}}
    >
      <Text style={{fontSize: 23, fontWeight: 'bold'}}>Popular</Text>
      <Text style={{color: 'orange', fontWeight: 'bold'}}>Show All</Text>
    </View>
    <FlatList
      data={popular}
      keyExtractor={item => item.id}
      renderItem = {({item})=>{
        return (
          <View 
            style={{flexDirection: 'row', paddingBottom: 30, paddingLeft: 30, alignItems: 'center'}}
          >
            <View style={{marginRight: 10}}>
              <Image source={{uri: item.image}} 
                style={{width: 100, height: 100, borderRadius: 10}}
              />
            </View>
            <View style={{width: '60%'}}>
              <Text style={{color: 'orange', fontWeight: 'bold', marginBottom: 4}}>{item.topic}</Text>
              <Text style={{fontWeight: 'bold', fontSize: 13, marginBottom: 10}}>{item.title}</Text>
              <View>
              <View style={{flexDirection: 'row', alignItems: 'center', opacity: 0.4}}>
                <View style={{flexDirection: 'row', marginRight: 16, alignItems: 'center'}}>
                  <Icon name="book" color="#000" />
                  <Text style={{marginHorizontal: 4, fontSize: 12}}>{item.readtime}</Text>
                </View>
                <View style={{flexDirection: 'row', marginRight: 16, alignItems: 'center'}}>
                  <Icon name="thumbs-up" color="#000" />
                  <Text style={{marginHorizontal: 4, fontSize: 12}}>{item.likes}</Text>
                </View>
              </View>  
              </View>
            </View>
          </View>
        )
      }}

    />
  </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: 40,
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  headerDate: {
    fontSize: 14,
    fontWeight: '700',
    color: 'orange',
    textTransform: 'uppercase'
  },
  headerTitle: {
     fontSize: 36,
     fontWeight: 'bold'
  },
  headerImage: {
    width: 55,
    height: 55,
    borderRadius: 10
  },
  headerImageNotification: {
    width: 14,
    height: 14,
    borderRadius: 6,
    position: 'absolute',
    backgroundColor: 'red',
    right: -4,
    top: -4,
    borderWidth: 2,
    borderColor: 'white'
  },
  blogTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    lineHeight: 20
  },
  blogProfilePic: {
    height: 50,
    width: 50,
    borderRadius:10,
    marginRight: 14
  },
  blogUsername: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  readtime: {
    fontSize: 14,
    color: 'white'
  }
});

export default MainScreen;
