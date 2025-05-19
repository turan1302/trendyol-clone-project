import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import config from '../../../config';
import styles from './styles';
import * as NavigationService from "../../../NavigationService";

const EmptyCartNotification = () => {
  return (
      <View style={{
          backgroundColor : null
      }}>
          <View style={styles.notification_icon_area}>
              <View
                  style={styles.notification_icon_view}
              >
                  <Ionicons
                      size={50}
                      color={config.APP_COLOR}
                      name={"cart-outline"}
                  />
              </View>
          </View>


          <View>
              <Text style={styles.notification_title}>Sepetim</Text>
              <Text style={styles.notification_subtitle}>Sepetinizde ürün bulunmamaktadır</Text>
              <TouchableOpacity onPress={()=>NavigationService.reset()} style={styles.go_shopping_button}>
                  <Text style={styles.go_shopping_button_text}>Alışverişe Devam Et</Text>
              </TouchableOpacity>
          </View>
      </View>
  )
}

export default EmptyCartNotification;
