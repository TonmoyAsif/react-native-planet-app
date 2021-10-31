import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'
import { colors, spacing } from '../theme';
import Text from './text/text'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function planetHeader({ backButton = false}) {
    const navigation = useNavigation();
    return (
        <View style={styles.box}>
            { backButton &&
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign style={styles.header_back_button} name="left" size={23} color={colors.white} />
                </TouchableOpacity>
            }
            <Text preset="h2" style={styles.app_header}>
                The Planets
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box: {
        flexDirection: 'row',
        paddingVertical: spacing[4],
        borderBottomWidth: .5,
        borderBottomColor: colors.grey,
        paddingHorizontal: spacing[6],
        alignItems: 'center',
        backgroundColor: colors.black
    },
    app_header: {
        textTransform: 'uppercase'
    },
    header_back_button: {
        marginRight: spacing[4]
    }
});