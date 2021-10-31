import React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import Text from '../../components/text/text'
import { colors, spacing } from '../../theme'

export default function FilterActionButton({ title, onPress }) {
    return (
        <Pressable onPress={onPress} style={styles.filterButton}>
            <Text style={styles.filterText}>{title}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    filterButton: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: spacing[4],
        paddingVertical: spacing[3],
        marginRight: spacing[3]
    },
    filterText: {
        color: colors.black
    }
});