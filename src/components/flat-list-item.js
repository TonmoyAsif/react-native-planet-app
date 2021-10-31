import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { View, StyleSheet,TouchableOpacity } from 'react-native'
import Text from './text/text'
import { colors, spacing } from '../theme'


export default function FlatListItem({ planet, navigation }) {
    const {name, color} = planet;
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Details', {planet: planet})} style={styles.item}>
            <View style={styles.item_data}>
                <View style={[styles.planet_head, {backgroundColor: color}]}/>
                <Text style={styles.planet_name}>{name}</Text>
            </View>
            <AntDesign name="right" size={16} color={colors.grey} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: spacing[5],
        justifyContent: 'space-between'

    },
    item_data: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    planet_head: {
        height: 20,
        width: 20,
        borderRadius: 10
    },
    planet_name :{
        textTransform: 'uppercase',
        marginLeft: spacing[5]
    }
});
