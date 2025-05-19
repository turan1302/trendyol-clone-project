import React from 'react'
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import detail_product from '../../../config/datas/detail/detail_product';
import config from '../../../config';
import styles from './styles';

const CouponInfo = () => {

    const renderItem = ({item,index})=>(
        <TouchableOpacity style={styles.coupon_button}>
            <View>
                <Text style={styles.coupon_button_price_text}>
                    {item.price} TL
                </Text>
                <Text style={styles.coupon_button_low_price_text}>
                    Alt Limit: {item.low_limit} TL
                </Text>
            </View>

            <TouchableOpacity style={styles.coupon_win_button_style}>
                <Text style={styles.coupon_win_button_text_style}>Kazan</Text>
            </TouchableOpacity>
        </TouchableOpacity>
    );

  return (
    <View>
      <View style={styles.coupons_area}>
          <Text style={styles.coupons_area_title}>Kuponlar</Text>
      </View>
        <View>
            <FlatList
                style={styles.flatlist_style}
                contentContainerStyle={{
                    paddingVertical: 10,
                    paddingLeft: 10,
                }}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={detail_product.coupons}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    </View>
  )
}

export default CouponInfo
