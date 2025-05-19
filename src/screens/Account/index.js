import React, {useEffect, useState} from 'react';
import {Dimensions, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import config from '../../config';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Account = () => {

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
                      <MaterialCommunityIcons name={'robot-happy-outline'} size={80} color={config.APP_COLOR}/>
                  </View>
                  <Text style={styles.account_text}>Hesabım</Text>
                  <Text style={styles.account_subtext}>
                      Hesabınızı görüntüleyebilmek için lütfen giriş yapın. Siparişlerinizi ve
                      Elite üyelik durumunuzu hesabımdan takip edebilirsiniz.
                  </Text>
                  <TouchableOpacity style={styles.login_button_area}>
                      <Text style={styles.login_button_text}>Giriş Yap</Text>
                  </TouchableOpacity>
              </View>
            </ScrollView>
    );
};

export default Account;
