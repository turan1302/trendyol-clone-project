import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import config from '../../../../config';
import categories from '../../../../config/datas/home/categories';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const CategoriesListItem = (props) => {
    const {item, index,selectCategory,changeCategory} = props;

    return (
        <TouchableOpacity onPress={()=>changeCategory(item.id)} style={styles.welcome_area(index,categories,selectCategory)}>
            {item.id === 1 && (
                <FontAwesome
                    name="list"
                    size={16}
                    color={config.APP_COLOR_DARK}
                    style={styles.icon_style}
                />
            )}
            <Text style={styles.button_text(index,selectCategory)}>{item.name}</Text>
        </TouchableOpacity>
    );
};

export default CategoriesListItem;
