import React from 'react'
import {Text, View} from 'react-native';
import config from '../../../config';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Select2 from "react-native-select-two"


const SizeInfo = (props) => {

    const {selectedSize,setSelectedSize} = props;

    const sizeData = [
        { id: 1, name: "S", checked : (selectedSize===1) ? true : false },
        { id: 2, name: "M", checked : (selectedSize===2) ? true : false },
        { id: 3, name: "L", checked : (selectedSize===3) ? true : false },
        { id : 4, name: "XL", checked : (selectedSize===4) ? true : false},
        { id : 5, name : "XXL", checked : (selectedSize===5) ? true : false}
    ]

  return (
    <View>
      <View style={styles.size_area}>
          <Text style={styles.size_area_title}>Beden</Text>
      </View>

        <View style={styles.size_select_area}>
            <Select2
                isSelectSingle
                style={styles.size_select_style}
                colorTheme="#ef6a00"
                popupTitle="Beden Seçiniz"
                title="Beden Seçiniz"
                data={sizeData}
                onSelect={data => {
                    setSelectedSize(data[0]);
                }}
                onRemoveItem={data => {
                    setSelectedSize(null);
                }}
            />
        </View>

        <View style={styles.alert_area}>
            <View style={styles.alert_items_area}>
              <View style={styles.alert_icon_area}>
                  <MaterialCommunityIcons name={"hanger"} size={15} color={config.APP_COLOR_WHITE}/>
              </View>
                <Text style={styles.alert_text}>Kullanıcıların çoğu 1 beden büyük almanızı öneriyor.</Text>
            </View>
        </View>
    </View>
  )
}

export default SizeInfo;
