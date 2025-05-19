import React, {useState} from 'react';
import {FlatList, View} from 'react-native';
import styles from './styles';
import categories from '../../../config/datas/home/categories';
import CategoriesListItem from './CategoriesListItem';

const Categories = () => {

    const [selectCategory,setSelectCategory] = useState(2);

    const changeCategory = (id)=>{
        setSelectCategory(id);
    }

    return (
        <View style={styles.welcome_area}>
            <FlatList horizontal showsHorizontalScrollIndicator={false} data={categories} keyExtractor={(item,index)=>index} renderItem={({item,index})=>(
                <CategoriesListItem changeCategory={changeCategory} selectCategory={selectCategory} item={item} index={index}/>
            )}/>
        </View>
    );
};

export default Categories;
