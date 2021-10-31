import React from 'react'
import { View, StyleSheet, Pressable } from 'react-native'
import { colors, spacing } from '../../theme'
import { AntDesign } from '@expo/vector-icons'

export default function FilterButton({ visible, setVisible}) {
    return (
        <Pressable onPress={() => setVisible(!visible) } style={styles.filterBorder}>
            <View style={styles.filterButton}>
                <AntDesign name="filter" size={22} color={colors.black} />
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    filterButton: {
        height: 45,
        width: 45,
        borderRadius: 25,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center'
    },
    filterBorder: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        margin: spacing[4]
    }
});
