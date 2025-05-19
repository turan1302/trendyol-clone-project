import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import config from '../../config';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';

const Favourites = () => {

    const [windowDimensions, setWindowDimensions] = useState(Dimensions.get('window'));

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

    return (
            <ScrollView style={styles.scroll_area}
                showsVerticalScrollIndicator={false}
            >
              <View style={styles.container_area}>
                  <View style={styles.icon_container_area(position)}>
                      <AntDesign name={'star'} size={80} color={config.APP_COLOR}/>
                  </View>
                  <Text style={styles.favourites_text}>Favorilerim</Text>
                  <Text style={styles.favourites_subtext}>
                      Favorilerinizi görüntüleyebilmek için lütfen giriş yapın. Beğendiğiniz ürünler yeniden satışa çıktığında
                      haberdar olmak için ürünleri favorilerime ekleyebilirsiniz
                  </Text>
                  <TouchableOpacity style={styles.login_button_area}>
                      <Text style={styles.login_button_text}>Giriş Yap</Text>
                  </TouchableOpacity>
              </View>
            </ScrollView>
    );
};

export default Favourites;
