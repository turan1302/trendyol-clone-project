import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import config from '../../../../config';
import Entypo from 'react-native-vector-icons/Entypo';

const TrendInfo = () => {
    return (
        <View style={{
            flexDirection: 'row',
            alignItems : "center",
            marginTop : 7,
            paddingHorizontal : 10
        }}>
            <Text style={{
              color : "#808080",
              fontWeight : "500"
            }}>Pantolon Kategorisinde</Text>
          <TouchableOpacity style={{
            marginLeft : 10,
            paddingHorizontal : 8,
            backgroundColor : "#fdc5a0",
            borderRadius : 20
          }}>
            <View style={{
              flexDirection : "row",
              alignItems : "center"
            }}>
              <Text style={{
                color : config.APP_COLOR,
                fontWeight : "500"
              }}>En Çok Satan #2</Text>
              <Entypo name={"chevron-small-right"} size={18} style={{
                fontWeight : "bold"
              }} color={config.APP_COLOR}/>
            </View>
          </TouchableOpacity>
        </View>
    );
};

export default TrendInfo;
