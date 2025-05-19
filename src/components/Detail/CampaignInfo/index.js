import React from 'react'
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo';
import config from '../../../config';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CampaignInfo = () => {

  return (
    <View>
      <View style={styles.campaign_area}>
          <Text style={styles.campaign_area_title}>Ürün Kampanyaları</Text>
      </View>
        <TouchableOpacity style={[styles.button_area,{marginVertical : 10}]}>
            <View style={styles.button_left_items_area}>
                <View style={styles.button_left_item_icon_area}>
                    <AntDesign name={"tag"} size={17} color={config.APP_COLOR_WHITE} />
                </View>
                <View style={styles.button_left_text_area}>
                    <Text style={styles.button_left_text_title}>1100 TL'ye 100 TL İndirim</Text>
                    <View style={{
                        marginTop : 5,
                        flexDirection : "row",
                        alignItems : "center"
                    }}>
                        <MaterialCommunityIcons name={"clock-time-four"} color={"#ff0000"} size={14}/>
                        <Text style={styles.button_left_text_subtitle}> Son 16 Saat 50 Dakika!</Text>
                    </View>
                </View>
            </View>

            <Entypo
                style={{
                    marginLeft: "auto"
                }}
                name={"chevron-right"}
                size={20}
                color={config.APP_COLOR_DARK}
            />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button_area,{marginBottom : 10}]}>
            <View style={styles.button_left_items_area}>
                <View style={[styles.button_left_item_icon_area,{backgroundColor:  "#727272"}]}>
                    <Ionicons name={"cube"} size={17} color={config.APP_COLOR_WHITE} />
                </View>
                <View style={styles.button_left_text_area}>
                    <Text style={styles.button_left_text_title}>250 TL ve Üzeri Kargo Bedava (Ödeme Satıcı Tarafından Sağlanır)</Text>
                </View>
            </View>

            <Entypo
                style={{
                    marginLeft: "auto"
                }}
                name={"chevron-right"}
                size={20}
                color={config.APP_COLOR_DARK}
            />
        </TouchableOpacity>
    </View>
  )
}

export default CampaignInfo
