import React from 'react'
import { View, StyleSheet, useWindowDimensions } from 'react-native'
import Modal from "react-native-modal"
import Text from '../../components/text/text'
import { colors, spacing } from '../../theme'
import FilterActionButton from './filter-action-button'
import FilterSlider from './filter-slider'
import { PLANET_LIST } from '../../data/data'

export default function FilterModal({ visible, closeModal, filterAction, filterReset}) {
    const ROTATION_TIME = [0, 250]
    const RADIUS =[2400, 70000]
    const {height, width} = useWindowDimensions();
    const [rotationTime, setRotationTime] = React.useState(ROTATION_TIME)
    const [radius, setRadius] = React.useState(RADIUS)
    const onPressFilter = () => {
        filterAction({ rotationTime, radius})
        closeModal()
    }
    const onPressReset = () => {
        filterReset()
        closeModal()
        setRotationTime(ROTATION_TIME)
        setRadius(RADIUS)
    }

    return (
        <View>
            <Modal 
                isVisible={visible}
                swipeDirection={['down']}
                style={{justifyContent: 'flex-end'}}
                onBackdropPress={closeModal}
            >
                <View style={[styles.modalView, {height: height/2}]}>
                    <View style={styles.modalText}>
                        <Text preset="h2">Filter</Text>
                        <FilterSlider
                            title={'Rotation time'}
                            values={rotationTime}
                            onValuesChange={setRotationTime}
                            min={0}
                            max={250}
                            step={10}
                        />
                        <FilterSlider
                            title={'Radius'}
                            values={radius}
                            onValuesChange={setRadius}
                            min={2400}
                            max={70000}
                            step={1000}
                        />
                    </View>
                    <View style={styles.buttonView}>
                        <View style={styles.buttonText}>
                            <FilterActionButton onPress={onPressFilter} title={'Filter'}/>
                            <FilterActionButton onPress={onPressReset} title={'Reset Filter'}/>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalView: {
        backgroundColor: colors.darkGrey,
        borderRadius: 30,
        margin: spacing[2]
    },
    modalText: {
        margin: spacing[5]
    },
    buttonView: {
        flex: 1,
        justifyContent: 'flex-end',
        margin: spacing[4]
    },
    buttonText: {
        flexDirection: 'row'
    }
});
