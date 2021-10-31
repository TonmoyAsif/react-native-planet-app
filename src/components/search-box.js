import React from 'react'
import { View, StyleSheet, TextInput  } from 'react-native'
import { colors, spacing, typography } from '../theme'

export default function SearchBox({ onSearchPlanet }) {
    return (
        <TextInput
            style={styles.input}
            placeholder="Search planet by name..."
            placeholderTextColor={colors.grey}
            autoCorrect={false}
            onChangeText={text => onSearchPlanet(text)}
        />
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: colors.grey,
        marginHorizontal: spacing[6],
        marginTop: spacing[7],
        marginBottom: spacing[2],
        padding: 10,
        color: colors.white,
        fontFamily: typography.primary,
        fontSize: 14
    },
});
