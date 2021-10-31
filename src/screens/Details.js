import React from 'react'
import { View, StyleSheet, ScrollView, Image, Pressable, Linking } from 'react-native'
import Text from '../components/text/text'
import { colors, spacing } from '../theme'
import { SafeAreaView } from 'react-native-safe-area-context'
import PlanetHeader from '../components/planet-header'
import { FontAwesome } from '@expo/vector-icons';
import PlanetInformation from '../components/planet-information'

export default function Details({ route, navigation }) {
    const {planet} = route.params;
    const {name, description, surfaceImage, wikiLink, rotationTime, rotationMetric, revolutionTime, revolutionMetric, radius, avgTemp} = planet;

    return (
        <SafeAreaView style={styles.container}>
            <PlanetHeader backButton={true}/>
            <ScrollView>
                <View style={styles.top_portion}>
                    <Image style={styles.surface_image} source={surfaceImage} resizeMode='contain'/>
                    <View style={styles.details_portion}>
                        <Text preset="h1" style={styles.planet_name}>
                            {name}
                        </Text>
                        <Text preset="small" style={styles.description}>
                            {description}
                        </Text>
                        <View style={styles.source_view}>
                            <Text preset="small" >Source : </Text>
                            <Pressable style={styles.source_button} onPress={() => navigation.navigate("Web", {url: wikiLink})}>
                                <Text preset="small" style={styles.source_link}>Wikipedia</Text>
                                <FontAwesome name="external-link-square" size={16} color={colors.grey} />
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View>
                    <PlanetInformation title="Rotation Time" value={rotationTime} metric={rotationMetric}/>
                    <PlanetInformation title="Revolution Time" value={revolutionTime} metric={revolutionMetric}/>
                    <PlanetInformation title="Radius" value={radius} metric="km"/>
                    <PlanetInformation title="Average Temp." value={avgTemp} metric="°c"/>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
    },
    top_portion: {
        paddingVertical: spacing[10],
        paddingHorizontal: spacing[8],
        justifyContent: 'center',
        alignItems: 'center'
    },
    surface_image: {
        alignSelf: 'center',
        height: 150
    },
    details_portion: {
        marginTop: spacing[10]
    },
    planet_name: {
        textAlign: 'center',
        textTransform: 'uppercase'
    },
    description: {
        marginTop: spacing[4],
        textAlign: 'justify',
        lineHeight: spacing[5]
    },
    source_view: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: spacing[8]
    },
    source_link: {
        textDecorationLine: 'underline',
        marginRight: 3
    },
    source_button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});