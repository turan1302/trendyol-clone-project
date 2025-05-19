import React from 'react'
import {FlatList, Text, View} from 'react-native';
import detail_product from '../../../config/datas/detail/detail_product';
import config from '../../../config';

const PropertyArea = () => {

    const renderItem = ({item,index})=>(
        <View style={{
            padding : 6,
            marginRight : 10,
            backgroundColor : "#ffdbbc",
            borderRadius : 10,
        }}>
            <Text style={{
                fontWeight : "500",
                color : config.APP_COLOR,
                fontSize : 11
            }}>{item.title}</Text>
            <Text style={{
                fontSize : 11,
                color : "#343434",
                fontWeight : "500"
            }}>{item.text}</Text>
        </View>
    )

  return (
        <View style={{
            marginVertical : 10,
        }}>
            <FlatList style={{
                paddingLeft : 10,
            }} contentContainerStyle={{
                paddingRight : 10
            }} horizontal showsHorizontalScrollIndicator={false} data={detail_product.product_properties} keyExtractor={(item, index)=>index} renderItem={renderItem}/>
        </View>
      )
}

export default PropertyArea
