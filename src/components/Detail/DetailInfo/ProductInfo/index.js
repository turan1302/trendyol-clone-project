import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native';
import detail_product from '../../../../config/datas/detail/detail_product';
import styles from './styles';

const ProductInfo = () => {
  return (
      <View style={styles.product_name_area}>
          <TouchableOpacity>
              <Text style={styles.product_brand_text}>{detail_product.brand}</Text>
          </TouchableOpacity>
          <Text style={styles.product_brand_name}>{detail_product.product_name}</Text>
      </View>
  )
}

export default ProductInfo
