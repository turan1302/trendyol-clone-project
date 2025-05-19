import React from 'react'
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import config from '../../../config';
import Entypo from 'react-native-vector-icons/Entypo';
import styles from './styles';
import cart from '../../../config/datas/cart';
import EmptyCartNotification from '../EmptyCartNotification';
import OfferProductsItem from './OfferProductsItem';

const OfferProducts = () => {
  return (
    <View>


        <FlatList showsVerticalScrollIndicator={false} ListHeaderComponent={()=>(
            <>
                <EmptyCartNotification/>
               <>
                   <View style={[styles.offer_products_title_area,styles.offer_products_area,{borderTopStartRadius : 5,borderTopEndRadius : 5}]}>
                       <Text style={styles.offer_products_left_title}>Önerilen Ürünler</Text>
                       <TouchableOpacity style={styles.offer_products_more_button_area}>
                           <Text style={styles.offer_products_button_text}>Tümünü Gör</Text>
                           <Entypo name={"chevron-small-right"} size={20} color={config.APP_COLOR}/>
                       </TouchableOpacity>
                   </View>
               </>
            </>

        )} data={cart} keyExtractor={(item, index)=>index} renderItem={({item,index})=>(
            <View style={[styles.offer_products_area,{borderRadius: 0}]}>
                <OfferProductsItem item={item} index={index}/>
            </View>
        )}/>
    </View>
  )
}

export default OfferProducts
