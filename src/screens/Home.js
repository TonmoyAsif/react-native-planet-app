import React from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { colors, spacing } from '../theme'
import PlanetHeader from '../components/planet-header'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PLANET_LIST } from '../data/data'
import FlatListItem from '../components/flat-list-item'
import SearchBox from '../components/search-box'
import FilterButton from '../components/filter/filter-button'
import FilterModal from '../components/filter/filter-modal'

export default function Home({ navigation }) {
   const [planetList, setPlanetList] = React.useState(PLANET_LIST)
   const [visible, setVisible] = React.useState(false)
    
    const onSearchPlanet = (text) => {
        const filteredList = PLANET_LIST.filter( (item) => {
            const formattedText = text.toLowerCase()
            const formattedItem = item.name.toLowerCase()
            return formattedItem.indexOf(formattedText) > -1
        })
        setPlanetList(filteredList) 
    }

    const onFilterPlanet = (data) => {
        const {rotationTime, radius} = data;
        const filteredList = PLANET_LIST.filter( (item) => {
            return (
                item.rotationTime >= rotationTime[0] &&
                item.rotationTime <= rotationTime[1] &&
                item.radius >= radius[0] &&
                item.radius <= radius[1]
            )
        })
        setPlanetList(filteredList) 
    }

    const onResetFilter = () => {
        setPlanetList(PLANET_LIST) 
    }

    const renderItem = ({ item }) => (
        <FlatListItem planet={item} navigation={navigation} />
      );

    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader/>
            <SearchBox  onSearchPlanet={onSearchPlanet}/>
            <FlatList
                data={planetList}
                renderItem={renderItem}
                keyExtractor={(item, index) => item.name}
                contentContainerStyle={{ padding: spacing[6]}}
                ItemSeparatorComponent={() => <View style={styles.item_separator}/>}
            />
            <FilterButton visible={visible} setVisible={setVisible}/>
            <FilterModal
                visible={visible}
                filterAction={onFilterPlanet}
                filterReset={onResetFilter}
                closeModal={() => setVisible(!visible)}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.black,
    },
    item_separator: {
        height: .5,
        backgroundColor: colors.grey
    }
});
