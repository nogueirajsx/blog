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
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { SharedElement } from 'react-navigation-shared-element'
import {data, profile, popular} from '../data'

const DetailScreen = props => {

const {width, height} = Dimensions.get('window')

const {data} = props.route.params

  return (
    <View style={styles.container}>
        <View>
            <SharedElement id={`item.${data.id}.photo`}>
                <Image source={{uri: data.image}}
                    resizemode='cover' 
                    style={{width: '100%', height: height - 330, borderBottomLeftRadius: 10, borderBottomRightRadius: 10}}
                />
            </SharedElement>
            <View
                style={{flexDirection: 'row', alignItems: 'center', position: 'absolute', top: 130, left: 10}}        
            >
            <SharedElement id={`item.${data.id}.profilePic`}>
                <Image 
                    source={{uri: data.profilePic}}
                    resizemode='cover' 
                    style={{width: 60, height: 60, borderRadius: 10, marginRight: 14}}
                />
            </SharedElement>
            <View
                style={{flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingRight: 20}}
            >
                <View>
                    <SharedElement id={`item.${data.id}.username`}>
                        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>{data.username}</Text>
                    </SharedElement>
                     <SharedElement id={`item.${data.id}.readtime`}>
                        <Text style={{color: 'white', fontSize: 14}}>{data.readtime}</Text>
                    </SharedElement>
                </View>
                <TouchableOpacity>
                    <Icon name="bookmark" size={23} color="white" />
                </TouchableOpacity>
            </View>
            </View>
            <ScrollView style={{paddindHorizontal: 10, paddingTop: 14}}>
                <SharedElement id={`item.${data.id}.text`} 
                style={{width: width - 30, marginBottom: 14}}
                >
                    <Text style={{fontSize: 22, fontWeight: 'bold', lineHeight: 32}}>{data.title}</Text>
                </SharedElement>
                <Text style={{fontSize: 14, lineHeight: 28, textAlign: 'justify', opacity: 0.5}}>
                    Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI .
                
                </Text>
                {/* <Text style={{fontSize: 14, lineHeight: 28, textAlign: 'justify', opacity: 0.5}}>
                    Ao contrário do que se acredita, Lorem Ipsum não é simplesmente um texto randômico. Com mais de 2000 anos, suas raízes podem ser encontradas em uma obra de literatura latina clássica datada de 45 AC. Richard McClintock, um professor de latim do Hampden-Sydney College na Virginia, pesquisou uma das mais obscuras palavras em latim, consectetur, oriunda de uma passagem de Lorem Ipsum, e, procurando por entre citações da palavra na literatura clássica, descobriu a sua indubitável origem. Lorem Ipsum vem das seções 1.10.32 e 1.10.33 do "de Finibus Bonorum et Malorum" (Os Extremos do Bem e do Mal), de Cícero, escrito em 45 AC. Este livro é um tratado de teoria da ética muito popular na época da Renascença. A primeira linha de Lorem Ipsum, "Lorem Ipsum dolor sit amet..." vem de uma linha na seção 1.10.32.
                </Text> */}
                
                <View style={{marginVertical: 25, paddingBottom: 20, flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <TouchableOpacity style={{flexDirection: 'row', padding: 12, alignItems: 'center'}}>
                        <Icon name="heart" size={16} color="orange" />
                        <Text style={{marginHorizontal: 10}}>2.3k likes</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{padding: 12, width: 100, backgroundColor: 'orange', borderRadius: 10}}>
                        <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Follow</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>

        <View style={{position: 'absolute', top: 40, left: 10}}> 
            <TouchableOpacity onPress={()=>props.navigation.goBack()}>
                <Icon name="arrow-left" size={23} color="white" />
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default DetailScreen;
