import React, {useEffect, useState} from 'react';
import {Dimensions, FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import detail_product from '../../../config/datas/detail/detail_product';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';

const ColorInfo = (props) => {

    const {selectedColor,setSelectedColor} = props;

    const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));
    const [activeIndex, setActiveIndex] = useState(1);

    const {width, height} = windowDimensions;
    const position = width > height ? 'LANDSCAPE' : 'PORTRAIT';

    useEffect(() => {
        const dimensionsSubscription = Dimensions.addEventListener('change', handleResize);

        return () => {
            dimensionsSubscription.remove();
        };
    }, []);

    const handleResize = ({window}) => {
        setWindowDimensions(window);
    };

    const renderItem = ({item,index})=>(
        <TouchableOpacity style={styles.colors_button(selectedColor,item.id)} onPress={()=>{
            setSelectedColor(item.id);
        }}>
               <Image style={styles.colors_button_image(position,width,height)} source={{uri : item.link}}/>
        </TouchableOpacity>
    );

  return (
    <View>
      <View style={styles.colors_area}>
          <View style={{
              flexDirection : "row",
              alignItems : "center"
          }}>
              <Text style={styles.colors_area_title}>Ürün Renkleri</Text>
              <Feather name={"info"} color={"#8c8c8c"} size={13}/>
          </View>
          <Text style={styles.colors_area_subtitle}>3 Farklı Seçenek</Text>
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
                data={detail_product.colors}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
            />
        </View>
    </View>
  )
}

export default ColorInfo;
