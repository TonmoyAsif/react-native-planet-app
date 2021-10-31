import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from './text/text'
import { colors, spacing } from '../theme'

export default function PlanetInformation({ title, value, metric }) {
    const valueFormatter = (value) => {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    
    return (
        <View style={styles.information}>
            <Text preset="small" style={styles.information_text}>
                {title}
            </Text>
            <Text preset="h3" style={styles.information_text}>
                {valueFormatter(value)}{metric === '°c' ? '' : ' '}{metric}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    information: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: spacing[5],
        marginVertical: spacing[1],
        paddingHorizontal: spacing[5],
        paddingVertical: spacing[3],
        borderWidth: .5,
        borderColor: colors.grey
    },
    information_text: {
        textTransform: 'uppercase',
        letterSpacing: -.5
    }
});