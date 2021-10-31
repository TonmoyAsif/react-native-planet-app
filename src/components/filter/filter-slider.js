import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from '../../components/text/text'
import { colors, spacing } from '../../theme'
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default function FilterSlider({ title, values, onValuesChange, step, min, max}) {
    return (
        <View style={styles.sliderView}>
            <Text preset="small">Filter by {title.toLowerCase()}</Text>
            <Text style={styles.sliderText}>{`${title}: ${values[0]} - ${values[1]}`}</Text>
            <MultiSlider
                values={values}
                onValuesChange={(values) => onValuesChange(values)}
                step={step}
                min={min}
                max={max}
                containerStyle={{marginHorizontal: spacing[3]}}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sliderView: {
        marginVertical: spacing[4]
    },
    sliderText: {
        marginTop: spacing[3]
    }
});
